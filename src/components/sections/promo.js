import Container from "@/components/Container";

export default function Promo() {
  return (
    <section className="relative overflow-x-clip pb-12 pt-24 md:overflow-visible md:pb-28 md:pt-44 lg:pb-32 lg:pt-52 xl:pt-56">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-glow blur-[120px] md:h-[380px] md:w-[380px] md:blur-[140px] lg:h-[500px] lg:w-[500px] lg:blur-[170px] xl:h-[617px] xl:w-[617px] xl:blur-[200px]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-5 z-0 select-none text-center font-serif text-[16vw] font-normal uppercase leading-[100%] text-decor"
      >
        Aquarim
      </div>

      <Container className="relative">
        <div className="pointer-events-none absolute -right-5 top-[-10px] md:hidden">
          <img
            src="/photo/photo-promo.png"
            alt="Креветка на вилке"
            className="h-[200px] w-auto rotate-[-25deg] object-contain sm:h-[240px]"
          />
        </div>

        <div className="pointer-events-none absolute bottom-0 left-1/2 hidden -translate-x-1/2 md:bottom-[-20px] md:block lg:bottom-[-30px] xl:bottom-[-40px]">
          <img
            src="/photo/photo-promo.png"
            alt="Креветка на вилке"
            className="h-[280px] w-auto object-contain lg:h-[380px] xl:h-[500px]"
          />

          <div
            aria-hidden
            className="pointer-events-none absolute bottom-[-10px] left-1/2 h-[30px] w-[120px] -translate-x-1/2 bg-[#122B5D]"
            style={{ filter: "blur(5px)" }}
          />
        </div>

        <div className="grid grid-cols-1 gap-0 md:grid-cols-[1fr_140px_1fr] md:gap-x-2 md:gap-y-8 lg:grid-cols-[1fr_180px_1fr] lg:gap-x-6 lg:gap-y-10 xl:grid-cols-[1fr_280px_1fr] xl:gap-x-8 xl:gap-y-12">
          <h2 className="order-1 font-serif text-[42px] font-medium uppercase leading-[100%] tracking-[0em] text-heading md:order-none md:col-start-1 md:row-start-1 md:mt-[30px] md:text-[36px] lg:text-[52px] xl:text-[80px]">
            Рыбный
          </h2>

          <h2 className="order-2 font-serif text-[42px] font-medium uppercase leading-[100%] tracking-[0em] text-heading md:order-none md:col-start-3 md:row-start-1 md:mt-[30px] md:text-[36px] lg:text-[52px] xl:text-[80px]">
            Ресторан
          </h2>

          <div className="order-3 mt-[20px] flex flex-col md:order-none md:col-start-1 md:row-start-2 md:mt-[30px] md:self-end lg:mt-[40px]">
            <p className="max-w-[330px] font-sans text-[12px] font-normal leading-[120%] text-white md:max-w-none md:text-[11px] lg:text-[14px] xl:text-[18px]">
              Откройте для себя мир изысканных вкусов с нашими рыбными
              деликатесами, приготовленными специально для вас
            </p>

            <button
              type="button"
              className="
    mt-[20px] flex h-[64px] w-full items-center justify-center
    bg-[#E9663D] ring-1 ring-inset ring-transparent
    font-sans text-[20px] font-medium leading-[140%] text-white
    transition-colors duration-200
    hover:bg-[#011845] hover:text-[#E8EDFF] hover:ring-[#E8EDFF]
    min-[450px]:w-[240px]
    md:mt-[30px] md:h-[50px] md:w-[160px]
    lg:h-[64px] lg:w-[220px]
    xl:h-[74px] xl:w-[285px]
  "
            >
              Меню
            </button>
          </div>

          <ul className="order-4 mt-[20px] flex flex-col gap-4 md:order-none md:col-start-3 md:row-start-2 md:mb-[40px] md:mt-[30px] md:gap-3 md:self-end lg:mb-[60px] lg:mt-[40px] lg:gap-5 lg:ml-[20px] xl:mb-[80px] xl:ml-[40px] xl:gap-6">
            <Feature
              text="Свежая рыба из наших аквариумов — гарантированная свежесть"
              iconSrc="/icons/fish.svg"
            />
            <Feature
              text="Качественная доставка, где горячие блюда сохраняют свой вкус"
              iconSrc="/icons/delivery.svg"
            />
          </ul>
        </div>
      </Container>
    </section>
  );
}

function Feature({ text, iconSrc }) {
  return (
    <li className="flex items-start gap-3 md:gap-2 lg:gap-3 xl:gap-5">
      <span
        aria-hidden
        className="mt-0.5 flex h-[20px] w-[20px] shrink-0 items-center justify-center text-heading md:h-[24px] md:w-[24px] lg:h-[32px] lg:w-[32px] xl:h-[44px] xl:w-[44px]"
      >
        <img
          src={iconSrc}
          alt=""
          className="h-[20px] w-[20px] object-contain md:h-[24px] md:w-[24px] lg:h-[32px] lg:w-[32px] xl:h-[44px] xl:w-[44px]"
        />
      </span>
      <p className="font-sans text-[12px] font-normal leading-[140%] text-heading md:text-[11px] lg:text-[14px] xl:text-[16px]">
        {text}
      </p>
    </li>
  );
}
