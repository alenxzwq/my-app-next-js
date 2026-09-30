import Container from "@/components/Container";

const leftItems = [
  {
    number: "01",
    title: "Термосумки для сохранения тепла",
    text: "Мы доставляем в специальных термосумках, чтобы сохранить температуру и свежесть блюд",
  },
  {
    number: "02",
    title: "Горячее и свежее",
    text: "Ваш заказ не успеет остыть и не потеряет своего вкуса в пути",
  },
];

const rightItem = {
  number: "03",
  title: "Качество как в ресторане",
  text: "Вы получите блюда в том виде, в котором их приготовил повар — свежими, вкусными и красивыми, чтобы насладиться непревзойденным вкусом дома",
};

export default function Delivery() {
  return (
    <section className="relative overflow-x-clip py-24 min-[600px]:py-28 lg:py-48">
      <Container className="relative">
        {/* Заголовок — как в предыдущих блоках */}
        <h2 className="mb-20 font-serif text-[28px] font-medium uppercase leading-[1.05] text-heading min-[600px]:text-[36px] lg:mb-24 lg:text-[56px]">
          <div className="flex flex-col items-start gap-2 lg:flex-row lg:items-center lg:gap-[120px]">
            <span className="shrink-0 font-sans text-xs font-medium normal-case text-heading">
              Доставка
            </span>
            <span>Быстро, удобно, надежно</span>
          </div>
          <span className="block">Доставка по Москве и МО</span>
        </h2>

        {/* Контент: слева 2 блока, в центре фото, справа 1 блок */}
        <div className="grid grid-cols-1 gap-12 min-[600px]:grid-cols-[1fr_auto_1fr] min-[600px]:items-center min-[600px]:gap-8 lg:gap-16">
          {/* ЛЕВАЯ КОЛОНКА — 2 блока */}
          <div className="flex flex-col gap-12 lg:gap-16">
            {leftItems.map((item) => (
              <DeliveryItem key={item.number} {...item} />
            ))}
          </div>

          {/* ЦЕНТР — фото */}
          <div className="order-first flex justify-center min-[600px]:order-none">
            <img
              src="/photo/delivery.png"
              alt="Курьер на мотоцикле"
              className="
      h-auto w-full max-w-[420px] object-cover
      min-[600px]:h-[300px] min-[600px]:w-[340px]
      lg:h-[430px] lg:w-[480px]
    "
            />
          </div>

          {/* ПРАВАЯ КОЛОНКА — 1 блок */}
          <div className="flex flex-col">
            <DeliveryItem {...rightItem} />
          </div>
        </div>
      </Container>
    </section>
  );
}

function DeliveryItem({ number, title, text }) {
  return (
    <div className="flex flex-col gap-3">
      <span className="font-serif text-[28px] font-normal uppercase leading-[1.05] text-heading min-[600px]:text-[32px] lg:text-[36px]">
        {number}
      </span>

      <h4 className="font-serif text-[18px] font-normal uppercase leading-[1.2] text-heading min-[600px]:text-[20px] lg:text-[24px]">
        {title}
      </h4>

      <p className="font-sans text-[14px] leading-[1.4] text-heading min-[600px]:text-[15px] lg:text-[18px]">
        {text}
      </p>
    </div>
  );
}
