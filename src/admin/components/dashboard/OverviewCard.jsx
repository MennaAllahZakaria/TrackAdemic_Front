function OverviewCard({
  title,
  value,
  icon,
  bg,
}) {
  return (
    <div
      className="
        relative overflow-hidden

        rounded-[30px]

        bg-white

        border border-gray-100

        shadow-sm

        p-6

        hover:-translate-y-1
        hover:shadow-xl

        transition-all duration-300
      "
    >

      <div
        className={`
          w-16 h-16

          rounded-2xl

          flex items-center
          justify-center

          text-white
          text-3xl

          bg-gradient-to-br
          ${bg}
        `}
      >

        <i className={icon}></i>

      </div>

      <p
        className="
          text-gray-400

          text-sm

          mt-6
        "
      >
        {title}
      </p>

      <h2
        className="
          text-4xl

          font-bold

          text-gray-900

          mt-2
        "
      >
        {value}
      </h2>

    </div>
  );
}

export default OverviewCard;