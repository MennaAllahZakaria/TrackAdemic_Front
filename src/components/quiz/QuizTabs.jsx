function QuizTabs({
  activeTab,
  setActiveTab,
  quizzes = [],
}) {

  const total =
    quizzes.length;

  const completed =
    quizzes.filter(
      (q) => q.isSubmitted
    ).length;

  const pending =
    total - completed;

  const tabs = [
    {
      key: "all",
      label: "All Quizzes",
      count: total,
      icon: "ri-apps-line",
    },
    {
      key: "completed",
      label: "Completed",
      count: completed,
      icon:
        "ri-checkbox-circle-line",
    },
    {
      key: "pending",
      label: "Pending",
      count: pending,
      icon:
        "ri-loader-4-line",
    },
  ];

  return (
    <div
      className="
        flex items-center

        gap-3

        mb-8

        overflow-x-auto

        no-scrollbar

        pb-2
      "
    >

      {tabs.map((tab) => {

        const isActive =
          activeTab === tab.key;

        return (
          <button
            key={tab.key}
            onClick={() =>
              setActiveTab(tab.key)
            }
            className={`
              group

              h-12
              sm:h-14

              px-4
              sm:px-6

              rounded-2xl

              flex items-center

              gap-3

              whitespace-nowrap

              transition-all duration-300

              border

              flex-shrink-0

              ${
                isActive
                  ? `
                    bg-blue-600
                    text-white
                    border-blue-600
                    shadow-[0_10px_25px_rgba(59,130,246,0.22)]
                  `
                  : `
                    bg-white
                    text-gray-600
                    border-gray-200
                    hover:border-blue-300
                    hover:bg-blue-50
                  `
              }
            `}
          >

            {/* ICON */}
            <div
              className={`
                w-8 h-8
                sm:w-9 sm:h-9

                rounded-xl

                flex items-center justify-center

                transition-all duration-300

                ${
                  isActive
                    ? "bg-white/15 text-white"
                    : "bg-gray-100 text-gray-500 group-hover:bg-[#9FF79F]"
                }
              `}
            >

              <i
                className={`
                  ${tab.icon}

                  text-base
                  sm:text-lg
                `}
              ></i>

            </div>

            {/* LABEL */}
            <div
              className="
                flex items-center

                gap-2
              "
            >

              <span
                className="
                  text-xs
                  sm:text-sm

                  font-semibold
                "
              >
                {tab.label}
              </span>

              {/* COUNT */}
              <span
                className={`
                  min-w-[22px]
                  h-[22px]

                  sm:min-w-[24px]
                  sm:h-[24px]

                  px-2

                  rounded-full

                  flex items-center justify-center

                  text-[10px]
                  sm:text-[11px]

                  font-bold

                  ${
                    isActive
                      ? "bg-white/15 text-white"
                      : "bg-gray-100 text-gray-600"
                  }
                `}
              >
                {tab.count}
              </span>

            </div>

          </button>
        );
      })}

    </div>
  );
}

export default QuizTabs;