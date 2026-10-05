"use client";

import { useRef, useState } from "react";
import Container from "@/components/Container";

export default function Menu({
  caption,
  title,
  titleLine2,
  dishes,
  ctaLabel = "Перейти в меню",
  className = "py-24 min-[600px]:py-28 lg:py-48",
}) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [animating, setAnimating] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

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

  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchMove(e) {
    touchEndX.current = e.touches[0].clientX;
  }

  function handleTouchEnd() {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (diff > threshold) {
      next();
    } else if (diff < -threshold) {
      prev();
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  }

  return (
    <section className={`relative overflow-x-clip ${className}`}>
      <Container className="relative">
        {/* Заголовок */}
        <h2 className="mb-20 font-serif text-[28px] font-medium uppercase leading-[1.05] text-heading min-[600px]:text-[36px] lg:mb-24 lg:text-[56px]">
          <div className="flex flex-col items-start gap-2 lg:flex-row lg:items-center lg:gap-[120px]">
            <span className="shrink-0 font-sans text-xs font-medium normal-case text-heading">
              {caption}
            </span>
            <span>{title}</span>
          </div>
          <span className="block">{titleLine2}</span>
        </h2>

        {/* Слайдер */}
        <div className="relative">
          <div
            className="relative touch-pan-y select-none bg-decor px-6 py-8 min-[600px]:px-10 min-[600px]:py-8 lg:px-24 lg:py-12"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className={`
                flex flex-col items-center gap-6
                min-[600px]:grid min-[600px]:grid-cols-2 min-[600px]:items-center min-[600px]:gap-4
                lg:gap-16
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
              {/* ФОТО */}
              <div className="relative order-1 flex justify-center min-[600px]:order-2 min-[600px]:justify-end">
                <img
                  src={dish.image}
                  alt={dish.title}
                  draggable={false}
                  className="
                    pointer-events-none relative z-10
                    h-auto w-full max-w-[260px] object-contain
                    -mt-20 mb-2
                    min-[600px]:-my-6 min-[600px]:max-w-[200px]
                    lg:-my-20 lg:max-w-[500px]
                  "
                />
              </div>

              {/* ТЕКСТ + СТРЕЛКИ (только мобилка) */}
              <div className="order-2 flex w-full min-w-0 flex-col gap-3 min-[600px]:order-1 min-[600px]:gap-3 lg:gap-6">
                <h3 className="font-serif text-[24px] font-normal uppercase leading-[1.2] text-heading min-[600px]:text-[20px] lg:text-[36px]">
                  {dish.title}
                </h3>

                <p className="font-sans text-[13px] leading-[1.4] text-heading min-[600px]:text-[12px] lg:text-[18px]">
                  {dish.description}
                </p>

                <div className="flex w-full items-baseline justify-between">
                  <span className="font-sans text-[15px] font-semibold leading-[1.4] text-heading min-[600px]:text-[14px] lg:text-[18px]">
                    {dish.price}
                  </span>
                  {dish.weight && (
                    <span className="font-sans text-[11px] leading-[1.2] text-heading min-[600px]:text-[10px] lg:text-[12px]">
                      {dish.weight}
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  className="
                    mt-2 flex h-[52px] w-full items-center justify-center
                    min-[600px]:mt-0 min-[600px]:h-[45px] min-[600px]:w-[140px]
                    lg:h-[65px] lg:w-[180px]
                    border border-accent bg-accent
                    font-sans text-[16px] font-medium leading-[1.4] text-heading
                    min-[600px]:text-[14px] lg:text-[18px]
                    transition-colors duration-200
                    hover:border-[#E8EDFF] hover:bg-[#011845] hover:text-[#E8EDFF]
                  "
                >
                  {dish.buttonLabel || "В корзину"}
                </button>

                {/* СТРЕЛКИ ПОД КНОПКОЙ — ТОЛЬКО НА МОБИЛКЕ */}
                {dishes.length > 1 && (
                  <div className="mt-4 flex justify-between min-[600px]:hidden">
                    <button
                      type="button"
                      onClick={prev}
                      aria-label="Предыдущее блюдо"
                      className="flex h-10 w-10 items-center justify-center text-heading transition-opacity hover:opacity-70"
                    >
                      <svg
                        width="21"
                        height="24"
                        viewBox="0 0 21 24"
                        fill="none"
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
                      className="flex h-10 w-10 items-center justify-center text-heading transition-opacity hover:opacity-70"
                    >
                      <svg
                        width="21"
                        height="24"
                        viewBox="0 0 21 24"
                        fill="none"
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
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* СТРЕЛКИ ПО БОКАМ — ТОЛЬКО НА ПЛАНШЕТЕ И ДЕСКТОПЕ */}
          {dishes.length > 1 && (
            <div className="hidden min-[600px]:block">
              <button
                type="button"
                onClick={prev}
                aria-label="Предыдущее блюдо"
                className="absolute left-[10px] top-1/2 z-20 -translate-y-1/2 text-heading transition-opacity hover:opacity-70 lg:left-[24px]"
              >
                <svg
                  width="21"
                  height="24"
                  viewBox="0 0 21 24"
                  fill="none"
                  className="lg:h-[28px] lg:w-[24px]"
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
                className="absolute right-[10px] top-1/2 z-20 -translate-y-1/2 text-heading transition-opacity hover:opacity-70 lg:right-[24px]"
              >
                <svg
                  width="21"
                  height="24"
                  viewBox="0 0 21 24"
                  fill="none"
                  className="lg:h-[28px] lg:w-[24px]"
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
            </div>
          )}
        </div>

        {/* Кнопка под слайдером */}
        <div className="mt-16 flex justify-center lg:mt-24">
          <button
            type="button"
            className="
              flex h-[50px] w-full items-center justify-center
              min-[600px]:h-[50px] min-[600px]:w-[200px]
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
