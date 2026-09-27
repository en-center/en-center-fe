import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, HeartHandshake, Sprout } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import TeacherCard from "@/components/TeacherCard";
import { teachers } from "@/lib/teachers";
import { branches } from "@/lib/consultation-options";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Giới thiệu trung tâm",
  "Tìm hiểu Bloom English: định hướng học tập, đội ngũ giáo viên và không gian dành cho học sinh Tiểu học, THCS, THPT.",
  "/gioi-thieu",
);
const facilities = [
  {
    title: "Phòng học tương tác",
    image: "/images/facility-classroom.png",
    text: "Không gian cho cả hoạt động cá nhân và làm việc nhóm, để học sinh có cơ hội trao đổi, thực hành và trình bày ý tưởng.",
    features: [
      "Bàn ghế bố trí theo hoạt động học",
      "Màn hình hỗ trợ bài học trực quan",
      "Không gian sáng và gọn gàng",
    ],
  },
  {
    title: "Góc đọc & tự học",
    image: "/images/facility-reading.png",
    text: "Một góc yên tĩnh dành cho sách, những câu chuyện mới và thời gian ôn tập trước hoặc sau giờ học.",
    features: [
      "Sách và học liệu theo chủ đề",
      "Chỗ ngồi đọc thoải mái",
      "Khuyến khích thói quen tự khám phá",
    ],
  },
  {
    title: "Khu đón tiếp & tư vấn",
    image: "/images/facility-welcome.png",
    text: "Nơi ba mẹ tìm hiểu chương trình, trao đổi mục tiêu học tập và chọn bước khởi đầu phù hợp cho con.",
    features: [
      "Khu vực chờ dành cho phụ huynh",
      "Không gian trao đổi về lộ trình",
      "Kết nối gia đình với đội ngũ tư vấn",
    ],
  },
];
export default function AboutPage() {
  return (
    <main id="main-content">
      <section className="border-b border-brand-100 bg-brand-50">
        <div className="container-page section grid items-center gap-8 md:grid-cols-2">
          <div>
            <p className="section-index">Về Bloom English</p>
            <h1 className="heading mt-4">
              Một nơi để học tiếng Anh.
              <br />
              <span className="editorial text-brand-700">
                Một nơi để con lớn lên.
              </span>
            </h1>
            <p className="mt-5 leading-8 text-slate-700">
              Bloom hướng đến hành trình học tiếng Anh gần gũi với học sinh Tiểu
              học, THCS và THPT: học theo năng lực, thực hành có mục tiêu và tự
              tin thể hiện bản thân.
            </p>
            <nav
              aria-label="Các phần giới thiệu"
              className="mt-6 flex flex-wrap gap-2"
            >
              {[
                ["trung-tam", "Trung tâm"],
                ["giao-vien", "Giáo viên"],
                ["co-so-vat-chat", "Cơ sở vật chất"],
              ].map(([id, label]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-semibold text-brand-800 hover:bg-brand-100"
                >
                  {label}
                  <ArrowRight size={15} aria-hidden="true" />
                </a>
              ))}
            </nav>
          </div>
          <Reveal as="figure" variant="scale">
            <Image
              src="/images/cartoon-classroom.png"
              alt="Thầy cô và học sinh cùng khám phá bài học"
              width={1000}
              height={667}
              priority
              sizes="(max-width:767px) 100vw, 50vw"
              className="aspect-[3/2] w-full rounded-2xl object-cover"
            />
          </Reveal>
        </div>
      </section>
      <section id="trung-tam" className="container-page section">
        <p className="section-index">01 / Giới thiệu trung tâm</p>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <h2 className="heading">
            Từ những bước nhỏ,
            <br />
            <span className="editorial text-brand-700">
              nuôi dưỡng sự tự tin.
            </span>
          </h2>
          <div className="space-y-4 leading-8 text-slate-700">
            <p>
              Với Bloom, tiếng Anh không chỉ nằm trong trang sách. Đó còn là
              cách con kể về một ngày của mình, đặt câu hỏi và chia sẻ điều vừa
              khám phá.
            </p>
            <p>
              Chương trình kết nối bốn kỹ năng nghe, nói, đọc, viết với những
              chủ đề phù hợp độ tuổi. Mục tiêu học tập được điều chỉnh theo nền
              tảng và tiến bộ của từng học sinh.
            </p>
          </div>
        </div>
        <div className="reveal-group mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Sprout,
              title: "Học theo nhịp của con",
              text: "Bắt đầu từ năng lực hiện tại, xây nền vững trước khi chuyển sang nội dung mới.",
            },
            {
              icon: BookOpen,
              title: "Thực hành để hiểu",
              text: "Dùng tiếng Anh qua trò chơi ngôn ngữ, câu chuyện và dự án phù hợp với lứa tuổi.",
            },
            {
              icon: HeartHandshake,
              title: "Cùng gia đình đồng hành",
              text: "Trao đổi mục tiêu và gợi ý luyện tập để ba mẹ hiểu, hỗ trợ con trong quá trình học.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <Reveal as="article" hover key={title} className="card p-6">
              <Icon size={27} className="text-brand-700" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-bold">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <section id="giao-vien" className="bg-brand-50">
        <div className="container-page section">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="section-index">02 / Đội ngũ giáo viên</p>
              <h2 className="heading mt-4">
                Lắng nghe, hướng dẫn
                <br />
                <span className="editorial text-brand-700">
                  và khích lệ con.
                </span>
              </h2>
            </div>
            <Link href="/giao-vien" className="btn-secondary">
              Xem toàn bộ đội ngũ <ArrowRight size={18} />
            </Link>
          </div>
          <p className="mt-5 max-w-3xl leading-8 text-slate-700">
            Giáo viên giúp con hiểu cách học, chủ động đặt câu hỏi và thử lại
            khi gặp khó khăn. Mỗi bài học là cơ hội để thực hành và nhận phản
            hồi cụ thể.
          </p>
          <div className="reveal-group mt-7 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {teachers.slice(0, 3).map((t) => (
              <TeacherCard key={t.id} teacher={t} />
            ))}
          </div>
        </div>
      </section>
      <section id="co-so-vat-chat" className="container-page section">
        <p className="section-index">03 / Cơ sở vật chất</p>
        <h2 className="heading mt-4">
          Không gian gần gũi,
          <br />
          <span className="editorial text-brand-700">khơi mở điều mới.</span>
        </h2>
        <p className="mt-5 max-w-3xl leading-8 text-slate-700">
          Bloom ưu tiên không gian sáng, bố trí linh hoạt và học liệu dễ tiếp
          cận. Từ giờ học cùng thầy cô đến lúc tự đọc một cuốn sách, mỗi khu vực
          đều hướng đến trải nghiệm học tập của con.
        </p>
        <div className="reveal-group mt-7 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {facilities.map((f) => (
            <Reveal
              as="article"
              variant="scale"
              hover
              key={f.title}
              className="card overflow-hidden"
            >
              <div className="card-thumbnail">
                <Image
                  src={f.image}
                  alt={`Phối cảnh ${f.title.toLowerCase()}`}
                  width={1000}
                  height={667}
                  sizes="(max-width:767px) 100vw, (max-width:1023px) 50vw, 33vw"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold">{f.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{f.text}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                  {f.features.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-4 text-sm leading-6 text-slate-500">
          Phối cảnh không gian học tập. Ba mẹ có thể liên hệ để tìm hiểu phòng
          học và tiện ích tại cơ sở quan tâm.
        </p>
      </section>
      <section className="container-page pb-10">
        <Reveal className="rounded-2xl bg-brand-100 p-6 md:p-8">
          <div className="grid items-start gap-6 md:grid-cols-2">
            <div>
              <h2 className="heading">
                Ghé thăm Bloom,
                <br />
                <span className="editorial text-brand-700">
                  tìm hiểu cùng con.
                </span>
              </h2>
              <p className="mt-4 leading-8 text-slate-700">
                Chọn khu vực thuận tiện để trao đổi về không gian học, chương
                trình và buổi học thử.
              </p>
              <Link href="/lien-he" className="btn mt-5">
                Đăng ký tư vấn & học thử <ArrowRight size={18} />
              </Link>
            </div>
            <nav aria-label="Tìm hiểu cơ sở" className="space-y-3">
              {branches.map((b) => (
                <Link
                  key={b.value}
                  href={`/lien-he?branch=${b.value}#dang-ky`}
                  className="flex min-h-16 items-center justify-between gap-3 rounded-2xl bg-white p-5 hover:bg-brand-50"
                >
                  <span>
                    <strong className="block">{b.label}</strong>
                    <span className="mt-1 block text-sm text-slate-600">
                      {b.address}
                    </span>
                  </span>
                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                    className="shrink-0 text-brand-700"
                  />
                </Link>
              ))}
            </nav>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
