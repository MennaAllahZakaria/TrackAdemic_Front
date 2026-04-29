import { useLocation } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { useEffect, useState } from "react";
import { getYoutubeVideoId } from "../utils/youtube";
import YoutubeModal from "../components/learning/YoutubeModal";
import { useNavigate } from "react-router-dom";

function CourseDetails() {
  const { state } = useLocation();

  const [videoId, setVideoId] = useState(null);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const phase = state?.phase;
  if (!phase) return null;

  const course = phase.courses?.[0];

  // ✅ جلب الفيديو من search_query
  useEffect(() => {
    const loadVideo = async () => {
      if (!course?.search_query) return;

      const id = await getYoutubeVideoId(course.search_query);
      setVideoId(id);
    };

    loadVideo();
  }, [course]);

  const handleOpenFullLearning = () => {
    
    navigate("/my-learning");
  };

  return (
    <MainLayout>
      <div className="max-w-[1200px] mx-auto flex gap-10">

        {/* LEFT */}
        <div className="flex-1">

          {/* BADGE */}
          <div className="flex items-center gap-3">
            <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs font-medium">
              ADVANCED SERIES
            </span>

            <span className="text-gray-400 text-xs">
              VIDEO_YOUTUBE Course via YouTube Premium
            </span>
          </div>

          {/* TITLE */}
          <h1 className="text-[42px] font-bold leading-[1.2] mt-4 text-gray-900">
            {phase.phase_title}
          </h1>

          {/* STATS */}
          <div className="flex items-center gap-6 mt-4 text-sm text-gray-500">
            <span>⏱ {course?.estimated_hours}h total</span>
            <span>⭐ 4.9 (2.4k reviews)</span>
            <span>👥 18k Students</span>
          </div>

          {/* VIDEO CARD */}
          <div className="relative mt-6 rounded-[28px] overflow-hidden shadow-lg group">

            {/* thumbnail */}
            <img
              src={
                videoId
                  ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
                  : "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
              }
              className="w-full h-[360px] object-cover transition duration-500 group-hover:scale-105"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            {/* ▶ play button */}
            <div
              onClick={() => setOpen(true)}
              className="absolute inset-0 flex items-center justify-center cursor-pointer"
            >
              <div className="w-[70px] h-[70px] bg-blue-600 rounded-full flex items-center justify-center text-white text-xl shadow-lg hover:scale-110 transition">
                ▶
              </div>
            </div>

            {/* bottom left */}
            <div className="absolute bottom-5 left-5 bg-black/60 text-white px-4 py-1 rounded-full text-sm backdrop-blur">
              Module {phase.phase_number}: {phase.phase_title}
            </div>

          </div>

          {/* DESCRIPTION */}
          <div className="mt-10 flex gap-10">

            {/* TEXT */}
            <div className="flex-1">

              <h2 className="text-xl font-semibold mb-3">
                Course Description
              </h2>

              <p className="text-gray-600 leading-relaxed">
                {phase.objective}
              </p>

              {/* WHAT YOU LEARN */}
              <h3 className="text-lg font-semibold mt-8 mb-4">
                What you'll learn
              </h3>

              <div className="space-y-3">
                {course?.topics.map((t, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
                      ✓
                    </div>
                    <span className="text-gray-700">{t}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* SIDE CARD */}
            <div className="w-[260px] bg-white rounded-2xl shadow-md p-5">

              <p className="text-sm text-gray-500">
                Current Progress
              </p>

              <div className="mt-2 h-2 bg-gray-200 rounded-full">
                <div className="h-full bg-blue-600 w-[65%] rounded-full" />
              </div>

              <button className="mt-5 w-full bg-green-500 text-white py-2 rounded-full font-medium hover:bg-green-600 transition">
                Mark as Completed
              </button>

              <button className="mt-3 w-full border py-2 rounded-full text-sm">
                Save for Reference
              </button>

              {/* instructor */}
              <div className="mt-6 pt-4 border-t">
                <p className="text-xs text-gray-400">
                  COURSE INSTRUCTOR
                </p>

                <div className="flex items-center gap-3 mt-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full" />
                  <div>
                    <p className="text-sm font-medium">
                      {course?.instructor}
                    </p>
                    <p className="text-xs text-gray-500">
                      {course?.platform}
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="w-[300px]">

          <div className="bg-white p-5 rounded-2xl shadow-md">

            <h3 className="font-semibold mb-4">
              Next in your path
            </h3>

            <div className="space-y-4">

              <div className="flex gap-3 items-center">
                <div className="w-14 h-14 bg-gray-200 rounded-xl" />
                <div>
                  <p className="text-sm font-medium">
                    Next Module
                  </p>
                  <p className="text-xs text-gray-500">
                    Locked
                  </p>
                </div>
              </div>

            </div>

            <button className="mt-4 text-blue-600 text-sm" onClick={handleOpenFullLearning}>
              View Full Learning Path →
            </button>

          </div>

          <div className="bg-blue-50 p-5 rounded-2xl mt-6">
            <h4 className="font-medium">
              Try Academic Notetaking
            </h4>

            <p className="text-sm text-gray-600 mt-2">
              Boost retention with structured notes.
            </p>

            <button className="mt-3 text-blue-600 text-sm">
              Launch Notes Tool →
            </button>
          </div>

        </div>

      </div>

      {/* ✅ MODAL VIDEO */}
      {open && (
        <YoutubeModal
          videoId={videoId}
          onClose={() => setOpen(false)}
        />
      )}

    </MainLayout>
  );
}

export default CourseDetails;