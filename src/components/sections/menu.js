"use client";

import { useState } from "react";
import Container from "@/components/Container";

export default function Menu({
  caption,
  title,
  titleLine2,
  dishes,
  ctaLabel = "Перейти в меню",
}) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [animating, setAnimating] = useState(false);

  const dish = dishes[current];

  function changeSlide(newIndex, dir) {
    if (animating) return;

    setDirection(dir);
    setAnimating(true);

    setTimeout(() => {
      setCurrent(newIndex);
      setAnimating(false);
    }, 200);
  }

  function prev() {
    const newIndex = (current - 1 + dishes.length) % dishes.length;
    changeSlide(newIndex, -1);
  }

  function next() {
    const newIndex = (current + 1) % dishes.length;
    changeSlide(newIndex, 1);
  }

  return (
    <section className="relative overflow-x-clip py-16 min-[600px]:py-20 lg:py-32">
      <Container className="relative">
        {/* Заголовок */}
        <h2 className="mb-8 font-serif text-[20px] font-medium uppercase leading-[1.1] text-heading min-[600px]:text-[20px] lg:mb-16 lg:text-[56px]">
          <div className="flex items-center gap-3 min-[600px]:gap-4 lg:gap-[120px]">
            <span className="shrink-0 font-sans text-[10px] font-medium normal-case text-heading min-[600px]:text-[10px] lg:text-xs">
              {caption}
            </span>
            <span>{title}</span>
          </div>
          <span className="block">{titleLine2}</span>
        </h2>

        {/* Слайдер */}
        <div className="relative">
          {/* Синий прямоугольник */}
          <div className="relative bg-decor px-8 py-6 min-[600px]:px-10 min-[600px]:py-8 lg:px-24 lg:py-12">
            <div
              className={`
                grid grid-cols-1 items-center gap-6
                min-[600px]:grid-cols-2 min-[600px]:gap-4 lg:gap-16
                transition-all duration-200 ease-out
                ${
                  animating
                    ? direction === 1
                      ? "-translate-x-4 opacity-0"
                      : "translate-x-4 opacity-0"
                    : "translate-x-0 opacity-100"
                }
              `}
            >
              {/* Левая колонка: текст */}
              <div className="flex min-w-0 flex-col gap-3 min-[600px]:gap-3 lg:gap-6">
                <h3 className="font-serif text-[20px] font-normal uppercase leading-[1.2] text-heading min-[600px]:text-[20px] lg:text-[36px]">
                  {dish.title}
                </h3>

                <p className="font-sans text-[12px] leading-[1.3] text-heading min-[600px]:text-[12px] lg:text-[18px]">
                  {dish.description}
                </p>

                <div className="flex w-full items-baseline justify-between">
                  <span className="font-sans text-[14px] font-semibold leading-[1.4] text-heading min-[600px]:text-[14px] lg:text-[18px]">
                    {dish.price}
                  </span>
                  {dish.weight && (
                    <span className="font-sans text-[10px] leading-[1.2] text-heading min-[600px]:text-[10px] lg:text-[12px]">
                      {dish.weight}
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  className="
                    flex h-[45px] w-[140px] items-center justify-center
                    min-[600px]:h-[45px] min-[600px]:w-[140px]
                    lg:h-[65px] lg:w-[180px]
                    border border-accent bg-accent
                    font-sans text-[14px] font-medium leading-[1.4] text-heading
                    min-[600px]:text-[14px] lg:text-[18px]
                    transition-colors duration-200
                    hover:border-[#E8EDFF] hover:bg-[#011845] hover:text-[#E8EDFF]
                  "
                >
                  {dish.buttonLabel || "В корзину"}
                </button>
              </div>

              {/* Правая колонка: фото */}
              <div className="relative flex justify-center min-[600px]:justify-end">
                <img
                  src={dish.image}
                  alt={dish.title}
                  className="
                    relative z-10
                    h-auto w-full max-w-[200px] object-contain
                    min-[600px]:-my-6 min-[600px]:max-w-[200px]
                    lg:-my-20 lg:max-w-[500px]
                  "
                />
              </div>
            </div>
          </div>

          {/* Стрелки — только если блюд больше одного */}
          {dishes.length > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                aria-label="Предыдущее блюдо"
                className="absolute left-[4px] top-1/2 z-20 -translate-y-1/2 text-heading transition-opacity hover:opacity-70 min-[600px]:left-[6px] lg:left-[10px]"
              >
                <svg
                  width="18"
                  height="20"
                  viewBox="0 0 21 24"
                  fill="none"
                  className="min-[600px]:h-[20px] min-[600px]:w-[18px] lg:h-[24px] lg:w-[21px]"
                >
                  <path
                    d="M14 6L8 12L14 18"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button
                type="button"
                onClick={next}
                aria-label="Следующее блюдо"
                className="absolute right-[4px] top-1/2 z-20 -translate-y-1/2 text-heading transition-opacity hover:opacity-70 min-[600px]:right-[6px] lg:right-[10px]"
              >
                <svg
                  width="18"
                  height="20"
                  viewBox="0 0 21 24"
                  fill="none"
                  className="min-[600px]:h-[20px] min-[600px]:w-[18px] lg:h-[24px] lg:w-[21px]"
                >
                  <path
                    d="M7 6L13 12L7 18"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Кнопка под слайдером */}
        <div className="mt-8 flex justify-center lg:mt-16">
          <button
            type="button"
            className="
              flex h-[50px] w-[200px] items-center justify-center
              lg:h-[74px] lg:w-[285px]
              border border-heading bg-bg
              font-sans text-[16px] font-medium leading-[1.4] text-heading
              lg:text-[24px]
              transition-colors duration-200
              hover:border-accent hover:bg-accent hover:text-white
            "
          >
            {ctaLabel}
          </button>
        </div>
      </Container>
    </section>
  );
}
