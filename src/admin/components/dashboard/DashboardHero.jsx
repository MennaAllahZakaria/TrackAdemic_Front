function DashboardHero() {
  return (
    <div
      className="
        relative overflow-hidden

        rounded-[36px]

        bg-gradient-to-br
        from-[#0F172A]
        via-[#111827]
        to-[#1E293B]

        p-6
        sm:p-8
        lg:p-10

        text-white
      "
    >

      {/* GLOW */}
      <div
        className="
          absolute top-0 right-0

          w-[300px] h-[300px]

          bg-cyan-400/20

          blur-3xl

          rounded-full
        "
      ></div>

      {/* GRID */}
      <div
        className="
          absolute inset-0

          opacity-[0.04]
        "
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize:
            "40px 40px",
        }}
      ></div>

      <div
        className="
          relative z-10
        "
      >

        <div
          className="
            inline-flex items-center
            gap-2

            px-4 py-2

            rounded-full

            bg-cyan-400/10

            border border-cyan-400/20

            text-cyan-300

            text-sm
          "
        >

          <i className="ri-flashlight-line"></i>

          Live Analytics Dashboard

        </div>

        <h1
          className="
            text-3xl
            sm:text-5xl
            lg:text-6xl

            font-bold

            leading-tight

            mt-6

            max-w-[900px]
          "
        >
          Monitor your platform
          growth and user
          engagement in real-time.
        </h1>

        <p
          className="
            text-white/70

            text-base
            sm:text-lg

            leading-[2]

            mt-6

            max-w-[750px]
          "
        >
          Analyze platform
          performance, monitor
          student activity, and
          track educational
          progress across all
          learning systems.
        </p>

      </div>

    </div>
  );
}

export default DashboardHero;