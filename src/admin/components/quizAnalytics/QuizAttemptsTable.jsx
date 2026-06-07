import QuizAttemptsMobile
from "./QuizAttemptsMobile";

import QuizAttemptRow
from "./QuizAttemptRow";

function QuizAttemptsTable({
  attempts,
}) {
  return (
    <div
      className="
        bg-white

        rounded-[24px]
        sm:rounded-[32px]

        border border-gray-100

        shadow-sm

        overflow-hidden
      "
    >

      <div
        className="
          px-4 py-3
          sm:px-5 sm:py-4
          lg:px-6 lg:py-5

          border-b border-gray-100
        "
      >

        <h2
          className="
            text-lg
            sm:text-xl
            lg:text-2xl

            font-bold

            text-gray-900
          "
        >
          Quiz Attempts
        </h2>

      </div>

      <QuizAttemptsMobile
        attempts={attempts}
      />

      <div
        className="
          hidden lg:block

          overflow-x-auto
        "
      >

        <table className="w-full">

          <thead
            className="
              bg-gray-50
            "
          >

            <tr>

              <th className="text-left px-6 py-5 text-sm font-semibold text-gray-500">
                User
              </th>

              <th className="text-left px-6 py-5 text-sm font-semibold text-gray-500">
                Quiz
              </th>

              <th className="text-left px-6 py-5 text-sm font-semibold text-gray-500">
                Score
              </th>

              <th className="text-left px-6 py-5 text-sm font-semibold text-gray-500">
                Date
              </th>

            </tr>

          </thead>

          <tbody>

            {attempts.map((attempt) => (
              <QuizAttemptRow
                key={attempt._id}
                attempt={attempt}
              />
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default QuizAttemptsTable;
