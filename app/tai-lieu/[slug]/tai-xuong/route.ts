import { getResource, resourceText } from "@/lib/learning-content";
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const r = getResource((await params).slug);
  if (!r)
    return new Response("Không tìm thấy tài liệu", {
      status: 404,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  return new Response("\uFEFF" + resourceText(r), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Disposition": `attachment; filename="bloom-${r.slug}.txt"`,
      "X-Content-Type-Options": "nosniff",
    },
  });
}
