"use client";

import { useState } from "react";

type Book = {
  id: number;
  title: string;
  author: string;
  genre: string;
};

type Props = {
  books: Book[];
};

export default function InteractiveList({ books }: Props) {
  const [search, setSearch] = useState("");
  const [onlyFantasy, setOnlyFantasy] = useState(false);

  const filteredBooks = books.filter((book) => {
    const matchesSearch = book.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesGenre =
      !onlyFantasy || book.genre === "Фантастика";

    return matchesSearch && matchesGenre;
  });

  return (
    <div className="rounded-xl bg-white p-6 shadow-lg">

      <h2 className="mb-5 text-2xl font-semibold text-gray-900">
        Каталог книг
      </h2>

      {/* Пошук книг */}
      <input
        type="text"
        placeholder="Пошук книги за назвою..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-5 w-full rounded-lg border border-gray-300 p-3 text-gray-900"
      />

      {/* Фільтр фантастики */}
      <label className="mb-6 flex items-center gap-3 text-gray-900">
        <input
          type="checkbox"
          checked={onlyFantasy}
          onChange={(e) => setOnlyFantasy(e.target.checked)}
          className="h-5 w-5"
        />
        Лише фантастика
      </label>

      {/* Кількість знайдених книг */}
      <p className="mb-4 text-gray-700">
        Знайдено книг: {filteredBooks.length}
      </p>

      {/* Список книг */}
      {filteredBooks.length === 0 ? (
        <p className="py-8 text-center text-gray-500">
          Нічого не знайдено
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="rounded-lg border border-gray-200 bg-gray-50 p-5"
            >
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                {book.title}
              </h3>

              <p className="text-gray-700">
                Автор: {book.author}
              </p>

              <p className="mt-2 text-sm text-blue-700">
                Жанр: {book.genre}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}