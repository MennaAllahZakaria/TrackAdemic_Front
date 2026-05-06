function AssessmentResultCard({
  result,
}) {
  const levelColors = {
    beginner: `
      bg-blue-100
      text-blue-700
    `,
    intermediate: `
      bg-orange-100
      text-orange-700
    `,
    advanced: `
      bg-emerald-100
      text-emerald-700
    `,
  };

  return (
    <div
      className="
        bg-white
        rounded-[42px]

        border border-gray-100
        shadow-sm

        p-10
      "
    >

      {/* TOP */}
      <div className="
        flex items-center justify-between
        gap-10
      ">

        <div>

          <div
            className={`
              inline-flex items-center gap-2

              px-4 py-2 rounded-full

              text-sm font-semibold

              ${
                levelColors[
                  result?.level
                ]
              }
            `}
          >

            <i className="
              ri-award-line
            "></i>

            {result?.level}

          </div>

          <h2 className="
            text-[48px]
            font-bold
            text-gray-900
            mt-6
          ">
            Assessment Complete
          </h2>

          <p className="
            text-gray-500
            leading-[2]
            mt-5
            max-w-[700px]
          ">
            Your AI analysis has been
            generated successfully based
            on your responses and learning
            patterns.
          </p>

        </div>

        {/* ICON */}
        <div className="
          w-[140px] h-[140px]
          rounded-full

          bg-gradient-to-br
          from-cyan-500
          to-blue-600

          flex items-center justify-center

          text-white text-[64px]
        ">
          🧠
        </div>

      </div>

      {/* SUMMARY */}
      <div className="
        mt-10

        rounded-[32px]

        bg-gradient-to-br
        from-cyan-500/10
        to-blue-500/10

        p-8
      ">

        <div className="
          flex items-center gap-3
          mb-5
        ">

          <div className="
            w-14 h-14 rounded-2xl

            bg-cyan-100
            text-cyan-600

            flex items-center justify-center

            text-2xl
          ">
            <i className="
              ri-robot-line
            "></i>
          </div>

          <div>

            <p className="
              text-sm text-gray-400
            ">
              AI Generated Insight
            </p>

            <h3 className="
              text-xl font-bold
              text-gray-900
              mt-1
            ">
              Personalized Summary
            </h3>

          </div>

        </div>

        <p className="
          text-gray-700
          leading-[2]
          text-lg
        ">
          {result?.summary}
        </p>

      </div>

    </div>
  );
}

export default AssessmentResultCard;