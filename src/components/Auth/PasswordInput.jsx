import { useState } from "react";

function PasswordInput({
  register,
  error,
  placeholder,
}) {
  const [show, setShow] =
    useState(false);

  return (
    <div className="space-y-1">

      <div className="relative">

        {/* LEFT ICON */}
        <span
          className="
            absolute left-3

            top-1/2
            -translate-y-1/2

            text-gray-400

            text-base
            sm:text-lg
          "
        >

          <i className="ri-lock-line"></i>

        </span>

        {/* INPUT */}
        <input
          type={
            show
              ? "text"
              : "password"
          }
          {...register}
          placeholder={
            placeholder
          }
          className="
            w-full

            pl-11
            pr-10

            py-3
            sm:py-3.5

            rounded-xl

            bg-gray-100

            text-sm
            sm:text-base

            placeholder:text-gray-400

            focus:bg-white
            focus:ring-2
            focus:ring-blue-500

            outline-none

            transition-all duration-300
          "
        />

        {/* TOGGLE */}
        <button
          type="button"
          onClick={() =>
            setShow(!show)
          }
          className="
            absolute right-3

            top-1/2
            -translate-y-1/2

            text-gray-400

            text-base
            sm:text-lg

            hover:text-gray-600

            transition-colors
          "
        >

          <i
            className={
              show
                ? "ri-eye-off-line"
                : "ri-eye-line"
            }
          ></i>

        </button>

      </div>

      {/* ERROR */}
      {error && (
        <p
          className="
            text-red-500

            text-xs
            sm:text-sm

            break-words
          "
        >
          {error}
        </p>
      )}

    </div>
  );
}

export default PasswordInput;