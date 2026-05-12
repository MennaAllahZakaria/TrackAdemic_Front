import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

function UsersPieChart({
  activityData,
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

      <p
        className="
          text-sm
          text-cyan-600

          font-semibold
        "
      >
        USER STATUS
      </p>

      <h2
        className="
          text-2xl

          font-bold

          text-gray-900

          mt-2
        "
      >
        Audience Health
      </h2>

      <div
        className="
          h-[320px]

          mt-6
        "
      >

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <PieChart>

            <Pie
              data={activityData}
              dataKey="value"
              outerRadius={110}
            >

              <Cell fill="#06B6D4" />

              <Cell fill="#10B981" />

              <Cell fill="#EF4444" />

            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default UsersPieChart;