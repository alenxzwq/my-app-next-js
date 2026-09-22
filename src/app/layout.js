import localFont from "next/font/local";
import Header from "@/components/Header";
import "./globals.css";

const oceanic = localFont({
  src: [
    {
      path: "./fonts/TRIAL_Oceanic-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/TRIAL_Oceanic-Medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-oceanic",
  display: "swap",
});

const gilroy = localFont({
  src: [
    {
      path: "./fonts/Gilroy-Regular_0.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Gilroy-Medium_0.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Gilroy-Semibold_0.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
  display: "swap",
});

export const metadata = {
  title: "AQUARIM",
  description: "Ресторан Aquarim",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={`${oceanic.variable} ${gilroy.variable}`}>
      <body className="bg-navy font-sans text-white">
        <Header />
        {children}
      </body>
    </html>
  );
}
