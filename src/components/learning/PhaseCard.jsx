import {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import {
  getYoutubeThumbnail,
} from "../../utils/youtube";

function PhaseCard({
  phase,
}) {

  const navigate =
    useNavigate();

  const [image,
    setImage] =
    useState(null);

  // =========================
  // OPEN COURSE
  // =========================
  const handleOpen =
    () => {

      navigate(
        `/course/${phase.phase_number}/${phase.courseIndex}`,
        {
          state: {
            phase,
          },
        }
      );

    };

  // =========================
  // LOAD THUMBNAIL
  // =========================
  useEffect(() => {

    const loadImage =
      async () => {

        if (
          !phase?.search_query
        ) {
          return;
        }

        const img =
          await getYoutubeThumbnail(
            phase.search_query
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

        hover:shadow-xl

        transition-all duration-300
      "
    >

      {/* IMAGE */}
      <div
        className="
          w-full

          h-[180px]

          bg-gray-200

          overflow-hidden
        "
      >

        {image ? (

          <img
            src={image}
            alt={phase.title}
            className="
              w-full
              h-full

              object-cover

              hover:scale-105

              transition-all duration-500
            "
          />

        ) : (

          <div
            className="
              w-full
              h-full

              flex items-center
              justify-center

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

        {/* PHASE */}
        <p
          className="
            text-xs

            font-semibold

            text-blue-600

            tracking-wide

            uppercase
          "
        >
          Module {phase.phase_number}
        </p>

        {/* TITLE */}
        <h3
          className="
            font-bold

            text-gray-900

            text-xl

            mt-3

            leading-snug
          "
        >
          {phase.title}
        </h3>

        {/* TOPICS */}
        <div
          className="
            mt-4

            flex flex-wrap

            gap-2
          "
        >

          {phase.topics
            ?.slice(0, 4)
            .map(
              (
                topic,
                index
              ) => (

                <span
                  key={index}
                  className="
                    px-3 py-1

                    rounded-full

                    bg-gray-100

                    text-gray-600

                    text-xs

                    font-medium
                  "
                >
                  {topic}
                </span>

              )
            )}

        </div>

        {/* BUTTON */}
        <button
          onClick={handleOpen}
          className="
            mt-6

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
          Open Course →
        </button>

      </div>

    </div>

  );
}

export default PhaseCard;