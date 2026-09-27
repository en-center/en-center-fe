"use client";
import {
  useEffect,
  useId,
  useState,
  useTransition,
  type FormEvent,
} from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, X, LoaderCircle } from "lucide-react";
export default function CourseSearch({ hero = false }: { hero?: boolean }) {
  const router = useRouter();
  const params = useSearchParams();
  const id = useId();
  const currentQuery = hero
    ? ""
    : (params.getAll("q").length === 1 ? params.get("q")! : "")
        .trim()
        .slice(0, 120);
  const [query, setQuery] = useState(currentQuery);
  const [pending, startTransition] = useTransition();
  useEffect(() => setQuery(currentQuery), [currentQuery]);
  function navigate(value: string) {
    const next = new URLSearchParams();
    const grade = params.get("grade");
    if (!hero && grade && ["cap-1", "cap-2", "cap-3"].includes(grade))
      next.set("grade", grade);
    if (value.trim()) next.set("q", value.trim());
    const suffix = next.toString();
    startTransition(() =>
      router.push(`/khoa-hoc${suffix ? `?${suffix}` : ""}`, { scroll: hero }),
    );
  }
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate(query);
  }
  return (
    <form
      onSubmit={submit}
      role="search"
      aria-label={hero ? "Tìm khóa học nhanh" : "Tìm kiếm khóa học"}
      className="w-full"
      aria-busy={pending}
    >
      <label htmlFor={id} className="mb-2 block text-base font-semibold">
        {hero
          ? "Ba mẹ đang tìm khóa học nào cho con?"
          : "Tìm theo tên khóa học hoặc mục tiêu"}
      </label>
      <div className="flex flex-wrap items-center gap-2 rounded-full border border-brand-100 bg-white p-2 shadow-lg shadow-brand-500/10">
        <Search size={19} className="ml-2 shrink-0 text-brand-700" />
        <input
          id={id}
          name="q"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Ví dụ: Tiểu học, IELTS..."
          maxLength={120}
          disabled={pending}
          className="min-w-0 flex-1 rounded-lg px-1 py-3 text-base outline-none"
        />
        {query && (
          <button
            type="button"
            disabled={pending}
            onClick={() => {
              setQuery("");
              navigate("");
            }}
            aria-label="Xóa từ khóa tìm kiếm"
            className="min-h-11 min-w-11 rounded-full p-2 text-slate-500 hover:bg-mint"
          >
            <X size={16} />
          </button>
        )}
        <button
          disabled={pending}
          type="submit"
          className="flex items-center justify-center gap-2 rounded-full bg-brand-600 px-4 py-3 text-base font-semibold text-white hover:bg-brand-800 disabled:opacity-60"
        >
          {pending ? (
            <LoaderCircle size={16} className="animate-spin" />
          ) : (
            <Search size={16} />
          )}
          <span>{pending ? "Đang tìm" : "Tìm kiếm"}</span>
        </button>
      </div>
      <p role="status" aria-live="polite" className="sr-only">
        {pending ? "Đang tải kết quả tìm kiếm" : ""}
      </p>
    </form>
  );
}
