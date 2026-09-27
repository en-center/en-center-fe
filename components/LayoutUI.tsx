import Link from "next/link";
import { Sprout, Phone } from "lucide-react";
import Header from "./Header";
import FloatingActions from "./FloatingActions";
import { branches } from "@/lib/consultation-options";
import { courses } from "@/lib/courses";
export default function LayoutUI({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <footer className="border-t border-brand-200 bg-brand-100 text-brand-950">
        <div className="container-page grid gap-10 py-7 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link
              href="/"
              className="inline-flex min-h-11 items-center gap-2 text-3xl font-extrabold"
            >
              <span className="flex size-10 items-center justify-center rounded-full bg-brand-300 text-brand-800">
                <Sprout />
              </span>{" "}
              bloom.
            </Link>
            <p className="mt-4 leading-7 text-brand-800">
              Gieo niềm yêu thích tiếng Anh, cùng con tự tin khám phá thế giới.
            </p>
            <nav
              aria-label="Liên kết cuối trang"
              className="mt-5 flex flex-wrap gap-x-5"
            >
              {[
                ["/", "Trang chủ"],
                ["/khoa-hoc", "Khóa học"],
                ["/gioi-thieu", "Giới thiệu"],
                ["/giao-vien", "Đội ngũ"],
                ["/gioi-thieu#co-so-vat-chat", "Cơ sở vật chất"],
                ["/tin-tuc", "Tin tức"],
                ["/tai-lieu", "Tài liệu học tập"],
                ["/lien-he", "Liên hệ"],
              ].map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  className="inline-flex min-h-11 items-center hover:underline"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h2 className="text-lg font-bold">Chương trình học</h2>
            <ul className="mt-3">
              {courses.map((c) => (
                <li key={c.id}>
                  <Link
                    className="inline-flex min-h-11 items-center text-brand-800 hover:underline"
                    href={`/khoa-hoc/${c.slug}`}
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold">Kết nối với Bloom</h2>
            <a
              className="flex min-h-11 items-center gap-2 text-brand-800"
              href="tel:0901234567"
            >
              <Phone size={18} aria-hidden="true" /> 0901 234 567 · Hotline
            </a>
            <a
              className="flex min-h-11 items-center break-all text-brand-800"
              href="mailto:hello@bloomenglish.example"
            >
              hello@bloomenglish.example
            </a>
            <h3 className="mt-4 font-bold">Hệ thống cơ sở</h3>
            <ul className="mt-2">
              {branches.map((b) => (
                <li key={b.value}>
                  <Link
                    href={`/lien-he?branch=${b.value}#dang-ky`}
                    className="inline-flex min-h-11 items-center text-brand-800 hover:underline"
                  >
                    {b.label} · TP. Hồ Chí Minh
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="border-t border-brand-200 px-5 py-5 text-center text-sm leading-6 text-brand-800">
          Bloom English · Cùng con tự tin lớn lên mỗi ngày.
        </p>
      </footer>
      <FloatingActions />
    </>
  );
}
