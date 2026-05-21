import MainLayout from "../../layouts/MainLayout";

function AboutPage() {
  return (
    <MainLayout>
      <div
        className="
          px-4
          sm:px-6
          lg:px-10

          py-10
          sm:py-12

          space-y-16
          sm:space-y-20
          lg:space-y-24

          max-w-[1300px]
          mx-auto
        "
      >

        {/* ================= OUR STORY ================= */}
        <div
          className="
            grid

            grid-cols-1
            lg:grid-cols-2

            gap-10
            lg:gap-16

            items-center
          "
        >

          {/* LEFT TEXT */}
          <div className="min-w-0">

            <h2
              className="
                text-3xl
                sm:text-4xl

                font-bold

                mb-6

                text-gray-900
              "
            >
              Our Story
            </h2>

            <p
              className="
                text-gray-600

                leading-8

                mb-5

                text-sm
                sm:text-base
              "
            >
              Trackademic began in a small
              university library corner where
              8 educators noticed a recurring
              problem: the "one-size-fits-all"
              curriculum was leaving brilliant
              students behind while holding
              faster learners back.
            </p>

            <p
              className="
                text-gray-600

                leading-8

                text-sm
                sm:text-base
              "
            >
              We spent one year interviewing
              cognitive psychologists and data
              scientists to understand how to
              replicate the nuance of human
              mentorship in a digital environment.
            </p>

          </div>

          {/* RIGHT CARDS */}
          <div
            className="
              grid

              grid-cols-1
              sm:grid-cols-2

              gap-5
              sm:gap-6
            "
          >

            {/* CARD */}
            <div
              className="
                bg-white

                p-5
                sm:p-6

                rounded-2xl

                shadow-sm

                border border-gray-100
              "
            >

              <h1
                className="
                  text-blue-600

                  font-bold

                  text-xl
                  sm:text-2xl
                "
              >
                2025
              </h1>

              <p
                className="
                  font-medium

                  mt-3

                  text-gray-900
                "
              >
                The Spark
              </p>

              <p
                className="
                  text-sm
                  text-gray-500

                  mt-2

                  leading-relaxed
                "
              >
                Foundation of our core AI
                pedagogical engine.
              </p>

            </div>

            {/* CARD */}
            <div
              className="
                bg-white

                p-5
                sm:p-6

                rounded-2xl

                shadow-sm

                border border-gray-100
              "
            >

              <h1
                className="
                  text-purple-600

                  font-bold

                  text-xl
                  sm:text-2xl
                "
              >
                2026
              </h1>

              <p
                className="
                  font-medium

                  mt-3

                  text-gray-900
                "
              >
                Global Scale
              </p>

              <p
                className="
                  text-sm
                  text-gray-500

                  mt-2

                  leading-relaxed
                "
              >
                Expansion to 15 countries
                and multiple languages.
              </p>

            </div>

            {/* CARD */}
            <div
              className="
                bg-blue-600
                text-white

                p-5
                sm:p-6

                rounded-2xl

                shadow-sm

                self-start
              "
            >

              <h3
                className="
                  text-3xl
                  sm:text-4xl

                  font-bold
                "
              >
                1.2M
              </h3>

              <p
                className="
                  font-medium

                  mt-3
                "
              >
                Learners
              </p>

              <p
                className="
                  text-sm

                  mt-2

                  text-blue-100

                  leading-relaxed
                "
              >
                Students empowered through
                our personalized tracks.
              </p>

            </div>

            {/* IMAGE */}
            <div
              className="
                rounded-2xl

                overflow-hidden

                min-h-[220px]
                sm:min-h-[260px]
              "
            >

              <img
                src="/about-image.png"
                className="
                  w-full h-full

                  object-cover
                "
              />

            </div>

          </div>

        </div>

        {/* ================= PHILOSOPHY ================= */}
        <div className="text-center">

          <h2
            className="
              text-3xl
              sm:text-4xl

              font-bold

              mb-4

              text-gray-900
            "
          >
            Our Philosophy
          </h2>

          <p
            className="
              text-gray-500

              max-w-xl

              mx-auto

              leading-relaxed

              text-sm
              sm:text-base
            "
          >
            We believe AI should be a compass,
            not the pilot. Technology exists to
            enhance human intuition, not replace it.
          </p>

          {/* GRID */}
          <div
            className="
              grid

              grid-cols-1
              md:grid-cols-2
              xl:grid-cols-3

              gap-5
              sm:gap-6

              mt-10
              sm:mt-12
            "
          >

            {/* CARD */}
            <div
              className="
                bg-white

                p-5
                sm:p-6

                rounded-2xl

                shadow-sm

                border border-gray-100

                text-left

                hover:shadow-md
                hover:-translate-y-1

                transition-all duration-300
              "
            >

              <div
                className="
                  w-10 h-10

                  bg-blue-100

                  rounded-full

                  flex items-center justify-center

                  mb-4

                  text-lg
                "
              >
                💡
              </div>

              <h3
                className="
                  font-semibold

                  mb-3

                  text-gray-900
                "
              >
                Cognitive Resonance
              </h3>

              <p
                className="
                  text-sm
                  text-gray-500

                  leading-relaxed
                "
              >
                Our algorithms adapt to your
                unique memory retention cycles,
                presenting information exactly
                when you're ready to absorb it
                most effectively.
              </p>

            </div>

            {/* CARD */}
            <div
              className="
                bg-white

                p-5
                sm:p-6

                rounded-2xl

                shadow-sm

                border border-gray-100

                text-left

                hover:shadow-md
                hover:-translate-y-1

                transition-all duration-300
              "
            >

              <div
                className="
                  w-10 h-10

                  bg-purple-100

                  rounded-full

                  flex items-center justify-center

                  mb-4

                  text-lg
                "
              >
                ✨
              </div>

              <h3
                className="
                  font-semibold

                  mb-3

                  text-gray-900
                "
              >
                Transparent AI
              </h3>

              <p
                className="
                  text-sm
                  text-gray-500

                  leading-relaxed
                "
              >
                We provide insight into the
                'why' behind every recommendation.
                Our AI isn't a black box, it's a
                collaborative partner in your growth.
              </p>

            </div>

            {/* CARD */}
            <div
              className="
                bg-white

                p-5
                sm:p-6

                rounded-2xl

                shadow-sm

                border border-gray-100

                text-left

                hover:shadow-md
                hover:-translate-y-1

                transition-all duration-300
              "
            >

              <div
                className="
                  w-10 h-10

                  bg-green-100

                  rounded-full

                  flex items-center justify-center

                  mb-4

                  text-lg
                "
              >
                🎓
              </div>

              <h3
                className="
                  font-semibold

                  mb-3

                  text-gray-900
                "
              >
                Holistic Mastery
              </h3>

              <p
                className="
                  text-sm
                  text-gray-500

                  leading-relaxed
                "
              >
                Education isn't about passing
                tests, it's about deep understanding.
                We prioritize logical connections
                over rote memorization.
              </p>

            </div>

          </div>

        </div>

      </div>
    </MainLayout>
  );
}

export default AboutPage;