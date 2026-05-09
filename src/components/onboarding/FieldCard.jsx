function FieldCard({
  icon,
  title,
  desc,
  selected,
  onClick,
  color,
}) {

  return (
    <div
      onClick={onClick}
      className={`
        relative

        p-5

        rounded-2xl

        cursor-pointer

        transition-all duration-300

        border

        min-h-[180px]

        ${
          selected
            ? "border-blue-500 bg-blue-50"
            : "bg-white hover:shadow-sm border-gray-200"
        }
      `}
    >

      {/* CHECK */}
      {selected && (

        <div
          className="
            absolute
            top-3 right-3

            text-blue-600
          "
        >

          <i className="ri-checkbox-circle-fill"></i>

        </div>

      )}

      {/* ICON */}
      <div
        className={`
          w-11 h-11

          rounded-full

          flex items-center justify-center

          mb-4

          ${color}
        `}
      >

        <i
          className={`${icon} text-lg`}
        ></i>

      </div>

      {/* TITLE */}
      <h3
        className="
          font-semibold

          text-lg

          leading-snug
        "
      >
        {title}
      </h3>

      {/* DESC */}
      <p
        className="
          text-gray-500

          text-sm

          mt-2

          leading-relaxed
        "
      >
        {desc}
      </p>

    </div>
  );
}

export default FieldCard;