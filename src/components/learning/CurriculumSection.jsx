function CurriculumSection({
  data,
}) {
  const colors = [
    {
      bg: "from-blue-500 to-cyan-400",
      light: "bg-blue-50",
      text: "text-blue-600",
      icon: "ri-code-s-slash-line",
    },
    {
      bg: "from-purple-500 to-pink-400",
      light: "bg-purple-50",
      text: "text-purple-600",
      icon: "ri-brain-line",
    },
    {
      bg: "from-emerald-500 to-teal-400",
      light: "bg-emerald-50",
      text: "text-emerald-600",
      icon: "ri-lightbulb-line",
    },
    {
      bg: "from-orange-500 to-yellow-400",
      light: "bg-orange-50",
      text: "text-orange-600",
      icon: "ri-rocket-line",
    },
  ];

  return (
    <div className="mt-16">

      {/* HEADER */}
      <div
        className="
          flex flex-col
          lg:flex-row

          lg:items-center
          justify-between

          gap-5

          mb-8
        "
      >

        <div>

          <h2
            className="
              text-3xl
              sm:text-[34px]

              font-bold

              text-gray-900
            "
          >
            Your Curriculum
          </h2>

          <p
            className="
              text-gray-500

              mt-2

              text-sm
              sm:text-base
            "
          >
            Structured roadmap crafted
            for your learning journey.
          </p>

        </div>

        <div
          className="
            px-4 py-2

            rounded-full

            bg-blue-50
            text-blue-600

            text-xs
            sm:text-sm

            font-medium

            w-fit
          "
        >
          {data?.phases?.length || 0} Learning Phases
        </div>

      </div>

      {/* GRID */}
      <div
        className="
          grid

          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3

          gap-5
          xl:gap-7
        "
      >

        {data.phases.map(
          (phase, index) => {
            const theme =
              colors[
                index %
                  colors.length
              ];

            return (
              <div
                key={
                  phase.phase_number
                }
                className="
                  group

                  bg-white

                  rounded-[28px]
                  sm:rounded-[32px]

                  border border-gray-100

                  overflow-hidden

                  shadow-sm

                  hover:shadow-xl
                  hover:-translate-y-2

                  transition-all duration-500
                "
              >

                {/* TOP */}
                <div
                  className={`
                    h-[170px]
                    sm:h-[180px]

                    bg-gradient-to-br ${theme.bg}

                    relative

                    overflow-hidden
                  `}
                >

                  <div
                    className="
                      absolute -right-10 -top-10

                      w-40 h-40

                      rounded-full

                      bg-white/10
                    "
                  ></div>

                  <div
                    className="
                      absolute -left-6 bottom-0

                      w-28 h-28

                      rounded-full

                      bg-black/10
                    "
                  ></div>

                  {/* PHASE */}
                  <div
                    className="
                      absolute top-5 left-5

                      px-4 py-2

                      rounded-full

                      bg-white/20
                      backdrop-blur-md

                      text-white

                      text-xs
                      sm:text-sm

                      font-semibold
                    "
                  >
                    Phase{" "}
                    {
                      phase.phase_number
                    }
                  </div>

                  {/* ICON */}
                  <div
                    className="
                      absolute bottom-6 left-6

                      w-14 h-14
                      sm:w-16 sm:h-16

                      rounded-2xl

                      bg-white/20
                      backdrop-blur-md

                      flex items-center justify-center

                      text-white

                      text-2xl
                      sm:text-3xl

                      group-hover:scale-110

                      transition-all duration-500
                    "
                  >

                    <i
                      className={
                        theme.icon
                      }
                    ></i>

                  </div>

                </div>

                {/* CONTENT */}
                <div
                  className="
                    p-5
                    sm:p-7
                  "
                >

                  <h3
                    className="
                      text-[20px]
                      sm:text-[22px]

                      font-bold

                      text-gray-900

                      leading-snug
                    "
                  >
                    {phase.phase_title}
                  </h3>

                  <p
                    className="
                      text-gray-500

                      mt-4

                      leading-[1.9]

                      text-sm
                      sm:text-[15px]

                      min-h-[80px]
                    "
                  >
                    {phase.objective}
                  </p>

                  {/* FOOTER */}
                  <div
                    className="
                      flex items-center
                      justify-between

                      gap-4

                      mt-6
                    "
                  >

                    <div
                      className={`
                        ${theme.light}
                        ${theme.text}

                        px-4 py-2

                        rounded-full

                        text-xs
                        sm:text-sm

                        font-semibold
                      `}
                    >
                      Learning Module
                    </div>

                    <button
                      className="
                        min-w-[44px]
                        h-[44px]

                        rounded-2xl

                        bg-gray-100

                        flex items-center justify-center

                        text-gray-600

                        hover:bg-[#9FF79F]
                        hover:text-black

                        transition-all duration-300
                      "
                    >

                      <i className="ri-arrow-right-up-line"></i>

                    </button>

                  </div>

                </div>

              </div>
            );
          }
        )}

      </div>

    </div>
  );
}

export default CurriculumSection;