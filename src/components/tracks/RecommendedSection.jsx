import {
  useNavigate,
  useLocation,
} from "react-router-dom";

function RecommendedSection({
  recommended = [],
}) {

  const navigate =
    useNavigate();

  const location =
    useLocation();

  const isScrollable =
    location.state
      ?.showRecommended;

  if (!recommended.length)
    return null;

  const itemsToRender =
    isScrollable
      ? recommended
      : [
          recommended[0],
          recommended[1],
        ].filter(Boolean);

  return (
    <div className="mb-16">

      {/* HEADER */}
      <div
        className="
          flex flex-col
          sm:flex-row

          sm:items-center
          justify-between

          gap-4

          mb-6
        "
      >

        {/* LEFT */}
        <div
          className="
            flex items-center
            gap-3
          "
        >

          <div
            className="
              w-[4px]
              h-6

              bg-purple-500

              rounded-full
            "
          ></div>

          <h2
            className="
              text-lg
              sm:text-[20px]

              font-semibold
              text-gray-900
            "
          >
            Recommended for You
          </h2>

        </div>

        {/* BUTTON */}
        {!isScrollable && (

          <button
            onClick={() =>
              navigate("/tracks", {
                state: {
                  showRecommended: true,
                },
              })
            }
            className="
              text-blue-600
              text-sm

              hover:underline
            "
          >
            View all →
          </button>

        )}

      </div>

      {/* CONTENT */}
      <div
        className={`
          ${
            isScrollable
              ? `
                flex
                gap-4
                overflow-x-auto
                no-scrollbar
                pb-2
              `
              : `
                flex
                flex-col
                lg:flex-row

                gap-6
              `
          }
        `}
      >

        {itemsToRender.map(
          (track, index) => {

            const isMain =
              index === 0;

            return isMain ? (

              /* BIG CARD */
              <div
                key={track._id}
                onClick={() =>
                  navigate(
                    `/track/${track._id}`
                  )
                }
                className={`
                  ${
                    isScrollable
                      ? `
                        min-w-[85vw]
                        sm:min-w-[520px]
                      `
                      : `
                        w-full
                        lg:flex-1
                      `
                  }

                  min-h-[260px]

                  rounded-[24px]

                  p-5
                  sm:p-8

                  bg-gradient-to-br
                  from-[#F1F5F9]
                  to-[#E2E8F0]

                  shadow-[0_10px_30px_rgba(0,0,0,0.06)]

                  relative
                  cursor-pointer

                  transition-all duration-300

                  hover:shadow-[0_14px_40px_rgba(0,0,0,0.1)]
                `}
              >

                {/* BADGES */}
                <div
                  className="
                    flex flex-wrap
                    gap-2
                    mb-4
                  "
                >

                  <span
                    className="
                      bg-purple-100
                      text-purple-600

                      px-3 py-1

                      text-xs

                      rounded-full

                      font-medium
                    "
                  >
                    MOST POPULAR
                  </span>

                  <span
                    className="
                      bg-green-100
                      text-green-600

                      px-3 py-1

                      text-xs

                      rounded-full

                      font-medium
                    "
                  >
                    EXPERT LED
                  </span>

                </div>

                {/* TITLE */}
                <h3
                  className="
                    text-xl
                    sm:text-[22px]

                    font-bold
                    text-gray-900

                    leading-snug

                    max-w-full
                    sm:max-w-[80%]
                  "
                >
                  {track.title}
                </h3>

                {/* DESC */}
                <p
                  className="
                    text-gray-500
                    text-sm

                    mt-3

                    max-w-full
                    sm:max-w-[70%]

                    leading-relaxed

                    line-clamp-4
                  "
                >
                  {track.description}
                </p>

                {/* META */}
                <div
                  className="
                    flex flex-wrap

                    gap-6
                    sm:gap-10

                    mt-6

                    text-sm
                    text-gray-600
                  "
                >

                  <div>

                    <p
                      className="
                        text-xs
                        text-gray-400
                      "
                    >
                      Modules
                    </p>

                    <p className="font-semibold">
                      {track.modules || 24} Units
                    </p>

                  </div>

                  <div>

                    <p
                      className="
                        text-xs
                        text-gray-400
                      "
                    >
                      Duration
                    </p>

                    <p className="font-semibold">
                      {track.duration || 12} Weeks
                    </p>

                  </div>

                </div>

                {/* BUTTON */}
                <button
                  onClick={(e) => {

                    e.stopPropagation();

                    navigate(
                      `/track/${track._id}`
                    );

                  }}
                  className="
                    absolute
                    bottom-5
                    right-5

                    w-11 h-11
                    sm:w-12 sm:h-12

                    rounded-full

                    bg-blue-600
                    text-white

                    flex items-center justify-center

                    shadow-lg

                    hover:scale-105

                    transition
                  "
                >
                  ▶
                </button>

              </div>

            ) : (

              /* SMALL CARD */
              <div
                key={track._id}
                onClick={() =>
                  navigate(
                    `/track/${track._id}`
                  )
                }
                className={`
                  ${
                    isScrollable
                      ? `
                        min-w-[80vw]
                        sm:min-w-[320px]
                      `
                      : `
                        w-full
                        lg:w-[320px]
                      `
                  }

                  min-h-[260px]

                  bg-white

                  rounded-[24px]

                  p-5
                  sm:p-6

                  border border-gray-100

                  cursor-pointer

                  transition-all duration-300

                  hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)]
                  hover:-translate-y-1
                  hover:border-blue-200

                  flex flex-col justify-between
                `}
              >

                <div>

                  {/* ICON */}
                  <div
                    className="
                      w-11 h-11

                      rounded-full

                      bg-gray-100

                      flex items-center justify-center

                      mb-4
                    "
                  >

                    <i
                      className="
                        ri-book-open-line

                        text-gray-500
                        text-lg
                      "
                    ></i>

                  </div>

                  {/* TITLE */}
                  <h4
                    className="
                      text-[16px]
                      font-semibold
                      text-gray-900

                      leading-snug
                    "
                  >
                    {track.title}
                  </h4>

                  {/* DESC */}
                  <p
                    className="
                      text-gray-500
                      text-sm

                      mt-2

                      line-clamp-3
                    "
                  >
                    {track.description}
                  </p>

                  {/* TAGS */}
                  <div
                    className="
                      flex flex-wrap
                      gap-2

                      mt-4

                      text-xs
                    "
                  >

                    <span
                      className="
                        bg-gray-100

                        px-3 py-1

                        rounded-full

                        text-gray-600
                      "
                    >
                      {track.level}
                    </span>

                    <span
                      className="
                        bg-gray-100

                        px-3 py-1

                        rounded-full

                        text-gray-600
                      "
                    >
                      {track.duration || 45} HOURS
                    </span>

                  </div>

                </div>

                {/* BUTTON */}
                <button
                  onClick={(e) => {

                    e.stopPropagation();

                    navigate(
                      `/track/${track._id}`
                    );

                  }}
                  className="
                    w-full

                    py-2.5

                    rounded-full

                    border border-blue-500

                    text-blue-600
                    text-sm
                    font-medium

                    hover:bg-blue-50

                    transition
                  "
                >
                  Resume Path
                </button>

              </div>

            );
          }
        )}

      </div>

    </div>
  );
}

export default RecommendedSection;