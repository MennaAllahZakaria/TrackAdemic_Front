function QuizAttemptRow({
  attempt,
}) {
  return (
    <tr
      className="
        border-t border-gray-100
      "
    >

      <td className="px-6 py-5">

        <div>

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

        </div>

      </td>

      <td className="px-6 py-5">
        {attempt.quizTitle}
      </td>

      <td className="px-6 py-5">

        <div
          className="
            inline-flex items-center

            px-4 py-2

            rounded-xl

            bg-cyan-100

            text-cyan-700

            font-semibold
          "
        >
          {attempt.score}%
        </div>

      </td>

      <td className="px-6 py-5">

        {new Date(
          attempt.createdAt
        ).toLocaleDateString()}

      </td>

    </tr>
  );
}

export default QuizAttemptRow;