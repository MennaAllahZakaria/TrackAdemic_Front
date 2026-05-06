function QuizStats({ quizzes = [] }) {
  const total = quizzes.length;

  const completed = quizzes.filter(
    (q) => q.isSubmitted
  ).length;

  const pending = total - completed;

  const averagePassing =
    quizzes.length > 0
      ? Math.round(
          quizzes.reduce(
            (acc, q) => acc + q.passing_score,
            0
          ) / quizzes.length
        )
      : 0;

  const stats = [
    {
      title: "Total Quizzes",
      value: total,
      icon: "ri-file-list-3-line",
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Completed",
      value: completed,
      icon: "ri-checkbox-circle-line",
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Pending",
      value: pending,
      icon: "ri-time-line",
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "Avg. Passing",
      value: `${averagePassing}%`,
      icon: "ri-bar-chart-box-line",
      color: "bg-purple-100 text-purple-600",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-5 mb-10">

      {stats.map((stat, index) => (
        <div
          key={index}
          className="
            bg-white
            rounded-[28px]
            p-6
            border border-gray-100
            shadow-[0_8px_30px_rgba(0,0,0,0.04)]
            hover:shadow-[0_12px_40px_rgba(59,130,246,0.08)]
            hover:-translate-y-1
            transition-all duration-300
            group
          "
        >

          {/* TOP */}
          <div className="flex items-start justify-between">

            {/* ICON */}
            <div
              className={`
                w-14 h-14 rounded-2xl
                flex items-center justify-center
                transition-all duration-300
                group-hover:bg-[#9FF79F]
                ${stat.color}
              `}
            >
              <i className={`${stat.icon} text-[26px]`}></i>
            </div>

            {/* DOT */}
            <div className="
              w-2 h-2 rounded-full
              bg-green-400
              animate-pulse
            "></div>

          </div>

          {/* CONTENT */}
          <div className="mt-7">

            <p className="
              text-sm
              text-gray-400
              font-medium
            ">
              {stat.title}
            </p>

            <h3 className="
              text-[34px]
              font-bold
              text-gray-900
              mt-2
              tracking-tight
            ">
              {stat.value}
            </h3>

          </div>

        </div>
      ))}

    </div>
  );
}

export default QuizStats;