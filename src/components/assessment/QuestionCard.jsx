import {
  useState,
  useEffect,
} from "react";

function QuestionCard({
  question,
  submitAnswer,
  loading,
}) {
  const [selected, setSelected] =
    useState("");

  useEffect(() => {
    setSelected("");
  }, [question]);

  const handleSubmit = () => {
    if (!selected) return;

    submitAnswer(selected);
  };

  return (
    <div
      className="
        bg-white/5

        backdrop-blur-xl

        border border-white/10

        rounded-[24px]
        sm:rounded-[32px]
        xl:rounded-[36px]

        p-5
        sm:p-8
        xl:p-10
      "
    >

      {/* TOPIC */}
      <div
        className="
          inline-flex items-center gap-2

          px-4 py-2

          rounded-full

          bg-cyan-400/10
          text-cyan-300

          text-xs
          sm:text-sm

          mb-6
          sm:mb-8

          flex-wrap
        "
      >

        <i className="ri-flashlight-line"></i>

        {question?.topic}

      </div>

      {/* QUESTION */}
      <h2
        className="
          text-2xl
          sm:text-3xl
          xl:text-[32px]

          font-bold

          text-white

          leading-[1.5]
          sm:leading-[1.6]

          break-words
        "
      >
        {question?.question}
      </h2>

      {/* OPTIONS */}
      <div
        className="
          grid grid-cols-1

          gap-4
          sm:gap-5

          mt-8
          sm:mt-10
        "
      >

        {Object.entries(
          question?.options || {}
        ).map(([key, value]) => (
          <button
            key={key}
            onClick={() =>
              setSelected(key)
            }
            className={`
              text-left

              rounded-[20px]
              sm:rounded-[24px]

              p-4
              sm:p-6

              border

              transition-all duration-300

              ${
                selected === key
                  ? `
                    border-cyan-400
                    bg-cyan-400/15

                    shadow-[0_0_30px_rgba(34,211,238,.2)]
                  `
                  : `
                    border-white/10
                    bg-white/5

                    hover:border-cyan-400
                    hover:bg-cyan-400/10
                  `
              }
            `}
          >

            <div
              className="
                flex items-start

                gap-3
                sm:gap-5
              "
            >

              {/* LETTER */}
              <div
                className="
                  min-w-[42px]
                  h-[42px]

                  sm:min-w-[48px]
                  sm:h-[48px]

                  rounded-2xl

                  bg-white/10

                  flex items-center justify-center

                  text-cyan-300

                  font-bold

                  text-sm
                  sm:text-base

                  shrink-0
                "
              >
                {key}
              </div>

              {/* TEXT */}
              <p
                className="
                  text-white/90

                  leading-[1.8]

                  text-sm
                  sm:text-base

                  break-words
                "
              >
                {value}
              </p>

            </div>

          </button>
        ))}

      </div>

      {/* ACTION */}
      <button
        onClick={handleSubmit}
        disabled={
          !selected || loading
        }
        className="
          mt-8
          sm:mt-10

          px-6
          sm:px-8

          py-3.5
          sm:py-4

          rounded-2xl

          bg-cyan-400
          hover:bg-cyan-300

          disabled:opacity-50

          text-black

          text-sm
          sm:text-base

          font-bold

          transition-all duration-300

          w-full
          sm:w-auto
        "
      >
        {loading
          ? "Analyzing..."
          : "Continue →"}
      </button>

    </div>
  );
}

export default QuestionCard;