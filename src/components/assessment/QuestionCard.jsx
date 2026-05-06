import { useStateوuseEffect } from "react";
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

        rounded-[36px]
        p-10
      "
    >

      {/* TOPIC */}
      <div className="
        inline-flex items-center gap-2

        px-4 py-2 rounded-full

        bg-cyan-400/10
        text-cyan-300

        text-sm
        mb-8
      ">

        <i className="
          ri-flashlight-line
        "></i>

        {question?.topic}

      </div>

      {/* QUESTION */}
      <h2 className="
        text-[32px]
        font-bold
        text-white
        leading-[1.6]
      ">
        {question?.question}
      </h2>

      {/* OPTIONS */}
      <div className="
        grid grid-cols-1
        gap-5
        mt-10
      ">

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

              rounded-[24px]
              p-6

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

            <div className="
              flex items-start gap-5
            ">

              <div className="
                w-12 h-12 rounded-2xl

                bg-white/10

                flex items-center justify-center

                text-cyan-300
                font-bold
              ">
                {key}
              </div>

              <p className="
                text-white/90
                leading-[1.8]
              ">
                {value}
              </p>

            </div>

          </button>
        ))}

      </div>

      {/* ACTION */}
      <button
        onClick={handleSubmit}
        disabled={!selected || loading}
        className="
          mt-10

          px-8 py-4 rounded-2xl

          bg-cyan-400
          hover:bg-cyan-300

          disabled:opacity-50

          text-black
          font-bold

          transition-all duration-300
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