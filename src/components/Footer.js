import Container from "@/components/Container";

const aboutLinks = [
  { label: "О шефе", href: "/chef" },
  { label: "Галерея", href: "/gallery" },
  { label: "Новости", href: "/news" },
  { label: "Команда", href: "/team" },
];

const visitorLinks = [
  { label: "Меню", href: "/menu" },
  { label: "Доставка и оплата", href: "/delivery" },
  { label: "Отзывы", href: "/reviews" },
  { label: "Контакты", href: "/contacts" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-decor py-16 lg:py-20">
      <Container className="relative">
        {/* ВЕРХНИЙ РЯД */}
        <div className="grid grid-cols-1 gap-8 text-center min-[600px]:grid-cols-[auto_1fr_auto_auto] min-[600px]:gap-12 min-[600px]:text-left lg:gap-16">
          {/* Копирайт */}
          <p className="font-sans text-[12px] leading-[1.2] text-heading min-[600px]:text-[14px] lg:text-[16px]">
            © 2018-2024 AQUARIM
          </p>

          {/* Пустая колонка-разделитель (только планшет+) */}
          <div aria-hidden className="hidden min-[600px]:block" />

          {/* О ресторане */}
          <div className="flex flex-col items-center gap-4 min-[600px]:items-start">
            <h3 className="font-serif text-[18px] font-normal uppercase leading-[1.05] text-heading min-[600px]:text-[20px] lg:text-[26px]">
              О ресторане
            </h3>
            <ul className="flex flex-col items-center gap-2 min-[600px]:items-start">
              {aboutLinks.map((link) => (
                <FooterLink key={link.href} {...link} />
              ))}
            </ul>
          </div>

          {/* Для посетителей */}
          <div className="flex flex-col items-center gap-4 min-[600px]:items-start">
            <h3 className="font-serif text-[18px] font-normal uppercase leading-[1.05] text-heading min-[600px]:text-[20px] lg:text-[26px]">
              Для посетителей
            </h3>
            <ul className="flex flex-col items-center gap-2 min-[600px]:items-start">
              {visitorLinks.map((link) => (
                <FooterLink key={link.href} {...link} />
              ))}
            </ul>
          </div>
        </div>

        {/* ОГРОМНАЯ НАДПИСЬ AQUARIM */}
        <div className="pointer-events-none my-12 select-none lg:my-16">
          <span
            className="
              block w-full text-center font-serif font-normal uppercase leading-[1]
              text-[#011845] opacity-30
              text-[18vw]
              min-[1100px]:text-[220px]
            "
          >
            Aquarim
          </span>
        </div>

        {/* НИЖНИЙ РЯД */}
        <div className="flex flex-col items-center gap-4 min-[600px]:flex-row min-[600px]:items-center min-[600px]:justify-between min-[600px]:gap-0">
          <a
            href="/privacy"
            className="font-sans text-[12px] leading-[1.2] text-heading transition-opacity hover:opacity-70 min-[600px]:text-[14px] lg:text-[16px]"
          >
            Политика обработки персональных данных
          </a>

          <a
            href="https://t.me/sshultse"
            className="font-sans text-[12px] leading-[1.2] text-heading transition-opacity hover:opacity-70 min-[600px]:text-[14px] lg:text-[16px]"
          >
            Desing by @sshultse
          </a>
        </div>
      </Container>
    </footer>
  );
}

function FooterLink({ label, href }) {
  return (
    <li>
      <a
        href={href}
        className="font-sans text-[12px] leading-[1.2] text-heading transition-opacity hover:opacity-70 min-[600px]:text-[14px] lg:text-[16px]"
      >
        {label}
      </a>
    </li>
  );
}
