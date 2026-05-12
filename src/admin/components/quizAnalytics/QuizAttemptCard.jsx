function QuizAttemptCard({
  attempt,
}) {
  return (
    <div
      className="
        rounded-2xl

        border border-gray-100

        p-5
      "
    >

      <h3
        className="
          font-bold
          text-gray-900
        "
      >
        {
          attempt.user
            ?.firstName
        }{" "}
        {
          attempt.user
            ?.lastName
        }
      </h3>

      <p
        className="
          text-sm
          text-gray-500

          mt-1
        "
      >
        {
          attempt.user
            ?.email
        }
      </p>

      <div className="mt-5">

        <p
          className="
            text-gray-700
          "
        >
          {attempt.quizTitle}
        </p>

        <div
          className="
            inline-flex items-center

            px-4 py-2

            rounded-xl

            bg-cyan-100

            text-cyan-700

            font-semibold

            mt-4
          "
        >
          {attempt.score}%
        </div>

      </div>

    </div>
  );
}

export default QuizAttemptCard;