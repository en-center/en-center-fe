const { chromium } = require(process.env.PLAYWRIGHT_MODULE || "playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const base = process.env.TEST_BASE_URL || "http://127.0.0.1:3100";
const out = process.env.TEST_OUTPUT_DIR || "/private/tmp/bloom-qa";
async function main() {
  fs.mkdirSync(out, { recursive: true });
  const browser = await chromium.launch({
    headless: true,
    executablePath: process.env.CHROMIUM_EXECUTABLE,
  });
  try {
    const page = await browser.newPage();
    const errors = [];
    page.on("pageerror", (e) => errors.push(e.message));
    const routes = [
      "/",
      "/khoa-hoc",
      "/khoa-hoc/tieng-anh-tieu-hoc",
      "/giao-vien",
      "/lien-he",
    ];
    for (const width of [375, 768, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      for (const [i, path] of routes.entries()) {
        assert.equal(
          (await page.goto(base + path)).status(),
          200,
          `HTTP ${path}`,
        );
        await page.evaluate(() => document.fonts.ready);
        await page.evaluate(async () => {
          for (let y = 0; y < document.body.scrollHeight; y += 600) {
            scrollTo(0, y);
            await new Promise((r) => setTimeout(r, 80));
          }
        });
        await page.waitForFunction(() =>
          [...document.images].every((i) => i.complete),
        );
        assert.equal(
          await page.evaluate(() =>
            [...document.images].every((i) => i.naturalWidth > 0),
          ),
          true,
          `images ${width} ${path}`,
        );
        assert.equal(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= innerWidth,
          ),
          true,
          `overflow ${width} ${path}`,
        );
        await page.evaluate(() => scrollTo(0, 0));
        await page.screenshot({
          path: `${out}/${width}-${i}.png`,
          fullPage: true,
        });
      }
    }
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(base);
    await page.keyboard.press("Tab");
    assert.equal(
      await page.locator(":focus").innerText(),
      "Đến nội dung chính",
    );
    await page.getByRole("button", { name: "Mở menu" }).click();
    await page.keyboard.press("Escape");
    assert.equal(
      await page
        .getByRole("button", { name: "Mở menu" })
        .getAttribute("aria-expanded"),
      "false",
    );
    await page.getByRole("button", { name: "Mở menu" }).click();
    await page
      .getByRole("navigation", { name: "Điều hướng di động" })
      .getByRole("link", { name: "Khóa học", exact: true })
      .click();
    await page.waitForURL("**/khoa-hoc");
    await page.locator("#mobile-menu").waitFor({ state: "hidden" });
    await page.getByRole("searchbox").fill("TOAN");
    await page.getByRole("button", { name: "Tìm kiếm", exact: true }).click();
    await page.waitForURL("**q=TOAN");
    await page
      .getByRole("navigation", { name: "Lọc khóa học theo cấp học" })
      .getByRole("link", { name: "THCS", exact: true })
      .click();
    await page.waitForURL("**grade=cap-2&q=TOAN");
    assert.equal(await page.locator("main article").count(), 1);
    await page.goBack();
    await page.waitForURL("**q=TOAN");
    assert.equal(await page.getByRole("searchbox").inputValue(), "TOAN");
    await page.goForward();
    await page.waitForURL("**grade=cap-2&q=TOAN");
    await page.goto(base + "/khoa-hoc?q=not-a-course");
    await page.getByRole("link", { name: "Xóa bộ lọc", exact: true }).click();
    await page.waitForURL("**/khoa-hoc");
    assert.equal(await page.locator("main article").count(), 5);
    const notFound = await page.goto(base + "/khoa-hoc/khong-ton-tai");
    assert.equal(notFound.status(), 404);
    for (const slug of [
      "tieng-anh-tieu-hoc",
      "tieng-anh-thcs",
      "ielts-hoc-thuat",
      "ielts-tang-toc",
      "toan-khoa-hoc-tieng-anh",
    ]) {
      assert.equal((await page.goto(base + "/khoa-hoc/" + slug)).status(), 200);
      assert.equal(await page.locator("details").count(), 3);
      await page.locator("summary").first().press("Enter");
      assert.equal(
        await page.locator("details").first().getAttribute("open"),
        "",
      );
    }
    await page.goto(base);
    await page
      .getByRole("link", { name: "Khám phá khóa học", exact: true })
      .click();
    await page.waitForURL("**/khoa-hoc");
    await page
      .getByRole("link", {
        name: "Xem chi tiết Tiếng Anh Tiểu học",
        exact: true,
      })
      .click();
    await page.waitForURL("**/tieng-anh-tieu-hoc");
    await page.getByRole("link", { name: "Tư vấn khóa học này" }).click();
    await page.waitForURL("**/lien-he?course_interest=superkids#dang-ky");
    assert.equal(
      await page.locator("#course_interest").inputValue(),
      "superkids",
    );
    await page.locator("#parent_name").fill("Phụ huynh Demo");
    await page.locator("#phone").fill("123");
    await page.getByRole("button", { name: /Bloom Bình Thạnh/ }).click();
    assert.equal(await page.locator("#branch").inputValue(), "binh-thanh");
    assert.equal(
      await page.locator("#parent_name").inputValue(),
      "Phụ huynh Demo",
    );
    await page
      .getByRole("button", { name: "Đăng ký tư vấn", exact: true })
      .click();
    await page.locator("#phone-error").waitFor();
    assert.equal(await page.locator(":focus").getAttribute("id"), "phone");
    assert.equal(await page.locator("#phone").inputValue(), "123");
    await page.locator("#phone").fill("0901234567");
    await page.route("**/lien-he*", (route) =>
      route.request().method() === "POST" ? route.abort() : route.continue(),
    );
    await page
      .getByRole("button", { name: "Đăng ký tư vấn", exact: true })
      .click();
    await page.getByText(/Kết nối chưa thành công/).waitFor();
    assert.equal(
      await page.locator("#parent_name").inputValue(),
      "Phụ huynh Demo",
    );
    await page.unroute("**/lien-he*");
    await page
      .getByRole("button", { name: "Đăng ký tư vấn", exact: true })
      .click();
    await page.getByRole("button", { name: "Đang đăng ký..." }).waitFor();
    assert.equal(await page.locator("#phone").isDisabled(), true);
    await page
      .getByText(/Đăng ký tư vấn cho con đã hoàn tất bước kiểm tra thông tin/)
      .waitFor();
    await page.getByRole("button", { name: "Đăng ký khác" }).click();
    assert.equal(await page.locator("#parent_name").inputValue(), "");
    await page.goto(
      base +
        "/lien-he?course_interest=superkids&course_interest=ielts-expert&branch=nope",
    );
    assert.equal(await page.locator("#course_interest").inputValue(), "");
    assert.equal(await page.locator("#branch").inputValue(), "");
    await page.goto(
      base + "/lien-he?course_interest=ielts-express&branch=thu-duc",
    );
    assert.equal(
      await page.locator("#course_interest").inputValue(),
      "ielts-express",
    );
    assert.equal(await page.locator("#branch").inputValue(), "thu-duc");
    for (const path of ["/robots.txt", "/sitemap.xml", "/opengraph-image"])
      assert.equal((await page.request.get(base + path)).status(), 200);
    assert.deepEqual(errors, []);
    console.log(
      "PASS: 15 responsive screenshots, local images, overflow, keyboard/menu, search/filter/history, 5 details/FAQ, real 404, complete registration, retained fields, offline retry, pending/reset, query validation and SEO endpoints.",
    );
  } finally {
    await browser.close();
  }
}
main().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
