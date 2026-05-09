function StatCard({
  icon,
  color,
  title,
  value,
}) {

  return (
    <div
      className="
        bg-white

        rounded-[28px]
        md:rounded-[32px]
        xl:rounded-[38px]

        p-5
        md:p-6
        xl:p-8

        border border-gray-100
        shadow-sm
      "
    >

      <div
        className={`
          w-12 h-12

          md:w-14 md:h-14

          xl:w-16 xl:h-16

          rounded-2xl

          flex items-center
          justify-center

          text-2xl
          xl:text-3xl

          ${color}
        `}
      >

        <i className={icon}></i>

      </div>

      <p
        className="
          text-gray-400

          text-xs
          xl:text-sm

          font-bold

          mt-5
          md:mt-6
          xl:mt-8

          leading-relaxed
        "
      >
        {title}
      </p>

      <h3
        className="
          text-3xl
          md:text-[34px]
          xl:text-[42px]

          font-bold
          text-gray-900

          mt-2
          xl:mt-3

          leading-none

          break-words
        "
      >
        {value}
      </h3>

    </div>
  );
}

export default StatCard;