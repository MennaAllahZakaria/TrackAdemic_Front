import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";

import api from "../../services/api";
import { toast } from "react-hot-toast";

import QuestionCard from "../../components/quiz/QuestionCard";
import PracticalTaskCard from "../../components/quiz/PracticalTaskCard";
import ScoreCircle from "../../components/quiz/ScoreCircle";
import ResultCard from "../../components/quiz/ResultCard";

function QuizDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [quiz, setQuiz] = useState(null);

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [answers, setAnswers] = useState({});

  const [result, setResult] = useState(null);

  // ================= FETCH QUIZ =================
  const fetchQuiz = async () => {
    try {
      setLoading(true);

      const res = await api.get(`/quiz/${id}`);

      setQuiz(res.data.data);

    } catch (err) {
      console.error(err);

      toast.error(
        err?.response?.data?.message ||
          "Failed to load quiz"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuiz();
  }, []);

  // ================= SUBMIT =================
  const handleSubmit = async () => {
    try {
      const totalQuestions =
        quiz.questions.length;

      if (
        Object.keys(answers).length <
        totalQuestions
      ) {
        toast.error(
          "Please answer all questions"
        );

        return;
      }

      setSubmitting(true);

      const res = await api.post(
        "/quiz/submit",
        {
          topic: quiz.topic,
          quizId: quiz._id,
          answers,
        }
      );

      setResult(res.data);

      toast.success("Quiz submitted ✨");

    } catch (err) {
      console.error(err);

      toast.error(
        err?.response?.data?.message ||
          "Failed to submit quiz"
      );
    } finally {
      setSubmitting(false);
    }
  };

  // ================= SCORE =================
  const percentage = useMemo(() => {
    if (!result) return 0;
    return result.percentage;
  }, [result]);

  // ================= LOADING =================
  if (loading) {
    return (
      <MainLayout>
        <div className="
          min-h-[70vh]
          flex items-center justify-center
        ">
          <div className="text-center">

            <div className="
              w-16 h-16 rounded-full
              border-4 border-blue-200
              border-t-blue-600
              animate-spin
              mx-auto
            "></div>

            <p className="mt-5 text-gray-500">
              Loading quiz...
            </p>

          </div>
        </div>
      </MainLayout>
    );
  }

  // ================= EMPTY =================
  if (!quiz) {
    return (
      <MainLayout>
        <div className="
          min-h-[70vh]
          flex items-center justify-center
        ">
          <div className="
            bg-white
            rounded-[32px]
            border border-gray-100
            shadow-sm
            p-10
            text-center
            max-w-md
          ">

            <div className="
              w-20 h-20 rounded-full
              bg-red-100
              text-red-500
              flex items-center justify-center
              mx-auto
            ">
              <i className="ri-error-warning-line text-4xl"></i>
            </div>

            <h2 className="
              text-2xl font-bold text-gray-900
              mt-6
            ">
              Quiz Not Found
            </h2>

            <p className="
              text-gray-500 mt-3 leading-relaxed
            ">
              This quiz may have been deleted
              or is no longer available.
            </p>

            <button
              onClick={() =>
                navigate("/quizzes")
              }
              className="
                mt-8
                h-12 px-6 rounded-2xl
                bg-blue-600 text-white
                hover:bg-blue-700
                transition-all duration-300
              "
            >
              Back to Quizzes
            </button>

          </div>
        </div>
      </MainLayout>
    );
  }

  // ================= SUBMITTED BEFORE =================
  const alreadySubmitted =
    quiz.isSubmitted &&
    !result;

  return (
    <MainLayout>
      <div className="
        max-w-[1100px]
        mx-auto
        pb-20
      ">

        {/* HERO */}
        <div className="mb-12">

          <div className="
            inline-flex items-center gap-2
            px-4 py-2 rounded-full
            bg-blue-50 text-blue-600
            text-sm font-semibold
            mb-5
          ">
            <i className="ri-flashlight-line"></i>

            AI Generated Quiz
          </div>

          <div className="
            flex items-start justify-between
            gap-10 flex-wrap
          ">

            {/* LEFT */}
            <div>

              <h1 className="
                text-[48px]
                leading-tight
                font-bold
                text-gray-900
              ">
                {quiz.quiz_title ||
                  quiz.topic}
              </h1>

              <p className="
                text-gray-500
                mt-5
                max-w-2xl
                leading-[1.9]
              ">
                Improve your understanding and
                validate your knowledge through
                interactive AI-generated questions.
              </p>

              {/* BADGES */}
              <div className="
                flex items-center gap-3
                mt-7 flex-wrap
              ">

                <div className="
                  px-4 py-2 rounded-full
                  bg-purple-100 text-purple-600
                  text-sm font-semibold capitalize
                ">
                  {quiz.level}
                </div>

                <div className="
                  px-4 py-2 rounded-full
                  bg-green-100 text-green-600
                  text-sm font-semibold
                ">
                  {quiz.passing_score}% Passing Score
                </div>

                <div className="
                  px-4 py-2 rounded-full
                  bg-orange-100 text-orange-600
                  text-sm font-semibold
                ">
                  {quiz.questions.length} Questions
                </div>

              </div>

            </div>

            {/* RIGHT */}
            <div className="
              bg-white
              rounded-[30px]
              border border-gray-100
              p-7
              shadow-sm
              min-w-[300px]
            ">

              <p className="
                text-sm text-gray-400
              ">
                Quiz Status
              </p>

              <div className="
                flex items-center gap-3
                mt-4
              ">

                <div
                  className={`
                    w-4 h-4 rounded-full

                    ${
                      quiz.isSubmitted || result
                        ? "bg-green-500"
                        : "bg-orange-500"
                    }
                  `}
                ></div>

                <h3 className="
                  text-xl font-bold text-gray-900
                ">
                  {quiz.isSubmitted || result
                    ? "Completed"
                    : "Pending"}
                </h3>

              </div>

              <p className="
                text-sm text-gray-500
                mt-4 leading-relaxed
              ">
                Complete the assessment to
                evaluate your understanding.
              </p>

            </div>

          </div>

        </div>

        {/* ================= RESULTS ================= */}
        {(result || alreadySubmitted) && (
          <div className="mb-14">

            {/* RESULT HEADER */}
            <div className="
              bg-white
              rounded-[36px]
              border border-gray-100
              shadow-[0_10px_40px_rgba(0,0,0,0.05)]
              p-10
            ">

              <div className="
                flex items-center justify-between
                gap-10 flex-wrap
              ">

                {/* LEFT */}
                <div>

                  <div className="
                    inline-flex items-center gap-2
                    px-4 py-2 rounded-full
                    bg-green-100 text-green-600
                    text-sm font-semibold
                  ">
                    <i className="ri-trophy-line"></i>

                    Quiz Completed
                  </div>

                  <h2 className="
                    text-[42px]
                    font-bold
                    text-gray-900
                    mt-6
                  ">
                    Assessment Results
                  </h2>

                  <p className="
                    text-gray-500
                    mt-4
                    leading-[1.9]
                    max-w-xl
                  ">
                    Review your answers,
                    explanations, and overall
                    performance insights.
                  </p>

                </div>

                {/* SCORE */}
                {result && (
                  <ScoreCircle
                    percentage={
                      result.percentage
                    }
                    score={result.score}
                    total={result.total}
                  />
                )}

              </div>

            </div>

            {/* RESULTS LIST */}
            {result?.results && (
              <div className="
                mt-10 space-y-8
              ">

                {result.results.map(
                  (item, index) => (
                    <ResultCard
                      key={index}
                      result={item}
                      index={index}
                    />
                  )
                )}

              </div>
            )}

          </div>
        )}

        {/* ================= QUESTIONS ================= */}
        <div className="space-y-8">

          {quiz.questions.map(
            (question, index) => (
              <QuestionCard
                key={question.id}
                question={question}
                currentQuestion={index + 1}
                totalQuestions={
                  quiz.questions.length
                }

                selectedAnswer={
                  answers[question.id] ||
                  question.answer
                }

                setSelectedAnswer={(value) => {
                  if (
                    !quiz.isSubmitted &&
                    !result
                  ) {
                    setAnswers((prev) => ({
                      ...prev,
                      [question.id]: value,
                    }));
                  }
                }}

                readOnly={
                  quiz.isSubmitted || result
                }

                submitted={
                  quiz.isSubmitted || result
                }
              />
            )
          )}

          {/* SUBMIT */}
          {!quiz.isSubmitted && !result && (
            <div className="
              flex justify-center pt-4
            ">

              <button
                onClick={handleSubmit}
                disabled={submitting}
                className="
                  h-16 px-10 rounded-2xl
                  bg-blue-600 text-white
                  text-lg font-semibold
                  hover:bg-blue-700
                  transition-all duration-300
                  shadow-[0_10px_30px_rgba(59,130,246,0.2)]
                  disabled:opacity-60
                "
              >
                {submitting ? (
                  <div className="
                    flex items-center gap-3
                  ">

                    <div className="
                      w-5 h-5 rounded-full
                      border-2 border-white/40
                      border-t-white
                      animate-spin
                    "></div>

                    Submitting...
                  </div>
                ) : (
                  "Submit Quiz →"
                )}
              </button>

            </div>
          )}

        </div>

        {/* PRACTICAL TASK */}
        <PracticalTaskCard
          task={quiz.practical_task}
        />

      </div>
    </MainLayout>
  );
}

export default QuizDetailsPage;