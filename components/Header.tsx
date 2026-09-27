"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  ChevronRight,
  Files,
  House,
  Menu,
  MessageCircle,
  Newspaper,
  Sprout,
  Users,
  X,
} from "lucide-react";

const links = [
  {
    href: "/",
    label: "Trang chủ",
    icon: House,
    description: "Khám phá Bloom English",
  },
  {
    href: "/khoa-hoc",
    label: "Khóa học",
    icon: BookOpen,
    description: "Tìm lộ trình phù hợp với con",
  },
  {
    href: "/tin-tuc",
    label: "Tin tức",
    icon: Newspaper,
    description: "Góc chia sẻ và cảm hứng học tập",
  },
  {
    href: "/tai-lieu",
    label: "Tài liệu",
    icon: Files,
    description: "Cùng con thực hành mỗi ngày",
  },
  {
    href: "/gioi-thieu",
    label: "Giới thiệu",
    icon: Users,
    description: "Trung tâm, giáo viên và cơ sở vật chất",
  },
  {
    href: "/lien-he",
    label: "Liên hệ",
    icon: MessageCircle,
    description: "Kết nối và tư vấn chương trình",
  },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const drawer = useRef<HTMLDialogElement>(null);
  const isActive = (href: string) =>
    pathname === href ||
    (href !== "/" && pathname.startsWith(`${href}/`)) ||
    (href === "/gioi-thieu" && pathname === "/giao-vien");

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1280px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);
  useEffect(() => {
    const dialog = drawer.current;
    if (!dialog) return;
    if (open) {
      if (!dialog.open) dialog.showModal();
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }
    if (!dialog.open) return;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const timeout = window.setTimeout(
      () => dialog.close(),
      reducedMotion ? 0 : 240,
    );
    return () => window.clearTimeout(timeout);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-brand-200/60 bg-white/95 shadow-[0_4px_24px_-16px_#2b422230] backdrop-blur-xl">
      <div className="container-page relative z-10 flex h-20 items-center justify-between gap-4 xl:h-24 xl:gap-6">
        <Link
          href="/"
          aria-label="Bloom English - Trang chủ"
          onClick={() => setOpen(false)}
          className="group flex shrink-0 items-center gap-3 rounded-xl"
        >
          <span className="flex size-11 items-center justify-center rounded-2xl border border-brand-400/40 bg-brand-300 text-brand-800 shadow-[inset_0_1px_0_#ffffff90] sm:size-12">
            <Sprout size={29} strokeWidth={1.8} aria-hidden="true" />
          </span>
          <span className="flex flex-col">
            <span className="text-[30px] font-extrabold leading-none tracking-[-.07em] text-brand-800">
              bloom<span className="text-brand-500">.</span>
            </span>
            <span className="mt-1.5 text-[9px] font-bold leading-none tracking-[.22em] text-brand-700">
              ENGLISH CENTER
            </span>
          </span>
        </Link>

        <nav aria-label="Điều hướng chính" className="hidden xl:block">
          <ul className="flex items-center gap-6">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={isActive(href) ? "page" : undefined}
                  className={`desktop-nav-link relative inline-flex min-h-12 items-center whitespace-nowrap px-1 text-sm font-semibold ${isActive(href) ? "text-brand-800" : "text-slate-600 hover:text-brand-800"}`}
                >
                  {label}
                  <span
                    aria-hidden="true"
                    className="nav-underline absolute inset-x-0 bottom-0 h-0.5 origin-center rounded-full bg-brand-600"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <Link
            href="/lien-he"
            className="hidden min-h-12 items-center gap-3 rounded-full border border-brand-400/40 bg-brand-300 py-2 pl-5 pr-2 text-sm font-bold text-brand-950 shadow-sm shadow-brand-900/5 hover:bg-brand-400 sm:inline-flex"
          >
            Đăng ký học thử
            <span className="flex size-8 items-center justify-center rounded-full bg-white/60">
              <ArrowRight size={17} aria-hidden="true" />
            </span>
          </Link>
          <button
            ref={menuButton}
            type="button"
            aria-controls="mobile-menu"
            aria-expanded={open}
            aria-label={open ? "Đóng menu" : "Mở menu"}
            onClick={() => setOpen((v) => !v)}
            className={`flex size-12 items-center justify-center rounded-2xl border xl:hidden ${open ? "border-brand-300 bg-brand-100 text-brand-900" : "border-brand-200 bg-brand-50 text-brand-800 hover:bg-brand-100"}`}
          >
            {open ? (
              <X size={22} aria-hidden="true" />
            ) : (
              <Menu size={22} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <dialog
        ref={drawer}
        id="mobile-menu"
        aria-labelledby="mobile-menu-title"
        className={`mobile-drawer ${open ? "is-opening" : "is-closing"}`}
        onCancel={(event) => {
          event.preventDefault();
          setOpen(false);
        }}
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          const bounds = event.currentTarget.getBoundingClientRect();
          if (
            event.clientX < bounds.left ||
            event.clientX > bounds.right ||
            event.clientY < bounds.top ||
            event.clientY > bounds.bottom
          )
            setOpen(false);
        }}
      >
        <div className="flex h-full flex-col bg-white">
          <div className="flex shrink-0 items-center justify-between gap-3 border-b border-brand-100 px-5 py-5">
            <div className="flex items-center gap-2.5 text-brand-800">
              <span className="flex size-10 items-center justify-center rounded-2xl bg-brand-300">
                <Sprout size={25} aria-hidden="true" />
              </span>
              <span
                id="mobile-menu-title"
                className="text-2xl font-extrabold tracking-tight"
              >
                bloom.
              </span>
            </div>
            <button
              type="button"
              autoFocus
              onClick={() => setOpen(false)}
              aria-label="Đóng menu"
              className="flex size-11 items-center justify-center rounded-full bg-brand-50 text-brand-800 hover:bg-brand-100"
            >
              <X size={22} aria-hidden="true" />
            </button>
          </div>
          <nav
            aria-label="Điều hướng di động"
            className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-4 pb-[max(1rem,env(safe-area-inset-bottom))]"
          >
            <p className="px-3 pb-4 pt-2 text-[11px] font-bold uppercase tracking-[.16em] text-brand-700">
              Cùng con khám phá
            </p>
            <ul className="space-y-1">
              {links.map(({ href, label, description, icon: Icon }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(href) ? "page" : undefined}
                    className={`flex min-h-16 items-center gap-3 rounded-xl px-3 py-3 ${isActive(href) ? "bg-brand-100 text-brand-900" : "text-slate-700 hover:bg-brand-50"}`}
                  >
                    <span
                      className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${isActive(href) ? "bg-white text-brand-700" : "bg-brand-50 text-brand-600"}`}
                    >
                      <Icon size={20} strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-base font-semibold">
                        {label}
                      </span>
                      <span className="mt-0.5 block text-xs leading-5 text-slate-600">
                        {description}
                      </span>
                    </span>
                    <ChevronRight
                      size={16}
                      aria-hidden="true"
                      className="shrink-0 text-brand-600"
                    />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-3 border-t border-brand-100 p-2 pt-4">
              <Link
                href="/lien-he"
                onClick={() => setOpen(false)}
                className="btn w-full justify-between !px-5 !text-sm"
              >
                Đăng ký học thử cho con{" "}
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </nav>
        </div>
      </dialog>
    </header>
  );
}
