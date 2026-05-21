import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import MainLayout
from "../layouts/MainLayout";

import {
  useEffect,
  useState,
} from "react";

import {
  getYoutubeVideoId,
} from "../utils/youtube";

import YoutubeModal
from "../components/learning/YoutubeModal";

import TopicsChecklist
from "../components/learning/TopicsChecklist";

import {
  useProgress,
} from "../context/ProgressContext";

import api
from "../services/api";

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

          alert(
            "All topics already completed ✅"
          );

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

      } catch (err) {

        console.error(err);

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

                  <h3
                    className="
                      text-xl
                      sm:text-2xl

                      font-semibold

                      mb-5

                      text-gray-900
                    "
                  >
                    Course Topics
                  </h3>

                  <TopicsChecklist
                    topics={
                      course?.topics ||
                      []
                    }

                    progress={
                      progress
                    }

                    setProgress={
                      setProgress
                    }
                  />

                </div>

              </div>

              {/* SIDE CARD */}
              <div
                className="
                  w-full
                  lg:w-[300px]

                  shrink-0
                "
              >

                <div
                  className="
                    bg-white

                    rounded-[24px]

                    border border-gray-100

                    shadow-sm

                    p-5
                    sm:p-6
                  "
                >

                  <p
                    className="
                      text-sm
                      text-gray-500
                    "
                  >
                    Current Progress
                  </p>

                  {/* BAR */}
                  <div
                    className="
                      mt-4

                      h-3

                      bg-gray-200

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
                        width:
                          `${percent}%`,
                      }}
                    />

                  </div>

                  <p
                    className="
                      text-sm

                      text-gray-500

                      mt-2
                    "
                  >
                    {percent}% completed
                  </p>

                  {/* COMPLETE */}
                  <button
                    onClick={
                      handleMarkCompleted
                    }

                    disabled={
                      loadingProgress
                    }

                    className="
                      mt-6

                      w-full

                      bg-green-500
                      text-white

                      py-3

                      rounded-full

                      font-medium

                      hover:bg-green-600

                      transition-all duration-300

                      disabled:opacity-50
                    "
                  >
                    {loadingProgress
                      ? "Updating..."
                      : "Mark as Completed"}
                  </button>

                  {/* SAVE */}
                  <button
                    className="
                      mt-3

                      w-full

                      border border-gray-200

                      py-3

                      rounded-full

                      text-sm

                      hover:bg-gray-50

                      transition-all duration-300
                    "
                  >
                    Save for Reference
                  </button>

                  {/* INSTRUCTOR */}
                  <div
                    className="
                      mt-7

                      pt-5

                      border-t
                    "
                  >

                    <p
                      className="
                        text-xs
                        text-gray-400
                      "
                    >
                      COURSE INSTRUCTOR
                    </p>

                    <div
                      className="
                        flex items-center
                        gap-3

                        mt-4
                      "
                    >

                      <div
                        className="
                          w-11 h-11

                          bg-gray-300

                          rounded-full
                        "
                      />

                      <div>

                        <p
                          className="
                            text-sm
                            font-medium
                          "
                        >
                          {
                            course?.instructor
                          }
                        </p>

                        <p
                          className="
                            text-xs
                            text-gray-500
                          "
                        >
                          {
                            course?.platform
                          }
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div
            className="
              w-full
              xl:w-[320px]

              shrink-0
            "
          >

            {/* NEXT */}
            <div
              className="
                bg-white

                p-5
                sm:p-6

                rounded-[24px]

                shadow-sm

                border border-gray-100
              "
            >

              <h3
                className="
                  font-semibold

                  text-gray-900

                  mb-5
                "
              >
                Next in your path
              </h3>

              <div className="space-y-4">

                <div
                  className="
                    flex items-center
                    gap-3
                  "
                >

                  <div
                    className="
                      w-14 h-14

                      bg-gray-200

                      rounded-xl
                    "
                  />

                  <div>

                    <p
                      className="
                        text-sm
                        font-medium
                      "
                    >
                      Next Module
                    </p>

                    <p
                      className="
                        text-xs
                        text-gray-500
                      "
                    >
                      Locked
                    </p>

                  </div>

                </div>

              </div>

              <button
                onClick={
                  handleOpenFullLearning
                }

                className="
                  mt-5

                  text-blue-600

                  text-sm
                  font-medium
                "
              >
                View Full Learning Path →
              </button>

            </div>

            {/* NOTES */}
            <div
              className="
                bg-blue-50

                p-5
                sm:p-6

                rounded-[24px]

                mt-6

                border border-blue-100
              "
            >

              <h4
                className="
                  font-semibold

                  text-gray-900
                "
              >
                Try Academic Notetaking
              </h4>

              <p
                className="
                  text-sm

                  text-gray-600

                  mt-3

                  leading-relaxed
                "
              >
                Boost retention with
                structured notes.
              </p>

              <button
                className="
                  mt-4

                  text-blue-600

                  text-sm
                  font-medium
                "
              >
                Launch Notes Tool →
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* VIDEO MODAL */}
      {open && (

        <YoutubeModal
          videoId={videoId}
          onClose={() =>
            setOpen(false)
          }
        />

      )}

    </MainLayout>

  );
}

export default CourseDetails;
