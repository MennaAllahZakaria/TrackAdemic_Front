import MainLayout from "../layouts/MainLayout";
import api from "../services/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PhaseProject() {
  const { phaseNumber } = useParams();

  const [path, setPath] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res =
          await api.get(
            "/learning-path/me"
          );

        setPath(res.data.data);

      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, []);

  // ================= LOADING =================
  if (loading) {
    return (
      <MainLayout>

        <div
          className="
            min-h-[70vh]

            flex items-center justify-center

            px-4
          "
        >

          <div className="text-center">

            <div
              className="
                w-16 h-16

                rounded-full

                border-4 border-blue-200
                border-t-blue-600

                animate-spin

                mx-auto
              "
            ></div>

            <p
              className="
                mt-5

                text-gray-500
              "
            >
              Loading project...
            </p>

          </div>

        </div>

      </MainLayout>
    );
  }

  if (!path) {
    return (
      <MainLayout>

        <div
          className="
            min-h-[70vh]

            flex items-center justify-center

            px-4
          "
        >

          <div
            className="
              bg-white

              rounded-[28px]
              sm:rounded-[32px]

              border border-gray-100

              shadow-sm

              p-6
              sm:p-10

              text-center

              max-w-md
              w-full
            "
          >

            <div
              className="
                w-16 h-16
                sm:w-20 sm:h-20

                rounded-full

                bg-red-100
                text-red-500

                flex items-center justify-center

                mx-auto
              "
            >
              <i className="ri-error-warning-line text-3xl sm:text-4xl"></i>
            </div>

            <h2
              className="
                text-xl
                sm:text-2xl

                font-bold

                text-gray-900

                mt-6
              "
            >
              Learning Path Not Found
            </h2>

          </div>

        </div>

      </MainLayout>
    );
  }

  // ================= PHASE =================
  const phase = path.phases.find(
    (p) =>
      p.phase_number ===
      Number(phaseNumber)
  );

  const project = phase?.project;

  // ================= EMPTY =================
  if (!project) {
    return (
      <MainLayout>

        <div
          className="
            min-h-[70vh]

            flex items-center justify-center

            px-4
          "
        >

          <div
            className="
              bg-white

              rounded-[28px]
              sm:rounded-[32px]

              border border-gray-100

              shadow-sm

              p-6
              sm:p-10

              text-center

              max-w-md
              w-full
            "
          >

            <div
              className="
                w-16 h-16
                sm:w-20 sm:h-20

                rounded-full

                bg-orange-100
                text-orange-500

                flex items-center justify-center

                mx-auto
              "
            >
              <i className="ri-folder-warning-line text-3xl sm:text-4xl"></i>
            </div>

            <h2
              className="
                text-xl
                sm:text-2xl

                font-bold

                text-gray-900

                mt-6
              "
            >
              Project Not Found
            </h2>

            <p
              className="
                text-gray-500

                mt-3

                text-sm
                sm:text-base
              "
            >
              This phase does not have
              a project yet.
            </p>

          </div>

        </div>

      </MainLayout>
    );
  }

  return (
    <MainLayout>

      <div
        className="
          max-w-[1100px]
          mx-auto

          px-4
          sm:px-6

          py-10
          sm:py-14
          lg:py-16
        "
      >

        {/* HERO */}
        <div className="text-center">

          {/* BADGE */}
          <div
            className="
              inline-flex items-center gap-2

              px-4 py-2

              rounded-full

              bg-blue-50
              text-blue-600

              text-xs
              sm:text-sm

              font-semibold

              mb-5
            "
          >

            <i className="ri-folder-2-line"></i>

            MODULE {phase.phase_number}

          </div>

          {/* TITLE */}
          <h1
            className="
              text-3xl
              sm:text-5xl
              xl:text-[54px]

              font-bold

              leading-tight

              text-gray-900
            "
          >
            {project.title}
          </h1>

          {/* DESC */}
          <p
            className="
              text-gray-500

              mt-5

              max-w-2xl

              mx-auto

              leading-[1.9]

              text-sm
              sm:text-base
            "
          >
            {project.description}
          </p>

        </div>

        {/* MAIN CARD */}
        <div
          className="
            mt-10
            sm:mt-12

            bg-white

            rounded-[28px]
            sm:rounded-[36px]

            border border-gray-100

            shadow-[0_10px_40px_rgba(0,0,0,0.05)]

            overflow-hidden
          "
        >

          {/* TOP */}
          <div
            className="
              bg-gradient-to-r
              from-blue-600
              to-cyan-500

              p-6
              sm:p-8

              text-white
            "
          >

            <div
              className="
                flex flex-col
                sm:flex-row

                sm:items-center
                justify-between

                gap-5
              "
            >

              <div>

                <p
                  className="
                    text-white/70

                    text-xs
                    sm:text-sm
                  "
                >
                  PROJECT OVERVIEW
                </p>

                <h2
                  className="
                    text-2xl
                    sm:text-3xl

                    font-bold

                    mt-2
                  "
                >
                  Practical Phase Challenge
                </h2>

              </div>

              {/* HOURS */}
              <div
                className="
                  px-5 py-3

                  rounded-2xl

                  bg-white/15
                  backdrop-blur-md

                  w-fit
                "
              >

                <p
                  className="
                    text-xs
                    text-white/70
                  "
                >
                  Estimated Time
                </p>

                <h3
                  className="
                    text-lg
                    sm:text-xl

                    font-semibold

                    mt-1
                  "
                >
                  {project.estimated_hours} hrs
                </h3>

              </div>

            </div>

          </div>

          {/* CONTENT */}
          <div
            className="
              p-6
              sm:p-8
              lg:p-10
            "
          >

            {/* GRID */}
            <div
              className="
                grid

                grid-cols-1
                lg:grid-cols-[1.4fr_.8fr]

                gap-8
                lg:gap-10
              "
            >

              {/* LEFT */}
              <div>

                {/* DELIVERABLE */}
                <div>

                  <div
                    className="
                      flex items-center

                      gap-3

                      mb-4
                    "
                  >

                    <div
                      className="
                        w-11 h-11

                        rounded-2xl

                        bg-blue-100
                        text-blue-600

                        flex items-center justify-center
                      "
                    >

                      <i className="ri-file-list-3-line text-xl"></i>

                    </div>

                    <h3
                      className="
                        text-xl
                        sm:text-2xl

                        font-semibold

                        text-gray-900
                      "
                    >
                      Deliverable
                    </h3>

                  </div>

                  <div
                    className="
                      bg-gray-50

                      border border-gray-100

                      rounded-[24px]

                      p-5
                      sm:p-6
                    "
                  >

                    <p
                      className="
                        text-gray-600

                        leading-[1.9]

                        text-sm
                        sm:text-base
                      "
                    >
                      {project.deliverable}
                    </p>

                  </div>

                </div>

                {/* ACTION */}
                <button
                  className="
                    mt-8

                    h-12
                    sm:h-14

                    px-6
                    sm:px-8

                    w-full
                    sm:w-auto

                    rounded-2xl

                    bg-blue-600
                    text-white

                    font-semibold

                    hover:bg-blue-700

                    transition-all duration-300

                    shadow-[0_10px_30px_rgba(59,130,246,0.25)]
                  "
                >
                  Start Project →
                </button>

              </div>

              {/* RIGHT */}
              <div className="space-y-5">

                {/* CARD */}
                <div
                  className="
                    bg-blue-50

                    border border-blue-100

                    rounded-[24px]

                    p-5
                    sm:p-6
                  "
                >

                  <div
                    className="
                      w-12 h-12

                      rounded-2xl

                      bg-white

                      flex items-center justify-center

                      text-blue-600

                      shadow-sm
                    "
                  >

                    <i className="ri-lightbulb-line text-xl"></i>

                  </div>

                  <h4
                    className="
                      font-semibold

                      text-gray-900

                      mt-5
                    "
                  >
                    Project Goal
                  </h4>

                  <p
                    className="
                      text-sm

                      text-gray-600

                      leading-relaxed

                      mt-3
                    "
                  >
                    Apply everything learned
                    in this phase into a
                    practical implementation.
                  </p>

                </div>

                {/* CARD */}
                <div
                  className="
                    bg-white

                    border border-gray-100

                    rounded-[24px]

                    p-5
                    sm:p-6

                    shadow-sm
                  "
                >

                  <div
                    className="
                      flex items-center

                      justify-between
                    "
                  >

                    <h4
                      className="
                        font-semibold

                        text-gray-900
                      "
                    >
                      Difficulty
                    </h4>

                    <span
                      className="
                        px-3 py-1

                        rounded-full

                        bg-purple-100
                        text-purple-600

                        text-xs

                        font-semibold
                      "
                    >
                      Advanced
                    </span>

                  </div>

                  <div
                    className="
                      mt-5

                      flex items-center

                      gap-2
                    "
                  >

                    {[1, 2, 3, 4, 5].map(
                      (star) => (
                        <i
                          key={star}
                          className="
                            ri-star-fill

                            text-yellow-400
                          "
                        ></i>
                      )
                    )}

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </MainLayout>
  );
}

export default PhaseProject;