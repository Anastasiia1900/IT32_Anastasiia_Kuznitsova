"use client";

import { useEffect } from "react";

export default function CatalogError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="error">
      <h2>Ой! Щось пішло не так</h2>

      <p>Не вдалося завантажити товари.</p>
      <p>Спробуй ще раз!</p>

      <button className="button" onClick={() => reset()}>
        Спробувати ще раз
      </button>
    </div>
  );
}