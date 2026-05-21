import MainLayout from "../layouts/MainLayout";
import api from "../services/api";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  BookOpen,
  Lock,
  CheckCircle,
} from "lucide-react";

function ProgressPage() {

  const [path, setPath] = useState(null);
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {

    const fetchData = async () => {

      try {

        const pathRes = await api.get(
          "/learning-path/me"
        );

        const pathData = pathRes.data.data;

        setPath(pathData);

        try {

          const progressRes = await api.get(
            "/progress/me"
          );

          setProgress(progressRes.data.data);

        } catch (err) {

          if (
            err.response?.data?.message ===
            "No progress found"
          ) {

            const firstTopic =
              pathData?.phases?.[0]?.courses?.[0]
                ?.topics?.[0];

            if (firstTopic) {

              const createRes =
                await api.post(
                  "/progress/update",
                  {
                    topic: firstTopic,
                    hours: 0,
                  }
                );

              setProgress(createRes.data.data);

            }

          } else {
            console.error(
              "progress error",
              err
            );
          }

        }

      } catch (err) {

        console.error("path error", err);

        navigate("/growth-plan");

      } finally {

        setLoading(false);

      }

    };

    fetchData();

  }, []);

  const getPhaseStatus = (
    phase,
    index
  ) => {

    const completed =
      progress?.completedTopics || [];

    const topics =
      phase.courses?.[0]?.topics || [];

    const completedCount = topics.filter(
      (t) => completed.includes(t)
    ).length;

    const isCompleted =
      completedCount === topics.length;

    const isCurrent =
      completedCount > 0 &&
      !isCompleted;

    const isLocked =
      completedCount === 0 &&
      index !== 0;

    return {
      isCompleted,
      isCurrent,
      isLocked,
    };

  };

  if (loading)
    return (
      <MainLayout>
        <p className="text-center mt-20">
          Loading...
        </p>
      </MainLayout>
    );

  if (!path) return null;

  const phases = path.phases || [];

  const safeProgress = {

    overallProgress: 0,

    totalHoursStudied: 0,

    completedTopics: [],

    strongTopics: [],

    ...(progress || {}),

  };
