import { ImageResponse } from "next/og";
export const alt = "Bloom English — Tiếng Anh Tiểu học, THCS, THPT & IELTS";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(135deg, #f5faef, #ffffff, #d2e8b9)",
        color: "#2b4222",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 80,
      }}
    >
      <div style={{ fontSize: 36, marginBottom: 45 }}>
        bloom. ENGLISH CENTER
      </div>
      <div style={{ fontSize: 76, fontWeight: 800 }}>Learn today.</div>
      <div style={{ fontSize: 76, fontWeight: 800, color: "#507d36" }}>
        Bloom tomorrow.
      </div>
      <div style={{ fontSize: 27, marginTop: 45 }}>
        PRIMARY · SECONDARY · HIGH SCHOOL & IELTS
      </div>
    </div>,
    size,
  );
}
