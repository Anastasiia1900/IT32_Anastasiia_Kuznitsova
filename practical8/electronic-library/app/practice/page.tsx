import InteractiveList from "./InteractiveList";

export default function PracticePage() {
  const books = [
    {
      id: 1,
      title: "Гаррі Поттер",
      author: "Джоан Ролінґ",
      genre: "Фантастика",
    },
    {
      id: 2,
      title: "1984",
      author: "Джордж Орвелл",
      genre: "Фантастика",
    },
    {
      id: 3,
      title: "Маленький принц",
      author: "Антуан де Сент-Екзюпері",
      genre: "Казка",
    },
    {
      id: 4,
      title: "Дюна",
      author: "Френк Герберт",
      genre: "Фантастика",
    },
    {
      id: 5,
      title: "Гордість і упередження",
      author: "Джейн Остін",
      genre: "Роман",
    },
    {
      id: 6,
      title: "Шерлок Голмс",
      author: "Артур Конан Дойл",
      genre: "Детектив",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-center text-4xl font-bold text-gray-900">
          📚 Електронна бібліотека
        </h1>

        <p className="mb-8 text-center text-lg text-gray-700">
          Загальна кількість книг: {books.length}
        </p>

        <InteractiveList books={books} />
      </div>
    </main>
  );
}