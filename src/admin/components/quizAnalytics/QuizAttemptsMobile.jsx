import QuizAttemptCard
from "./QuizAttemptCard";

function QuizAttemptsMobile({
  attempts,
}) {
  return (
    <div
      className="
        lg:hidden

        p-4

        space-y-4
      "
    >

      {attempts.map((attempt) => (
        <QuizAttemptCard
          key={attempt._id}
          attempt={attempt}
        />
      ))}

    </div>
  );
}

export default QuizAttemptsMobile;