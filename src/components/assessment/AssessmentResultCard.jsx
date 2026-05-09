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

        rounded-[28px]
        sm:rounded-[36px]
        xl:rounded-[42px]

        border border-gray-100

        shadow-sm

        p-5
        sm:p-8
        xl:p-10
      "
    >

      {/* TOP */}
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

        {/* LEFT */}
        <div className="min-w-0">

          {/* LEVEL */}
          <div
            className={`
              inline-flex items-center gap-2

              px-4 py-2

              rounded-full

              text-xs
              sm:text-sm

              font-semibold

              capitalize

              ${
                levelColors[
                  result?.level
                ]
              }
            `}
          >

            <i className="ri-award-line"></i>

            {result?.level}

          </div>

          {/* TITLE */}
          <h2
            className="
              text-3xl
              sm:text-4xl
              xl:text-[48px]

              font-bold

              leading-tight

              text-gray-900

              mt-5
              sm:mt-6
            "
          >
            Assessment Complete
          </h2>

          {/* DESC */}
          <p
            className="
              text-gray-500

              leading-[1.9]
              sm:leading-[2]

              mt-5

              max-w-[700px]

              text-sm
              sm:text-base
            "
          >
            Your AI analysis has been
            generated successfully based
            on your responses and learning
            patterns.
          </p>

        </div>

        {/* ICON */}
        <div
          className="
            w-24 h-24
            sm:w-[120px] sm:h-[120px]
            xl:w-[140px] xl:h-[140px]

            rounded-full

            bg-gradient-to-br
            from-cyan-500
            to-blue-600

            flex items-center justify-center

            text-white

            text-[42px]
            sm:text-[54px]
            xl:text-[64px]

            shrink-0

            mx-auto
            xl:mx-0
          "
        >
          🧠
        </div>

      </div>

      {/* SUMMARY */}
      <div
        className="
          mt-8
          sm:mt-10

          rounded-[24px]
          sm:rounded-[32px]

          bg-gradient-to-br
          from-cyan-500/10
          to-blue-500/10

          p-5
          sm:p-8
        "
      >

        {/* HEADER */}
        <div
          className="
            flex items-start
            sm:items-center

            gap-3

            mb-5
          "
        >

          {/* ICON */}
          <div
            className="
              w-12 h-12
              sm:w-14 sm:h-14

              rounded-2xl

              bg-cyan-100
              text-cyan-600

              flex items-center justify-center

              text-xl
              sm:text-2xl

              shrink-0
            "
          >

            <i className="ri-robot-line"></i>

          </div>

          {/* TEXT */}
          <div className="min-w-0">

            <p
              className="
                text-xs
                sm:text-sm

                text-gray-400
              "
            >
              AI Generated Insight
            </p>

            <h3
              className="
                text-lg
                sm:text-xl

                font-bold

                text-gray-900

                mt-1
              "
            >
              Personalized Summary
            </h3>

          </div>

        </div>

        {/* SUMMARY TEXT */}
        <p
          className="
            text-gray-700

            leading-[1.9]
            sm:leading-[2]

            text-sm
            sm:text-lg

            break-words
          "
        >
          {result?.summary}
        </p>

      </div>

    </div>
  );
}

export default AssessmentResultCard;