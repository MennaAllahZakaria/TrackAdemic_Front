import MainLayout from "../layouts/MainLayout";
import api from "../services/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProgressPage() {
  const [path, setPath] = useState(null);
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // ✅ 1. نجيب path الأول
        const pathRes = await api.get("/learning-path/me");
        const pathData = pathRes.data.data;
        setPath(pathData);

        try {
          // ✅ 2. نحاول نجيب progress
          const progressRes = await api.get("/progress/me");
          setProgress(progressRes.data.data);
        } catch (err) {
          // ✅ 3. لو مفيش progress → نعمله auto
          if (err.response?.data?.message === "No progress found") {
            
            const firstTopic =
              pathData?.phases?.[0]?.courses?.[0]?.topics?.[0];

            if (firstTopic) {
              const createRes = await api.post("/progress/update", {
                topic: firstTopic,
                hours: 0,
              });

              setProgress(createRes.data.data);
            }
          } else {
            console.error("progress error", err);
          }
        }

      } catch (err) {
        console.error("path error", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  
  const getPhaseStatus = (phase, index) => {
    const completed = progress?.completedTopics || [];

    const topics = phase.courses?.[0]?.topics || [];

    const completedCount = topics.filter((t) =>
      completed.includes(t)
    ).length;

    const isCompleted = completedCount === topics.length;

    const isCurrent =
      completedCount > 0 && !isCompleted;

    const isLocked =
      completedCount === 0 && index !== 0;

    return { isCompleted, isCurrent, isLocked };
  };

  // ================= LOADING =================
  if (loading)
    return (
      <MainLayout>
        <p className="text-center mt-20">Loading...</p>
      </MainLayout>
    );

  if (!path) return null;

  // ================= SAFE DATA =================
  const phases = path.phases || [];

  const safeProgress = progress || {
    overallProgress: 0,
    totalHoursStudied: 0,
    completedTopics: [],
    strongTopics: [],
  };

  // ✅ current phase calculated
  const currentIndex = phases.findIndex((phase) => {
      const topics = phase.courses?.[0]?.topics || [];
      const completed = progress?.completedTopics || [];

      const completedCount = topics.filter((t) =>
        completed.includes(t)
      ).length;

      return completedCount < topics.length;
    });

  // ✅ title
  const title = path?.meta?.path_title || "Learning Path";
  const [mainTitle, subTitle] = title.includes(":")
    ? title.split(":")
    : [title, ""];

  return (
    <MainLayout>
      <div className="max-w-[1100px] mx-auto">

        {/* ================= HEADER ================= */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-medium">
              ACTIVE PATH
            </span>

            <span className="text-gray-500 text-sm">
              {safeProgress.overallProgress.toFixed(0)}% Completed
            </span>
          </div>

          <h1 className="text-[48px] font-bold leading-tight">
            {mainTitle}
            <br />
            <span className="text-blue-600">{subTitle}</span>
          </h1>

          <p className="text-gray-500 mt-4 max-w-xl">
            {path.generatedFrom.goal}
          </p>
        </div>

        {/* ================= TIMELINE ================= */}
        <div className="relative">

          {/* LINE */}
          <div className="absolute left-1/2 top-0 w-[2px] h-full bg-gray-200 -translate-x-1/2" />

          <div className="space-y-24">

            {phases.map((phase, index) => {
              const isLeft = index % 2 === 0;
              const { isCompleted, isCurrent, isLocked } = getPhaseStatus(phase, index);

              return (
                <div
                  key={phase.phase_number}
                  className={`flex ${
                    isLeft ? "justify-start" : "justify-end"
                  } relative`}
                >

                  {/* CARD */}
                  <div className="w-[420px]">

                    {/* COMPLETED */}
                    {isCompleted && (
                      <div className="bg-green-50 p-5 rounded-xl shadow-sm">
                        <p className="text-xs text-green-600 mb-2">
                          MODULE {phase.phase_number} • COMPLETED
                        </p>

                        <h3 className="font-semibold">
                          {phase.phase_title}
                        </h3>

                        <ul className="text-sm text-gray-600 mt-2 space-y-1">
                          {phase.courses?.[0]?.topics?.map((t, i) => (
                            <li key={i}>• {t}</li>
                          ))}
                        </ul>

                        <button
                          onClick={() =>
                            navigate(`/project/${phase.phase_number}`)
                          }
                          className="mt-4 w-full bg-green-600 text-white py-2 rounded-full"
                        >
                          View Project →
                        </button>
                      </div>
                    )}

                    {/* CURRENT */}
                    {isCurrent && (
                      <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-200">

                        <p className="text-xs text-blue-600 mb-2">
                          MODULE {phase.phase_number} • IN PROGRESS
                        </p>

                        <h3 className="font-semibold mb-2">
                          {phase.phase_title}
                        </h3>

                        <p className="text-sm text-gray-500 mb-4">
                          {phase.objective}
                        </p>

                        <button
                          onClick={() =>
                            navigate(`/my-learning`)
                          }
                          className="w-full bg-blue-600 text-white py-3 rounded-full"
                        >
                          Continue Learning →
                        </button>
                      </div>
                    )}

                    {/* LOCKED */}
                    {isLocked && (
                      <div className="bg-gray-100 p-5 rounded-xl opacity-60">
                        <p className="text-xs text-gray-500 mb-2">
                          MODULE {phase.phase_number} • LOCKED
                        </p>

                        <h3 className="font-medium">
                          {phase.phase_title}
                        </h3>
                      </div>
                    )}

                  </div>

                  {/* ICON */}
                  <div className="absolute left-1/2 -translate-x-1/2">

                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-md
                      ${
                        isCompleted
                          ? "bg-green-500"
                          : isCurrent
                          ? "bg-blue-600"
                          : "bg-gray-300"
                      }`}
                    >
                      {isCompleted ? "✔" : isCurrent ? "📘" : "🔒"}
                    </div>

                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* ================= FINAL PROJECT CARD ================= */}
        <div className="flex justify-center mt-32">

          <div className="bg-gradient-to-br from-purple-300 to-purple-400
            w-[420px] rounded-3xl p-8 text-center shadow-xl">

            <div className="text-white text-4xl mb-3">🏆</div>

            <h3 className="text-white font-semibold">
              Final Project
            </h3>

            <p className="text-purple-100 text-sm mt-2">
              {path.success_metrics.final_outcome}
            </p>

            <button
              onClick={() => navigate("/project/3")}
              className="mt-6 bg-white text-purple-600 px-6 py-2 rounded-full"
            >
              Start Final Project →
            </button>

          </div>

        </div>

        {/* ================= FOOTER ================= */}
        <div className="grid grid-cols-2 gap-6 mt-24">

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <p className="text-gray-400 text-sm">
              TOTAL TIME INVESTED
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {safeProgress.totalHoursStudied} Hours
            </h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <p className="text-gray-400 text-sm">
              SKILLS ACQUIRED
            </p>

            <div className="flex flex-wrap gap-2 mt-3">
              {(safeProgress.strongTopics.length
                ? safeProgress.strongTopics
                : safeProgress.completedTopics
              ).map((s, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </MainLayout>
  );
}

export default ProgressPage;