import { useNavigate } from "react-router-dom";

function QuizCard({ quiz }) {

  const navigate = useNavigate();

  const formatDate = (date) => {

    return new Date(date)
      .toLocaleDateString(
        "en-US",
        {
          month: "short",
          day: "numeric",
          year: "numeric",
        }
      );

  };

  return (
    <div
      onClick={() =>
        navigate(
          `/quiz/${quiz._id}`
        )
      }
      className="
        group

        bg-white

        rounded-[24px]
        md:rounded-[28px]
        xl:rounded-[30px]

        p-5
        md:p-6

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
      <div
        className="
          absolute top-0 left-0

          w-full h-1

          bg-gradient-to-r
          from-blue-500
          to-cyan-400

          opacity-0
          group-hover:opacity-100

          transition-all duration-300
        "
      ></div>

      {/* HEADER */}
      <div
        className="
          flex items-start justify-between

          gap-4

          mb-6
        "
      >

        {/* ICON */}
        <div
          className="
            w-12 h-12
            sm:w-14 sm:h-14

            rounded-2xl

            bg-blue-50

            flex items-center justify-center

            transition-all duration-300

            group-hover:bg-[#9FF79F]

            flex-shrink-0
          "
        >

          <i
            className="
              ri-questionnaire-line

              text-2xl
              sm:text-[26px]

              text-blue-600
            "
          ></i>

        </div>

        {/* STATUS */}
        <div
          className={`
            px-3 py-1

            rounded-full

            text-[11px]
            sm:text-xs

            font-semibold

            whitespace-nowrap

            ${
              quiz.isSubmitted
                ? "bg-green-100 text-green-600"
                : "bg-orange-100 text-orange-600"
            }
          `}
        >
          {quiz.isSubmitted
            ? "Completed"
            : "Pending"}
        </div>

      </div>

      {/* CONTENT */}
      <div>

        <h2
          className="
            text-xl
            md:text-[22px]

            font-bold
            text-gray-900

            leading-snug

            break-words
          "
        >
          {quiz.topic}
        </h2>

        <p
          className="
            text-sm
            text-gray-500

            mt-3

            leading-relaxed
          "
        >

          AI generated assessment
          designed for{" "}

          <span
            className="
              font-medium
              text-gray-700

              capitalize
            "
          >
            {quiz.level}
          </span>

          {" "}learners to improve
          practical and theoretical
          understanding.

        </p>

      </div>

      {/* STATS */}
      <div
        className="
          grid grid-cols-2

          gap-4

          mt-8
        "
      >

        {/* PASS SCORE */}
        <div
          className="
            bg-gray-50

            rounded-2xl

            p-4

            border border-gray-100
          "
        >

          <p
            className="
              text-[10px]
              sm:text-xs

              text-gray-400

              uppercase
              tracking-wide
            "
          >
            Passing Score
          </p>

          <h3
            className="
              text-lg
              sm:text-xl

              font-bold
              text-gray-900

              mt-2
            "
          >
            {quiz.passing_score}%
          </h3>

        </div>

        {/* LEVEL */}
        <div
          className="
            bg-gray-50

            rounded-2xl

            p-4

            border border-gray-100
          "
        >

          <p
            className="
              text-[10px]
              sm:text-xs

              text-gray-400

              uppercase
              tracking-wide
            "
          >
            Difficulty
          </p>

          <h3
            className="
              text-lg
              sm:text-xl

              font-bold
              text-gray-900

              mt-2

              capitalize
            "
          >
            {quiz.level}
          </h3>

        </div>

      </div>

      {/* FOOTER */}
      <div
        className="
          flex flex-col
          sm:flex-row

          sm:items-center
          justify-between

          gap-4

          mt-8
        "
      >

        {/* DATE */}
        <div>

          <p
            className="
              text-xs
              text-gray-400
            "
          >
            Generated On
          </p>

          <p
            className="
              text-sm

              font-medium
              text-gray-700

              mt-1
            "
          >
            {formatDate(
              quiz.createdAt
            )}
          </p>

        </div>

        {/* BUTTON */}
        <button
          onClick={(e) => {

            e.stopPropagation();

            navigate(
              `/quiz/${quiz._id}`
            );

          }}
          className="
            h-10
            sm:h-11

            px-4
            sm:px-5

            w-full
            sm:w-auto

            rounded-full

            bg-blue-600
            text-white

            text-sm
            font-medium

            hover:bg-blue-700

            transition-all duration-300

            shadow-sm
          "
        >
          {quiz.isSubmitted
            ? "View Results"
            : "Start Quiz"}
        </button>

      </div>

    </div>
  );
}

export default QuizCard;