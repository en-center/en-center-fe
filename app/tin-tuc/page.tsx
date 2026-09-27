import Reveal from "@/components/motion/Reveal";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { articles } from "@/lib/learning-content";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Tin tức & góc học tập",
  "Bài viết dành cho phụ huynh và học sinh: cách học tiếng Anh, hoạt động tại nhà và kỹ năng học tập cùng Bloom.",
  "/tin-tuc",
);
export default function NewsPage() {
  return (
    <main id="main-content" className="container-page section">
      <p className="section-index">Góc chia sẻ Bloom</p>
      <h1 className="heading mt-4">
        Tin tức &{" "}
        <span className="editorial text-brand-700">cảm hứng học tập</span>
      </h1>
      <p className="mt-5 max-w-2xl leading-8 text-slate-600">
        Những ý tưởng nhỏ giúp con học chủ động hơn và ba mẹ đồng hành dễ dàng
        hơn mỗi ngày.
      </p>
      <div className="mt-10 reveal-group grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((a) => (
          <Reveal as="div" hover key={a.slug} className="h-full">
            <Link
              href={`/tin-tuc/${a.slug}`}
              className="card course-card flex h-full flex-col overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-700"
            >
              <div className="card-thumbnail">
                <Image
                  src={a.image}
                  alt={a.title}
                  width={768}
                  height={512}
                  sizes="(max-width:767px) 100vw, (max-width:1023px) 50vw, 33vw"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm font-semibold text-brand-700">
                  {a.category} · {a.readingTime}
                </p>
                <h2 className="mt-3 text-2xl font-bold leading-snug">
                  {a.title}
                </h2>
                <p className="mt-4 flex-1 leading-7 text-slate-600">
                  {a.summary}
                </p>
                <span className="mt-5 inline-flex min-h-11 items-center justify-between gap-3 border-t border-brand-100 pt-4 font-semibold text-brand-700">
                  Đọc bài viết <ArrowRight size={18} />
                  <span className="sr-only">: {a.title}</span>
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
      <section className="mt-7 rounded-2xl bg-brand-50 p-8">
        <h2 className="text-2xl font-bold">Đọc rồi, cùng thực hành nhé!</h2>
        <p className="mt-3 leading-7 text-slate-600">
          Khám phá phiếu luyện tập theo cấp học, kèm đáp án và gợi ý tự học.
        </p>
        <Link href="/tai-lieu" className="btn mt-5">
          Xem tài liệu học tập <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
}
