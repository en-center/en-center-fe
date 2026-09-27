import Link from "next/link";
import TeacherCard from "@/components/TeacherCard";
import { teachers } from "@/lib/teachers";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Đội ngũ giáo viên",
  "Tìm hiểu đội ngũ giáo viên Bloom English, chuyên môn và phương pháp đồng hành cùng học sinh.",
  "/giao-vien",
);
export default function TeachersPage() {
  return (
    <main id="main-content" className="container-page section">
      <p className="eyebrow">Người đồng hành</p>
      <h1 className="heading mt-3 max-w-3xl">
        Đội ngũ giáo viên đồng hành cùng con
      </h1>
      <p className="mt-5 max-w-3xl leading-8 text-slate-700">
        Thầy cô tạo cơ hội để mỗi học sinh được nói, thử sức và học từ lỗi sai.
        Bài học kết hợp hướng dẫn rõ ràng, thực hành nhóm và phản hồi cá nhân để
        con từng bước chủ động hơn.
      </p>
      <section
        aria-label="Danh sách giáo viên"
        className="mt-8 reveal-group grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {teachers.map((t) => (
          <TeacherCard key={t.id} teacher={t} />
        ))}
      </section>
      <section className="mt-7 rounded-2xl bg-brand-50 p-8 text-center">
        <h2 className="heading">Tìm người đồng hành phù hợp với con</h2>
        <Link href="/lien-he" className="btn mt-6">
          Đăng ký học thử
        </Link>
      </section>
    </main>
  );
}
