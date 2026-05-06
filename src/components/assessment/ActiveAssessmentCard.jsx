function ActiveAssessmentCard({
  activeAssessment,
  continueAssessment,
}) {
  return (
    <div
      className="
        mt-8

        rounded-[36px]
        overflow-hidden

        bg-gradient-to-br
        from-[#0F172A]
        via-[#111827]
        to-[#1E293B]

        border border-white/10
      "
    >

      <div className="
        p-10
        text-white
        relative overflow-hidden
      ">

        {/* GLOW */}
        <div className="
          absolute top-0 right-0
          w-[240px] h-[240px]
          bg-cyan-400/20
          blur-3xl rounded-full
        "></div>

        <div className="relative z-10">

          <div className="
            flex items-center justify-between
            gap-10
          ">

            {/* LEFT */}
            <div className="flex-1">

              <div className="
                inline-flex items-center gap-2

                px-4 py-2 rounded-full

                bg-cyan-400/10
                text-cyan-300

                text-sm
                mb-6
              ">

                <i className="
                  ri-loader-4-line
                "></i>

                Active Assessment

              </div>

              <h2 className="
                text-[42px]
                font-bold
                leading-tight
              ">
                Continue Your AI Evaluation
              </h2>

              <p className="
                text-white/70
                leading-[2]
                mt-5
                max-w-[650px]
              ">
                Your assessment session is
                still active. Continue answering
                questions to generate your
                personalized learning analysis.
              </p>

              {/* PROGRESS */}
              <div className="mt-10">

                <div className="
                  flex items-center
                  justify-between
                  mb-3
                ">

                  <p className="
                    text-sm text-white/60
                  ">
                    Progress
                  </p>

                  <p className="
                    text-sm text-cyan-300
                  ">
                    {
                      activeAssessment?.currentQuestion
                    }
                    /
                    {
                      activeAssessment?.totalQuestions
                    }
                  </p>

                </div>

                <div className="
                  h-3 rounded-full
                  bg-white/10
                  overflow-hidden
                ">

                  <div
                    className="
                      h-full rounded-full

                      bg-gradient-to-r
                      from-cyan-400
                      to-blue-500
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

            {/* RIGHT */}
            <div
              className="
                w-[280px]

                rounded-[30px]

                bg-white/5
                border border-white/10

                p-8
                backdrop-blur-xl
              "
            >

              <div className="
                w-20 h-20 rounded-[24px]

                bg-cyan-400/10
                text-cyan-300

                flex items-center justify-center

                text-5xl
                mx-auto
              ">
                🧠
              </div>

              <h3 className="
                text-center
                text-2xl
                font-bold
                mt-6
              ">
                Resume Session
              </h3>

              <p className="
                text-center
                text-white/60
                text-sm
                leading-[1.8]
                mt-4
              ">
                Continue exactly where
                you left off.
              </p>

              <button
                onClick={continueAssessment}
                className="
                  w-full
                  mt-8

                  py-4 rounded-2xl

                  bg-cyan-400
                  hover:bg-cyan-300

                  text-black
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