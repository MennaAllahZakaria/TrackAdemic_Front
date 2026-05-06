function PracticalTaskCard({ task }) {
  if (!task) return null;

  return (
    <div
      className="
        mt-10
        rounded-[32px]
        border border-blue-100
        bg-gradient-to-br from-[#EFF6FF] via-[#F8FAFC] to-white
        p-8
        shadow-[0_10px_40px_rgba(59,130,246,0.08)]
        relative
        overflow-hidden
      "
    >

      {/* DECOR */}
      <div className="
        absolute -top-16 -right-16
        w-56 h-56 rounded-full
        bg-blue-200/30 blur-3xl
      "></div>

      {/* HEADER */}
      <div className="relative z-10 flex items-start gap-5">

        {/* ICON */}
        <div
          className="
            min-w-[64px] h-[64px]
            rounded-2xl
            bg-blue-600
            text-white
            flex items-center justify-center
            shadow-lg
          "
        >
          <i className="ri-code-box-line text-[30px]"></i>
        </div>

        {/* TEXT */}
        <div>

          <div className="flex items-center gap-3 flex-wrap">

            <h2 className="text-[30px] font-bold text-gray-900">
              Practical Challenge
            </h2>

            <span className="
              px-3 py-1 rounded-full
              bg-blue-100 text-blue-600
              text-xs font-semibold
            ">
              HANDS-ON TASK
            </span>

          </div>

          <p className="text-gray-500 mt-3 leading-relaxed max-w-2xl">
            Apply what you've learned through a real-world
            coding challenge designed to strengthen your
            practical understanding.
          </p>

        </div>

      </div>

      {/* CONTENT */}
      <div className="relative z-10 mt-10">

        {/* TITLE */}
        <div className="
          bg-white/80 backdrop-blur
          rounded-3xl
          border border-white
          p-6
          shadow-sm
        ">

          <div className="flex items-start justify-between gap-5 flex-wrap">

            <div>

              <p className="text-xs uppercase tracking-wide text-gray-400 font-medium">
                Task Title
              </p>

              <h3 className="text-[26px] font-bold text-gray-900 mt-2 leading-snug">
                {task.title}
              </h3>

            </div>

            {/* TIME */}
            <div className="
              min-w-[140px]
              rounded-2xl
              bg-blue-50
              border border-blue-100
              p-4 text-center
            ">

              <p className="text-xs text-gray-400 uppercase tracking-wide">
                Estimated Time
              </p>

              <h4 className="text-2xl font-bold text-blue-600 mt-2">
                {task.estimated_minutes}m
              </h4>

            </div>

          </div>

          {/* DESCRIPTION */}
          <div className="mt-8">

            <p className="text-xs uppercase tracking-wide text-gray-400 font-medium mb-3">
              Description
            </p>

            <p className="text-gray-700 leading-[1.9] text-[15px]">
              {task.description}
            </p>

          </div>

          {/* EXPECTED OUTPUT */}
          <div className="mt-8">

            <p className="text-xs uppercase tracking-wide text-gray-400 font-medium mb-3">
              Expected Output
            </p>

            <div className="
              rounded-2xl
              bg-gray-900
              text-gray-100
              p-5
              text-sm
              leading-relaxed
              border border-gray-800
              shadow-inner
            ">
              {task.expected_output}
            </div>

          </div>

        </div>

        {/* EVALUATION */}
        <div className="mt-8">

          <div className="flex items-center gap-3 mb-5">

            <div className="
              w-11 h-11 rounded-xl
              bg-green-100
              text-green-600
              flex items-center justify-center
            ">
              <i className="ri-checkbox-circle-line text-xl"></i>
            </div>

            <div>

              <h3 className="text-xl font-bold text-gray-900">
                Evaluation Criteria
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Your solution will be evaluated based on these points.
              </p>

            </div>

          </div>

          {/* CRITERIA */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {task.evaluation_criteria?.map((item, index) => (
              <div
                key={index}
                className="
                  bg-white
                  rounded-2xl
                  border border-gray-100
                  p-5
                  flex items-start gap-4
                  shadow-sm
                  hover:shadow-md
                  hover:-translate-y-1
                  transition-all duration-300
                  group
                "
              >

                {/* CHECK */}
                <div className="
                  min-w-[38px] h-[38px]
                  rounded-full
                  bg-green-100
                  text-green-600
                  flex items-center justify-center
                  group-hover:bg-[#9FF79F]
                  transition-all duration-300
                ">
                  <i className="ri-check-line text-lg"></i>
                </div>

                {/* TEXT */}
                <p className="text-sm text-gray-700 leading-relaxed">
                  {item}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default PracticalTaskCard;