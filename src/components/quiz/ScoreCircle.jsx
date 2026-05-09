function ScoreCircle({
  percentage = 0,
  score = 0,
  total = 0,
}) {

  const radius = 90;

  const stroke = 12;

  const normalizedRadius =
    radius - stroke * 0.5;

  const circumference =
    normalizedRadius *
    2 *
    Math.PI;

  const strokeDashoffset =
    circumference -
    (percentage / 100) *
      circumference;

  const passed =
    percentage >= 80;

  return (
    <div
      className="
        relative

        w-[210px]
        h-[210px]

        sm:w-[240px]
        sm:h-[240px]

        xl:w-[260px]
        xl:h-[260px]

        flex items-center justify-center

        mx-auto
      "
    >

      {/* BACK GLOW */}
      <div
        className={`
          absolute inset-0

          rounded-full

          blur-3xl

          opacity-30

          ${
            passed
              ? "bg-green-300"
              : "bg-red-300"
          }
        `}
      ></div>

      {/* SVG */}
      <svg
        height={radius * 2}
        width={radius * 2}
        className="-rotate-90"
      >

        {/* BG */}
        <circle
          stroke="#E5E7EB"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        {/* PROGRESS */}
        <circle
          stroke={
            passed
              ? "#22C55E"
              : "#EF4444"
          }
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          style={{
            strokeDashoffset,
            transition:
              "stroke-dashoffset 1s ease",
          }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

      </svg>

      {/* CONTENT */}
      <div
        className="
          absolute

          flex flex-col
          items-center justify-center

          text-center
        "
      >

        {/* ICON */}
        <div
          className={`
            w-12 h-12
            sm:w-14 sm:h-14
            xl:w-16 xl:h-16

            rounded-2xl

            flex items-center justify-center

            text-white

            text-2xl
            sm:text-[28px]
            xl:text-3xl

            shadow-lg

            ${
              passed
                ? "bg-green-500"
                : "bg-red-500"
            }
          `}
        >

          <i
            className={
              passed
                ? "ri-trophy-line"
                : "ri-error-warning-line"
            }
          ></i>

        </div>

        {/* PERCENT */}
        <h2
          className="
            text-4xl
            sm:text-[42px]
            xl:text-[48px]

            font-bold

            text-gray-900

            mt-4
            sm:mt-5

            leading-none
          "
        >
          {percentage}%
        </h2>

        {/* SCORE */}
        <p
          className="
            text-gray-500

            mt-2
            sm:mt-3

            text-xs
            sm:text-sm

            font-medium
          "
        >
          Score {score} / {total}
        </p>

        {/* STATUS */}
        <div
          className={`
            mt-4
            sm:mt-5

            px-4
            sm:px-5

            py-2

            rounded-full

            text-xs
            sm:text-sm

            font-semibold

            whitespace-nowrap

            ${
              passed
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
            }
          `}
        >
          {passed
            ? "Passed 🎉"
            : "Needs Improvement"}
        </div>

      </div>

    </div>
  );
}

export default ScoreCircle;