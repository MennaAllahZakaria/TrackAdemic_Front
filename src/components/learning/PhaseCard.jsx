import {
  useEffect,
  useState,
} from "react";

import { getYoutubeThumbnail } from "../../utils/youtube";

import { useNavigate } from "react-router-dom";

function PhaseCard({ phase }) {
  const navigate =
    useNavigate();

  const handleOpen = () => {
    navigate(
      `/course/${phase.phase_number}`,
      {
        state: { phase },
      }
    );
  };

  const [image, setImage] =
    useState(null);

  useEffect(() => {
    const loadImage =
      async () => {
        const firstCourse =
          phase.courses?.[0];

        if (
          !firstCourse?.search_query
        )
          return;

        const img =
          await getYoutubeThumbnail(
            firstCourse.search_query
          );

        setImage(img);
      };

    loadImage();
  }, [phase]);

  return (
    <div
      className="
        min-w-[280px]
        sm:min-w-[320px]

        max-w-[320px]

        bg-white

        rounded-[24px]

        shadow-sm

        overflow-hidden

        border border-gray-100

        snap-start

        flex flex-col
      "
    >

      {/* IMAGE */}
      <div
        className="
          w-full

          h-[160px]

          bg-gray-200
        "
      >

        {image ? (
          <img
            src={image}
            className="
              w-full h-full

              object-cover
            "
          />
        ) : (
          <div
            className="
              w-full h-full

              flex items-center justify-center

              text-gray-400
            "
          >
            Loading...
          </div>
        )}

      </div>

      {/* CONTENT */}
      <div
        className="
          p-5

          flex-1

          flex flex-col
        "
      >

        <h3
          className="
            font-semibold

            text-gray-900

            text-lg
          "
        >
          {phase.phase_title}
        </h3>

        <p
          className="
            text-sm
            text-gray-500

            mt-3

            leading-relaxed

            flex-1
          "
        >
          {phase.objective}
        </p>

        <button
          onClick={handleOpen}
          className="
            mt-5

            h-11

            px-5

            rounded-full

            bg-blue-600
            text-white

            text-sm
            font-medium

            hover:bg-blue-700

            transition-all duration-300

            w-full
          "
        >
          Open →
        </button>

      </div>

    </div>
  );
}

export default PhaseCard;