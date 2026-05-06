function StartAssessmentCard({
  startAssessment,
  loading,
}) {
  return (
    <div
      className="
        mt-8

        bg-white
        rounded-[36px]

        border border-gray-100
        shadow-sm

        p-10
      "
    >

      <div className="
        flex items-start justify-between
        gap-10
      ">

        <div className="flex-1">

          <div className="
            w-20 h-20 rounded-[28px]

            bg-gradient-to-br
            from-cyan-500
            to-blue-600

            flex items-center justify-center

            text-white text-4xl
          ">
            <i className="
              ri-ai-generate
            "></i>
          </div>

          <h2 className="
            text-[38px]
            font-bold
            text-gray-900
            mt-8
          ">
            Start Smart Assessment
          </h2>

          <p className="
            text-gray-500
            leading-[2]
            mt-5
            max-w-[650px]
          ">
            This AI-powered assessment adapts
            to your responses and evaluates
            your current technical level,
            strengths, and learning gaps.
          </p>

          {/* FEATURES */}
          <div className="
            grid grid-cols-1
            md:grid-cols-3
            gap-5
            mt-10
          ">

            {[
              {
                title: "Personalized",
                icon: "ri-user-star-line",
              },
              {
                title: "Adaptive Logic",
                icon: "ri-brain-line",
              },
              {
                title: "Instant Insights",
                icon: "ri-flashlight-line",
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

                <div className="
                  w-12 h-12 rounded-xl

                  bg-cyan-100
                  text-cyan-600

                  flex items-center justify-center

                  text-xl
                ">
                  <i className={item.icon}></i>
                </div>

                <h3 className="
                  font-semibold
                  text-gray-900
                  mt-4
                ">
                  {item.title}
                </h3>

              </div>
            ))}

          </div>

        </div>

        {/* RIGHT */}
        <div
          className="
            w-[320px]
            rounded-[32px]

            bg-gradient-to-br
            from-[#0F172A]
            to-[#111827]

            p-8
            text-white
          "
        >

          <div className="
            flex items-center justify-between
          ">

            <div>

              <p className="
                text-white/60
                text-sm
              ">
                Estimated Time
              </p>

              <h3 className="
                text-[42px]
                font-bold
                mt-2
              ">
                5 min
              </h3>

            </div>

            <div className="
              w-16 h-16 rounded-2xl

              bg-white/10

              flex items-center justify-center

              text-3xl
            ">
              ⏱️
            </div>

          </div>

          <button
            onClick={startAssessment}
            disabled={loading}
            className="
              w-full
              mt-10

              py-4 rounded-2xl

              bg-cyan-400
              hover:bg-cyan-300

              text-black
              font-bold

              transition-all duration-300
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