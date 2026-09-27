import Reveal from "@/components/motion/Reveal";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { resources } from "@/lib/learning-content";
import { programs } from "@/lib/courses";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Tài liệu học tập",
  "Phiếu luyện tập tiếng Anh cho Tiểu học, THCS và THPT. Xem bài, đối chiếu đáp án và tải miễn phí để thực hành tại nhà.",
  "/tai-lieu",
);
export default async function ResourcesPage({
  searchParams,
}: {
  searchParams: Promise<{ grade?: string | string[] }>;
}) {
  const { grade } = await searchParams;
  const selected = programs.find((p) => p.id === grade);
  const visible = resources.filter((r) => !selected || r.grade === selected.id);
  return (
    <main id="main-content" className="container-page section">
      <p className="section-index">Học thêm một chút mỗi ngày</p>
      <h1 className="heading mt-4">
        Tài liệu học tập{" "}
        <span className="editorial text-brand-700">dành cho con</span>
      </h1>
      <p className="mt-5 max-w-2xl leading-8 text-slate-600">
        Phiếu thực hành ngắn theo cấp học, có từ vựng, bài tập và đáp án. Đọc
        ngay trên website hoặc tải bản văn bản để học khi không có mạng.
      </p>
      <nav
        aria-label="Lọc tài liệu theo cấp học"
        className="my-8 flex flex-wrap gap-3"
      >
        {[{ id: "", label: "Tất cả" }, ...programs].map((p) => (
          <Link
            key={p.id}
            href={p.id ? `/tai-lieu?grade=${p.id}` : "/tai-lieu"}
            aria-current={(selected?.id ?? "") === p.id ? "page" : undefined}
            className={`inline-flex min-h-11 items-center rounded-full px-5 py-3 font-bold ${(selected?.id ?? "") === p.id ? "bg-brand-600 text-white" : "bg-brand-50 text-brand-800 hover:bg-brand-100"}`}
          >
            {p.label}
          </Link>
        ))}
      </nav>
      {grade !== undefined && !selected && (
        <p className="mb-4 text-slate-600">
          Cấp học chưa hợp lệ. Đang hiển thị tất cả tài liệu.
        </p>
      )}
      <p role="status" className="mb-5 text-slate-600">
        {visible.length} tài liệu{selected && ` · ${selected.label}`}
      </p>
      <div className="reveal-group grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((r) => (
          <Reveal
            as="article"
            hover
            key={r.slug}
            className="card course-card relative flex flex-col overflow-hidden"
          >
            <Link
              href={`/tai-lieu/${r.slug}`}
              aria-label={`Xem tài liệu: ${r.title}`}
              className="absolute inset-0 z-10 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-700"
            />
            <div className="card-thumbnail">
              <Image
                src={r.image}
                alt={r.title}
                width={768}
                height={512}
                sizes="(max-width:767px) 100vw, (max-width:1023px) 50vw, 33vw"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="text-sm font-semibold text-brand-700">
                {programs.find((p) => p.id === r.grade)?.label} · {r.duration}
              </p>
              <h2 className="mt-3 text-2xl font-bold leading-snug">
                {r.title}
              </h2>
              <p className="mt-4 flex-1 leading-7 text-slate-600">
                {r.summary}
              </p>
              <span className="mt-5 inline-flex min-h-11 items-center justify-between gap-2 font-bold text-brand-700">
                Xem tài liệu <ArrowRight size={18} />
                <span className="sr-only">: {r.title}</span>
              </span>
              <a
                href={`/tai-lieu/${r.slug}/tai-xuong`}
                download
                className="relative z-20 mt-2 inline-flex min-h-11 items-center gap-2 border-t border-brand-100 bg-white pt-3 text-sm font-semibold text-brand-700"
              >
                <Download size={18} /> Tải bài & đáp án (.txt)
                <span className="sr-only">: {r.title}</span>
              </a>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-6 text-sm leading-6 text-slate-600">
        Tài liệu do Bloom English biên soạn. Miễn phí, không cần tài khoản.
      </p>
    </main>
  );
}
