export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">

        <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>

        <p className="text-xl font-semibold text-gray-700">
          Завантаження даних...
        </p>

      </div>
    </main>
  );
}