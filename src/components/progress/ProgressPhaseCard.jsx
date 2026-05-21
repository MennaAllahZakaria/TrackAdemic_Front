import {
  BookOpen,
  Lock,
  CheckCircle,
} from "lucide-react";

import ProgressTopicsList
from "./ProgressTopicsList";

import ProgressProjectCard
from "./ProgressProjectCard";

function ProgressPhaseCard({

  phase,

  index,

  completedTopics,

  navigate,

  normalize,

}) {

  // =========================
  // ALL TOPICS
  // =========================
  const topics =
    phase.courses?.flatMap(
      (course) =>
        course.topics || []
    ) || [];

  // =========================
  // COMPLETED COUNT
  // =========================
  const completedCount =
    topics.filter((t) =>
      completedTopics.some(
        (topic) =>
          normalize(topic) ===
          normalize(t)
      )
    ).length;

  // =========================
  // STATUS
  // =========================
  const isCompleted =
    completedCount ===
      topics.length &&
    topics.length > 0;

  const isCurrent =
    completedCount > 0 &&
    !isCompleted;

  const isLocked =
    completedCount === 0 &&
    index !== 0;

  const isLeft =
    index % 2 === 0;

  return (

    <div className="relative">

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

              flex items-center
              justify-center

              shadow-lg

              text-white

              ${
                isCompleted
                  ? "bg-green-500"
                  : isCurrent
                  ? "bg-blue-600"
                  : isLocked
                  ? "bg-gray-300"
                  : "bg-blue-500"
              }
            `}
          >

            {isCompleted ? (

              <CheckCircle
                size={20}
              />

            ) : isCurrent ? (

              <BookOpen
                size={20}
              />

            ) : (

              <Lock
                size={20}
              />

            )}

          </div>

        </div>

        {/* TITLE */}
        <div className="mb-4">

          <h3
            className="
              text-lg
              font-semibold
            "
          >
            {phase.phase_title}
          </h3>

          <p
            className="
              text-gray-500
              text-sm
              mt-1
            "
          >
            {phase.objective}
          </p>

        </div>

        {/* CARD */}
        <div
          className={`
            rounded-3xl
            p-5

            shadow-lg

            ${
              isCompleted
                ? "bg-green-50"
                : isCurrent
                ? `
                  bg-white
                  border
                  border-blue-200
                `
                : `
                  bg-gray-100
                  opacity-70
                `
            }
          `}
        >

          {/* HEADER */}
          <div
            className="
              flex items-center
              justify-between

              mb-4
            "
          >

            <p
              className="
                text-xs
                text-gray-400
              "
            >
              MODULE {phase.phase_number}
            </p>

            <span
              className="
                text-xs

                px-3 py-1

                rounded-full

                bg-white

                text-gray-500
              "
            >
              {
                completedCount
              }/{topics.length}
            </span>

          </div>

          {/* TOPICS */}
          <ProgressTopicsList
            topics={topics}
            completedTopics={
              completedTopics
            }
          />

          {/* CURRENT */}
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

                hover:bg-blue-700

                transition-all
              "
            >
              Continue Learning →
            </button>

          )}

          {/* PROJECT */}
           {isCompleted && 
           ( 
           <ProgressProjectCard 
                phase={phase} 
                navigate={navigate} 
            /> 
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

          <div
            className="
              w-1/2
              pr-12

              text-right
            "
          >

            <h3
              className="
                text-xl
                font-semibold
              "
            >
              {phase.phase_title}
            </h3>

            <p
              className="
                text-gray-500
                text-sm
                mt-2
              "
            >
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

              flex items-center
              justify-center

              shadow-xl

              text-white

              ${
                isCompleted
                  ? "bg-green-500"
                  : isCurrent
                  ? "bg-blue-600"
                  : isLocked
                  ? "bg-gray-300"
                  : "bg-blue-500"
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
              rounded-3xl
              p-6

              shadow-lg

              ${
                isCompleted
                  ? "bg-green-50"
                  : isCurrent
                  ? `
                    bg-white
                    border
                    border-blue-200
                  `
                  : `
                    bg-gray-100
                    opacity-70
                  `
              }
            `}
          >

            {/* HEADER */}
            <div
              className="
                flex items-center
                justify-between

                mb-4
              "
            >

              <p
                className="
                  text-xs
                  text-gray-400
                "
              >
                MODULE {phase.phase_number}
              </p>

              <span
                className="
                  text-xs

                  px-3 py-1

                  rounded-full

                  bg-white

                  text-gray-500
                "
              >
                {
                  completedCount
                }/{topics.length}
              </span>

            </div>

            {/* TOPICS */}
            <ProgressTopicsList
              topics={topics}
              completedTopics={
                completedTopics
              }
            />

            {/* CURRENT */}
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

                  hover:bg-blue-700

                  transition-all
                "
              >
                Continue Learning →
              </button>

            )}

            {/* PROJECT */}
            {isCompleted &&
              phase.project && (

              <ProgressProjectCard
                phase={phase}
                navigate={navigate}
              />

            )}

          </div>

        </div>

        {/* RIGHT TEXT */}
        {!isLeft && (

          <div
            className="
              w-1/2
              pl-12
            "
          >

            <h3
              className="
                text-xl
                font-semibold
              "
            >
              {phase.phase_title}
            </h3>

            <p
              className="
                text-gray-500
                text-sm
                mt-2
              "
            >
              {phase.objective}
            </p>

          </div>

        )}

      </div>

    </div>

  );
}

export default ProgressPhaseCard;

