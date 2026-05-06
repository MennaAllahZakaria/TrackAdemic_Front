import { useEffect, useMemo, useState } from "react";
import MainLayout from "../../layouts/MainLayout";

import api from "../../services/api";
import { toast } from "react-hot-toast";

import QuizCard from "../../components/quiz/QuizCard";
import QuizStats from "../../components/quiz/QuizStats";
import QuizTabs from "../../components/quiz/QuizTabs";
import GenerateQuizModal from "../../components/quiz/GenerateQuizModal";

function QuizzesPage() {
  const [quizzes, setQuizzes] = useState([]);

  const [loading, setLoading] = useState(true);

  const [activeTab, setActiveTab] =
    useState("all");

  const [search, setSearch] = useState("");

  const [openGenerate, setOpenGenerate] =
    useState(false);

  // ================= FETCH =================
  const fetchQuizzes = async () => {
    try {
      setLoading(true);

      const res = await api.get("/quiz/my");

      setQuizzes(res.data.data || []);

    } catch (err) {
      console.error(err);

      toast.error(
        err?.response?.data?.message ||
          "Failed to load quizzes"
      );

    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuizzes();
  }, []);

  // ================= FILTER =================
  const filteredQuizzes = useMemo(() => {
    let filtered = [...quizzes];

    // tabs
    if (activeTab === "completed") {
      filtered = filtered.filter(
        (q) => q.isSubmitted
      );
    }

    if (activeTab === "pending") {
      filtered = filtered.filter(
        (q) => !q.isSubmitted
      );
    }

    // search
    if (search.trim()) {
      filtered = filtered.filter((q) =>
        q.topic
          ?.toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    return filtered;
  }, [quizzes, activeTab, search]);

  return (
    <MainLayout>
      <div className="
        max-w-[1200px]
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

            AI Powered Assessments
          </div>

          <div className="
            flex items-start justify-between
            gap-10 flex-wrap
          ">

            {/* LEFT */}
            <div>

              <h1 className="
                text-[54px]
                font-bold
                leading-tight
                text-gray-900
              ">
                Master concepts with
                <span className="
                  text-blue-600
                ">
                  {" "}Smart Quizzes.
                </span>
              </h1>

              <p className="
                text-gray-500
                mt-5
                max-w-2xl
                leading-[1.9]
              ">
                Generate personalized AI quizzes,
                challenge your understanding,
                track your performance, and
                improve weak areas with detailed
                explanations and analytics.
              </p>

            </div>

            {/* ACTION */}
            <button
              onClick={() =>
                setOpenGenerate(true)
              }
              className="
                h-14 px-7 rounded-2xl
                bg-blue-600 text-white
                font-semibold
                hover:bg-blue-700
                transition-all duration-300
                shadow-[0_10px_30px_rgba(59,130,246,0.2)]
                flex items-center gap-3
              "
            >
              <i className="
                ri-add-line text-xl
              "></i>

              Generate Quiz
            </button>

          </div>

        </div>

        {/* STATS */}
        <QuizStats quizzes={quizzes} />

        {/* FILTER BAR */}
        <div className="
          flex items-center justify-between
          gap-5 flex-wrap
          mb-8
        ">

          {/* TABS */}
          <QuizTabs
            quizzes={quizzes}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          {/* SEARCH */}
          <div className="relative">

            <i className="
              ri-search-line
              absolute left-4 top-1/2
              -translate-y-1/2
              text-gray-400
            "></i>

            <input
              type="text"
              placeholder="Search quizzes..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="
                w-[300px] h-14
                pl-12 pr-4
                rounded-2xl
                border border-gray-200
                bg-white
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                transition-all duration-300
              "
            />

          </div>

        </div>

        {/* LOADING */}
        {loading ? (
          <div className="
            min-h-[300px]
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
                Loading quizzes...
              </p>

            </div>

          </div>
        ) : filteredQuizzes.length === 0 ? (
          // EMPTY
          <div className="
            bg-white
            rounded-[36px]
            border border-gray-100
            p-14
            text-center
            shadow-sm
          ">

            <div className="
              w-24 h-24 rounded-full
              bg-blue-50
              text-blue-600
              flex items-center justify-center
              mx-auto
            ">
              <i className="
                ri-questionnaire-line text-5xl
              "></i>
            </div>

            <h2 className="
              text-[34px]
              font-bold
              text-gray-900
              mt-8
            ">
              No Quizzes Found
            </h2>

            <p className="
              text-gray-500
              mt-4
              max-w-xl
              mx-auto
              leading-[1.9]
            ">
              Start your learning journey by
              generating your first personalized
              AI quiz tailored to your goals.
            </p>

            <button
              onClick={() =>
                setOpenGenerate(true)
              }
              className="
                mt-8
                h-14 px-8 rounded-2xl
                bg-blue-600 text-white
                font-semibold
                hover:bg-blue-700
                transition-all duration-300
              "
            >
              Generate Quiz →
            </button>

          </div>
        ) : (
          // GRID
          <div className="
            grid grid-cols-3 gap-7
          ">

            {filteredQuizzes.map((quiz) => (
              <QuizCard
                key={quiz._id}
                quiz={quiz}
              />
            ))}

          </div>
        )}

        {/* GENERATE MODAL */}
        <GenerateQuizModal
          open={openGenerate}
          setOpen={setOpenGenerate}
        />

      </div>
    </MainLayout>
  );
}

export default QuizzesPage;