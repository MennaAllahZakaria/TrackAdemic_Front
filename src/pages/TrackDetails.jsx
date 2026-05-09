import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";
import MainLayout from "../layouts/MainLayout";
import { useNavigate } from "react-router-dom";

function TrackDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [track, setTrack] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const fetchTrack = async () => {

      try {

        const res = await api.get(
          `/tracks/${id}`
        );

        setTrack(res.data.data);

      } catch (err) {

        console.error(err);

      } finally {

        setLoading(false);

      }

    };

    fetchTrack();

  }, [id]);

  if (loading) {

    return (
      <MainLayout>

        <p className="text-center mt-20">
          Loading...
        </p>

      </MainLayout>
    );

  }

  if (!track) {

    return (
      <MainLayout>

        <p className="text-center mt-20">
          Not found
        </p>

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
          lg:px-8

          py-6
        "
      >

        {/* HERO */}
        <div
          className="
            bg-white

            rounded-3xl

            p-4
            sm:p-6

            shadow-sm
          "
        >

          {/* IMAGE */}
          <div
            className="
              relative

              rounded-2xl
              overflow-hidden
            "
          >

            <img
              src={track.trackImage}
              className="
                w-full

                h-[220px]
                sm:h-[300px]
                lg:h-[380px]

                object-cover
              "
            />

          </div>

          {/* TITLE */}
          <h1
            className="
              text-2xl
              sm:text-3xl
              lg:text-4xl

              font-bold

              mt-6

              leading-tight
            "
          >
            {track.title}
          </h1>

          {/* META */}
          <div
            className="
              flex flex-wrap

              gap-3
              sm:gap-6

              text-sm
              text-gray-500

              mt-4
            "
          >

            <span
              className="
                bg-gray-100

                px-3 py-2

                rounded-full
              "
            >
              📚 {track.totalModules} Modules
            </span>

            <span
              className="
                bg-gray-100

                px-3 py-2

                rounded-full
              "
            >
              ⏱ {track.totalHours} Hours
            </span>

            <span
              className="
                bg-blue-100
                text-blue-600

                px-3 py-2

                rounded-full

                capitalize
              "
            >
              {track.level}
            </span>

          </div>

        </div>

        {/* DESCRIPTION */}
        <div
          className="
            bg-white

            mt-6 sm:mt-8

            p-5
            sm:p-6

            rounded-2xl

            shadow-sm
          "
        >

          <h2
            className="
              text-lg
              sm:text-xl

              font-semibold

              mb-4
            "
          >
            Course Description
          </h2>

          <p
            className="
              text-gray-600

              leading-relaxed

              text-sm
              sm:text-base
            "
          >
            {track.description}
          </p>

        </div>

        {/* LEARNING */}
        <div
          className="
            bg-white

            mt-6 sm:mt-8

            p-5
            sm:p-6

            rounded-2xl

            shadow-sm
          "
        >

          <h2
            className="
              text-lg
              sm:text-xl

              font-semibold

              mb-5
            "
          >
            What you'll learn
          </h2>

          <ul
            className="
              grid

              grid-cols-1
              sm:grid-cols-2

              gap-4
            "
          >

            {track.topics?.map(
              (topic, i) => (

                <li
                  key={i}
                  className="
                    flex items-start

                    gap-3

                    text-gray-600

                    bg-gray-50

                    p-4

                    rounded-xl
                  "
                >

                  <span
                    className="
                      text-green-500

                      mt-[2px]

                      flex-shrink-0
                    "
                  >
                    ✔
                  </span>

                  <span
                    className="
                      text-sm
                      sm:text-base

                      leading-relaxed
                    "
                  >
                    {topic}
                  </span>

                </li>

              )
            )}

          </ul>

        </div>

        {/* CTA */}
        <div
          className="
            mt-8 sm:mt-10

            bg-gradient-to-r
            from-blue-600
            to-blue-400

            p-5
            sm:p-6

            rounded-2xl

            text-white

            flex flex-col
            lg:flex-row

            lg:items-center
            justify-between

            gap-6
          "
        >

          {/* TEXT */}
          <div>

            <h3
              className="
                text-lg
                sm:text-xl

                font-semibold
              "
            >
              Ready to start learning?
            </h3>

            <p
              className="
                text-sm

                opacity-80

                mt-2
              "
            >
              Track your progress and
              improve daily
            </p>

          </div>

          {/* BUTTON */}
          <button
            className="
              w-full
              sm:w-auto

              bg-white
              text-blue-600

              px-6 py-3

              rounded-full

              font-medium

              hover:scale-[1.02]

              transition
            "
            onClick={() =>
              navigate("/onboarding", {
                state: {
                  field:
                    track.category,
                },
              })
            }
          >
            Enroll Now →
          </button>

        </div>

      </div>

    </MainLayout>
  );
}

export default TrackDetails;