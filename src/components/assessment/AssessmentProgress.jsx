function AssessmentProgress({
  current,
  total,
}) {
  const progress =
    (current / total) * 100;

  return (
    <div className="mb-8">

      <div className="
        flex items-center
        justify-between
        mb-4
      ">

        <h3 className="
          text-white
          font-semibold
        ">
          Question {current} of {total}
        </h3>

        <p className="
          text-cyan-300
          text-sm
        ">
          {Math.round(progress)}%
        </p>

      </div>

      <div className="
        h-3 rounded-full
        bg-white/10
        overflow-hidden
      ">

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