const completedTopics =
  safeProgress.completedTopics || [];

  const normalize =
  (str) =>
    str
      ?.trim()
      ?.toLowerCase();

  const title =
    path?.meta?.path_title ||
    "Learning Path";

  const [mainTitle, subTitle] =
    title.includes(":")
      ? title.split(":")
      : [title, ""];

  const isAssessmentUnlocked =
  Number(
    safeProgress.overallProgress || 0
  ) >= 100;

  return (
    <MainLayout>

      <div
        className="
          max-w-[1100px]
          mx-auto
        "
      >

        {/* HEADER */}
        <div className="mb-20">

          <div
            className="
              flex flex-wrap
              items-center
              gap-3
              mb-4
            "
          >

            <span
              className="
                bg-green-100
                text-green-600

                px-3 py-1
                rounded-full

                text-xs
                font-medium
              "
            >
              ACTIVE PATH
            </span>

            <span
              className="
                text-gray-400
                text-sm
              "
            >
              {safeProgress.overallProgress.toFixed(
                0
              )}
              % Completed
            </span>

          </div>

          <h1
            className="
              text-3xl
              sm:text-5xl

              font-bold
              leading-tight
              tracking-tight
            "
          >

            {mainTitle}

            <br />

            <span className="text-blue-600">
              {subTitle}
            </span>

          </h1>

          <p
            className="
              text-gray-500

              mt-6

              max-w-xl

              text-base
              sm:text-lg
            "
          >
            {path.generatedFrom.goal}
          </p>

        </div>

        {/* TIMELINE */}
        <div className="relative mt-20">

          {/* DESKTOP LINE */}
          <div
            className="
              hidden lg:block

              absolute
              left-1/2
              top-0

              h-full
              w-[2px]

              bg-gray-200

              -translate-x-1/2
            "
          />

          {/* MOBILE LINE */}
          <div
            className="
              lg:hidden

              absolute
              left-6
              top-0

              h-full
              w-[2px]

              bg-gray-200
            "
          />

          <div className="space-y-12 lg:space-y-32">

            {phases.map(
              (phase, index) => {

                const isLeft =
                  index % 2 === 0;

                const {
                  isCompleted,
                  isCurrent,
                  isLocked,
                } = getPhaseStatus(
                  phase,
                  index
                );

                return (
                  <div
                    key={index}
                    className="
                      relative
                    "
                  >

                    {/* MOBILE */}
                    <div
                      className="
                        lg:hidden
                        pl-16
                        relative
                      "
                    >

                      {/* ICON */}
                      <div
                        className="
                          absolute
                          left-0 top-2
                          z-10
                        "
                      >

                        <div
                          className={`
                            w-12 h-12
                            rounded-full

                            flex items-center justify-center

                            shadow-lg
                            text-white

                            ${
                              isCompleted
                                ? "bg-green-500"
                                : isCurrent
                                ? "bg-blue-600"
                                : "bg-gray-300"
                            }
                          `}
                        >

                          {isCompleted ? (
                            <CheckCircle size={20} />
                          ) : isCurrent ? (
                            <BookOpen size={20} />
                          ) : (
                            <Lock size={20} />
                          )}

                        </div>

                      </div>

                      {/* TEXT */}
                      <div className="mb-4">

                        <h3 className="text-lg font-semibold">
                          {phase.phase_title}
                        </h3>

                        <p className="text-gray-500 text-sm mt-1">
                          {phase.objective}
                        </p>

                      </div>

                      {/* CARD */}
                      <div
                        className={`
                          rounded-2xl
                          p-5
                          shadow-lg

                          ${
                            isCompleted
                              ? "bg-green-50"
                              : isCurrent
                              ? "bg-white border border-blue-200"
                              : "bg-gray-100 opacity-70"
                          }
                        `}
                      >

                        <p className="text-xs mb-2 text-gray-400">
                          MODULE {phase.phase_number}
                        </p>

                        <div className="space-y-2 text-sm text-gray-600">

                          <p className="font-medium">
                            Topics covered:
                          </p>

                          {phase.courses?.[0]?.topics?.map(
                            (t, i) => (
                              <div
                                key={i}
                                className="
                                  flex items-center
                                  gap-2
                                "
                              >

                                {completedTopics.some(
                                              (topic) =>
                                                normalize(topic) ===
                                                normalize(t)
                                            ) ? (

                                  <span
                                    className="
                                      text-green-600
                                      font-bold
                                    "
                                  >
                                    ✓
                                  </span>

                                ) : (

                                  <span
                                    className="
                                      w-2 h-2

                                      rounded-full

                                      bg-gray-300

                                      block
                                    "
                                  />

                                )}

                                {t}

                              </div>
                            )
                          )}

                        </div>

                        {isCurrent && (
                          <button
                            onClick={() =>
                              navigate(
                                "/my-learning"
                              )
                            }
                            className="
                              w-full
                              mt-5

                              bg-blue-600
                              text-white

                              py-3
                              rounded-full
                            "
                          >
                            Continue Learning →
                          </button>
                        )}

                        {isCompleted && (
                          <button
                            onClick={() =>
                              navigate(
                                `/project/${phase.phase_number}`
                              )
                            }
                            className="
                              w-full
                              mt-5

                              bg-green-600
                              text-white

                              py-3
                              rounded-full
                            "
                          >
                            View Project →
                          </button>
                        )}

                      </div>

                    </div>

                    {/* DESKTOP */}
                    <div
                      className="
                        hidden lg:flex
                        items-center
                      "
                    >

                      {/* LEFT TEXT */}
                      {isLeft && (
                        <div className="w-1/2 pr-12 text-right">

                          <h3 className="text-lg font-semibold">
                            {phase.phase_title}
                          </h3>

                          <p className="text-gray-500 text-sm mt-1">
                            {phase.objective}
                          </p>

                        </div>
                      )}

                      {/* ICON */}
                      <div
                        className="
                          absolute
                          left-1/2

                          -translate-x-1/2
                          z-10
                        "
                      >

                        <div
                          className={`
                            w-14 h-14
                            rounded-full

                            flex items-center justify-center

                            shadow-lg
                            text-white

                            ${
                              isCompleted
                                ? "bg-green-500"
                                : isCurrent
                                ? "bg-blue-600"
                                : "bg-gray-300"
                            }
                          `}
                        >

                          {isCompleted ? (
                            <CheckCircle />
                          ) : isCurrent ? (
                            <BookOpen />
                          ) : (
                            <Lock />
                          )}

                        </div>

                      </div>

                      {/* CARD */}
                      <div
                        className={`
                          w-1/2
                          ${
                            isLeft
                              ? "pl-12"
                              : "pr-12"
                          }
                        `}
                      >

                        <div
                          className={`
                            rounded-2xl
                            p-6
                            shadow-lg

                            ${
                              isCompleted
                                ? "bg-green-50"
                                : isCurrent
                                ? "bg-white border border-blue-200"
                                : "bg-gray-100 opacity-70"
                            }
                          `}
                        >

                          <p className="text-xs mb-2 text-gray-400">
                            MODULE {phase.phase_number}
                          </p>

                          <div className="space-y-2 text-sm text-gray-600">

                            <p className="font-medium">
                              Topics covered:
                            </p>

                            {phase.courses?.[0]?.topics?.map(
                              (t, i) => (
                                <div
                                  key={i}
                                  className="
                                    flex items-center
                                    gap-2
                                  "
                                >

                                  {
                                  completedTopics.some(
                                    (topic) =>
                                      normalize(topic) ===
                                      normalize(t)
                                  ) ? (

                                    <span
                                      className="
                                        text-green-600
                                        font-bold
                                      "
                                    >
                                      ✓
                                    </span>

                                  ) : (

                                    <span
                                      className="
                                        w-2 h-2

                                        rounded-full

                                        bg-gray-300

                                        block
                                      "
                                    />

                                  )
                                }

                                {t}

                                </div>
                              )
                            )}

                          </div>

                        </div>

                      </div>

                      {/* RIGHT TEXT */}
                      {!isLeft && (
                        <div className="w-1/2 pl-12">

                          <h3 className="text-lg font-semibold">
                            {phase.phase_title}
                          </h3>

                          <p className="text-gray-500 text-sm mt-1">
                            {phase.objective}
                          </p>

                        </div>
                      )}

                    </div>

                  </div>
                );

              }
            )}

          </div>

        </div>

        {/* FINAL ASSESSMENT */}
        <div className="flex justify-center mt-40">

          <div
            className="
              bg-gradient-to-br
              from-purple-300
              to-purple-500

              w-full
              max-w-[420px]

              rounded-3xl

              p-6
              sm:p-10

              text-center
              shadow-2xl
            "
          >

            <div
              className="
                w-16 h-16
                mx-auto mb-4

                bg-white/30

                rounded-full

                flex items-center justify-center

                text-white
                text-2xl
              "
            >
              🏆
            </div>

            <h3 className="text-white text-lg font-semibold">
              Final Assessment
            </h3>

            <p className="text-purple-100 text-sm mt-3">
              This final assessment reflects
              your current level, not your
              limits, your growth starts from
              here.
            </p>

            <button

              disabled={
                !isAssessmentUnlocked
              }

              onClick={() => {

                if (
                  !isAssessmentUnlocked
                ) return;

                navigate(
                  "/assessments",
                  {
                    state: {
                      fromProgress: true,
                    },
                  }
                );

              }}

              className={`
                mt-6

                px-6 py-3

                rounded-full

                font-semibold

                transition-all duration-300

                ${
                  isAssessmentUnlocked
                    ? `
                      bg-white
                      text-purple-600

                      hover:scale-105
                    `
                    : `
                      bg-white/30
                      text-white/70

                      cursor-not-allowed
                    `
                }
              `}
            >
              Start Final Assessment →
            </button>

          </div>

        </div>

        {/* FOOTER */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2

            gap-6
            mt-24
          "
        >

          <div
            className="
              bg-white
              p-6
              rounded-xl
              shadow-sm
            "
          >

            <p className="text-gray-400 text-sm">
              TOTAL TIME INVESTED
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {safeProgress.totalHoursStudied} Hours
            </h2>

          </div>

          <div
            className="
              bg-white
              p-6
              rounded-xl
              shadow-sm
            "
          >

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
                  className="
                    bg-blue-100
                    text-blue-600

                    px-3 py-1
                    rounded-full

                    text-sm
                  "
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