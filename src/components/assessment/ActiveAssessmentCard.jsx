function ActiveAssessmentCard({
  activeAssessment,
  continueAssessment,
}) {
  return (
    <div
      className="
        mt-8

        rounded-[28px]
        sm:rounded-[36px]

        overflow-hidden

        bg-gradient-to-br
        from-[#0F172A]
        via-[#111827]
        to-[#1E293B]

        border border-white/10
      "
    >

      <div
        className="
          p-5
          sm:p-8
          xl:p-10

          text-white

          relative overflow-hidden
        "
      >

        {/* GLOW */}
        <div
          className="
            absolute top-0 right-0

            w-[180px] h-[180px]
            sm:w-[240px] sm:h-[240px]

            bg-cyan-400/20

            blur-3xl

            rounded-full
          "
        ></div>

        <div className="relative z-10">

          <div
            className="
              flex flex-col
              xl:flex-row

              xl:items-center
              justify-between

              gap-8
              xl:gap-10
            "
          >

            {/* ================= LEFT ================= */}
            <div className="flex-1 min-w-0">

              {/* BADGE */}
              <div
                className="
                  inline-flex items-center gap-2

                  px-4 py-2

                  rounded-full

                  bg-cyan-400/10
                  text-cyan-300

                  text-xs
                  sm:text-sm

                  mb-5
                  sm:mb-6
                "
              >

                <i className="ri-loader-4-line"></i>

                Active Assessment

              </div>

              {/* TITLE */}
              <h2
                className="
                  text-3xl
                  sm:text-4xl
                  xl:text-[42px]

                  font-bold

                  leading-tight
                "
              >
                Continue Your AI Evaluation
              </h2>

              {/* DESC */}
              <p
                className="
                  text-white/70

                  leading-[1.9]

                  mt-5

                  max-w-[650px]

                  text-sm
                  sm:text-base
                "
              >
                Your assessment session is
                still active. Continue answering
                questions to generate your
                personalized learning analysis.
              </p>

              {/* PROGRESS */}
              <div className="mt-8 sm:mt-10">

                <div
                  className="
                    flex items-center
                    justify-between

                    gap-4

                    mb-3
                  "
                >

                  <p
                    className="
                      text-xs
                      sm:text-sm

                      text-white/60
                    "
                  >
                    Progress
                  </p>

                  <p
                    className="
                      text-xs
                      sm:text-sm

                      text-cyan-300

                      whitespace-nowrap
                    "
                  >
                    {
                      activeAssessment?.currentQuestion
                    }
                    /
                    {
                      activeAssessment?.totalQuestions
                    }
                  </p>

                </div>

                {/* BAR */}
                <div
                  className="
                    h-3

                    rounded-full

                    bg-white/10

                    overflow-hidden
                  "
                >

                  <div
                    className="
                      h-full

                      rounded-full

                      bg-gradient-to-r
                      from-cyan-400
                      to-blue-500

                      transition-all duration-500
                    "
                    style={{
                      width: `${
                        (
                          activeAssessment?.currentQuestion /
                          activeAssessment?.totalQuestions
                        ) * 100
                      }%`,
                    }}
                  ></div>

                </div>

              </div>

            </div>

            {/* ================= RIGHT ================= */}
            <div
              className="
                w-full
                xl:w-[280px]

                rounded-[24px]
                sm:rounded-[30px]

                bg-white/5

                border border-white/10

                p-6
                sm:p-8

                backdrop-blur-xl

                shrink-0
              "
            >

              {/* ICON */}
              <div
                className="
                  w-16 h-16
                  sm:w-20 sm:h-20

                  rounded-[20px]
                  sm:rounded-[24px]

                  bg-cyan-400/10
                  text-cyan-300

                  flex items-center justify-center

                  text-4xl
                  sm:text-5xl

                  mx-auto
                "
              >
                🧠
              </div>

              {/* TITLE */}
              <h3
                className="
                  text-center

                  text-xl
                  sm:text-2xl

                  font-bold

                  mt-5
                  sm:mt-6
                "
              >
                Resume Session
              </h3>

              {/* TEXT */}
              <p
                className="
                  text-center

                  text-white/60

                  text-sm

                  leading-[1.8]

                  mt-4
                "
              >
                Continue exactly where
                you left off.
              </p>

              {/* BUTTON */}
              <button
                onClick={continueAssessment}
                className="
                  w-full

                  mt-7
                  sm:mt-8

                  py-3.5
                  sm:py-4

                  rounded-2xl

                  bg-cyan-400
                  hover:bg-cyan-300

                  text-black

                  text-sm
                  sm:text-base

                  font-bold

                  transition-all duration-300
                "
              >
                Continue →
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ActiveAssessmentCard;