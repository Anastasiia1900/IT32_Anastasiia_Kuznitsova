import RequestForm from "./components/RequestForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 px-4 py-12">

      <div className="mx-auto max-w-2xl">

        <div className="mb-8 text-center">

          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Запис на консультацію
          </h1>

          <p className="text-lg text-gray-700">
            Заповніть форму для реєстрації
            на консультацію викладача
          </p>

        </div>

        <RequestForm />

        <p className="mt-8 text-center text-sm text-gray-600">
          Практична робота №9 | Next.js | Варіант 1
        </p>

      </div>

    </main>
  );
}