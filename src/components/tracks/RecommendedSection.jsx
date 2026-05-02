import { useNavigate } from "react-router-dom";

function RecommendedSection({ recommended = [] }) {
  const navigate = useNavigate();

  if (!recommended.length) return null;

  const main = recommended[0];
  const side = recommended[1];

  return (
    <div className="mb-16">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <div className="w-[4px] h-6 bg-purple-500 rounded-full"></div>
          <h2 className="text-[20px] font-semibold text-gray-900">
            Recommended for You
          </h2>
        </div>

        <button
          onClick={() => navigate("/tracks")}
          className="text-blue-600 text-sm hover:underline"
        >
          View all →
        </button>
      </div>

      {/* CONTENT */}
      <div className="flex gap-6">

        {/* ================= BIG CARD ================= */}
        {main && (
          <div
            onClick={() => navigate(`/track/${main._id}`)}
            className="
              flex-1 h-[240px]
              rounded-[24px]
              p-8
              bg-gradient-to-br from-[#F1F5F9] to-[#E2E8F0]
              shadow-[0_10px_30px_rgba(0,0,0,0.06)]
              relative
              cursor-pointer
              transition
              hover:shadow-[0_14px_40px_rgba(0,0,0,0.1)]
            "
          >

            {/* BADGES */}
            <div className="flex gap-2 mb-3">
              <span className="bg-purple-100 text-purple-600 px-3 py-1 text-xs rounded-full font-medium">
                MOST POPULAR
              </span>

              <span className="bg-green-100 text-green-600 px-3 py-1 text-xs rounded-full font-medium">
                EXPERT LED
              </span>
            </div>

            {/* TITLE */}
            <h3 className="text-[22px] font-bold text-gray-900 leading-snug max-w-[80%]">
              {main.title}
            </h3>

            {/* DESC */}
            <p className="text-gray-500 text-sm mt-3 max-w-[70%] leading-relaxed">
              {main.description}
            </p>

            {/* META */}
            <div className="flex gap-10 mt-6 text-sm text-gray-600">
              <div>
                <p className="text-xs text-gray-400">Modules</p>
                <p className="font-semibold">{main.modules || 24} Units</p>
              </div>

              <div>
                <p className="text-xs text-gray-400">Duration</p>
                <p className="font-semibold">{main.duration || 12} Weeks</p>
              </div>
            </div>

            {/* PLAY BUTTON */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/track/${main._id}`);
              }}
              className="
                absolute bottom-6 right-6
                w-12 h-12 rounded-full
                bg-blue-600 text-white
                flex items-center justify-center
                shadow-lg
                hover:scale-105 transition
              "
            >
              ▶
            </button>

          </div>
        )}

        {/* ================= SIDE CARD ================= */}
        {side && (
          <div
            onClick={() => navigate(`/track/${side._id}`)}
            className="
              w-[320px] h-[240px]
              bg-white
              rounded-[24px]
              p-6
              shadow-[0_8px_20px_rgba(0,0,0,0.05)]
              border border-gray-100
              cursor-pointer
              transition
              hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]
              flex flex-col justify-between
            "
          >

            <div>
              {/* ICON */}
              <div className="w-12 h-12 rounded-full bg-[#D1FAE5] flex items-center justify-center mb-4">
                <svg width="20" height="20" fill="none">
                  <rect x="3" y="3" width="14" height="14" stroke="#10B981" strokeWidth="2"/>
                </svg>
              </div>

              {/* TITLE */}
              <h4 className="text-[16px] font-semibold text-gray-900">
                {side.title}
              </h4>

              {/* DESC */}
              <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                {side.description}
              </p>

              {/* BADGES */}
              <div className="flex gap-2 mt-4 text-xs">
                <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-600">
                  {side.level}
                </span>

                <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-600">
                  {side.duration || 45} HOURS
                </span>
              </div>
            </div>

            {/* BUTTON */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/track/${side._id}`);
              }}
              className="
                w-full py-2.5 rounded-full
                border border-blue-500
                text-blue-600 text-sm font-medium
                hover:bg-blue-50 transition
              "
            >
              Resume Path
            </button>

          </div>
        )}

      </div>
    </div>
  );
}

export default RecommendedSection;