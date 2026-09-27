import Link from "next/link";
import { Suspense } from "react";
import CourseSearch from "@/components/CourseSearch";
import CourseCard from "@/components/CourseCard";
import { filterCourses, programs } from "@/lib/courses";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Khóa học",
  "Tìm chương trình tiếng Anh theo cấp học và mục tiêu: Tiểu học, THCS, THPT, IELTS và Toán & Khoa học bằng tiếng Anh.",
  "/khoa-hoc",
);
export default async function CoursesPage({
  searchParams,
}: {
  searchParams: Promise<{ grade?: string | string[]; q?: string | string[] }>;
}) {
  const params = await searchParams;
  const selected = programs.find((p) => p.id === params.grade);
  const q = typeof params.q === "string" ? params.q.trim().slice(0, 120) : "";
  const visible = filterCourses(selected?.id, q);
  function href(grade?: string) {
    const query = new URLSearchParams();
    if (grade) query.set("grade", grade);
    if (q) query.set("q", q);
    return `/khoa-hoc${query.size ? `?${query}` : ""}`;
  }
  return (
    <main id="main-content" className="container-page section">
      <p className="eyebrow">Chương trình học</p>
      <h1 className="heading mt-3">Chọn bước học tiếp theo cho con</h1>
      <p className="mt-4 max-w-2xl leading-7 text-slate-700">
        Tìm theo cấp học hoặc mục tiêu. Mỗi chương trình đều có nội dung, lộ
        trình và thông tin lớp để ba mẹ dễ cân nhắc.
      </p>
      <div className="mt-8 max-w-2xl">
        <Suspense fallback={<p role="status">Đang tải tìm kiếm…</p>}>
          <CourseSearch />
        </Suspense>
      </div>
      <nav
        aria-label="Lọc khóa học theo cấp học"
        className="my-6 flex flex-wrap gap-3"
      >
        {[{ id: "", label: "Tất cả" }, ...programs].map((p) => (
          <Link
            key={p.id}
            href={href(p.id)}
            aria-current={(selected?.id ?? "") === p.id ? "page" : undefined}
            className={`inline-flex min-h-11 items-center rounded-full px-5 py-3 font-bold ${(selected?.id ?? "") === p.id ? "bg-brand-600 text-white" : "bg-brand-50 text-brand-800 hover:bg-brand-100"}`}
          >
            {p.label}
          </Link>
        ))}
      </nav>
      {params.grade !== undefined && !selected && (
        <p className="mb-4 text-slate-700">
          Cấp học không hợp lệ. Đang hiển thị kết quả trên tất cả cấp học.
        </p>
      )}
      <p role="status" className="mb-6 text-slate-700">
        Tìm thấy <strong>{visible.length} khóa học</strong>
        {q && ` cho “${q}”`}
        {selected && ` · ${selected.label}`}
      </p>
      {visible.length ? (
        <div className="reveal-group grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      ) : (
        <section className="card bg-brand-50 p-8 text-center">
          <h2 className="text-2xl font-bold">Chưa tìm thấy khóa học phù hợp</h2>
          <p className="mt-3 text-slate-700">
            Thử từ khóa ngắn hơn hoặc chọn cấp học khác.
          </p>
          <Link href="/khoa-hoc" className="btn mt-6">
            Xóa bộ lọc
          </Link>
        </section>
      )}
    </main>
  );
}
