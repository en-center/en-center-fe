import Reveal from "@/components/motion/Reveal";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/lib/learning-content";
import { pageMetadata } from "@/lib/seo";
export const dynamicParams = false;
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}
export async function generateMetadata({ params }: Props) {
  const a = getArticle((await params).slug);
  return a
    ? pageMetadata(a.title, a.summary, `/tin-tuc/${a.slug}`)
    : { title: "Không tìm thấy bài viết" };
}
export default async function ArticlePage({ params }: Props) {
  const a = getArticle((await params).slug);
  if (!a) notFound();
  return (
    <main id="main-content" className="container-page section">
      <article className="mx-auto max-w-3xl">
        <nav
          aria-label="Đường dẫn"
          className="mb-7 flex flex-wrap items-center gap-2 text-sm"
        >
          <Link
            className="inline-flex min-h-11 items-center hover:underline"
            href="/"
          >
            Trang chủ
          </Link>
          <span aria-hidden="true">/</span>
          <Link
            className="inline-flex min-h-11 items-center hover:underline"
            href="/tin-tuc"
          >
            Tin tức
          </Link>
        </nav>
        <p className="section-index">{a.category}</p>
        <h1 className="heading mt-4">{a.title}</h1>
        <p className="mt-4 text-sm text-slate-600">
          Bloom English ·{" "}
          <time dateTime={a.date}>{a.date.split("-").reverse().join("/")}</time>{" "}
          · {a.readingTime}
        </p>
        <p className="mt-6 text-lg leading-8 text-slate-700">{a.summary}</p>
        <Image
          src={a.image}
          alt={a.title}
          width={1000}
          height={667}
          priority
          sizes="(max-width:767px) 100vw, 768px"
          className="mt-8 aspect-[3/2] w-full rounded-2xl object-cover"
        />
        {a.sections.map((s) => (
          <Reveal as="section" className="mt-5" key={s.title}>
            <h2 className="text-2xl font-bold">{s.title}</h2>
            {s.paragraphs.map((p) => (
              <p key={p} className="mt-4 leading-8 text-slate-700">
                {p}
              </p>
            ))}
          </Reveal>
        ))}
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/tai-lieu" className="btn">
            Thực hành với tài liệu học tập
          </Link>
          <Link href="/tin-tuc" className="btn-secondary">
            Tất cả bài viết
          </Link>
        </div>
      </article>
    </main>
  );
}
