import { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

function RightSidebar() {

  const [data, setData] =
    useState(null);

  const navigate = useNavigate();

  useEffect(() => {

    const fetchContext = async () => {

      try {

        const res = await api.get(
          "/user-context"
        );

        setData(res.data.data);

      } catch (err) {

        console.error(err);

      }

    };

    fetchContext();

  }, []);

  if (!data) return null;

  return (
    <div className="space-y-4">

      {/* CURRENT TRACK */}
      <div
        className="
          bg-white

          p-5

          rounded-2xl

          shadow-sm
        "
      >

        {/* TOP */}
        <div
          className="
            flex items-center
            justify-between

            gap-3

            mb-3
          "
        >

          <span
            className="
              text-xs

              bg-purple-100
              text-purple-600

              px-2 py-1

              rounded-full

              whitespace-nowrap
            "
          >
            ACTIVE
          </span>

          <span
            className="
              text-xs
              text-gray-400

              flex-shrink-0
            "
          >
            {Math.round(
              data.overallProgressPercent
            )}
            %
          </span>

        </div>

        {/* TITLE */}
        <h3
          className="
            font-semibold

            break-words
            leading-snug
          "
        >
          {data.currentCourseTitle}
        </h3>

        {/* SUBTITLE */}
        <p
          className="
            text-xs
            text-gray-500

            mt-1

            break-words
          "
        >
          Focus:{" "}
          {data.currentPhaseTitle}
        </p>

        {/* PROGRESS */}
        <div
          className="
            h-2

            bg-gray-200

            rounded-full

            mt-4
            overflow-hidden
          "
        >

          <div
            className="
              h-full
              bg-blue-600
              rounded-full

              transition-all duration-500
            "
            style={{
              width: `${data.overallProgressPercent}%`,
            }}
          />

        </div>

      </div>

      {/* MILESTONE */}
      <div
        onClick={() => {
          navigate("/quizzes");
        }}
        className="
          bg-green-100

          p-5

          rounded-2xl

          cursor-pointer

          hover:shadow-md
          hover:-translate-y-0.5

          transition-all duration-300
        "
      >

        <p
          className="
            text-xs
            text-green-700

            font-medium
          "
        >
          MILESTONE
        </p>

        <h4
          className="
            font-semibold
            mt-1

            leading-snug
          "
        >
          Complete Integration Quiz
        </h4>

        <p
          className="
            text-xs
            text-green-700

            mt-1
          "
        >
          Scheduled soon
        </p>

      </div>

      {/* ACTIONS */}
      <div
        className="
          grid
          grid-cols-2

          gap-3
        "
      >

        {[
          {
            icon: "📘",
            label: "View Syllabus",
          },
          {
            icon: "🎥",
            label: "Video Recap",
          },
          {
            icon: "✅",
            label: "Exercises",
          },
          {
            icon: "🕒",
            label: "History",
          },
        ].map((item, i) => (

          <button
            key={i}
            className="
              bg-white

              p-4

              rounded-xl

              shadow-sm

              text-sm

              flex flex-col
              items-center
              justify-center

              gap-2

              text-center

              min-h-[96px]

              hover:shadow-md
              hover:-translate-y-0.5

              transition-all duration-300
            "
          >

            <span className="text-xl">
              {item.icon}
            </span>

            <span
              className="
                leading-snug
                break-words
              "
            >
              {item.label}
            </span>

          </button>

        ))}

      </div>

      {/* TOGGLES */}
      <div
        className="
          bg-white

          p-5

          rounded-2xl

          shadow-sm
        "
      >

        <p
          className="
            text-xs
            text-gray-400

            mb-4
          "
        >
          TUTOR MODE
        </p>

        {/* TOGGLE */}
        <div
          className="
            flex items-center
            justify-between

            gap-4

            mb-4
          "
        >

          <div className="min-w-0">

            <p className="font-medium">
              Encouraging
            </p>

            <p
              className="
                text-xs
                text-gray-500

                mt-1
              "
            >
              Softer motivational guidance
            </p>

          </div>

          <input
            type="checkbox"
            defaultChecked
            className="
              w-4 h-4
              flex-shrink-0
            "
          />

        </div>

        {/* TOGGLE */}
        <div
          className="
            flex items-center
            justify-between

            gap-4
          "
        >

          <div className="min-w-0">

            <p className="font-medium">
              Deep Dive
            </p>

            <p
              className="
                text-xs
                text-gray-500

                mt-1
              "
            >
              More detailed explanations
            </p>

          </div>

          <input
            type="checkbox"
            className="
              w-4 h-4
              flex-shrink-0
            "
          />

        </div>

      </div>

    </div>
  );
}

export default RightSidebar;