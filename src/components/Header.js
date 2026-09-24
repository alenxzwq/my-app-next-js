"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { href: "/about", label: "О ресторане" },
  { href: "/menu", label: "Меню" },
  { href: "/delivery", label: "Доставка и оплата" },
  { href: "/contacts", label: "Контакты" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef(null);

  // Закрытие меню по клику вне шапки
  useEffect(() => {
    if (!open) return;

    function handleClick(event) {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <header
      ref={headerRef}
      className="w-full bg-bg text-text"
    >
      <div className="container-x mx-auto flex max-w-[1440px] items-center justify-between py-[11.5px]">
        {/* Логотип */}
        <Link
          href="/"
          className="font-serif text-2xl tracking-[0.15em] sm:text-3xl lg:text-4xl"
        >
          AQUARIM
        </Link>

        {/* Навигация — десктоп */}
        <nav className="hidden items-center gap-8 lg:flex xl:gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-light tracking-wide text-white/90 transition-colors hover:text-white xl:text-base"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* Корзина — десктоп */}
          <div className="hidden lg:block">
            <Link href="/cart" aria-label="Корзина">
              <img src="/icons/cart.svg" alt="" className="h-8 w-8" />
            </Link>
          </div>

          {/* Бургер / крестик — планшет и мобилка */}
          <button
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={open}
            className="text-white lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              {open ? (
                <>
                  <line x1="5" y1="5" x2="19" y2="19" />
                  <line x1="19" y1="5" x2="5" y2="19" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      <div
        className={`overflow-hidden border-t border-white/10 transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 py-3 sm:px-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm font-light text-white/90 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}