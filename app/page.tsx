import Reveal from "@/components/motion/Reveal";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Compass,
  Users,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import CourseCard from "@/components/CourseCard";
import TeacherCard from "@/components/TeacherCard";
import { courses } from "@/lib/courses";
import { teachers } from "@/lib/teachers";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Tiếng Anh cùng con lớn lên",
  "Khám phá chương trình tiếng Anh Tiểu học, THCS, THPT và IELTS. Tìm hiểu giáo viên, lộ trình và đăng ký học thử tại Bloom English.",
  "/",
);
const values = [
  {
    icon: Compass,
    title: "Lộ trình vừa sức con",
    text: "Bắt đầu từ năng lực hiện tại, cùng con đặt mục tiêu và tiến bộ qua từng giai đoạn.",
  },
  {
    icon: Users,
    title: "Thầy cô thật gần gũi",
    text: "Lắng nghe, khích lệ con đặt câu hỏi và hướng dẫn bằng những phản hồi cụ thể.",
  },
  {
    icon: BookOpen,
    title: "Học để dùng mỗi ngày",
    text: "Kết nối nghe, nói, đọc, viết qua tình huống đời sống và những dự án nhỏ.",
  },
  {
    icon: MessageCircle,
    title: "Ba mẹ cùng đồng hành",
    text: "Theo dõi nội dung học, hiểu điểm cần bồi dưỡng và cùng con thực hành tại nhà.",
  },
];
export default function Home() {
  return (
    <main id="main-content">
      <section className="border-b border-brand-100 bg-brand-50">
        <div className="container-page grid items-center gap-10 py-7 md:grid-cols-2 md:gap-8 md:py-10 lg:gap-14 lg:py-12">
          <div>
            <p className="section-index">Small steps. Bright futures.</p>
            <h1 className="hero-title mt-6">
              Tiếng Anh mở lối.
              <br />
              <span className="editorial text-brand-700">
                Con tự tin
                <br className="hidden lg:block" /> lớn lên.
              </span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-8 text-slate-600">
              Một câu nói mới, một khám phá hay, một lần con dám thể hiện. Bloom
              cùng con nuôi dưỡng những bước tiến nhỏ mỗi ngày.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link className="btn" href="/khoa-hoc">
                Khám phá khóa học <ArrowRight size={18} />
              </Link>
              <Link className="btn-secondary !bg-transparent" href="/lien-he">
                Đăng ký học thử
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-4 border-t border-brand-900/10 pt-5">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-brand-900/15">
                <BookOpen size={20} />
              </span>
              <p className="text-sm leading-6 text-slate-600">
                <strong className="block font-semibold text-forest">
                  Một hành trình, nhiều bước trưởng thành
                </strong>
                Tiểu học · THCS · THPT & IELTS
              </p>
            </div>
          </div>
          <Reveal as="figure" variant="scale" className="relative pb-6 md:pl-4">
            <div className="hero-photo">
              <Image
                src="/images/cartoon-classroom.png"
                alt="Tranh hoạt hình giáo viên và học sinh Việt Nam cùng thực hành trong lớp tiếng Anh"
                width={1536}
                height={1024}
                priority
                sizes="(max-width: 767px) 100vw, 50vw"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="photo-label flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-800">
                  <Sparkles size={22} />
                </span>
                <div>
                  <p className="font-semibold">
                    Niềm vui học tập bắt đầu ở đây.
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Cùng học, cùng khám phá
                  </p>
                </div>
              </div>
            </div>
            <span
              aria-hidden="true"
              className="absolute right-0 top-8 rounded-full bg-brand-200 px-5 py-3 font-display text-xl italic text-brand-950 lg:-right-4"
            >
              Hello, tomorrow!
            </span>
          </Reveal>
        </div>
      </section>
      <section className="container-page section">
        <div className="grid items-end gap-5 md:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="section-index">01 / Chương trình học</p>
            <h2 className="heading mt-4">
              Đúng độ tuổi.
              <br />
              <span className="editorial text-brand-700">
                Đúng nhịp của con.
              </span>
            </h2>
          </div>
          <p className="max-w-md leading-8 text-slate-600 md:justify-self-end">
            Từ nền tảng đầu tiên đến tiếng Anh học thuật. Chọn một chương trình
            để khám phá điều con sẽ học và mục tiêu phía trước.
          </p>
        </div>
        <div className="mt-9 reveal-group grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.slice(0, 3).map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      </section>
      <section className="bg-brand-50">
        <div className="container-page section grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal as="figure" variant="scale" className="relative">
            <Image
              src="/images/cartoon-teens.png"
              alt="Tranh hoạt hình nhóm học sinh thảo luận và thực hành cùng nhau"
              width={1000}
              height={1100}
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="aspect-[5/4] w-full rounded-2xl object-cover lg:aspect-[5/4]"
            />
            <figcaption className="absolute bottom-5 left-5 right-5 rounded-xl bg-white/95 p-5">
              <p className="font-display text-2xl italic">
                Mỗi tiếng nói đều đáng được lắng nghe.
              </p>
              <p className="mt-2 text-xs text-slate-500">
                Học cùng nhau, tự tin cùng nhau
              </p>
            </figcaption>
          </Reveal>
          <div>
            <p className="section-index">02 / Cách Bloom đồng hành</p>
            <h2 className="heading mt-4">
              Không chỉ là bài học.
              <br />
              <span className="editorial text-brand-700">Là sự tự tin.</span>
            </h2>
            <div className="reveal-group mt-6 divide-y divide-brand-900/10">
              {values.map(({ icon: Icon, title, text }) => (
                <Reveal as="article" key={title} className="flex gap-4 py-5">
                  <span className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-brand-700">
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold">{title}</h3>
                    <p className="mt-2 leading-7 text-slate-600">{text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="container-page section">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="section-index">03 / Người đồng hành</p>
            <h2 className="heading mt-4">
              Có thầy cô bên cạnh,
              <br />
              <span className="editorial text-brand-700">
                con dám thử nhiều hơn.
              </span>
            </h2>
          </div>
          <Link href="/giao-vien" className="btn-secondary">
            Gặp đội ngũ Bloom <ArrowRight size={18} />
          </Link>
        </div>
        <div className="mt-9 reveal-group grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teachers.slice(0, 3).map((t) => (
            <TeacherCard key={t.id} teacher={t} />
          ))}
        </div>
      </section>
      <Reveal as="section" variant="fade" className="container-page pb-10">
        <div className="grid overflow-hidden rounded-2xl bg-brand-100 md:grid-cols-[1.25fr_1fr]">
          <div className="p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-brand-700">
              Bắt đầu cùng Bloom
            </p>
            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-brand-950 md:text-4xl">
              Hành trình lớn,
              <br />
              <span className="editorial text-brand-700">
                bắt đầu từ một lời chào.
              </span>
            </h2>
            <p className="mt-5 max-w-md leading-8 text-brand-800">
              Cùng tìm lộ trình phù hợp cho con qua một buổi tư vấn hoặc học
              thử.
            </p>
            <Link href="/lien-he" className="btn mt-7">
              Đăng ký học thử <ArrowRight size={18} />
            </Link>
          </div>
          <Image
            src="/images/cartoon-classroom.png"
            alt="Tranh hoạt hình lớp học vui vẻ"
            width={768}
            height={800}
            sizes="(max-width: 767px) 100vw, 45vw"
            className="h-full min-h-64 w-full object-cover object-[65%_center]"
          />
        </div>
      </Reveal>
    </main>
  );
}
