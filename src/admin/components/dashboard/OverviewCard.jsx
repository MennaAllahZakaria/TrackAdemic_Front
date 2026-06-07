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

        rounded-[24px]
        sm:rounded-[30px]

        bg-white

        border border-gray-100

        shadow-sm

        p-4
        sm:p-5
        lg:p-6

        hover:-translate-y-1
        hover:shadow-xl

        transition-all duration-300
      "
    >

      <div
        className={`
          w-12 h-12
          sm:w-14 sm:h-14
          lg:w-16 lg:h-16

          rounded-2xl

          flex items-center
          justify-center

          text-white
          text-xl
          sm:text-2xl
          lg:text-3xl

          bg-gradient-to-br
          ${bg}
        `}
      >

        <i className={icon}></i>

      </div>

      <p
        className="
          text-gray-400

          text-xs
          sm:text-sm

          mt-4
          sm:mt-5
          lg:mt-6
        "
      >
        {title}
      </p>

      <h2
        className="
          text-2xl
          sm:text-3xl
          lg:text-4xl

          font-bold

          text-gray-900

          mt-1
          sm:mt-2
        "
      >
        {value}
      </h2>

    </div>
  );
}

export default OverviewCard;
