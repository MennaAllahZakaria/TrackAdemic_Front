function VelocityChart({ weeklyData }) {
  return (
    <div className="
      bg-white
      rounded-[42px]
      p-10
      border border-gray-100
      shadow-sm
    ">

      <div className="
        flex items-start justify-between
      ">

        <div>

          <h2 className="
            text-[38px]
            font-bold
            text-gray-900
          ">
            Learning Velocity
          </h2>

          <p className="
            text-gray-500 mt-2
          ">
            Active study hours over
            the last 7 days.
          </p>

        </div>

      </div>

      <div className="
        h-[350px]
        flex items-end
        gap-4
        mt-16
      ">

        {weeklyData.map((item, i) => (
          <div
            key={i}
            className="
              flex-1
              flex flex-col
              items-center
              justify-end
            "
          >

            <div
              className="
                w-full
                rounded-t-[30px]
                bg-blue-100
                overflow-hidden
              "
              style={{
                height: `${item * 24}px`,
              }}
            >

              <div
                className={`
                  w-full rounded-t-[30px]

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

            <p className="
              mt-4
              text-sm
              font-semibold
              text-gray-500
            ">
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