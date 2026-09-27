import Reveal from "@/components/motion/Reveal";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { courses, getCourse } from "@/lib/courses";
import { pageMetadata } from "@/lib/seo";
export const dynamicParams = false;
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}
export async function generateMetadata({ params }: Props) {
  const c = getCourse((await params).slug);
  return c
    ? pageMetadata(c.name, c.tagline, `/khoa-hoc/${c.slug}`)
    : { title: "Không tìm thấy khóa học", robots: { index: false } };
}
export default async function CoursePage({ params }: Props) {
  const course = getCourse((await params).slug);
  if (!course) notFound();
  return (
    <main id="main-content" className="container-page py-6 md:py-8">
      <nav
        aria-label="Đường dẫn"
        className="mb-8 flex flex-wrap items-center gap-2 text-sm"
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
          href="/khoa-hoc"
        >
          Khóa học
        </Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{course.name}</span>
      </nav>
      <Reveal as="section" className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <p className="eyebrow">{course.level}</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
            {course.name}
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            {course.description}
          </p>
        </div>
        <Image
          src={course.image}
          alt={`Lớp học ${course.name}`}
          width={800}
          height={600}
          priority
          sizes="(max-width: 767px) 100vw, 50vw"
          className="aspect-[4/3] w-full rounded-2xl object-cover"
        />
      </Reveal>
      <Reveal as="section" className="mt-7" aria-labelledby="quick">
        <h2 id="quick" className="heading">
          Khóa học có phù hợp với con?
        </h2>
        <dl className="mt-6 grid gap-5 md:grid-cols-2">
          {[
            ["Đối tượng", course.level],
            ["Đầu vào", course.entry],
            ["Mục tiêu học tập", course.goal],
            ["Hình thức học", course.format],
          ].map(([title, text]) => (
            <div key={title} className="card bg-brand-50 p-6">
              <dt className="font-extrabold text-brand-800">{title}</dt>
              <dd className="mt-2 leading-7 text-slate-700">{text}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
      <Reveal as="section" className="mt-7">
        <h2 className="heading">Con sẽ học gì?</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {course.contents.map((c) => (
            <article key={c.title} className="card p-6">
              <h3 className="text-xl font-bold">{c.title}</h3>
              <p className="mt-3 leading-7 text-slate-700">{c.description}</p>
            </article>
          ))}
        </div>
      </Reveal>
      <Reveal as="section" className="mt-7">
        <h2 className="heading">Lộ trình từng bước</h2>
        <ol className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {course.stages.map((s, i) => (
            <li className="card p-6" key={s.title}>
              <p className="eyebrow">Giai đoạn {i + 1}</p>
              <h3 className="mt-3 text-xl font-bold">{s.title}</h3>
              <p className="mt-3 leading-7 text-slate-700">{s.description}</p>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-slate-700">
          Lộ trình điều chỉnh theo tiến bộ thực tế. Cambridge/IELTS là định
          hướng học tập, không cam kết điểm số hoặc thời gian đạt chứng chỉ.
        </p>
      </Reveal>
      <Reveal as="section" className="card mt-7 bg-brand-50 p-6 md:p-8">
        <h2 className="heading">Thông tin lớp học</h2>
        <dl className="mt-6 space-y-4">
          {[
            ["Thời lượng", course.duration],
            ["Lịch học", course.schedule],
            ["Học phí", course.tuition],
          ].map(([t, d]) => (
            <div key={t}>
              <dt className="font-bold">{t}</dt>
              <dd className="mt-1 leading-7 text-slate-700">{d}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-5 text-sm text-slate-600">
          Lịch học dự kiến có thể điều chỉnh theo lớp. Ba mẹ liên hệ tư vấn để
          xác nhận lịch khai giảng phù hợp.
        </p>
      </Reveal>
      <Reveal as="section" className="mt-7">
        <h2 className="heading">Ba mẹ thường hỏi</h2>
        <div className="mt-6 space-y-3">
          {course.faq.map((f) => (
            <details key={f.question} className="card px-6">
              <summary className="py-5 font-bold">{f.question}</summary>
              <p className="pb-6 leading-7 text-slate-700">{f.answer}</p>
            </details>
          ))}
        </div>
      </Reveal>
      <Reveal
        as="section"
        className="my-7 rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 p-8 text-center"
      >
        <h2 className="heading">Cùng chọn bước khởi đầu cho con</h2>
        <p className="mt-4 text-slate-700">
          Trao đổi thêm về chương trình {course.name} và đăng ký học thử.
        </p>
        <Link
          href={`/lien-he?course_interest=${course.id}#dang-ky`}
          className="btn mt-6"
        >
          Tư vấn khóa học này
        </Link>
      </Reveal>
    </main>
  );
}
