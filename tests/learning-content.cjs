const fs = require("node:fs");
const vm = require("node:vm");
const ts = require("typescript");
const assert = require("node:assert/strict");
function load(path, deps = {}) {
  const ctx = { exports: {}, Response, require: (key) => deps[key] };
  vm.runInNewContext(
    ts.transpileModule(fs.readFileSync(path, "utf8"), {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2020,
      },
    }).outputText,
    ctx,
  );
  return ctx.exports;
}
async function main() {
  const content = load("lib/learning-content.ts");
  for (const items of [content.articles, content.resources]) {
    assert.equal(new Set(items.map((x) => x.slug)).size, items.length);
    for (const item of items) assert.ok(fs.existsSync("public" + item.image));
  }
  assert.equal(content.getArticle("missing"), undefined);
  assert.equal(content.getResource("missing"), undefined);
  for (const grade of ["cap-1", "cap-2", "cap-3"])
    assert.ok(content.resources.some((r) => r.grade === grade));
  const { GET } = load("app/tai-lieu/[slug]/tai-xuong/route.ts", {
    "@/lib/learning-content": content,
  });
  for (const resource of content.resources) {
    const response = await GET(new Request("http://localhost"), {
      params: Promise.resolve({ slug: resource.slug }),
    });
    assert.equal(response.status, 200);
    assert.equal(
      response.headers.get("content-type"),
      "text/plain; charset=utf-8",
    );
    assert.equal(
      response.headers.get("content-disposition"),
      `attachment; filename="bloom-${resource.slug}.txt"`,
    );
    const text = await response.text();
    assert.ok(text.includes(resource.title));
    assert.ok(text.includes("ĐÁP ÁN & GỢI Ý"));
    for (const exercise of resource.exercises) {
      for (const line of [...exercise.questions, ...exercise.answers])
        assert.ok(text.includes(line));
    }
  }
  for (const slug of ["missing", "../../package.json"])
    assert.equal(
      (
        await GET(new Request("http://localhost"), {
          params: Promise.resolve({ slug }),
        })
      ).status,
      404,
    );
  console.log(
    "PASS: content slugs, local images, 3 grades, UTF-8 downloads, complete exercises/answers, missing and forged download paths.",
  );
}
main().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
