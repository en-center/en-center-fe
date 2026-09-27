import Image from "next/image";
import { Phone } from "lucide-react";
import ScrollToTop from "./ScrollToTop";

export default function FloatingActions() {
  return (
    <aside
      aria-label="Liên hệ nhanh và điều hướng"
      className="pointer-events-none fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-30 flex flex-col items-center gap-3 md:bottom-[max(1.5rem,env(safe-area-inset-bottom))] md:right-6"
    >
      <a
        href="https://zalo.me/0901234567"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Nhắn tin qua Zalo"
        title="Nhắn tin qua Zalo"
        className="pointer-events-auto flex size-12 items-center justify-center rounded-full border border-slate-100 bg-white shadow-lg shadow-brand-950/15 hover:bg-blue-50"
      >
        <Image
          src="/icons/zalo.svg"
          width={28}
          height={28}
          alt=""
          aria-hidden="true"
        />
      </a>
      <a
        href="tel:0901234567"
        aria-label="Gọi hotline 0901 234 567"
        title="Gọi hotline 0901 234 567"
        className="pointer-events-auto flex size-12 items-center justify-center rounded-full border border-white bg-brand-300 text-brand-950 shadow-lg shadow-brand-950/20 hover:bg-brand-400"
      >
        <Phone size={22} fill="currentColor" aria-hidden="true" />
      </a>
      <div className="size-12">
        <ScrollToTop />
      </div>
    </aside>
  );
}
