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
    <section className="relative overflow-x-clip py-16 min-[600px]:py-20 lg:py-24">
      <Container className="relative">
        {/* Заголовок */}
        <h2 className="mb-20 font-serif text-[28px] font-medium uppercase leading-[1.05] text-heading min-[600px]:text-[36px] lg:mb-24 lg:text-[56px]">
          <div className="flex flex-col items-start gap-2 lg:flex-row lg:items-center lg:gap-[120px]">
            <span className="shrink-0 font-sans text-xs font-medium normal-case text-heading">
              Доставка
            </span>
            <span>Быстро, удобно, надежно</span>
          </div>
          <span className="block">Доставка по Москве и МО</span>
        </h2>

        {/* ============ МОБИЛКА ============ */}
        <div className="flex flex-col gap-12 min-[600px]:hidden">
          <div>
            <img
              src="/photo/delivery.png"
              alt="Курьер на мотоцикле"
              className="h-auto w-full object-cover"
            />
          </div>

          {leftItems.map((item) => (
            <DeliveryItem key={item.number} {...item} />
          ))}
          <DeliveryItem {...rightItem} />
        </div>

        {/* ============ ПЛАНШЕТ ============ */}
        <div className="hidden min-[600px]:block lg:hidden">
          {/* Фото на всю ширину */}
          <div className="mb-16">
            <img
              src="/photo/delivery-tablet.png"
              alt="Курьер на мотоцикле"
              className="h-auto w-full object-cover"
            />
          </div>

          {/* Блоки: слева 01/02, справа 03 */}
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-12 pr-8">
              {leftItems.map((item) => (
                <DeliveryItem key={item.number} {...item} />
              ))}
            </div>
            <div className="flex flex-col pr-8">
              <DeliveryItem {...rightItem} />
            </div>
          </div>
        </div>

        {/* ============ ДЕСКТОП ============ */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-16">
          {/* Левая колонка */}
          <div className="flex flex-col gap-16 pr-8">
            {leftItems.map((item) => (
              <DeliveryItem key={item.number} {...item} />
            ))}
          </div>

          {/* Центр: фото на всю ширину центральной колонки */}
          <div className="w-full">
            <img
              src="/photo/delivery.png"
              alt="Курьер на мотоцикле"
              className="h-auto w-full object-cover"
            />
          </div>

          {/* Правая колонка */}
          <div className="flex flex-col pr-8">
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
      <span className="font-serif text-[28px] font-normal uppercase leading-[1.05] text-heading min-[600px]:text-[28px] lg:text-[36px]">
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
