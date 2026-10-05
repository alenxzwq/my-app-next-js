"use client";

import { useRef, useState } from "react";
import Container from "@/components/Container";

const reviews = [
  {
    id: 1,
    image: "/photo/review-1.png",
    alt: "Отзыв 1",
  },
  {
    id: 2,
    image: "/photo/review-2.png",
    alt: "Отзыв 2",
  },
  {
    id: 3,
    image: "/photo/review-3.png",
    alt: "Отзыв 3",
  },
  {
    id: 4,
    image: "/photo/review-4.png",
    alt: "Отзыв 4",
  },
  {
    id: 5,
    image: "/photo/review-5.png",
    alt: "Отзыв 5",
  },
  {
    id: 6,
    image: "/photo/review-6.png",
    alt: "Отзыв 6",
  },
  {
    id: 7,
    image: "/photo/review-6.png",
    alt: "Отзыв 6",
  },
  {
    id: 8,
    image: "/photo/review-6.png",
    alt: "Отзыв 6",
  },
  {
    id: 9,
    image: "/photo/review-6.png",
    alt: "Отзыв 6",
  },
];

export default function Reviews({
  caption = "Отзывы",
  title = "Бесценные отзывы",
  titleLine2 = "доказывающие наше мастерство",
  description = "Мы гордимся доверием наших клиентов и ценим каждый отзыв, который вдохновляет нас становиться еще лучше",
  items = reviews,
}) {
  const scrollRef = useRef(null);

  function scrollBy(direction) {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const itemWidth = 180 + 20; // ширина карточки + gap

    container.scrollBy({
      left: direction * itemWidth * 2,
      behavior: "smooth",
    });
  }

  return (
    <section className="relative z-0 overflow-x-clip py-24 min-[600px]:py-28 lg:py-48">
      <Container className="relative">
        {/* Заголовок */}
        <h2 className="mb-12 font-serif text-[28px] font-medium uppercase leading-[1.05] text-heading min-[600px]:text-[28px] lg:mb-16 lg:text-[56px]">
          <div className="flex flex-col items-start gap-2 lg:flex-row lg:items-center lg:gap-[120px]">
            <span className="shrink-0 font-sans text-xs font-medium normal-case text-heading">
              {caption}
            </span>
            <span>{title}</span>
          </div>
          <span className="block">{titleLine2}</span>
        </h2>

        {/* Текст описания по центру + стрелки справа внизу */}
        <div className="relative mb-10 lg:mb-12">
          <p className="mx-auto max-w-[380px] text-left font-sans text-[14px] leading-[1.2] text-heading min-[600px]:text-[15px] lg:text-[18px]">
            {description}
          </p>

          {/* Стрелки — только на планшете и десктопе */}
          <div className="hidden min-[600px]:absolute min-[600px]:bottom-0 min-[600px]:right-0 min-[600px]:flex min-[600px]:gap-4">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Прокрутить влево"
              className="flex h-10 w-10 items-center justify-center text-heading transition-opacity hover:opacity-70"
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
              onClick={() => scrollBy(1)}
              aria-label="Прокрутить вправо"
              className="flex h-10 w-10 items-center justify-center text-heading transition-opacity hover:opacity-70"
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
          </div>
        </div>

        {/* Слайдер отзывов + эллипс за ним */}
        <div className="relative">
          {/* Эллипс — слева, наполовину за краем, по центру слайдера */}
          <div
            aria-hidden
            className="
              pointer-events-none absolute
              left-[-200px] top-1/2
              h-[406px] w-[406px]
              -translate-y-1/2
              rounded-full blur-[200px]
            "
            style={{
              background:
                "linear-gradient(0deg, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), #4164AB",
              zIndex: -1,
            }}
          />

          <ul
            ref={scrollRef}
            className="
              flex gap-5 overflow-x-auto scroll-smooth
              snap-x snap-mandatory
              pb-4
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {items.map((item) => (
              <li
                key={item.id}
                className="
                  h-[260px] w-[180px] shrink-0 snap-start
                  overflow-hidden bg-decor
                "
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-cover"
                />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
