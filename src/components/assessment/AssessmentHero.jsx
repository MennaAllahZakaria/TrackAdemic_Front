function AssessmentHero({
  fromProgress,
}) {
  return (
    <div
      className="
        relative overflow-hidden
        rounded-[42px]

        bg-gradient-to-br
        from-[#0F172A]
        via-[#111827]
        to-[#1E293B]

        p-10
        text-white
      "
    >

      {/* GLOW EFFECTS */}
      <div className="
        absolute top-0 right-0
        w-[320px] h-[320px]
        bg-cyan-400/20
        blur-3xl rounded-full
      "></div>

      <div className="
        absolute bottom-0 left-0
        w-[260px] h-[260px]
        bg-blue-500/20
        blur-3xl rounded-full
      "></div>

      <div className="
        absolute top-[40%] left-[35%]
        w-[180px] h-[180px]
        bg-violet-500/10
        blur-3xl rounded-full
      "></div>

      {/* GRID */}
      <div className="
        absolute inset-0
        opacity-[0.04]
      "
      style={{
        backgroundImage:
          "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
      ></div>

      <div className="relative z-10">

        {/* FROM PROGRESS */}
        {fromProgress && (
          <div className="
            inline-flex items-center gap-2

            px-4 py-2 rounded-full

            bg-emerald-400/10
            text-emerald-300

            border border-emerald-400/20

            text-sm
            mb-5
          ">

            <i className="
              ri-road-map-line
            "></i>

            Final Roadmap Evaluation

          </div>
        )}

        {/* MAIN BADGE */}
        <div className="
          inline-flex items-center gap-2

          px-4 py-2 rounded-full

          bg-white/10
          border border-white/10

          text-sm
          mb-7

          backdrop-blur-xl
        ">

          <i className="
            ri-brain-line
          "></i>

          AI Cognitive Assessment

        </div>

        {/* TITLE */}
        <h1 className="
          text-[58px]
          font-bold
          leading-[1.08]
          tracking-tight

          max-w-[850px]
        ">
          Analyze your real
          <span className="
            text-cyan-300
          ">
            {" "}learning potential
          </span>
          {" "}through adaptive AI evaluation.
        </h1>

        {/* DESCRIPTION */}
        <p className="
          text-white/70
          text-lg
          mt-7
          leading-[2]

          max-w-[760px]
        ">
          This intelligent assessment dynamically
          adapts to your responses to uncover your
          strengths, weak areas, and personalized
          learning opportunities across technical
          domains.
        </p>

        {/* STATS */}
        <div className="
          grid grid-cols-1
          md:grid-cols-3
          gap-5

          mt-12
        ">

          {[
            {
              icon: "ri-timer-line",
              title: "5 Adaptive Questions",
              desc: "AI adjusts based on performance",
            },
            {
              icon: "ri-flashlight-line",
              title: "Instant Analysis",
              desc: "Receive immediate evaluation",
            },
            {
              icon: "ri-focus-3-line",
              title: "Skill Breakdown",
              desc: "Discover strengths & gaps",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="
                rounded-[28px]

                bg-white/5
                border border-white/10

                p-6

                backdrop-blur-xl

                hover:bg-white/10
                transition-all duration-300
              "
            >

              <div className="
                w-14 h-14 rounded-2xl

                bg-cyan-400/10
                text-cyan-300

                flex items-center justify-center

                text-2xl
              ">
                <i className={item.icon}></i>
              </div>

              <h3 className="
                text-xl
                font-bold
                mt-5
              ">
                {item.title}
              </h3>

              <p className="
                text-white/60
                text-sm
                leading-[1.8]

                mt-3
              ">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

        {/* BOTTOM INFO */}
        <div className="
          flex flex-wrap items-center
          gap-6

          mt-12
        ">

          {/* AI STATUS */}
          <div className="
            flex items-center gap-3

            px-5 py-4 rounded-2xl

            bg-cyan-400/10
            border border-cyan-400/20
          ">

            <div className="
              w-3 h-3 rounded-full
              bg-cyan-400

              animate-pulse
            "></div>

            <div>

              <p className="
                text-xs
                text-cyan-200/70
              ">
                SYSTEM STATUS
              </p>

              <h4 className="
                font-semibold
                text-cyan-200
                mt-1
              ">
                AI Engine Active
              </h4>

            </div>

          </div>

          {/* SECURITY */}
          <div className="
            flex items-center gap-3

            px-5 py-4 rounded-2xl

            bg-white/5
            border border-white/10
          ">

            <div className="
              w-12 h-12 rounded-xl

              bg-white/10

              flex items-center justify-center

              text-xl
              text-white
            ">
              <i className="
                ri-shield-check-line
              "></i>
            </div>

            <div>

              <p className="
                text-xs
                text-white/50
              ">
                SECURE SESSION
              </p>

              <h4 className="
                font-semibold
                mt-1
              ">
                Encrypted Evaluation
              </h4>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AssessmentHero;