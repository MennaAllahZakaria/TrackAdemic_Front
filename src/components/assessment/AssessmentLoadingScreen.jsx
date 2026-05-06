function AssessmentLoadingScreen() {
  return (
    <div
      className="
        min-h-[500px]

        rounded-[42px]

        bg-gradient-to-br
        from-[#0F172A]
        via-[#111827]
        to-[#1E293B]

        border border-white/10

        flex flex-col
        items-center justify-center

        relative overflow-hidden
      "
    >

      {/* GLOW */}
      <div className="
        absolute
        w-[320px] h-[320px]

        bg-cyan-400/20
        blur-3xl
        rounded-full
      "></div>

      {/* ICON */}
      <div className="
        relative z-10

        w-28 h-28 rounded-full

        border-[6px]
        border-cyan-400/20
        border-t-cyan-400

        animate-spin
      "></div>

      <h2 className="
        relative z-10

        text-[42px]
        font-bold
        text-white

        mt-10
      ">
        AI Processing...
      </h2>

      <p className="
        relative z-10

        text-white/60
        text-lg

        mt-4
      ">
        Preparing your adaptive assessment
      </p>

    </div>
  );
}

export default AssessmentLoadingScreen;