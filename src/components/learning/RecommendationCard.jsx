import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../../services/api";

import { useUserContext } from "../../context/UserContext";

const formatLevel = (level) => {
  if (!level) return "";

  return (
    level.charAt(0).toUpperCase() +
    level.slice(1)
  );
};

function RecommendationCard() {
  const navigate = useNavigate();

  const { userContext } =
    useUserContext();

  const [recommended, setRecommended] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  // ================= FETCH =================
  const fetchRecommended = async () => {
    try {
      if (!userContext?.level) return;

      const level = formatLevel(
        userContext.level
      );

      const res = await api.get(
        `/tracks?level=${level}&limit=1`
      );

      setRecommended(res.data.data?.[0]);

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

  // ================= LOADING =================
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

  // ================= EMPTY =================
  if (!recommended) return null;

  return (
    <div
      className="
        relative overflow-hidden
        bg-gradient-to-br
        from-blue-50
        via-[#EEF4FF]
        to-cyan-50

        rounded-[40px]
        p-10
        mb-14

        flex justify-between
        items-center
        gap-10

        border border-blue-100
      "
    >

      {/* BG EFFECT */}
      <div
        className="
          absolute top-0 right-0
          w-[280px] h-[280px]
          bg-blue-300/20
          rounded-full blur-3xl
        "
      ></div>

      <div
        className="
          absolute bottom-0 left-0
          w-[220px] h-[220px]
          bg-cyan-200/20
          rounded-full blur-3xl
        "
      ></div>

      {/* LEFT */}
      <div className="relative z-10 max-w-[620px]">

        {/* TAG */}
        <div
          className="
            inline-flex items-center gap-2
            px-4 py-2 rounded-full

            bg-blue-100
            text-blue-600

            text-sm font-semibold
            mb-5
          "
        >
          <i className="ri-sparkling-2-line"></i>

          Recommended For You
        </div>

        {/* TITLE */}
        <h2
          className="
            text-[46px]
            leading-tight
            font-bold
            text-gray-900
          "
        >
          {recommended.title}
        </h2>

        {/* DESC */}
        <p
          className="
            text-gray-600
            mt-5
            text-[17px]
            leading-[1.9]
          "
        >
          {recommended.description}
        </p>

        {/* META */}
        <div
          className="
            flex items-center gap-4
            mt-7 flex-wrap
          "
        >

          <div
            className="
              px-4 py-2 rounded-full
              bg-white/80
              backdrop-blur-md

              text-sm font-medium
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
              px-4 py-2 rounded-full
              bg-white/80
              backdrop-blur-md

              text-sm font-medium
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
              px-4 py-2 rounded-full
              bg-white/80
              backdrop-blur-md

              text-sm font-medium
              text-gray-700 capitalize
            "
          >
            🚀 {recommended.level}
          </div>

        </div>

        {/* ACTIONS */}
        <div className="flex gap-4 mt-9">

          <button
            onClick={() =>
              navigate(
                `/track/${recommended._id}`
              )
            }
            className="
              h-14 px-8 rounded-2xl

              bg-blue-600
              text-white
              font-semibold

              hover:bg-blue-700
              hover:scale-[1.03]

              transition-all duration-300

              shadow-[0_10px_30px_rgba(59,130,246,0.25)]
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
              h-14 px-8 rounded-2xl

              bg-white/80
              backdrop-blur-md

              text-gray-800
              font-medium

              hover:bg-white
              transition-all duration-300

              border border-white
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
          hidden lg:flex
          items-center justify-center
        "
      >

        <div
          className="
            w-[280px] h-[280px]
            rounded-[36px]
            overflow-hidden

            bg-white/30
            backdrop-blur-xl

            border border-white/40

            shadow-[0_20px_60px_rgba(0,0,0,0.08)]

            rotate-3
            hover:rotate-0
            transition-all duration-500
          "
        >

          <img
            src={recommended.trackImage}
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