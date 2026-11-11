type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default async function PostsPage() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=8",
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Помилка завантаження публікацій");
  }

  const posts: Post[] = await response.json();

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-4xl">

        <h1 className="mb-8 text-center text-4xl font-bold text-gray-900">
          Список публікацій
        </h1>

        <div className="grid gap-6">

          {posts.map((post) => (
            <article
              key={post.id}
              className="rounded-xl bg-white p-6 shadow-md"
            >

              <h2 className="mb-3 text-xl font-semibold text-blue-700">
                {post.title}
              </h2>

              <p className="text-gray-700">
                {post.body}
              </p>

            </article>
          ))}

        </div>
      </div>
    </main>
  );
}