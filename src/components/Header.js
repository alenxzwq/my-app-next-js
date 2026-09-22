"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/about", label: "О ресторане" },
  { href: "/menu", label: "Меню" },
  { href: "/delivery", label: "Доставка и оплата" },
  { href: "/contacts", label: "Контакты" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-navy text-white">
      <div className="container-x mx-auto flex max-w-[1440px] items-center justify-between py-[11.5px]">
        <Link
          href="/"
          className="font-serif text-2xl tracking-[0.15em] sm:text-3xl lg:text-4xl"
        >
          AQUARIM
        </Link>

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
          <div className="hidden lg:block">
            <Link href="/cart" aria-label="Корзина">
              <img src="/icons/cart.svg" alt="" className="h-8 w-8" />
            </Link>
          </div>

          <button
            aria-label="Меню"
            aria-expanded={open}
            className="lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <img
              src={open ? "/icons/close.svg" : "/icons/burger.svg"}
              alt=""
              className="h-6 w-6"
            />
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-white/10 transition-[max-height] duration-300 lg:hidden ${open ? "max-h-96" : "max-h-0"}`}
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
