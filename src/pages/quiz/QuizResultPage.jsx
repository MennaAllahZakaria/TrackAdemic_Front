import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";

import api from "../../services/api";
import { toast } from "react-hot-toast";

import ScoreCircle from "../../components/quiz/ScoreCircle";
import ResultCard from "../../components/quiz/ResultCard";

function QuizResultPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [quiz, setQuiz] = useState(null);

  const [loading, setLoading] = useState(true);

  // ================= FETCH =================
  const fetchQuiz = async () => {
    try {
      setLoading(true);

      const res = await api.get(`/quiz/${id}`);

      setQuiz(res.data.data);

    } catch (err) {
      console.error(err);

      toast.error(
        err?.response?.data?.message ||
          "Failed to load quiz result"
      );

    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuiz();
  }, []);

  // ================= SCORE =================
  const stats = useMemo(() => {
    if (!quiz?.questions) {
      return {
        total: 0,
        correct: 0,
        wrong: 0,
        percentage: 0,
      };
    }

    const total = quiz.questions.length;

    const correct = quiz.questions.filter(
      (q) => q.answer === q.correct_answer
    ).length;

    const wrong = total - correct;

    const percentage = Math.round(
      (correct / total) * 100
    );

    return {
      total,
      correct,
      wrong,
      percentage,
    };
  }, [quiz]);

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

            <p className="
              text-gray-500 mt-5
            ">
              Loading results...
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
            p-10
            text-center
            shadow-sm
            max-w-md
          ">

            <div className="
              w-20 h-20 rounded-full
              bg-red-100 text-red-500
              flex items-center justify-center
              mx-auto
            ">
              <i className="ri-error-warning-line text-4xl"></i>
            </div>

            <h2 className="
              text-2xl font-bold text-gray-900
              mt-6
            ">
              Result Not Found
            </h2>

            <p className="
              text-gray-500 mt-3 leading-relaxed
            ">
              The requested quiz result
              could not be found.
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

  // ================= RESULT DATA =================
  const resultList = quiz.questions.map(
    (q) => ({
      question: q.question,
      correct:
        q.answer === q.correct_answer,
      userAnswer: q.answer,
      CorrectAnswer: q.correct_answer,
      Explanation: q.explanation,
    })
  );

  return (
    <MainLayout>
      <div className="
        max-w-[1150px]
        mx-auto
        pb-20
      ">

        {/* HERO */}
        <div className="mb-14">

          <div className="
            inline-flex items-center gap-2
            px-4 py-2 rounded-full
            bg-green-100 text-green-600
            text-sm font-semibold
            mb-5
          ">
            <i className="ri-award-line"></i>

            Assessment Completed
          </div>

          <div className="
            flex items-start justify-between
            gap-10 flex-wrap
          ">

            {/* LEFT */}
            <div>

              <h1 className="
                text-[52px]
                leading-tight
                font-bold
                text-gray-900
              ">
                Quiz Performance
                <span className="
                  text-blue-600
                ">
                  {" "}Analytics.
                </span>
              </h1>

              <p className="
                text-gray-500
                mt-5
                leading-[1.9]
                max-w-2xl
              ">
                Analyze your quiz performance,
                review explanations, and identify
                areas that need improvement.
              </p>

              {/* BADGES */}
              <div className="
                flex items-center gap-3
                mt-7 flex-wrap
              ">

                <div className="
                  px-4 py-2 rounded-full
                  bg-blue-100 text-blue-600
                  text-sm font-semibold
                ">
                  {quiz.topic}
                </div>

                <div className="
                  px-4 py-2 rounded-full
                  bg-purple-100 text-purple-600
                  text-sm font-semibold capitalize
                ">
                  {quiz.level}
                </div>

                <div className="
                  px-4 py-2 rounded-full
                  bg-orange-100 text-orange-600
                  text-sm font-semibold
                ">
                  {stats.total} Questions
                </div>

              </div>

            </div>

            {/* SCORE */}
            <ScoreCircle
              percentage={stats.percentage}
              score={stats.correct}
              total={stats.total}
            />

          </div>

        </div>

        {/* STATS */}
        <div className="
          grid grid-cols-3 gap-6
          mb-14
        ">

          {/* CORRECT */}
          <div className="
            bg-white
            rounded-[30px]
            border border-gray-100
            p-7
            shadow-sm
          ">

            <div className="
              w-14 h-14 rounded-2xl
              bg-green-100 text-green-600
              flex items-center justify-center
            ">
              <i className="
                ri-checkbox-circle-line text-2xl
              "></i>
            </div>

            <p className="
              text-sm text-gray-400 mt-6
            ">
              Correct Answers
            </p>

            <h2 className="
              text-[40px]
              font-bold
              text-gray-900 mt-2
            ">
              {stats.correct}
            </h2>

          </div>

          {/* WRONG */}
          <div className="
            bg-white
            rounded-[30px]
            border border-gray-100
            p-7
            shadow-sm
          ">

            <div className="
              w-14 h-14 rounded-2xl
              bg-red-100 text-red-600
              flex items-center justify-center
            ">
              <i className="
                ri-close-circle-line text-2xl
              "></i>
            </div>

            <p className="
              text-sm text-gray-400 mt-6
            ">
              Wrong Answers
            </p>

            <h2 className="
              text-[40px]
              font-bold
              text-gray-900 mt-2
            ">
              {stats.wrong}
            </h2>

          </div>

          {/* PASSING */}
          <div className="
            bg-white
            rounded-[30px]
            border border-gray-100
            p-7
            shadow-sm
          ">

            <div className="
              w-14 h-14 rounded-2xl
              bg-blue-100 text-blue-600
              flex items-center justify-center
            ">
              <i className="
                ri-bar-chart-box-line text-2xl
              "></i>
            </div>

            <p className="
              text-sm text-gray-400 mt-6
            ">
              Passing Score
            </p>

            <h2 className="
              text-[40px]
              font-bold
              text-gray-900 mt-2
            ">
              {quiz.passing_score}%
            </h2>

          </div>

        </div>

        {/* RESULTS */}
        <div>

          <div className="
            flex items-center justify-between
            gap-5 flex-wrap
            mb-8
          ">

            <div>

              <h2 className="
                text-[34px]
                font-bold
                text-gray-900
              ">
                Detailed Breakdown
              </h2>

              <p className="
                text-gray-500 mt-2
              ">
                Review all answers and explanations.
              </p>

            </div>

            {/* ACTIONS */}
            <div className="
              flex items-center gap-4
            ">

              <button
                onClick={() =>
                  navigate("/quizzes")
                }
                className="
                  h-12 px-6 rounded-2xl
                  border border-gray-200
                  bg-white
                  hover:bg-gray-100
                  transition-all duration-300
                  font-medium text-gray-700
                "
              >
                Back to Quizzes
              </button>

              <button
                onClick={() =>
                  navigate(`/quiz/${quiz._id}`)
                }
                className="
                  h-12 px-6 rounded-2xl
                  bg-blue-600 text-white
                  hover:bg-blue-700
                  transition-all duration-300
                  font-medium
                  shadow-sm
                "
              >
                Review Quiz →
              </button>

            </div>

          </div>

          {/* LIST */}
          <div className="
            space-y-8
          ">

            {resultList.map(
              (item, index) => (
                <ResultCard
                  key={index}
                  result={item}
                  index={index}
                />
              )
            )}

          </div>

        </div>

      </div>
    </MainLayout>
  );
}

export default QuizResultPage;