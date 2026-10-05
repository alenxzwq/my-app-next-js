import Promo from "@/components/sections/promo";
import About from "@/components/sections/about";
import Menu from "@/components/sections/menu";
import Delivery from "@/components/sections/delivery";
import Reviews from "@/components/sections/reviews";
import Booking from "@/components/sections/booking";

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

const promoDishes = [
  {
    id: 1,
    title: "Скидка 15% на первый заказ",
    description:
      "Воспользуйтесь этой прекрасной возможностью и откройте для себя мир изысканных морских деликатесов, которыми славится наш ресторан",
    price: "",
    weight: "",
    image: "/photo/dishes_slider_2.png",
    buttonLabel: "Забрать скидку",
  },
  {
    id: 2,
    title: "Скидка 15% на первый заказ",
    description:
      "Воспользуйтесь этой прекрасной возможностью и откройте для себя мир изысканных морских деликатесов, которыми славится наш ресторан",
    price: "",
    weight: "",
    image: "/photo/dishes_slider_2.png",
    buttonLabel: "Забрать скидку",
  },
  // ...
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
      <Menu
        caption="Акции"
        title="Оазис выгодных"
        titleLine2="предложений"
        dishes={promoDishes}
        ctaLabel="Все акции"
        className="pb-24 pt-20 min-[600px]:pb-28 min-[600px]:pt-12 lg:pb-48 lg:pt-16"
      />
      <Booking />
    </main>
  );
}
