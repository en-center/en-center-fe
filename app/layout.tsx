import type { Metadata } from "next";
import { Be_Vietnam_Pro, Lora } from "next/font/google";
import LayoutUI from "@/components/LayoutUI";
import "./globals.css";
const bodyFont = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});
const editorialFont = Lora({
  subsets: ["latin", "vietnamese"],
  style: ["normal", "italic"],
  variable: "--font-editorial",
  display: "swap",
});
const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://bloomenglish.example";
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Bloom English | Tiếng Anh Tiểu học, THCS, THPT & IELTS",
    template: "%s | Bloom English",
  },
  description:
    "Tiếng Anh cho học sinh Tiểu học, THCS, THPT. Lộ trình Cambridge, IELTS, học qua dự án và đồng hành cùng phụ huynh. Đăng ký tư vấn hoặc học thử.",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: "Bloom English",
    title: "Bloom English — Khơi mở tương lai cùng tiếng Anh",
    description:
      "Khơi dậy đam mê học tiếng Anh từ bé. Cùng con trưởng thành qua lộ trình Tiểu học, THCS, THPT & IELTS.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Bloom English — Tiếng Anh cho trẻ em và thiếu niên",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};
const schema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Bloom English",
  url: baseUrl,
  description:
    "Trung tâm tiếng Anh dành cho học sinh Tiểu học, THCS, THPT; định hướng Cambridge và IELTS.",
  knowsAbout: [
    "English for children",
    "Cambridge English Qualifications",
    "IELTS",
    "English for teenagers",
  ],
  logo: `${baseUrl}/icon.svg`,
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="vi"
      className={`${bodyFont.variable} ${editorialFont.variable}`}
    >
      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only z-50 rounded-lg bg-white p-3 focus:fixed focus:left-4 focus:top-4 focus:not-sr-only"
        >
          Đến nội dung chính
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
        <LayoutUI>{children}</LayoutUI>
      </body>
    </html>
  );
}
