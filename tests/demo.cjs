const fs = require("node:fs");
const vm = require("node:vm");
const ts = require("typescript");
const assert = require("node:assert/strict");
function load(file, dependencies = {}) {
  const context = {
    exports: {},
    setTimeout,
    require: (key) => dependencies[key],
  };
  vm.runInNewContext(
    ts.transpileModule(fs.readFileSync(file, "utf8"), {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2020,
      },
    }).outputText,
    context,
  );
  return context.exports;
}
async function main() {
  const courses = load("lib/courses.ts");
  const options = load("lib/consultation-options.ts", { "./courses": courses });
  const { consultationPrefill } = load("lib/consultation-prefill.ts", {
    "./consultation-options": options,
  });
  for (const course of options.courseInterests)
    assert.equal(
      consultationPrefill({ course_interest: course.value }).course_interest,
      course.value,
    );
  for (const branch of options.branches)
    assert.equal(
      consultationPrefill({ branch: branch.value }).branch,
      branch.value,
    );
  assert.equal(
    consultationPrefill({ course_interest: ["superkids", "ielts-expert"] })
      .course_interest,
    "",
  );
  assert.equal(consultationPrefill({ branch: "invalid" }).branch, "");
  const { filterCourses } = load("lib/courses.ts");
  assert.equal(filterCourses("cap-3", "ielts").length, 2);
  assert.equal(filterCourses("cap-2", "math").length, 1);
  assert.equal(filterCourses("cap-1", "ielts").length, 0);
  assert.ok(
    filterCourses(undefined, "  TOAN  ").some(
      (course) => course.id === "math-science",
    ),
  );
  const { submitConsultation } = load("app/actions/consultation.ts", {
    "@/lib/consultation-options": options,
  });
  assert.equal(
    Object.keys((await submitConsultation({}, new FormData())).errors).length,
    4,
  );
  const data = new FormData();
  for (const [key, value] of Object.entries({
    parent_name: "Demo Parent",
    phone: "123",
    course_interest: "superkids",
    branch: "quan-3",
  }))
    data.set(key, value);
  const invalid = await submitConsultation({}, data);
  assert.ok(invalid.errors.phone);
  assert.equal(invalid.values.parent_name, "Demo Parent");
  assert.equal(invalid.values.course_interest, "superkids");
  data.set("phone", "+84 901 234 567");
  const start = Date.now();
  assert.equal((await submitConsultation({}, data)).success, true);
  assert.ok(Date.now() - start >= 950);
  data.set("branch", "invalid");
  data.set("course_interest", "invalid");
  const tampered = await submitConsultation({}, data);
  assert.ok(tampered.errors.branch && tampered.errors.course_interest);
  data.set("course_interest", "superkids");
  data.set("branch", "quan-3");
  data.append("branch", "thu-duc");
  assert.ok((await submitConsultation({}, data)).errors.branch);
  data.set("branch", "quan-3");
  data.set("parent_name", new Blob(["fake"]), "fake.txt");
  assert.ok((await submitConsultation({}, data)).errors.parent_name);
  assert.equal(new Set(courses.courses.map((c) => c.slug)).size, 5);
  assert.equal(courses.getCourse("missing"), undefined);
  assert.equal(filterCourses("cap-2", "KHOA HOC").length, 1);
  assert.equal(filterCourses("cap-1", "khoa học").length, 1);
  for (const c of courses.courses) {
    assert.ok(fs.existsSync("public" + c.image));
    assert.equal(c.faq.length, 3);
  }
  console.log(
    "PASS: prefill, invalid/repeated query, combined search, validation, retained values, success and delay.",
  );
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
