import {
  useLocation,
  useNavigate,
} from "react-router-dom";
import toast from "react-hot-toast";

import MainLayout
from "../../layouts/MainLayout";

import {
  useEffect,
  useState,
} from "react";

import {
  getYoutubeVideoId,
} from "../../utils/youtube";

import YoutubeModal
from "../../components/learning/YoutubeModal";

import TopicsChecklist
from "../../components/learning/TopicsChecklist";

import {
  useProgress,
} from "../../context/ProgressContext";

import api
from "../../services/api";

function CourseDetails() {

  const { state } =
    useLocation();

  const navigate =
    useNavigate();

  const {
    progress,
    setProgress,
  } = useProgress();

  const [loadingProgress,
    setLoadingProgress] =
    useState(false);

  const [videoId,
    setVideoId] =
    useState(null);

  const [open,
    setOpen] =
    useState(false);

  // =========================
  // COURSE
  // =========================
  const course =
    state?.phase;

  if (!course) {
    return null;
  }

  // =========================
  // VIDEO
  // =========================
  useEffect(() => {

    const loadVideo =
      async () => {

        if (
          !course?.search_query
        ) {
          return;
        }

        const id =
          await getYoutubeVideoId(
            course.search_query
          );

        setVideoId(id);

      };

    loadVideo();

  }, [course]);

  // =========================
  // FETCH PROGRESS
  // =========================
  useEffect(() => {

    const fetchProgress =
      async () => {

        try {

          const res =
            await api.get(
              "/progress/me"
            );

          setProgress(
            res.data.data
          );

        } catch (err) {

          if (
            err.response?.data
              ?.message ===
            "No progress found"
          ) {

            setProgress({
              completedTopics: [],
            });

          }
        }
      };

    fetchProgress();

  }, []);

  // =========================
  // MARK COMPLETE
  // =========================
  const handleMarkCompleted =
    async () => {

      try {

        setLoadingProgress(true);

        const completed =
          progress?.completedTopics ||
          [];

        const nextTopic =
          course?.topics?.find(
            (t) =>
              !completed.includes(
                t
              )
          );

        if (!nextTopic) {
          toast.success("All topics already completed ✅");
          return;
        }

        const res =
          await api.post(
            "/progress/update",
            {
              topic: nextTopic,
              hours: 1,
            }
          );

        setProgress(
          res.data.data.progress
        );
        toast.success(`Topic "${nextTopic}" marked as completed!`);

      } catch (err) {
        console.error(err);
        toast.error(err.response?.data?.message || "Failed to update progress");
      } finally {

        setLoadingProgress(false);

      }
    };

  // =========================
  // OPEN LEARNING
  // =========================
  const handleOpenFullLearning =
    () => {

      navigate(
        "/my-learning"
      );

    };

  // =========================
  // PROGRESS %
  // =========================
  const percent =
    progress?.overallProgress
      ?.toFixed(0) || 0;

  return (

    <MainLayout>

      <div
        className="
          max-w-[1400px]
          mx-auto

          px-4
          sm:px-6

          pb-20
        "
      >

        {/* GRID */}
        <div
          className="
            flex flex-col
            xl:flex-row

            gap-8
            xl:gap-10
          "
        >

          {/* LEFT */}
          <div className="flex-1 min-w-0">

            {/* BADGES */}
            <div
              className="
                flex flex-wrap
                items-center
                gap-3
              "
            >

              <span
                className="
                  bg-purple-100
                  text-purple-600

                  px-3 py-1

                  rounded-full

                  text-xs
                  sm:text-sm

                  font-medium
                "
              >
                ADVANCED SERIES
              </span>

              <span
                className="
                  text-gray-400

                  text-xs
                  sm:text-sm
                "
              >
                VIDEO_YOUTUBE Course
              </span>

            </div>

            {/* TITLE */}
            <h1
              className="
                text-3xl
                sm:text-4xl
                xl:text-[42px]

                font-bold

                leading-[1.2]

                mt-5

                text-gray-900
              "
            >
              {course.title}
            </h1>

            {/* STATS */}
            <div
              className="
                flex flex-wrap
                items-center
                gap-5

                mt-5

                text-sm
                text-gray-500
              "
            >

              <span>
                ⏱{" "}
                {
                  course?.estimated_hours
                }
                h total
              </span>

              <span>
                ⭐ 4.9 (2.4k reviews)
              </span>

              <span>
                👥 18k Students
              </span>

            </div>

            {/* VIDEO */}
            <div
              className="
                relative

                mt-7

                rounded-[24px]
                sm:rounded-[28px]

                overflow-hidden

                shadow-lg

                group
              "
            >

              <img
                src={
                  videoId
                    ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
                    : "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
                }

                className="
                  w-full

                  h-[240px]
                  sm:h-[320px]
                  lg:h-[420px]

                  object-cover

                  transition duration-500

                  group-hover:scale-105
                "
              />

              {/* OVERLAY */}
              <div
                className="
                  absolute inset-0

                  bg-gradient-to-t
                  from-black/60
                  to-transparent
                "
              />

              {/* PLAY */}
              <div
                onClick={() =>
                  setOpen(true)
                }

                className="
                  absolute inset-0

                  flex items-center
                  justify-center

                  cursor-pointer
                "
              >

                <div
                  className="
                    w-[64px] h-[64px]
                    sm:w-[74px] sm:h-[74px]

                    bg-blue-600

                    rounded-full

                    flex items-center
                    justify-center

                    text-white

                    text-xl

                    shadow-lg

                    hover:scale-110

                    transition-all duration-300
                  "
                >
                  ▶
                </div>

              </div>

              {/* MODULE */}
              <div
                className="
                  absolute bottom-5 left-5

                  bg-black/60

                  text-white

                  px-4 py-2

                  rounded-full

                  text-xs
                  sm:text-sm

                  backdrop-blur
                "
              >
                Module{" "}
                {
                  course.phase_number
                }
              </div>

            </div>

            {/* CONTENT */}
            <div
              className="
                flex flex-col
                lg:flex-row

                gap-8
                lg:gap-10

                mt-10
              "
            >

              {/* LEFT */}
              <div className="flex-1 min-w-0">

                {/* DESCRIPTION */}
                <div>

                  <h2
                    className="
                      text-xl
                      sm:text-2xl

                      font-semibold

                      mb-4

                      text-gray-900
                    "
                  >
                    Course Description
                  </h2>

                  <p
                    className="
                      text-gray-600

                      leading-[1.9]

                      text-sm
                      sm:text-base
                    "
                  >
                    {
                      course.description ||
                      course.objective
                    }
                  </p>

                </div>

                {/* TOPICS */}
                <div className="mt-10">

                  <h2
                    className="
                      text-xl
                      sm:text-2xl

                      font-semibold

                      mb-6

                      text-gray-900
                    "
                  >
                    What you'll learn
                  </h2>

                  <div
                    className="
                      grid grid-cols-1
                      sm:grid-cols-2

                      gap-x-10
                      gap-y-4
                    "
                  >

                    {course.topics?.map(
                      (topic, i) => (

                        <div
                          key={i}
                          className="
                            flex
                            items-start
                            gap-3

                            text-gray-600
                            text-sm
                            sm:text-base
                          "
                        >

                          <span className="text-blue-500 mt-1">
                            ✓
                          </span>

                          <span>
                            {topic}
                          </span>

                        </div>

                      )
                    )}

                  </div>

                </div>

              </div>

              {/* RIGHT - SIDEBAR */}
              <div
                className="
                  w-full
                  lg:w-[380px]

                  flex-shrink-0
                "
              >

                <div
                  className="
                    sticky top-24

                    bg-white

                    rounded-[32px]

                    border border-gray-100

                    p-6
                    sm:p-8

                    shadow-sm
                  "
                >

                  {/* PRICE */}
                  <div
                    className="
                      flex items-baseline
                      gap-2
                    "
                  >

                    <span
                      className="
                        text-3xl
                        font-bold
                      "
                    >
                      Free
                    </span>

                    <span
                      className="
                        text-gray-400
                        line-through
                      "
                    >
                      $99.00
                    </span>

                  </div>

                  {/* PROGRESS BAR */}
                  <div className="mt-8">

                    <div
                      className="
                        flex items-center
                        justify-between

                        mb-2

                        text-sm
                      "
                    >

                      <span className="font-medium">
                        Your Progress
                      </span>

                      <span className="text-blue-600 font-bold">
                        {percent}%
                      </span>

                    </div>

                    <div
                      className="
                        h-2

                        bg-gray-100

                        rounded-full

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
                          width: `${percent}%`,
                        }}
                      />

                    </div>

                  </div>

                  {/* ACTIONS */}
                  <div
                    className="
                      flex flex-col
                      gap-3

                      mt-8
                    "
                  >

                    <button
                      disabled={
                        loadingProgress
                      }
                      onClick={
                        handleMarkCompleted
                      }
                      className="
                        w-full

                        bg-blue-600
                        text-white

                        py-4

                        rounded-2xl

                        font-semibold

                        hover:bg-blue-700

                        transition-all

                        disabled:opacity-50
                      "
                    >
                      {loadingProgress
                        ? "Updating..."
                        : "Mark Next Topic Complete"}
                    </button>

                    <button
                      onClick={
                        handleOpenFullLearning
                      }
                      className="
                        w-full

                        bg-gray-50
                        text-gray-900

                        py-4

                        rounded-2xl

                        font-semibold

                        hover:bg-gray-100

                        transition-all
                      "
                    >
                      View Full Curriculum
                    </button>

                  </div>

                  {/* GUARANTEE */}
                  <p
                    className="
                      text-center
                      text-xs
                      text-gray-400

                      mt-6
                    "
                  >
                    30-Day Money-Back
                    Guarantee • Lifetime
                    Access
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* MODAL */}
      <YoutubeModal
        open={open}
        onClose={() =>
          setOpen(false)
        }
        videoId={videoId}
      />

    </MainLayout>
  );
}

export default CourseDetails;
