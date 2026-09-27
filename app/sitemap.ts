import type { MetadataRoute } from "next";
import { articles, resources } from "@/lib/learning-content";
import { courses } from "@/lib/courses";
import { siteUrl } from "@/lib/seo";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/",
    "/khoa-hoc",
    "/giao-vien",
    "/gioi-thieu",
    "/lien-he",
    "/tin-tuc",
    "/tai-lieu",
    ...articles.map((a) => `/tin-tuc/${a.slug}`),
    ...resources.map((r) => `/tai-lieu/${r.slug}`),
    ...courses.map((c) => `/khoa-hoc/${c.slug}`),
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
