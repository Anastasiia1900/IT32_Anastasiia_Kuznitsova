"use client";

import { useActionState } from "react";
import { submitRequest, type FormState } from "../actions";

const initialState: FormState = {
  success: false,
  message: "",
  errors: {},
};

export default function RequestForm() {

  const [state, formAction, isPending] = useActionState(
    submitRequest,
    initialState
  );

  return (
    <form
      action={formAction}
      noValidate
      className="space-y-6 rounded-2xl bg-white p-8 shadow-xl"
    >

      {}
      <div>
        <label
          htmlFor="fullName"
          className="mb-2 block font-semibold text-gray-700"
        >
          ПІБ студента
        </label>

        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Введіть ваше ПІБ"
          className="w-full rounded-lg border border-gray-300 p-3 text-gray-900"
        />

        {state.errors.fullName && (
          <p className="mt-2 text-sm text-red-600">
            {state.errors.fullName[0]}
          </p>
        )}
      </div>

      {}
      <div>
        <label
          htmlFor="email"
          className="mb-2 block font-semibold text-gray-700"
        >
          Електронна пошта
        </label>

        <input
          type="email"
          id="email"
          name="email"
          placeholder="student@gmail.com"
          className="w-full rounded-lg border border-gray-300 p-3 text-gray-900"
        />

        {state.errors.email && (
          <p className="mt-2 text-sm text-red-600">
            {state.errors.email[0]}
          </p>
        )}
      </div>

      {}
      <div>
        <label
          htmlFor="topic"
          className="mb-2 block font-semibold text-gray-700"
        >
          Тема консультації
        </label>

        <select
          id="topic"
          name="topic"
          defaultValue=""
          className="w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-900"
        >
          <option value="">
            Оберіть тему
          </option>

          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="Next.js">Next.js</option>
        </select>

        {state.errors.topic && (
          <p className="mt-2 text-sm text-red-600">
            {state.errors.topic[0]}
          </p>
        )}
      </div>

      {}
      <div>
        <label
          htmlFor="details"
          className="mb-2 block font-semibold text-gray-700"
        >
          Запитання до викладача
        </label>

        <textarea
          id="details"
          name="details"
          rows={5}
          placeholder="Напишіть ваше запитання..."
          className="w-full rounded-lg border border-gray-300 p-3 text-gray-900"
        />

        {state.errors.details && (
          <p className="mt-2 text-sm text-red-600">
            {state.errors.details[0]}
          </p>
        )}
      </div>

      {}
      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-lg bg-blue-600 p-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        {isPending ? "Надсилання..." : "Надіслати заявку"}
      </button>

      {}
      {state.message && (
        <p
          aria-live="polite"
          className={`rounded-lg p-4 text-center font-semibold ${
            state.success
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {state.message}
        </p>
      )}

    </form>
  );
}
