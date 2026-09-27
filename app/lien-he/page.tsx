import { Phone } from "lucide-react";
import ConsultationForm from "@/components/ConsultationForm";
import { consultationPrefill } from "@/lib/consultation-prefill";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Liên hệ & đăng ký học thử",
  "Tìm cơ sở Bloom English và đăng ký tư vấn chương trình tiếng Anh phù hợp với độ tuổi, năng lực và mục tiêu của con.",
  "/lien-he",
);
export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{
    course_interest?: string | string[];
    branch?: string | string[];
  }>;
}) {
  const prefill = consultationPrefill(await searchParams);
  return (
    <main id="main-content" className="bg-brand-50/50">
      <div className="container-page section">
        <p className="eyebrow">Bloom lắng nghe ba mẹ</p>
        <h1 className="heading mt-3">Tìm lộ trình phù hợp cho con</h1>
        <p className="mb-10 mt-4 max-w-2xl leading-7 text-slate-700">
          Chọn chương trình và cơ sở ba mẹ quan tâm để đăng ký tư vấn hoặc học
          thử cho con.
        </p>
        <ConsultationForm
          defaults={prefill}
          contact={
            <div className="mb-10">
              <h2 className="text-2xl font-extrabold">Thông tin liên hệ</h2>
              <dl className="mt-5 space-y-3 text-slate-700">
                <div>
                  <dt className="font-bold">Hotline</dt>
                  <dd>
                    <a
                      className="inline-flex min-h-11 items-center gap-2 text-brand-700"
                      href="tel:0901234567"
                    >
                      <Phone size={20} aria-hidden="true" /> 0901 234 567
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-bold">Email</dt>
                  <dd>
                    <a
                      className="inline-flex min-h-11 items-center break-all text-brand-700"
                      href="mailto:hello@bloomenglish.example"
                    >
                      hello@bloomenglish.example
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-bold">Giờ tư vấn</dt>
                  <dd className="mt-2">Thứ Hai – Chủ nhật · 08:00–20:00</dd>
                </div>
              </dl>
            </div>
          }
        />
      </div>
    </main>
  );
}
