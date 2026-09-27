import Reveal from "@/components/motion/Reveal";
import Link from "next/link";
import { Download } from "lucide-react";
import { notFound } from "next/navigation";
import { resources, getResource } from "@/lib/learning-content";
import { pageMetadata } from "@/lib/seo";
export const dynamicParams = false;
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }));
}
export async function generateMetadata({ params }: Props) {
  const r = getResource((await params).slug);
  return r
    ? pageMetadata(r.title, r.summary, `/tai-lieu/${r.slug}`)
    : { title: "Không tìm thấy tài liệu" };
}
export default async function ResourcePage({ params }: Props) {
  const r = getResource((await params).slug);
  if (!r) notFound();
  return (
    <main id="main-content" className="container-page section">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/tai-lieu"
          className="inline-flex min-h-11 items-center font-semibold text-brand-700 hover:underline"
        >
          ← Tất cả tài liệu
        </Link>
        <p className="section-index mt-6 flex">{r.audience}</p>
        <h1 className="heading mt-4">{r.title}</h1>
        <p className="mt-5 leading-8 text-slate-700">{r.summary}</p>
        <p className="mt-3 text-sm text-slate-600">
          {r.duration} · Có đáp án · Miễn phí
        </p>
        <a href={`/tai-lieu/${r.slug}/tai-xuong`} download className="btn mt-6">
          <Download size={18} /> Tải bài & đáp án (.txt)
        </a>
        <Reveal as="section" className="card mt-8 bg-brand-50 p-6">
          <h2 className="text-2xl font-bold">Mục tiêu & cách học</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
            {r.objectives.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
          <p className="mt-4 leading-8 text-slate-700">{r.guidance}</p>
        </Reveal>
        <Reveal as="section" className="mt-5">
          <h2 className="text-2xl font-bold">Từ vựng cần nhớ</h2>
          <dl className="mt-4 divide-y divide-brand-100 rounded-2xl border border-brand-100 px-5">
            {r.vocabulary.map((v) => (
              <div key={v.word} className="grid gap-1 py-4 sm:grid-cols-2">
                <dt className="font-bold text-brand-700">{v.word}</dt>
                <dd className="text-slate-700">{v.meaning}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
        {r.exercises.map((e) => (
          <Reveal as="section" key={e.title} className="mt-5">
            <h2 className="text-2xl font-bold">{e.title}</h2>
            <p className="mt-4 leading-8 text-slate-700">{e.instruction}</p>
            <ol className="mt-4 list-decimal space-y-3 pl-6 leading-8 text-slate-700">
              {e.questions.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ol>
            <details className="card mt-5 px-5">
              <summary className="py-4 font-bold text-brand-700">
                Xem đáp án & gợi ý
              </summary>
              <ol className="list-decimal space-y-3 pb-5 pl-5 leading-7 text-slate-700">
                {e.answers.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ol>
            </details>
          </Reveal>
        ))}
        <Reveal as="section" className="mt-6 rounded-2xl bg-brand-50 p-6">
          <h2 className="text-xl font-bold">Con cần thêm người đồng hành?</h2>
          <p className="mt-3 leading-7 text-slate-700">
            Tìm chương trình phù hợp để tiếp tục thực hành cùng giáo viên.
          </p>
          <Link href={`/khoa-hoc?grade=${r.grade}`} className="btn mt-5">
            Khám phá khóa học
          </Link>
        </Reveal>
      </article>
    </main>
  );
}
