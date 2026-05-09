function VelocityChart({
  weeklyData,
}) {

  return (
    <div
      className="
        bg-white

        rounded-[28px]
        md:rounded-[32px]
        xl:rounded-[42px]

        p-5
        md:p-6
        xl:p-10

        border border-gray-100
        shadow-sm

        overflow-hidden
      "
    >

      {/* HEADER */}
      <div
        className="
          flex flex-col
          sm:flex-row

          sm:items-start
          justify-between

          gap-4
        "
      >

        <div>

          <h2
            className="
              text-2xl
              md:text-3xl
              xl:text-[38px]

              font-bold
              text-gray-900

              leading-tight
            "
          >
            Learning Velocity
          </h2>

          <p
            className="
              text-gray-500

              mt-2

              text-sm
              sm:text-base
            "
          >
            Active study hours over
            the last 7 days.
          </p>

        </div>

      </div>

      {/* CHART */}
      <div
        className="
          h-[240px]
          md:h-[300px]
          xl:h-[350px]

          flex items-end

          gap-2
          md:gap-3
          xl:gap-4

          mt-8
          md:mt-10
          xl:mt-16
        "
      >

        {weeklyData.map((item, i) => (

          <div
            key={i}
            className="
              flex-1

              min-w-0

              flex flex-col
              items-center
              justify-end
            "
          >

            <div
              className="
                w-full

                rounded-t-[16px]
                md:rounded-t-[20px]
                xl:rounded-t-[30px]

                bg-blue-100

                overflow-hidden
              "
              style={{
                height: `${item * 24}px`,
              }}
            >

              <div
                className={`
                  w-full

                  rounded-t-[16px]
                  md:rounded-t-[20px]
                  xl:rounded-t-[30px]

                  ${
                    i === 3
                      ? "bg-blue-700"
                      : "bg-blue-400"
                  }
                `}
                style={{
                  height: `${item * 16}px`,
                }}
              ></div>

            </div>

            <p
              className="
                mt-3
                xl:mt-4

                text-[10px]
                md:text-xs
                xl:text-sm

                font-semibold
                text-gray-500
              "
            >

              {
                [
                  "Mon",
                  "Tue",
                  "Wed",
                  "Thu",
                  "Fri",
                  "Sat",
                  "Sun",
                ][i]
              }

            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default VelocityChart;