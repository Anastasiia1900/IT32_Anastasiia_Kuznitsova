const laptops = [
  { id: 1, name: "MacBook Air", price: 49999 },
  { id: 2, name: "ASUS Vivobook", price: 27999 },
  { id: 3, name: "Lenovo IdeaPad", price: 23999 },
];

export default function LaptopsPage() {
  return (
    <section>
      <h1>Ноутбуки</h1>

      <div className="products">
        {laptops.map((laptop) => (
          <article className="product-card" key={laptop.id}>
            <h3>{laptop.name}</h3>
            <p>{laptop.price.toLocaleString("uk-UA")} грн</p>
          </article>
        ))}
      </div>
    </section>
  );
}