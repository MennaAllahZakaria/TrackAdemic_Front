import { useState } from "react";

function QuestionCard({
  question,
  currentQuestion,
  totalQuestions,
  selectedAnswer,
  setSelectedAnswer,
  submitted = false,
}) {

  const [hovered, setHovered] =
    useState(null);

  if (!question) return null;

  const getOptionStyle = (key) => {

    // ================= SUBMITTED =================
    if (submitted) {

      if (
        key ===
        question.correct_answer
      ) {

        return `
          bg-green-50
          border-green-500
          shadow-[0_8px_20px_rgba(34,197,94,0.12)]
        `;

      }

      if (
        key === selectedAnswer &&
        key !==
          question.correct_answer
      ) {

        return `
          bg-red-50
          border-red-400
        `;

      }

      return `
        bg-white
        border-gray-200
      `;

    }

    // ================= SELECTED =================
    if (selectedAnswer === key) {

      return `
        bg-blue-50
        border-blue-500
        shadow-[0_10px_25px_rgba(59,130,246,0.12)]
        scale-[1.01]
      `;

    }

    // ================= HOVER =================
    if (hovered === key) {

      return `
        bg-blue-50/50
        border-blue-300
      `;

    }

    return `
      bg-white
      border-gray-200
    `;

  };

  return (
    <div
      className="
        bg-white

        rounded-[24px]
        md:rounded-[28px]
        xl:rounded-[32px]

        border border-gray-100

        shadow-[0_10px_35px_rgba(0,0,0,0.05)]

        overflow-hidden
      "
    >

      {/* TOP BAR */}
      <div
        className="
          h-2

          bg-gray-100

          relative

          overflow-hidden
        "
      >

        <div
          className="
            absolute left-0 top-0

            h-full

            bg-gradient-to-r
            from-blue-500
            to-cyan-400

            transition-all duration-500
          "
          style={{
            width: `${
              (currentQuestion /
                totalQuestions) *
              100
            }%`,
          }}
        ></div>

      </div>

      {/* HEADER */}
      <div
        className="
          p-5
          md:p-7
          xl:p-8

          pb-5
        "
      >

        <div
          className="
            flex flex-col
            sm:flex-row

            sm:items-center
            justify-between

            gap-5
          "
        >

          {/* LEFT */}
          <div
            className="
              flex items-center

              gap-3
              sm:gap-4
            "
          >

            {/* NUMBER */}
            <div
              className="
                min-w-[48px]
                h-[48px]

                sm:min-w-[58px]
                sm:h-[58px]

                rounded-2xl

                bg-blue-50

                flex items-center justify-center

                text-blue-600

                font-bold

                text-lg
                sm:text-xl
              "
            >
              {currentQuestion}
            </div>

            {/* TITLE */}
            <div className="min-w-0">

              <p
                className="
                  text-[10px]
                  sm:text-xs

                  uppercase
                  tracking-wide

                  text-gray-400

                  font-medium
                "
              >
                Question {currentQuestion} of {totalQuestions}
              </p>

              <h2
                className="
                  text-lg
                  sm:text-[22px]
                  xl:text-[24px]

                  font-bold
                  text-gray-900

                  mt-2

                  leading-tight
                "
              >
                Multiple Choice Question
              </h2>

            </div>

          </div>

          {/* BADGE */}
          {question.difficulty && (

            <div
              className={`
                px-4 py-2

                rounded-full

                text-[11px]
                sm:text-xs

                font-semibold

                capitalize

                whitespace-nowrap

                ${
                  question.difficulty === "easy"
                    ? "bg-green-100 text-green-600"
                    : question.difficulty === "medium"
                    ? "bg-orange-100 text-orange-600"
                    : "bg-red-100 text-red-600"
                }
              `}
            >
              {question.difficulty}
            </div>

          )}

        </div>

        {/* QUESTION */}
        <div
          className="
            mt-6
            sm:mt-8
          "
        >

          <h3
            className="
              text-lg
              sm:text-[20px]
              xl:text-[22px]

              leading-[1.8]

              font-semibold

              text-gray-900
            "
          >
            {question.question}
          </h3>

        </div>

      </div>

      {/* OPTIONS */}
      <div
        className="
          px-5
          md:px-7
          xl:px-8

          pb-8
        "
      >

        <div className="space-y-4">

          {Object.entries(
            question.options
          ).map(([key, value]) => {

            const isSelected =
              selectedAnswer === key;

            const isCorrect =
              key ===
              question.correct_answer;

            const isWrong =
              submitted &&
              key === selectedAnswer &&
              key !==
                question.correct_answer;

            return (
              <div
                key={key}
                onMouseEnter={() =>
                  setHovered(key)
                }
                onMouseLeave={() =>
                  setHovered(null)
                }
                onClick={() => {

                  if (!submitted) {

                    setSelectedAnswer(
                      key
                    );

                  }

                }}
                className={`
                  group

                  rounded-[24px]
                  sm:rounded-3xl

                  border-2

                  p-4
                  sm:p-5

                  transition-all duration-300

                  cursor-pointer

                  ${getOptionStyle(key)}
                `}
              >

                <div
                  className="
                    flex

                    gap-3
                    sm:gap-5
                  "
                >

                  {/* LETTER */}
                  <div
                    className={`
                      min-w-[42px]
                      h-[42px]

                      sm:min-w-[48px]
                      sm:h-[48px]

                      rounded-2xl

                      flex items-center justify-center

                      font-bold

                      text-base
                      sm:text-lg

                      transition-all duration-300

                      ${
                        isCorrect && submitted
                          ? "bg-green-500 text-white"
                          : isWrong
                          ? "bg-red-500 text-white"
                          : isSelected
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-600"
                      }
                    `}
                  >
                    {key}
                  </div>

                  {/* TEXT */}
                  <div
                    className="
                      flex-1

                      pt-1

                      min-w-0
                    "
                  >

                    <p
                      className="
                        text-sm
                        sm:text-[15px]

                        leading-[1.8]

                        text-gray-700

                        break-words
                      "
                    >
                      {value}
                    </p>

                  </div>

                  {/* STATUS ICON */}
                  {submitted && (

                    <div className="pt-1">

                      {isCorrect ? (

                        <div
                          className="
                            w-8 h-8

                            rounded-full

                            bg-green-100
                            text-green-600

                            flex items-center justify-center
                          "
                        >

                          <i className="ri-check-line"></i>

                        </div>

                      ) : isWrong ? (

                        <div
                          className="
                            w-8 h-8

                            rounded-full

                            bg-red-100
                            text-red-600

                            flex items-center justify-center
                          "
                        >

                          <i className="ri-close-line"></i>

                        </div>

                      ) : null}

                    </div>

                  )}

                </div>

              </div>
            );
          })}

        </div>

        {/* EXPLANATION */}
        {submitted &&
          question.explanation && (

          <div
            className="
              mt-8

              rounded-[24px]
              sm:rounded-3xl

              bg-blue-50

              border border-blue-100

              p-5
              sm:p-6
            "
          >

            <div
              className="
                flex items-start

                gap-3
                sm:gap-4
              "
            >

              <div
                className="
                  min-w-[42px]
                  h-[42px]

                  sm:min-w-[46px]
                  sm:h-[46px]

                  rounded-2xl

                  bg-white
                  text-blue-600

                  flex items-center justify-center

                  shadow-sm
                "
              >

                <i className="ri-lightbulb-line text-xl"></i>

              </div>

              <div>

                <h4
                  className="
                    text-base
                    sm:text-lg

                    font-bold
                    text-gray-900
                  "
                >
                  Explanation
                </h4>

                <p
                  className="
                    text-gray-600

                    leading-[1.9]

                    mt-3

                    text-sm
                    sm:text-[15px]
                  "
                >
                  {question.explanation}
                </p>

              </div>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}

export default QuestionCard;