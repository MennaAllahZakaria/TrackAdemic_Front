import { useNavigate } from "react-router-dom";

function QuizCard({ quiz }) {
  const navigate = useNavigate();

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div
      onClick={() => navigate(`/quiz/${quiz._id}`)}
      className="
        group
        bg-white
        rounded-[30px]
        p-6
        border border-gray-100
        shadow-[0_8px_30px_rgba(0,0,0,0.05)]
        hover:shadow-[0_18px_45px_rgba(59,130,246,0.12)]
        hover:-translate-y-1
        transition-all duration-300
        cursor-pointer
        relative
        overflow-hidden
      "
    >

      {/* TOP GLOW */}
      <div className="
        absolute top-0 left-0 w-full h-1
        bg-gradient-to-r from-blue-500 to-cyan-400
        opacity-0 group-hover:opacity-100
        transition-all duration-300
      "></div>

      {/* HEADER */}
      <div className="flex items-start justify-between mb-6">

        {/* ICON */}
        <div className="
          w-14 h-14 rounded-2xl
          bg-blue-50
          flex items-center justify-center
          transition-all duration-300
          group-hover:bg-[#9FF79F]
        ">
          <i className="ri-questionnaire-line text-[26px] text-blue-600"></i>
        </div>

        {/* STATUS */}
        <div
          className={`
            px-3 py-1 rounded-full text-xs font-semibold

            ${
              quiz.isSubmitted
                ? "bg-green-100 text-green-600"
                : "bg-orange-100 text-orange-600"
            }
          `}
        >
          {quiz.isSubmitted ? "Completed" : "Pending"}
        </div>

      </div>

      {/* CONTENT */}
      <div>

        <h2 className="text-[22px] font-bold text-gray-900 leading-snug">
          {quiz.topic}
        </h2>

        <p className="text-sm text-gray-500 mt-3 leading-relaxed">
          AI generated assessment designed for{" "}
          <span className="font-medium text-gray-700 capitalize">
            {quiz.level}
          </span>{" "}
          learners to improve practical and theoretical understanding.
        </p>

      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 gap-4 mt-8">

        {/* PASS SCORE */}
        <div className="
          bg-gray-50
          rounded-2xl
          p-4
          border border-gray-100
        ">
          <p className="text-xs text-gray-400 uppercase tracking-wide">
            Passing Score
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-2">
            {quiz.passing_score}%
          </h3>
        </div>

        {/* LEVEL */}
        <div className="
          bg-gray-50
          rounded-2xl
          p-4
          border border-gray-100
        ">
          <p className="text-xs text-gray-400 uppercase tracking-wide">
            Difficulty
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-2 capitalize">
            {quiz.level}
          </h3>
        </div>

      </div>

      {/* FOOTER */}
      <div className="flex items-center justify-between mt-8">

        {/* DATE */}
        <div>
          <p className="text-xs text-gray-400">
            Generated On
          </p>

          <p className="text-sm font-medium text-gray-700 mt-1">
            {formatDate(quiz.createdAt)}
          </p>
        </div>

        {/* BUTTON */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/quiz/${quiz._id}`);
          }}
          className="
            h-11 px-5 rounded-full
            bg-blue-600 text-white
            text-sm font-medium
            hover:bg-blue-700
            transition-all duration-300
            shadow-sm
          "
        >
          {quiz.isSubmitted ? "View Results" : "Start Quiz"}
        </button>

      </div>

    </div>
  );
}

export default QuizCard;