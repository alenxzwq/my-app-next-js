import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="font-serif text-[80px] font-medium uppercase leading-none text-heading lg:text-[120px]">
        404
      </h1>
      <p className="mt-4 font-sans text-base text-heading lg:text-lg">
        Такой страницы нет
      </p>
      <Link
        href="/"
        className="
          mt-8 flex h-[60px] w-[250px] items-center justify-center
          border border-heading bg-bg
          font-sans text-[18px] text-heading
          transition-colors duration-200
          hover:border-accent hover:bg-accent hover:text-white
        "
      >
        На главную
      </Link>
    </main>
  );
}
