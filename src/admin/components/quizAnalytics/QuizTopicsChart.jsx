import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#06B6D4",
  "#10B981",
  "#8B5CF6",
  "#F97316",
  "#EF4444",
  "#3B82F6",
];

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

        p-6 sm:p-8
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

      <div
        className="
          h-[320px]
          w-full
          min-w-0
          mt-8
        "
      >

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

              {data.map(
                (entry, index) => (

                  <Cell
                    key={index}
                    fill={
                      COLORS[
                        index %
                        COLORS.length
                      ]
                    }
                  />

                )
              )}

            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default QuizTopicsChart;