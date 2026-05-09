function StartAssessmentCard({
  startAssessment,
  loading,
}) {
  return (
    <div
      className="
        mt-8

        bg-white

        rounded-[28px]
        sm:rounded-[32px]
        xl:rounded-[36px]

        border border-gray-100

        shadow-sm

        p-5
        sm:p-8
        xl:p-10
      "
    >

      <div
        className="
          flex flex-col
          xl:flex-row

          xl:items-start
          justify-between

          gap-8
          xl:gap-10
        "
      >

        {/* ================= LEFT ================= */}
        <div className="flex-1 min-w-0">

          {/* ICON */}
          <div
            className="
              w-16 h-16
              sm:w-20 sm:h-20

              rounded-[22px]
              sm:rounded-[28px]

              bg-gradient-to-br
              from-cyan-500
              to-blue-600

              flex items-center justify-center

              text-white

              text-3xl
              sm:text-4xl
            "
          >

            <i className="ri-ai-generate"></i>

          </div>

          {/* TITLE */}
          <h2
            className="
              text-3xl
              sm:text-4xl
              xl:text-[38px]

              font-bold

              leading-tight

              text-gray-900

              mt-6
              sm:mt-8
            "
          >
            Start Smart Assessment
          </h2>

          {/* DESC */}
          <p
            className="
              text-gray-500

              leading-[1.9]
              sm:leading-[2]

              mt-5

              max-w-[650px]

              text-sm
              sm:text-base
            "
          >
            This AI-powered assessment adapts
            to your responses and evaluates
            your current technical level,
            strengths, and learning gaps.
          </p>

          {/* FEATURES */}
          <div
            className="
              grid

              grid-cols-1
              sm:grid-cols-2
              xl:grid-cols-3

              gap-5

              mt-8
              sm:mt-10
            "
          >

            {[
              {
                title: "Personalized",
                icon:
                  "ri-user-star-line",
              },
              {
                title:
                  "Adaptive Logic",
                icon:
                  "ri-brain-line",
              },
              {
                title:
                  "Instant Insights",
                icon:
                  "ri-flashlight-line",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="
                  bg-gray-50

                  rounded-2xl

                  p-5
                "
              >

                <div
                  className="
                    w-11 h-11
                    sm:w-12 sm:h-12

                    rounded-xl

                    bg-cyan-100
                    text-cyan-600

                    flex items-center justify-center

                    text-lg
                    sm:text-xl
                  "
                >

                  <i className={item.icon}></i>

                </div>

                <h3
                  className="
                    font-semibold

                    text-gray-900

                    text-sm
                    sm:text-base

                    mt-4
                  "
                >
                  {item.title}
                </h3>

              </div>
            ))}

          </div>

        </div>

        {/* ================= RIGHT ================= */}
        <div
          className="
            w-full
            xl:w-[320px]

            rounded-[24px]
            sm:rounded-[32px]

            bg-gradient-to-br
            from-[#0F172A]
            to-[#111827]

            p-6
            sm:p-8

            text-white

            shrink-0
          "
        >

          {/* TOP */}
          <div
            className="
              flex items-center
              justify-between

              gap-4
            "
          >

            <div className="min-w-0">

              <p
                className="
                  text-white/60

                  text-xs
                  sm:text-sm
                "
              >
                Estimated Time
              </p>

              <h3
                className="
                  text-3xl
                  sm:text-[42px]

                  font-bold

                  mt-2
                "
              >
                5 min
              </h3>

            </div>

            {/* ICON */}
            <div
              className="
                w-14 h-14
                sm:w-16 sm:h-16

                rounded-2xl

                bg-white/10

                flex items-center justify-center

                text-2xl
                sm:text-3xl

                shrink-0
              "
            >
              ⏱️
            </div>

          </div>

          {/* BUTTON */}
          <button
            onClick={startAssessment}
            disabled={loading}
            className="
              w-full

              mt-8
              sm:mt-10

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

              disabled:opacity-50
            "
          >
            {loading
              ? "Initializing..."
              : "Start Assessment →"}
          </button>

        </div>

      </div>

    </div>
  );
}

export default StartAssessmentCard;