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
    normalizedRadius * 2 * Math.PI;

  const strokeDashoffset =
    circumference -
    (percentage / 100) * circumference;

  const passed = percentage >= 80;

  return (
    <div className="
      relative
      w-[260px] h-[260px]
      flex items-center justify-center
      mx-auto
    ">

      {/* BACK GLOW */}
      <div
        className={`
          absolute inset-0 rounded-full blur-3xl opacity-30

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
          stroke={passed ? "#22C55E" : "#EF4444"}
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
      <div className="
        absolute
        flex flex-col items-center justify-center
      ">

        {/* ICON */}
        <div
          className={`
            w-16 h-16 rounded-2xl
            flex items-center justify-center
            text-white text-3xl
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
        <h2 className="
          text-[48px]
          font-bold
          text-gray-900
          mt-5
          leading-none
        ">
          {percentage}%
        </h2>

        {/* SCORE */}
        <p className="
          text-gray-500
          mt-3
          text-sm
          font-medium
        ">
          Score {score} / {total}
        </p>

        {/* STATUS */}
        <div
          className={`
            mt-5
            px-5 py-2 rounded-full
            text-sm font-semibold

            ${
              passed
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
            }
          `}
        >
          {passed ? "Passed 🎉" : "Needs Improvement"}
        </div>

      </div>

    </div>
  );
}

export default ScoreCircle;