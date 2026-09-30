import Promo from "@/components/sections/promo";
import About from "@/components/sections/about";
import Menu from "@/components/sections/menu";
import Delivery from "@/components/sections/delivery";
import Reviews from "@/components/sections/reviews";

const menuDishes = [
  {
    id: 1,
    title: "Морской бриз",
    description:
      "Тарелка морепродуктов, включающая сочные кусочки краба, ароматные креветки и нежные мидии, подается с фирменным соусом и свежими зелеными травами.",
    price: "1300 рублей",
    weight: "150 г",
    image: "/photo/dishes_slider_1.png",
  },

  {
    id: 2,
    title: "Морской бриз",
    description:
      "Тарелка морепродуктов, включающая сочные кусочки краба, ароматные креветки и нежные мидии, подается с фирменным соусом и свежими зелеными травами.",
    price: "1300 рублей",
    weight: "150 г",
    image: "/photo/dishes_slider_1.png",
  },
];

export default function Home() {
  return (
    <main>
      <Promo />
      <About />
      <Menu
        caption="Меню"
        title="Блюда, которые навсегда"
        titleLine2="запомнятся вам"
        dishes={menuDishes}
        ctaLabel="Перейти в меню"
      />
      <Delivery />
      <Reviews />
    </main>
  );
}
