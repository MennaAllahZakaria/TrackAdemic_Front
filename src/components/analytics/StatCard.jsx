function StatCard({
  icon,
  color,
  title,
  value,
}) {
  return (
    <div className="
      bg-white
      rounded-[38px]
      p-8
      border border-gray-100
      shadow-sm
    ">

      <div className={`
        w-16 h-16
        rounded-2xl

        flex items-center
        justify-center

        text-3xl

        ${color}
      `}>
        <i className={icon}></i>
      </div>

      <p className="
        text-gray-400
        text-sm
        font-bold
        mt-8
        leading-[1.7]
      ">
        {title}
      </p>

      <h3 className="
        text-[42px]
        font-bold
        text-gray-900
        mt-3
        leading-none
      ">
        {value}
      </h3>

    </div>
  );
}

export default StatCard;