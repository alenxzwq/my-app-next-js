import Container from "@/components/Container";

export default function Booking() {
  return (
    <section className="relative z-0 overflow-x-clip py-16 min-[600px]:py-20 lg:py-24">
      <Container className="relative">
        {/* Заголовок */}
        <h2 className="mb-12 font-serif text-[28px] font-medium uppercase leading-[1.05] text-heading min-[600px]:text-[28px] lg:mb-16 lg:text-[56px]">
          <div className="flex flex-col items-start gap-2 lg:flex-row lg:items-center lg:gap-[120px]">
            <span className="shrink-0 font-sans text-xs font-medium normal-case text-heading">
              Бронь
            </span>
            <span>Забронируйте своё место</span>
          </div>
          <span className="block">за лучшим столом</span>
        </h2>

        {/* Контент: форма слева, фото справа — растянуты на одну высоту */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-16">
          {/* ФОРМА */}
          <form className="flex flex-col gap-6">
            {/* Имя + Телефон */}
            <div className="grid grid-cols-1 gap-5 min-[600px]:grid-cols-2">
              <Field label="Имя:" name="name" type="text" />
              <Field label="Телефон:" name="phone" type="tel" />
            </div>

            {/* Дата, Время, Кол-во гостей */}
            <div className="grid grid-cols-1 gap-5 min-[600px]:grid-cols-3">
              <Field label="Дата:" name="date" type="date" />
              <Field label="Время:" name="time" type="time" />
              <Field
                label="Кол-во гостей:"
                name="guests"
                type="number"
                min="1"
              />
            </div>

            {/* Пожелания */}
            <Field label="Ваши пожелания:" name="notes" textarea />

            {/* Кнопка */}
            <button
              type="submit"
              className="
                flex h-[74px] w-full items-center justify-center
                border border-accent bg-accent
                font-sans text-[20px] font-medium leading-[1.4] text-heading
                lg:text-[24px]
                transition-colors duration-200
                hover:border-[#E8EDFF] hover:bg-[#011845] hover:text-[#E8EDFF]
              "
            >
              Забронировать
            </button>
          </form>

          {/* ФОТО — на всю высоту формы */}
          <div className="order-first lg:order-last lg:h-full">
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
            lg:h-[60px] lg:text-[16px]
          "
          {...props}
        />
      )}
    </label>
  );
}
