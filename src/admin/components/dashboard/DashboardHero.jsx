function DashboardHero() {
  return (
    <div
      className="
        relative overflow-hidden

        rounded-[24px]
        sm:rounded-[32px]
        lg:rounded-[36px]

        bg-gradient-to-br
        from-[#0F172A]
        via-[#111827]
        to-[#1E293B]

        p-4
        sm:p-6
        md:p-8
        lg:p-10

        text-white
      "
    >

      {/* GLOW */}
      <div
        className="
          absolute top-0 right-0

          w-[200px] h-[200px]
          sm:w-[250px] sm:h-[250px]
          lg:w-[300px] lg:h-[300px]

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
            gap-1.5
            sm:gap-2

            px-3
            sm:px-4
            py-1.5
            sm:py-2

            rounded-full

            bg-cyan-400/10

            border border-cyan-400/20

            text-cyan-300

            text-xs
            sm:text-sm
          "
        >

          <i className="ri-flashlight-line text-xs sm:text-sm"></i>

          <span>Live Analytics Dashboard</span>

        </div>

        <h1
          className="
            text-2xl
            sm:text-3xl
            md:text-4xl
            lg:text-5xl
            xl:text-6xl

            font-bold

            leading-tight

            mt-4
            sm:mt-6

            max-w-full
            sm:max-w-[600px]
            lg:max-w-[900px]
          "
        >
          Monitor your platform
          growth and user
          engagement in real-time.
        </h1>

        <p
          className="
            text-white/70

            text-xs
            sm:text-sm
            md:text-base
            lg:text-lg

            leading-relaxed
            sm:leading-[1.8]
            lg:leading-[2]

            mt-4
            sm:mt-6

            max-w-full
            sm:max-w-[500px]
            lg:max-w-[750px]
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
