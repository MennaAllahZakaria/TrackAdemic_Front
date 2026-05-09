function FeatureCard({
  icon,
  title,
  desc,
  color,
}) {

  return (
    <div
      className="
        bg-white

        p-5
        sm:p-6

        rounded-2xl

        shadow-sm
        border border-gray-100

        h-full

        hover:shadow-md
        hover:-translate-y-1

        transition-all duration-300
      "
    >

      {/* ICON */}
      <div
        className={`
          w-10 h-10
          sm:w-11 sm:h-11

          rounded-xl

          flex items-center justify-center

          mb-4

          ${color}
        `}
      >

        <i
          className={`
            ${icon}
            text-lg
          `}
        ></i>

      </div>

      {/* TITLE */}
      <h3
        className="
          font-semibold

          text-base
          sm:text-lg

          mb-2

          text-gray-900
        "
      >
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p
        className="
          text-gray-500

          text-sm
          leading-relaxed

          break-words
        "
      >
        {desc}
      </p>

    </div>
  );
}

export default FeatureCard;