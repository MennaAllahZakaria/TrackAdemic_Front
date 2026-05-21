function ProgressLoader() {

  return (

    <div
      className="
        space-y-6

        animate-pulse
      "
    >

      {/* HERO */}
      <div
        className="
          h-[320px]

          rounded-[32px]

          bg-gradient-to-br
          from-gray-200
          to-gray-100
        "
      />

      {/* STATS */}
      <div
        className="
          grid

          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4

          gap-5
        "
      >

        {[1, 2, 3, 4].map(
          (item) => (

            <div
              key={item}

              className="
                h-[170px]

                rounded-[28px]

                bg-white

                border border-gray-100
              "
            />

          )
        )}

      </div>

      {/* TIMELINE */}
      <div
        className="
          space-y-6
        "
      >

        {[1, 2, 3].map(
          (item) => (

            <div
              key={item}

              className="
                h-[280px]

                rounded-[32px]

                bg-white

                border border-gray-100
              "
            />

          )
        )}

      </div>

    </div>

  );
}

export default ProgressLoader;

