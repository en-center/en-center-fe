export default function Loading() {
  return (
    <main id="main-content" className="container-page section" aria-busy="true">
      <p role="status">Đang tải khóa học…</p>
      <div
        aria-hidden="true"
        className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-80 rounded-2xl bg-brand-50" />
        ))}
      </div>
    </main>
  );
}
