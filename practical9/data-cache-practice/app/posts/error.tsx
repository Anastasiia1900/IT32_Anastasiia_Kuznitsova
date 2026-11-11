"use client";

export default function Error({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-red-50">

      <div className="rounded-xl bg-white p-8 text-center shadow-lg">

        <h1 className="mb-4 text-2xl font-bold text-red-600">
          Помилка завантаження!
        </h1>

        <p className="mb-6 text-gray-700">
          Не вдалося отримати публікації.
        </p>

        <button
          onClick={() => reset()}
          className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          Спробувати ще раз
        </button>

      </div>

    </main>
  );
}
