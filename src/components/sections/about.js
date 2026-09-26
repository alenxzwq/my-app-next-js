import Container from "@/components/Container";

export default function About() {
  return (
    <section className="relative py-24 lg:py-32">
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
        {/* Заголовок */}
        <h2 className="mb-12 font-serif text-[28px] font-medium uppercase leading-[1.05] text-heading min-[800px]:text-[40px] lg:mb-16 lg:text-[56px]">
          <div className="flex items-center gap-4 min-[800px]:gap-8 lg:gap-[120px]">
            <span className="shrink-0 font-sans text-xs font-medium normal-case text-heading">
              О ресторане
            </span>
            <span>История рыбного</span>
          </div>
          <span className="block">Искушения</span>
        </h2>

        {/* Контент: 2 колонки с 800px */}
        <div className="grid grid-cols-1 items-start gap-12 min-[800px]:grid-cols-[1fr_1.4fr] min-[800px]:gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Левая колонка: текст + кнопка */}
          <div className="flex min-w-0 flex-col gap-[50px]">
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
                flex h-[74px] w-[285px] items-center justify-center
                border border-heading bg-bg font-sans text-[24px] font-medium
                leading-[1.4] text-heading
                transition-colors duration-200
                hover:border-accent hover:bg-accent hover:text-white
              "
            >
              Узнать больше
            </button>
          </div>

          {/* Правая колонка: фото */}
          <div className="flex min-w-0 justify-center min-[800px]:justify-end">
            <img
              src="/photo/photo-about.png"
              alt="Шеф-повар ресторана AQUARIM на фоне аквариума"
              className="h-auto w-full max-w-full object-cover min-[800px]:h-[294px] lg:h-auto"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
