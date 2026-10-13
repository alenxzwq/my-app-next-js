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
        {/* Заголовок — маленький до 1100px, крупный от 1100px */}
        <h2 className="mb-10 font-serif text-[24px] font-medium uppercase leading-[1.05] text-heading min-[600px]:text-[24px] min-[1100px]:text-[56px] lg:mb-16">
          <div className="flex flex-col items-start gap-2 min-[1100px]:flex-row min-[1100px]:items-center min-[1100px]:gap-[120px]">
            <span className="shrink-0 font-sans text-xs font-medium normal-case text-heading">
              Контакты
            </span>
            <span>Морская атмосфера,</span>
          </div>
          <span className="block">объединяющая людей</span>
        </h2>

        {/* Контент: 2 колонки с планшета, растянуты по высоте */}
        <div className="grid grid-cols-1 gap-8 min-[600px]:grid-cols-[1fr_1fr] min-[600px]:items-stretch min-[600px]:gap-6 min-[1100px]:gap-16">
          {/* ФОТО — заполняет всю высоту колонки */}
          <div className="min-[600px]:h-full">
            <img
              src="/photo/Contacts_img.png"
              alt="Атмосфера ресторана"
              className="h-full w-full object-cover"
            />
          </div>

          {/* ИНФО */}
          <div className="flex min-w-0 flex-col gap-5 min-[600px]:gap-4 min-[1100px]:gap-10">
            {/* Вопросы */}
            <div className="flex flex-col gap-2 min-[600px]:gap-2 min-[1100px]:gap-5">
              <h3 className="font-serif text-[20px] font-normal uppercase leading-[1.05] text-heading min-[600px]:text-[18px] min-[1100px]:text-[36px]">
                Если у вас
                <br />
                остались вопросы:
              </h3>

              <ul className="flex flex-col gap-2 min-[1100px]:gap-3">
                {contacts.map((item) => (
                  <ContactItem key={item.id} {...item} />
                ))}
              </ul>
            </div>

            {/* Адрес */}
            <div className="flex flex-col gap-2 min-[600px]:gap-2 min-[1100px]:gap-5">
              <h3 className="font-serif text-[20px] font-normal uppercase leading-[1.05] text-heading min-[600px]:text-[18px] min-[1100px]:text-[36px]">
                Адрес:
              </h3>

              <ul className="flex flex-col gap-2 min-[1100px]:gap-3">
                <ContactItem
                  icon="/icons/location.svg"
                  text="г. Москва, ул. Тверская, д.8"
                />
              </ul>
            </div>

            {/* Соцсети */}
            <div className="flex flex-col gap-2 min-[600px]:gap-2 min-[1100px]:gap-5">
              <h3 className="font-serif text-[20px] font-normal uppercase leading-[1.05] text-heading min-[600px]:text-[18px] min-[1100px]:text-[36px]">
                Мы в социальных
                <br />
                сетях:
              </h3>

              <ul className="flex gap-2 min-[1100px]:gap-3">
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

function ContactItem({ icon, text, href }) {
  const content = (
    <div className="flex items-center gap-2">
      <span
        aria-hidden
        className="flex h-4 w-4 shrink-0 items-center justify-center min-[1100px]:h-7 min-[1100px]:w-7"
      >
        <img src={icon} alt="" className="h-full w-full object-contain" />
      </span>
      <span className="font-sans text-[12px] leading-[1.4] text-heading min-[600px]:text-[12px] min-[1100px]:text-[18px]">
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

function SocialItem({ icon, label, href }) {
  return (
    <li>
      <a
        href={href}
        aria-label={label}
        className="
          flex h-[38px] w-[38px] items-center justify-center
          bg-decor
          transition-opacity hover:opacity-80
          min-[600px]:h-[42px] min-[600px]:w-[42px]
          min-[1100px]:h-[60px] min-[1100px]:w-[60px]
        "
      >
        <img
          src={icon}
          alt=""
          className="h-6 w-6 object-contain min-[600px]:h-7 min-[600px]:w-7 min-[1100px]:h-11 min-[1100px]:w-11"
        />
      </a>
    </li>
  );
}
