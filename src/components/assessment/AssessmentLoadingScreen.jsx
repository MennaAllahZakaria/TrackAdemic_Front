function AssessmentLoadingScreen() {
  return (
    <div
      className="
        min-h-[420px]
        sm:min-h-[500px]

        rounded-[28px]
        sm:rounded-[36px]
        xl:rounded-[42px]

        bg-gradient-to-br
        from-[#0F172A]
        via-[#111827]
        to-[#1E293B]

        border border-white/10

        flex flex-col
        items-center justify-center

        relative overflow-hidden

        px-4
        text-center
      "
    >

      {/* GLOW */}
      <div
        className="
          absolute

          w-[200px] h-[200px]
          sm:w-[320px] sm:h-[320px]

          bg-cyan-400/20

          blur-3xl

          rounded-full
        "
      ></div>

      {/* ICON */}
      <div
        className="
          relative z-10

          w-20 h-20
          sm:w-28 sm:h-28

          rounded-full

          border-[5px]
          sm:border-[6px]

          border-cyan-400/20
          border-t-cyan-400

          animate-spin
        "
      ></div>

      {/* TITLE */}
      <h2
        className="
          relative z-10

          text-3xl
          sm:text-4xl
          xl:text-[42px]

          font-bold

          text-white

          mt-8
          sm:mt-10

          leading-tight
        "
      >
        AI Processing...
      </h2>

      {/* DESC */}
      <p
        className="
          relative z-10

          text-white/60

          text-sm
          sm:text-lg

          mt-4

          leading-relaxed

          max-w-md
        "
      >
        Preparing your adaptive assessment
      </p>

    </div>
  );
}

export default AssessmentLoadingScreen;