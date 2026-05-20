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

        rounded-[32px]

        border border-gray-100

        shadow-sm

        p-6
        sm:p-8
        min-w-0
      "
    >

      <div
        className="
          flex items-center
          justify-between

          mb-8
        "
      >

        <div>

          <p
            className="
              text-sm
              text-cyan-600

              font-semibold
            "
          >
            PLATFORM ACTIVITY
          </p>

          <h2
            className="
              text-2xl
              sm:text-3xl

              font-bold

              text-gray-900

              mt-2
            "
          >
            System Overview
          </h2>

        </div>

        <div
          className="
            w-14 h-14

            rounded-2xl

            bg-cyan-100

            flex items-center
            justify-center

            text-cyan-600
            text-2xl
          "
        >

          <i className="ri-bar-chart-box-line"></i>

        </div>

      </div>

      <div className="h-[320px]">

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
                left: 20,
                right: 20,
              }}
              tick={{
                fill: "#6B7280",
                fontSize: 14,
              }}
              axisLine={false}
              tickLine={false}
            />

            {/* Y AXIS */}
            <YAxis
              tick={{
                fill: "#9CA3AF",
                fontSize: 13,
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
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorValue)"

              dot={{
                r: 5,
                fill: "#06B6D4",
                strokeWidth: 0,
              }}

              activeDot={{
                r: 7,
              }}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default ActivityChart;