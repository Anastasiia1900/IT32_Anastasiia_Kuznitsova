const smartphones = [
  { id: 1, name: "iPhone 16", price: 32999 },
  { id: 2, name: "Samsung Galaxy S25", price: 36999 },
  { id: 3, name: "Xiaomi Redmi Note 14", price: 9999 },
];

export default function SmartphonesPage() {
  return (
    <section>
      <h1>Смартфони</h1>

      <div className="products">
        {smartphones.map((phone) => (
          <article className="product-card" key={phone.id}>
            <h3>{phone.name}</h3>
            <p>{phone.price.toLocaleString("uk-UA")} грн</p>
          </article>
        ))}
      </div>
    </section>
  );
}