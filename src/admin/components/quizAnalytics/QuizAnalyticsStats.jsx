function QuizAnalyticsStats({
  stats,
}) {
  const cards = [
    {
      title: "Total Attempts",
      value:
        stats?.attempts || 0,
      icon: "ri-file-list-3-line",
      bg: "from-cyan-500 to-blue-600",
    },
    {
      title: "Average Score",
      value:
        `${stats?.average || 0}%`,
      icon: "ri-award-line",
      bg: "from-emerald-500 to-green-600",
    },
    {
      title: "Completed",
      value:
        stats?.completed || 0,
      icon: "ri-check-line",
      bg: "from-violet-500 to-purple-600",
    },
  ];

  return (
    <div
      className="
        grid grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-3

        gap-6
      "
    >

      {cards.map((card, i) => (
        <div
          key={i}
          className="
            bg-white

            rounded-[30px]

            border border-gray-100

            shadow-sm

            p-6
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
              ${card.bg}
            `}
          >

            <i className={card.icon}></i>

          </div>

          <p
            className="
              text-gray-400

              text-sm

              mt-6
            "
          >
            {card.title}
          </p>

          <h2
            className="
              text-4xl

              font-bold

              text-gray-900

              mt-2
            "
          >
            {card.value}
          </h2>

        </div>
      ))}

    </div>
  );
}

export default QuizAnalyticsStats;