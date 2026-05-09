function MasteryCard({
  progress,
  path,
}) {

  return (
    <div
      className="
        bg-white

        rounded-[28px]
        md:rounded-[32px]
        xl:rounded-[38px]

        p-5
        md:p-6
        xl:p-10

        shadow-sm
        border border-gray-100

        flex flex-col
        sm:flex-row

        gap-6
        xl:gap-8

        justify-between
      "
    >

      {/* LEFT */}
      <div>

        <h2
          className="
            text-3xl
            md:text-[34px]
            xl:text-[40px]

            font-bold
            text-gray-900

            leading-tight
          "
        >
          Overall <br />
          Mastery
        </h2>

        <p
          className="
            text-gray-500

            mt-4
            md:mt-5

            leading-relaxed

            max-w-full
            sm:max-w-[180px]
          "
        >

          You're halfway through the

          <span
            className="
              text-blue-600
              font-medium
            "
          >
            {" "} {path}
          </span>

          {" "}path.

        </p>

        <div
          className="
            mt-6
            md:mt-7
            xl:mt-8

            text-green-600
            font-semibold

            text-sm
            md:text-[15px]
            xl:text-base
          "
        >
          ↗ 12% from last week
        </div>

      </div>

      {/* RIGHT */}
      <div
        className="
          flex items-center
          justify-center

          mx-auto sm:mx-0
        "
      >

        <div
          className="
            relative

            w-[130px]
            h-[130px]

            md:w-[150px]
            md:h-[150px]

            xl:w-[170px]
            xl:h-[170px]

            rounded-full

            bg-gradient-to-br
            from-blue-600
            to-blue-400

            flex items-center
            justify-center
          "
        >

          <div
            className="
              absolute

              inset-[12px]
              md:inset-[14px]
              xl:inset-[16px]

              bg-white
              rounded-full
            "
          ></div>

          <div
            className="
              relative
              z-10

              text-center
            "
          >

            <h2
              className="
                text-4xl
                md:text-[48px]
                xl:text-[56px]

                font-bold
                text-gray-900

                leading-none
              "
            >
              {progress}
            </h2>

            <span
              className="
                text-base
                md:text-lg
                xl:text-xl

                font-semibold
                text-gray-500
              "
            >
              %
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default MasteryCard;