import Link from "next/link";

export default function Home() {
  return (
    <section className="hero">
      <h1>Ласкаво просимо до TechStore!</h1>

      <p>
        Відкрийте для себе світ сучасної техніки.
        Смартфони, ноутбуки та аксесуари в одному місці.
      </p>

      <Link href="/catalog" className="button">
        Переглянути каталог
      </Link>
    </section>
  );
}