import Container from "@/components/Container";

export default function About() {
  return (
    <section className="relative overflow-x-clip py-16 min-[600px]:py-20 lg:py-24">
      {/* Эллипс */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-177px] top-1/2 h-[406px] w-[406px] -translate-y-1/2 rounded-full blur-[200px]"
        style={{
          background:
            "linear-gradient(0deg, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), #4164AB",
        }}
      />

      <Container className="relative">
        {/* ==== ЗАГОЛОВОК ==== */}
        <h2 className="mb-8 font-serif text-[28px] font-medium uppercase leading-[1.05] text-heading min-[800px]:mb-12 min-[800px]:text-[40px] lg:mb-16 lg:text-[56px]">
          <span className="mb-3 block font-sans text-xs font-medium normal-case text-heading min-[800px]:mb-0 min-[800px]:inline-block min-[800px]:mr-8 lg:mr-[120px]">
            О ресторане
          </span>
          <span className="inline">История рыбного </span>
          <span className="block">Искушения</span>
        </h2>

        {/* ==== КОНТЕНТ ==== */}
        <div className="flex flex-col gap-6 min-[800px]:grid min-[800px]:grid-cols-[1fr_1.4fr] min-[800px]:items-stretch min-[800px]:gap-8 lg:grid-cols-2 lg:gap-16">
          {/* ФОТО */}
          <div className="order-1 flex min-w-0 justify-center min-[800px]:order-2 min-[800px]:justify-end">
            <img
              src="/photo/photo-about.png"
              alt="Шеф-повар ресторана AQUARIM на фоне аквариума"
              className="h-auto w-full max-w-full object-cover min-[800px]:h-[294px] min-[800px]:w-auto lg:h-[400px]"
            />
          </div>

          {/* ТЕКСТ + КНОПКА */}
          <div className="order-2 flex min-w-0 flex-col gap-8 min-[800px]:order-1 min-[800px]:h-full min-[800px]:gap-[50px]">
            <div className="flex flex-col gap-5">
              <p className="font-sans text-base leading-[1.4] text-heading lg:text-lg">
                Наша история началась с мечты о создании места, где каждый может
                насладиться непревзойденным вкусом свежей рыбы прямо у себя
                дома. Мы поставили перед собой задачу предложить нечто большее,
                чем просто блюда из рыбы — мы хотели подарить вам настоящее
                морское путешествие.
              </p>

              <p className="font-sans text-base leading-[1.4] text-heading lg:text-lg">
                Мы — это место, где каждая деталь имеет значение.
              </p>
            </div>

            <button
              type="button"
              className="
                flex h-[74px] w-full items-center justify-center
                border border-heading bg-bg font-sans text-[20px] font-medium
                leading-[1.4] text-heading
                transition-colors duration-200
                hover:border-accent hover:bg-accent hover:text-white
                min-[800px]:mt-auto min-[800px]:w-[285px] min-[800px]:text-[24px]
              "
            >
              Узнать больше
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
