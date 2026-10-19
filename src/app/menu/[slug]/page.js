import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import { dishes } from "@/app/data/dishes";

export default function MenuPage() {
  return (
    <Container className="py-16 lg:py-24">
      <h1 className="mb-12 font-serif text-[40px] font-medium uppercase text-heading lg:text-[56px]">
        Меню
      </h1>

      <div className="grid grid-cols-1 gap-8 min-[600px]:grid-cols-2 lg:grid-cols-3">
        {dishes.map((dish) => (
          <Link
            key={dish.slug}
            href={`/menu/${dish.slug}`}
            className="
              flex flex-col overflow-hidden border border-heading/20
              transition-opacity hover:opacity-80
            "
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={dish.image}
                alt={dish.title}
                fill
                sizes="(max-width: 600px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 p-4">
              <h2 className="font-serif text-[24px] uppercase text-heading">
                {dish.title}
              </h2>
              <p className="line-clamp-2 font-sans text-[14px] text-heading">
                {dish.description}
              </p>
              <span className="mt-2 font-sans text-[18px] font-semibold text-heading">
                {dish.price}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}
