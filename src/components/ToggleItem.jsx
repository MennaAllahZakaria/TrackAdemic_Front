import { useState } from "react";

function ToggleItem({
  title,
  desc,
  defaultOn = false,
}) {

  const [on, setOn] = useState(defaultOn);

  return (
    <div
      className="
        flex flex-col
        sm:flex-row

        sm:items-center
        justify-between

        gap-4
      "
    >

      {/* TEXT */}
      <div className="flex-1 min-w-0">

        <p
          className="
            font-medium
            text-gray-800
          "
        >
          {title}
        </p>

        <p
          className="
            text-sm
            text-gray-500
            mt-1

            leading-relaxed
            break-words
          "
        >
          {desc}
        </p>

      </div>

      {/* TOGGLE */}
      <button
        onClick={() => setOn(!on)}
        className={`
          w-12 h-6

          rounded-full

          flex items-center

          px-1

          transition-all duration-300

          flex-shrink-0

          ${
            on
              ? "bg-blue-600"
              : "bg-gray-300"
          }
        `}
      >

        <div
          className={`
            w-4 h-4

            bg-white
            rounded-full

            transition-all duration-300

            ${
              on
                ? "translate-x-6"
                : "translate-x-0"
            }
          `}
        />

      </button>

    </div>
  );
}

export default ToggleItem;