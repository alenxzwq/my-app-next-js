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
    <section className="relative overflow-x-clip py-24 lg:py-32">
      <Container className="relative">
        {/* Заголовок */}
        <h2 className="mb-12 font-serif text-[28px] font-medium uppercase leading-[1.05] text-heading min-[600px]:text-[36px] lg:mb-16 lg:text-[56px]">
          <div className="flex items-center gap-4 min-[600px]:gap-6 lg:gap-[120px]">
            <span className="shrink-0 font-sans text-xs font-medium normal-case text-heading">
              {caption}
            </span>
            <span>{title}</span>
          </div>
          <span className="block">{titleLine2}</span>
        </h2>

        {/* Слайдер */}
        <div className="relative">
          <div className="relative bg-decor px-6 py-8 min-[600px]:px-10 min-[600px]:py-10 lg:px-16 lg:py-12">
            <div
              className={`
                grid grid-cols-1 items-center gap-8
                min-[600px]:grid-cols-2 min-[600px]:gap-6 lg:gap-16
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
              <div className="flex min-w-0 flex-col gap-6">
                <h3 className="font-serif text-[24px] font-normal uppercase leading-[1.2] text-heading min-[600px]:text-[28px] lg:text-[36px]">
                  {dish.title}
                </h3>

                <p className="font-sans text-[14px] leading-[1.2] text-heading min-[600px]:text-[16px] lg:text-[18px]">
                  {dish.description}
                </p>

                <div className="flex w-full items-baseline justify-between">
                  <span className="font-sans text-[16px] font-semibold leading-[1.4] text-heading min-[600px]:text-[18px]">
                    {dish.price}
                  </span>
                  {dish.weight && (
                    <span className="font-sans text-[12px] leading-[1.2] text-heading">
                      {dish.weight}
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  className="
                    flex h-[65px] w-[180px] items-center justify-center
                    border border-accent bg-accent
                    font-sans text-[18px] font-medium leading-[1.4] text-heading
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
                    h-auto w-full max-w-[280px] object-contain
                    min-[600px]:-my-12 min-[600px]:max-w-[340px]
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
                className="absolute left-[10px] top-1/2 z-20 -translate-y-1/2 text-heading transition-opacity hover:opacity-70"
              >
                <svg width="21" height="24" viewBox="0 0 21 24" fill="none">
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
                className="absolute right-[10px] top-1/2 z-20 -translate-y-1/2 text-heading transition-opacity hover:opacity-70"
              >
                <svg width="21" height="24" viewBox="0 0 21 24" fill="none">
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
        <div className="mt-12 flex justify-center lg:mt-16">
          <button
            type="button"
            className="
              flex h-[74px] w-[285px] items-center justify-center
              border border-heading bg-bg
              font-sans text-[24px] font-medium leading-[1.4] text-heading
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
