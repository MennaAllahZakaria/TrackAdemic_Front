function Input({
  icon,
  error,
  ...props
}) {
  return (
    <div className="space-y-1">

      <div className="relative">

        {/* ICON */}
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

          <i className={icon}></i>

        </span>

        {/* INPUT */}
        <input
          {...props}
          className={`
            w-full

            pl-11
            pr-4

            py-3
            sm:py-3.5

            rounded-xl

            bg-gray-100

            text-sm
            sm:text-base

            text-gray-800

            placeholder:text-gray-400

            outline-none

            transition-all duration-300

            focus:bg-white
            focus:ring-2
            focus:ring-blue-500

            hover:bg-gray-200

            ${
              error
                ? `
                  border border-red-500
                  focus:ring-red-400
                `
                : `
                  border border-transparent
                `
            }
          `}
        />

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

export default Input;