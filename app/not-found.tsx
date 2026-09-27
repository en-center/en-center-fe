import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main-content" className="container-page section text-center">
      <p className="eyebrow">404 · Không tìm thấy trang</p>
      <h1 className="heading mt-4">Trang này chưa có trong lớp học Bloom</h1>
      <p className="mt-4 text-slate-700">
        Liên kết có thể không đúng. Ba mẹ có thể chọn lại chương trình phù hợp.
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <Link href="/khoa-hoc" className="btn">
          Xem khóa học
        </Link>
        <Link href="/" className="btn-secondary">
          Về trang chủ
        </Link>
      </div>
    </main>
  );
}
