function ResultCard({ result, index }) {
  if (!result) return null;

  return (
    <div
      className={`
        rounded-[30px]
        border
        overflow-hidden
        shadow-[0_10px_35px_rgba(0,0,0,0.04)]
        transition-all duration-300
        hover:-translate-y-1

        ${
          result.correct
            ? "border-green-100 bg-green-50/40"
            : "border-red-100 bg-red-50/40"
        }
      `}
    >

      {/* TOP BAR */}
      <div
        className={`
          h-2 w-full

          ${
            result.correct
              ? "bg-green-500"
              : "bg-red-500"
          }
        `}
      ></div>

      <div className="p-7">

        {/* HEADER */}
        <div className="flex items-start justify-between gap-4">

          <div className="flex items-start gap-4">

            {/* ICON */}
            <div
              className={`
                min-w-[56px] h-[56px]
                rounded-2xl
                flex items-center justify-center
                text-white text-2xl

                ${
                  result.correct
                    ? "bg-green-500"
                    : "bg-red-500"
                }
              `}
            >
              <i
                className={
                  result.correct
                    ? "ri-check-line"
                    : "ri-close-line"
                }
              ></i>
            </div>

            {/* TITLE */}
            <div>

              <div className="flex items-center gap-3 flex-wrap">

                <span className="
                  text-xs uppercase tracking-wide
                  text-gray-400 font-medium
                ">
                  Question {index + 1}
                </span>

                <span
                  className={`
                    px-3 py-1 rounded-full
                    text-xs font-semibold

                    ${
                      result.correct
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }
                  `}
                >
                  {result.correct ? "Correct" : "Incorrect"}
                </span>

              </div>

              <h2 className="
                text-[20px]
                font-bold
                text-gray-900
                leading-relaxed
                mt-3
              ">
                {result.question}
              </h2>

            </div>

          </div>

        </div>

        {/* ANSWERS */}
        <div className="
          grid grid-cols-2 gap-5
          mt-8
        ">

          {/* USER ANSWER */}
          <div className="
            rounded-2xl
            border border-gray-200
            bg-white
            p-5
          ">

            <p className="
              text-xs uppercase tracking-wide
              text-gray-400 font-medium
            ">
              Your Answer
            </p>

            <div className="flex items-center gap-3 mt-3">

              <div
                className={`
                  w-10 h-10 rounded-xl
                  flex items-center justify-center
                  text-white font-bold

                  ${
                    result.correct
                      ? "bg-green-500"
                      : "bg-red-500"
                  }
                `}
              >
                {result.userAnswer}
              </div>

              <p className="
                text-sm font-medium text-gray-700
              ">
                Option {result.userAnswer}
              </p>

            </div>

          </div>

          {/* CORRECT ANSWER */}
          <div className="
            rounded-2xl
            border border-green-100
            bg-green-50
            p-5
          ">

            <p className="
              text-xs uppercase tracking-wide
              text-green-500 font-medium
            ">
              Correct Answer
            </p>

            <div className="flex items-center gap-3 mt-3">

              <div className="
                w-10 h-10 rounded-xl
                bg-green-500
                text-white
                flex items-center justify-center
                font-bold
              ">
                {result.CorrectAnswer}
              </div>

              <p className="
                text-sm font-medium text-gray-700
              ">
                Option {result.CorrectAnswer}
              </p>

            </div>

          </div>

        </div>

        {/* EXPLANATION */}
        <div className="
          mt-7
          rounded-2xl
          bg-white/80
          border border-gray-100
          p-6
        ">

          <div className="flex items-start gap-4">

            <div className="
              min-w-[44px] h-[44px]
              rounded-xl
              bg-blue-100
              text-blue-600
              flex items-center justify-center
            ">
              <i className="ri-lightbulb-line text-xl"></i>
            </div>

            <div>

              <h4 className="
                text-lg font-bold text-gray-900
              ">
                Explanation
              </h4>

              <p className="
                text-gray-600
                leading-[1.9]
                mt-3
                text-[15px]
              ">
                {result.Explanation}
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ResultCard;