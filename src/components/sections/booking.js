import Container from "@/components/Container";

export default function Booking() {
  return (
    <section className="relative z-0 overflow-x-clip py-16 min-[600px]:py-20 lg:py-24">
      <Container className="relative">
        {/* Заголовок */}
        <h2 className="mb-12 font-serif text-[28px] font-medium uppercase leading-[1.05] text-heading min-[600px]:text-[56px] lg:mb-16 lg:text-[56px]">
          <div className="flex flex-col items-start gap-2 min-[600px]:gap-4 lg:flex-row lg:items-center lg:gap-[120px]">
            <span className="shrink-0 font-sans text-xs font-medium normal-case text-heading">
              Бронь
            </span>
            <span>Забронируйте своё место</span>
          </div>
          <span className="block">за лучшим столом</span>
        </h2>

        {/* ============ МОБИЛКА + ПЛАНШЕТ ============ */}
        <div className="lg:hidden">
          {/* Фото */}
          <div className="mb-10">
            <img
              src="/photo/booking_photo.png"
              alt="Стол у аквариума"
              className="h-auto w-full object-cover"
            />
          </div>

          {/* Форма */}
          <form className="flex flex-col gap-6">
            {/* Имя + Телефон */}
            <div className="grid grid-cols-1 gap-5 min-[600px]:grid-cols-2">
              <Field label="Имя:" name="name" type="text" />
              <Field label="Телефон:" name="phone" type="tel" />
            </div>

            {/* Дата + Время — в 2 колонки */}
            <div className="grid grid-cols-2 gap-5">
              <Field label="Дата:" name="date" type="date" />
              <Field label="Время:" name="time" type="time" />
            </div>

            {/* Кол-во гостей — отдельной строкой, на всю ширину */}
            <Field label="Кол-во гостей:" name="guests" type="number" min="1" />

            {/* Пожелания */}
            <Field label="Ваши пожелания:" name="notes" textarea />

            {/* Кнопка — 290×51 */}
            <button
              type="submit"
              className="
                flex h-[51px] w-full items-center justify-center
                min-[600px]:h-[54px]
                border border-accent bg-accent
                font-sans text-[18px] font-medium leading-[1.4] text-heading
                min-[600px]:text-[20px]
                transition-colors duration-200
                hover:border-[#E8EDFF] hover:bg-[#011845] hover:text-[#E8EDFF]
              "
            >
              Забронировать
            </button>
          </form>
        </div>

        {/* ============ ДЕСКТОП ============ */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:items-stretch lg:gap-16">
          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-5">
              <Field label="Имя:" name="name" type="text" />
              <Field label="Телефон:" name="phone" type="tel" />
            </div>

            <div className="grid grid-cols-3 gap-5">
              <Field label="Дата:" name="date" type="date" />
              <Field label="Время:" name="time" type="time" />
              <Field
                label="Кол-во гостей:"
                name="guests"
                type="number"
                min="1"
              />
            </div>

            <Field label="Ваши пожелания:" name="notes" textarea />

            <button
              type="submit"
              className="
                flex h-[74px] w-full items-center justify-center
                border border-accent bg-accent
                font-sans text-[24px] font-medium leading-[1.4] text-heading
                transition-colors duration-200
                hover:border-[#E8EDFF] hover:bg-[#011845] hover:text-[#E8EDFF]
              "
            >
              Забронировать
            </button>
          </form>

          <div className="lg:h-full">
            <img
              src="/photo/booking_photo.png"
              alt="Стол у аквариума"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function Field({ label, name, type = "text", textarea = false, ...props }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-sans text-[14px] leading-[1.4] text-heading lg:text-[18px]">
        {label}
      </span>

      {textarea ? (
        <textarea
          name={name}
          rows={5}
          className="
            w-full resize-none
            border border-heading bg-bg
            px-4 py-3
            font-sans text-[14px] leading-[1.4] text-heading
            outline-none
            transition-colors duration-200
            hover:border-[#496192]
            focus:bg-[#34508A]
            min-[600px]:h-[150px] min-[600px]:min-h-[150px]
            lg:text-[16px]
          "
          {...props}
        />
      ) : (
        <input
          type={type}
          name={name}
          className="
            h-[50px] w-full
            border border-heading bg-bg
            px-4
            font-sans text-[14px] leading-[1.4] text-heading
            outline-none
            transition-colors duration-200
            hover:border-[#496192]
            focus:bg-[#34508A]
            min-[600px]:h-[59px]
            lg:h-[60px] lg:text-[16px]
          "
          {...props}
        />
      )}
    </label>
  );
}
