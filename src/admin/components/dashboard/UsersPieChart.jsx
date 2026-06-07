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

      <p
        className="
          text-xs
          sm:text-sm
          text-cyan-600

          font-semibold
        "
      >
        USER STATUS
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
        Audience Health
      </h2>

      <div
        className="
          h-[240px]
          sm:h-[280px]
          lg:h-[320px]

          mt-4
          sm:mt-6
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
              outerRadius={[80, 100, 120]}
            >

              <Cell fill="#10B981" />

              <Cell fill="#c3e83c" />

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
