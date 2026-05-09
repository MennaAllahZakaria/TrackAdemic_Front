function AssessmentProgress({
  current,
  total,
}) {
  const progress =
    (current / total) * 100;

  return (
    <div className="mb-6 sm:mb-8">

      {/* TOP */}
      <div
        className="
          flex items-center
          justify-between

          gap-4

          mb-4
        "
      >

        <h3
          className="
            text-white

            font-semibold

            text-sm
            sm:text-base

            leading-relaxed
          "
        >
          Question {current} of {total}
        </h3>

        <p
          className="
            text-cyan-300

            text-xs
            sm:text-sm

            font-medium

            whitespace-nowrap
          "
        >
          {Math.round(progress)}%
        </p>

      </div>

      {/* BAR */}
      <div
        className="
          h-2.5
          sm:h-3

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
            width: `${progress}%`,
          }}
        ></div>

      </div>

    </div>
  );
}

export default AssessmentProgress;