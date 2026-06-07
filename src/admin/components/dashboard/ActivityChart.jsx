import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

function ActivityChart({
  chartData,
}) {
  return (
    <div
      className="
        bg-white

        rounded-[24px]
        sm:rounded-[32px]

        border border-gray-100

        shadow-sm

        p-4
        sm:p-5
        lg:p-6
        lg:p-8
        min-w-0
      "
    >

      <div
        className="
          flex items-center
          justify-between
          gap-2
          sm:gap-4

          mb-6
          sm:mb-8
        "
      >

        <div>

          <p
            className="
              text-xs
              sm:text-sm
              text-cyan-600

              font-semibold
            "
          >
            PLATFORM ACTIVITY
          </p>

          <h2
            className="
              text-lg
              sm:text-2xl
              lg:text-3xl

              font-bold

              text-gray-900

              mt-1
              sm:mt-2
            "
          >
            System Overview
          </h2>

        </div>

        <div
          className="
            w-12 h-12
            sm:w-14 sm:h-14

            rounded-2xl

            bg-cyan-100

            flex items-center
            justify-center

            text-cyan-600
            text-lg
            sm:text-2xl

            flex-shrink-0
          "
        >

          <i className="ri-bar-chart-box-line"></i>

        </div>

      </div>

      <div className="h-[240px] sm:h-[280px] lg:h-[320px] w-full">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <AreaChart data={chartData}>

            <defs>

              <linearGradient
                id="colorValue"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop
                  offset="5%"
                  stopColor="#06B6D4"
                  stopOpacity={0.4}
                />

                <stop
                  offset="95%"
                  stopColor="#06B6D4"
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>

            {/* GRID */}
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#E5E7EB"
            />

            {/* X AXIS */}
            <XAxis
              dataKey="name"
              padding={{
                left: 10,
                right: 10,
              }}
              tick={{
                fill: "#6B7280",
                fontSize: 12,
              }}
              axisLine={false}
              tickLine={false}
            />

            {/* Y AXIS */}
            <YAxis
              tick={{
                fill: "#9CA3AF",
                fontSize: 12,
              }}
              axisLine={false}
              tickLine={false}
            />

            {/* TOOLTIP */}
            <Tooltip />

            {/* AREA */}
            <Area
              type="monotone"
              dataKey="value"
              stroke="#06B6D4"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorValue)"

              dot={{
                r: 4,
                fill: "#06B6D4",
                strokeWidth: 0,
              }}

              activeDot={{
                r: 6,
              }}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default ActivityChart;
