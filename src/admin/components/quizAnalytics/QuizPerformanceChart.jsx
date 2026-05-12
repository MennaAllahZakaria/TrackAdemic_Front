import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  Tooltip,
} from "recharts";

function QuizPerformanceChart({
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
        Quiz Performance
      </h2>

      <div className="h-[320px] mt-8">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <AreaChart data={data}>

            <defs>

              <linearGradient
                id="quizChart"
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

            <XAxis dataKey="name" />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="score"
              stroke="#06B6D4"
              fillOpacity={1}
              fill="url(#quizChart)"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default QuizPerformanceChart;