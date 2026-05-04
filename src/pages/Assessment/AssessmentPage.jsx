import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

function AssessmentPage() {
  const [sessionId, setSessionId] = useState(null);
  const [question, setQuestion] = useState(null);
  const [current, setCurrent] = useState(1);
  const [total, setTotal] = useState(5);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // ================= START =================
  const startAssessment = async () => {
    try {
      setError(null);

      const res = await api.post("/assessment/start");

      setSessionId(res.data.sessionId);
      setQuestion(res.data.question);
      setCurrent(res.data.questionNumber);
      setTotal(res.data.totalQuestions);

    } catch (err) {
      const status = err.response?.status;

      if (status === 503) {
        setError("service");
      } else if (err.response?.data?.message === "Finish current assessment first") {
        setError("active");
      } else {
        setError("general");
      }

    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const init = async () => {
      try {
        const active = await api.get("/assessment/active");

        const data = active.data.data;

        setSessionId(data.sessionId);

        const lastAnswer = data.answers[data.answers.length - 1];

        setQuestion({
          question: lastAnswer.questionText,
          options: Object.fromEntries(
            lastAnswer.options.map((o) => [o.option, o.text])
          ),
        });

        setCurrent(data.currentQuestion);
        setTotal(data.totalQuestions);

      } catch (err) {
        const status = err.response?.status;

        if (status === 503) {
          setError("service");
        } else {
          setError("general");
        }

        setLoading(false); 
      }
    };

    init();
  }, []);
  // ================= ANSWER =================
  const handleAnswer = async () => {
    if (!selected) return;

    try {
      const res = await api.post("/assessment/answer", {
        sessionId,
        answer: selected,
      });

      if (res.data.status === "completed") {
        setResult(res.data.result);
      } else {
        setQuestion(res.data.question);
        setCurrent(res.data.questionNumber);
        setSelected(null);
      }

    } catch (err) {
      console.error(err);
      const status = err.response?.status;

      if (status === 503) {
        setError("service");
      } else if (err.response?.data?.message === "Finish current assessment first") {
        setError("active");
      } else {
        setError("general");
      }


    }
  };

  // ================= LOADING =================
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8fafc]">

        <div className="bg-white p-8 rounded-3xl shadow-md text-center w-[420px]">

          <div className="text-4xl mb-4">
            ⚠️
          </div>

          <h2 className="text-lg font-semibold mb-2">
            {error === "service"
              ? "Service Unavailable"
              : error === "active"
              ? "You have an active assessment"
              : "Something went wrong"}
          </h2>

          <p className="text-gray-500 text-sm mb-6">
            {error === "service"
              ? "The server is temporarily unavailable. Please try again in a moment."
              : error === "active"
              ? "Finish your current assessment before starting a new one."
              : "Unexpected error happened. Please try again."}
          </p>

          <div className="flex flex-col gap-3 mt-6">

            <button
              onClick={startAssessment}
              className="
                w-full py-3 rounded-xl
                bg-blue-600 text-white font-medium
                shadow-sm hover:bg-blue-700
                transition
              "
            >
              Try Again →
            </button>

            <button
              onClick={() => navigate("/")}
              className="
                w-full py-3 rounded-xl
                border border-gray-300
                text-gray-600 font-medium
                hover:bg-gray-50
                transition
              "
            >
              ← Back To Dashboard
            </button>

          </div>

        </div>

      </div>
    );
  }
  //if (loading) return <p className="text-center mt-20">Loading...</p>;

  // ================= RESULT =================
  if (result) {
    return (
      <MainLayout>
        <div className="max-w-[800px] mx-auto mt-20">

          <div className="bg-white rounded-3xl p-8 shadow text-center">

            <h2 className="text-2xl font-bold mb-4">
              Your Level: {result.level}
            </h2>

            <p className="text-gray-500 mb-6">
              {result.summary}
            </p>

            <div className="flex gap-6 justify-center">

              <div>
                <p className="font-semibold text-green-600">
                  Strong
                </p>
                {result.strongTopics.map((t, i) => (
                  <p key={i} className="text-sm">{t}</p>
                ))}
              </div>

              <div>
                <p className="font-semibold text-red-500">
                  Weak
                </p>
                {result.weakTopics.map((t, i) => (
                  <p key={i} className="text-sm">{t}</p>
                ))}
              </div>

            </div>

          </div>
        </div>
      </MainLayout>
    );
  }

  // ================= QUIZ =================
  return (
    <MainLayout>
      <div className="max-w-[800px] mx-auto mt-16">

        {/* PROGRESS */}
        <div className="mb-6">
          <p className="text-sm text-gray-400 mb-2">
            Question {current} of {total}
          </p>

          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 bg-blue-600 rounded-full transition-all"
              style={{
                width: `${(current / total) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* CARD */}
        <div className="bg-white rounded-3xl p-8 shadow">

          {/* QUESTION */}
          <h3 className="text-lg font-semibold mb-6">
            {question?.question}
          </h3>

          {/* OPTIONS */}
          <div className="space-y-4">

            {question?.options && Object.entries(question.options).map(([key, value]) => (
              <div
                key={key}
                onClick={() => setSelected(key)}
                className={`
                  p-4 rounded-xl border cursor-pointer transition
                  ${
                    selected === key
                      ? "border-blue-600 bg-blue-50"
                      : "border-gray-200 hover:bg-gray-50"
                  }
                `}
              >
                <span className="font-semibold mr-2">
                  {key}.
                </span>
                {value}
              </div>
            ))}

          </div>

          {/* BUTTON */}
          <button
            onClick={handleAnswer}
            className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl"
          >
            Next →
          </button>

        </div>

      </div>
    </MainLayout>
  );
}

export default AssessmentPage;