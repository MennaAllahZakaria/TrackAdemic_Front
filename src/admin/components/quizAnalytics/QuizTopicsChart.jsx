import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function QuizTopicsChart({
  data,
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
      "
    >

      <h2
        className="
          text-2xl

          font-bold

          text-gray-900
        "
      >
        Topic Distribution
      </h2>

      <div className="h-[320px] mt-8">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              outerRadius={110}
            >

              <Cell fill="#06B6D4" />
              <Cell fill="#10B981" />
              <Cell fill="#8B5CF6" />
              <Cell fill="#F97316" />

            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default QuizTopicsChart;