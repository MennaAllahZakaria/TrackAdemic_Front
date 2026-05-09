import {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import api from "../../services/api";

import {
  useUserContext,
} from "../../context/UserContext";

const formatLevel = (
  level
) => {
  if (!level) return "";

  return (
    level.charAt(0).toUpperCase() +
    level.slice(1)
  );
};

function RecommendationCard() {
  const navigate =
    useNavigate();

  const { userContext } =
    useUserContext();

  const [recommended, setRecommended] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  // FETCH
  const fetchRecommended =
    async () => {
      try {
        if (
          !userContext?.level
        )
          return;

        const level =
          formatLevel(
            userContext.level
          );

        const res =
          await api.get(
            `/tracks?level=${level}&limit=1`
          );

        setRecommended(
          res.data.data?.[0]
        );

      } catch (err) {
        console.error(
          "recommended error",
          err
        );
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchRecommended();
  }, [userContext]);

  if (loading) {
    return (
      <div
        className="
          h-[280px]

          rounded-[36px]

          bg-gray-100

          animate-pulse

          mb-12
        "
      ></div>
    );
  }

  if (!recommended)
    return null;

  return (
    <div
      className="
        relative overflow-hidden

        bg-gradient-to-br
        from-blue-50
        via-[#EEF4FF]
        to-cyan-50

        rounded-[28px]
        sm:rounded-[40px]

        p-5
        sm:p-8
        xl:p-10

        mb-14

        flex flex-col
        xl:flex-row

        xl:items-center
        justify-between

        gap-10

        border border-blue-100
      "
    >

      {/* LEFT */}
      <div
        className="
          relative z-10

          max-w-[620px]
        "
      >

        <div
          className="
            inline-flex items-center gap-2

            px-4 py-2

            rounded-full

            bg-blue-100
            text-blue-600

            text-xs
            sm:text-sm

            font-semibold

            mb-5
          "
        >

          <i className="ri-sparkling-2-line"></i>

          Recommended For You

        </div>

        <h2
          className="
            text-3xl
            sm:text-4xl
            xl:text-[46px]

            leading-tight

            font-bold

            text-gray-900
          "
        >
          {recommended.title}
        </h2>

        <p
          className="
            text-gray-600

            mt-5

            text-sm
            sm:text-[17px]

            leading-[1.9]
          "
        >
          {recommended.description}
        </p>

        {/* META */}
        <div
          className="
            flex items-center

            gap-4

            mt-7

            flex-wrap
          "
        >

          <div
            className="
              px-4 py-2

              rounded-full

              bg-white/80

              text-xs
              sm:text-sm

              font-medium

              text-gray-700
            "
          >
            📚{" "}
            {recommended.totalModules ||
              12}{" "}
            Modules
          </div>

          <div
            className="
              px-4 py-2

              rounded-full

              bg-white/80

              text-xs
              sm:text-sm

              font-medium

              text-gray-700
            "
          >
            ⏱{" "}
            {recommended.totalHours ||
              45}{" "}
            Hours
          </div>

          <div
            className="
              px-4 py-2

              rounded-full

              bg-white/80

              text-xs
              sm:text-sm

              font-medium

              text-gray-700

              capitalize
            "
          >
            🚀{" "}
            {recommended.level}
          </div>

        </div>

        {/* ACTIONS */}
        <div
          className="
            flex flex-col
            sm:flex-row

            gap-4

            mt-9
          "
        >

          <button
            onClick={() =>
              navigate(
                `/track/${recommended._id}`
              )
            }
            className="
              h-12
              sm:h-14

              px-6
              sm:px-8

              rounded-2xl

              bg-blue-600
              text-white

              font-semibold

              hover:bg-blue-700

              transition-all duration-300

              shadow-[0_10px_30px_rgba(59,130,246,0.25)]

              w-full
              sm:w-auto
            "
          >
            Enroll Now →
          </button>

          <button
            onClick={() =>
              navigate(
                `/track/${recommended._id}`
              )
            }
            className="
              h-12
              sm:h-14

              px-6
              sm:px-8

              rounded-2xl

              bg-white/80

              text-gray-800

              font-medium

              hover:bg-white

              transition-all duration-300

              border border-white

              w-full
              sm:w-auto
            "
          >
            Course Details
          </button>

        </div>

      </div>

      {/* RIGHT */}
      <div
        className="
          relative z-10

          flex items-center justify-center

          w-full
          xl:w-auto
        "
      >

        <div
          className="
            w-full
            max-w-[320px]

            h-[260px]
            sm:h-[320px]

            rounded-[32px]

            overflow-hidden

            bg-white/30

            border border-white/40

            shadow-[0_20px_60px_rgba(0,0,0,0.08)]
          "
        >

          <img
            src={
              recommended.trackImage
            }
            alt={recommended.title}
            className="
              w-full h-full

              object-cover
            "
          />

        </div>

      </div>

    </div>
  );
}

export default RecommendationCard;