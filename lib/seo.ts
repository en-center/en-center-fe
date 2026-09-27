import type { Metadata } from "next";
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://bloomenglish.example"
).replace(/\/$/, "");
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type: "website",
      locale: "vi_VN",
      siteName: "Bloom English",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "Bloom English",
        },
      ],
    },
  };
}
