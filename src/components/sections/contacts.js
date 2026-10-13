import Container from "@/components/Container";

const contacts = [
  {
    id: 1,
    icon: "/icons/phone.svg",
    text: "+7 (965) 478-89-76",
    href: "tel:+79654788976",
  },
  {
    id: 2,
    icon: "/icons/email.svg",
    text: "aquarim@gmail.com",
    href: "mailto:aquarim@gmail.com",
  },
];

const socials = [
  { id: 1, icon: "/icons/instagram.svg", label: "instagram", href: "#" },
  { id: 2, icon: "/icons/telegram.svg", label: "telegram", href: "#" },
  { id: 3, icon: "/icons/vk.svg", label: "vk", href: "#" },
  { id: 4, icon: "/icons/youtube.svg", label: "youtube", href: "#" },
];

export default function Contacts() {
  return (
    <section className="relative z-0 overflow-x-clip py-16 min-[600px]:py-20 lg:py-24">
      <Container className="relative">
        {/* Заголовок */}
        <h2 className="mb-12 font-serif text-[28px] font-medium uppercase leading-[1.05] text-heading min-[600px]:text-[56px] lg:mb-16 lg:text-[56px]">
          <div className="flex flex-col items-start gap-2 min-[600px]:gap-4 lg:flex-row lg:items-center lg:gap-[120px]">
            <span className="shrink-0 font-sans text-xs font-medium normal-case text-heading">
              Контакты
            </span>
            <span>Морская атмосфера,</span>
          </div>
          <span className="block">объединяющая людей</span>
        </h2>

        {/* Контент: фото слева, инфо справа */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* ФОТО */}
          <div>
            <img
              src="/photo/Contacts_img.png"
              alt="Атмосфера ресторана"
              className="h-auto w-full object-cover"
            />
          </div>

          {/* ИНФО */}
          <div className="flex flex-col gap-10">
            {/* Вопросы */}
            <div className="flex flex-col gap-5">
              <h3 className="font-serif text-[24px] font-normal uppercase leading-[1.05] text-heading min-[600px]:text-[28px] lg:text-[36px]">
                Если у вас
                <br />
                остались вопросы:
              </h3>

              <ul className="flex flex-col gap-3">
                {contacts.map((item) => (
                  <ContactItem key={item.id} {...item} />
                ))}
              </ul>
            </div>

            {/* Адрес */}
            <div className="flex flex-col gap-5">
              <h3 className="font-serif text-[24px] font-normal uppercase leading-[1.05] text-heading min-[600px]:text-[28px] lg:text-[36px]">
                Адрес:
              </h3>

              <ul className="flex flex-col gap-3">
                <ContactItem
                  icon="/icons/location.svg"
                  text="г. Москва, ул. Тверская, д.8"
                />
              </ul>
            </div>

            {/* Соцсети */}
            <div className="flex flex-col gap-5">
              <h3 className="font-serif text-[24px] font-normal uppercase leading-[1.05] text-heading min-[600px]:text-[28px] lg:text-[36px]">
                Мы в социальных
                <br />
                сетях:
              </h3>

              <ul className="flex gap-3">
                {socials.map((item) => (
                  <SocialItem key={item.id} {...item} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* Иконка + текст — для телефона, почты, адреса */
function ContactItem({ icon, text, href }) {
  const content = (
    <div className="flex items-end gap-2">
      <span
        aria-hidden
        className="flex h-7 w-7 shrink-0 items-end justify-center"
      >
        <img src={icon} alt="" className="h-7 w-7 object-contain" />
      </span>
      <span className="font-sans text-[15px] leading-[1.4] text-heading lg:text-[18px]">
        {text}
      </span>
    </div>
  );

  if (href) {
    return (
      <li>
        <a href={href} className="transition-opacity hover:opacity-70">
          {content}
        </a>
      </li>
    );
  }

  return <li>{content}</li>;
}

/* Соцсеть — квадрат с фоном */
function SocialItem({ icon, label, href }) {
  return (
    <li>
      <a
        href={href}
        aria-label={label}
        className="
          flex h-[50px] w-[50px] items-center justify-center
          bg-decor
          transition-opacity hover:opacity-80
          min-[600px]:h-[55px] min-[600px]:w-[55px]
          lg:h-[60px] lg:w-[60px]
        "
      >
        <img src={icon} alt="" className="h-11 w-11 object-contain" />
      </a>
    </li>
  );
}
