import Link from "next/link";

const products = [
  { id: 1, name: "iPhone 16", category: "Смартфон", price: 32999 },
  { id: 2, name: "Samsung Galaxy S25", category: "Смартфон", price: 36999 },
  { id: 3, name: "MacBook Air", category: "Ноутбук", price: 49999 },
  { id: 4, name: "ASUS Vivobook", category: "Ноутбук", price: 27999 },
];

export default function CatalogPage() {
  return (
    <section>
      <h1>Наш каталог</h1>
      <p>Обирай техніку, яка тобі до душі!</p>

      <div className="products">
        {products.map((product) => (
          <article className="product-card" key={product.id}>
            <h3>{product.name}</h3>
            <p>Категорія: {product.category}</p>
            <p>
              Ціна: {product.price.toLocaleString("uk-UA")} грн
            </p>
          </article>
        ))}
      </div>

      <p>
        <Link href="/catalog/smartphones" className="button">
          Смартфони
        </Link>
      </p>

      <p>
        <Link href="/catalog/laptops" className="button">
          Ноутбуки
        </Link>
      </p>
    </section>
  );
}