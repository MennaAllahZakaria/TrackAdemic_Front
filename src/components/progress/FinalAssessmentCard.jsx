function FinalAssessmentCard({
  unlocked,
  progress,
  navigate,
}) {

  return (

    <div
      className="
        relative

        overflow-hidden

        rounded-[32px]

        bg-gradient-to-br
        from-purple-600
        via-violet-600
        to-indigo-700

        p-6
        sm:p-8
        lg:p-10

        text-white

        shadow-[0_20px_60px_rgba(124,58,237,0.25)]
      "
    >

      {/* BG */}
      <div
        className="
          absolute

          -top-20
          -right-20

          w-72 h-72

          rounded-full

          bg-white/10

          blur-3xl
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative z-10

          flex flex-col
          lg:flex-row

          lg:items-center
          justify-between

          gap-8
        "
      >

        {/* LEFT */}
        <div
          className="
            max-w-2xl
          "
        >

          <div
            className="
              inline-flex items-center
              gap-2

              px-4 py-2

              rounded-full

              bg-white/15

              backdrop-blur-md

              text-sm

              font-semibold

              mb-5
            "
          >

            <i className="ri-award-line"></i>

            FINAL ASSESSMENT

          </div>

          <h2
            className="
              text-3xl
              sm:text-4xl

              font-bold

              leading-tight
            "
          >
            Validate Your Knowledge
          </h2>

          <p
            className="
              text-white/80

              mt-5

              leading-[1.9]

              text-sm
              sm:text-base
            "
          >
            Complete the final
            assessment to prove your
            mastery and unlock your
            personalized completion
            certificate.
          </p>

          {!unlocked && (

            <div
              className="
                mt-5

                inline-flex items-center
                gap-2

                px-4 py-3

                rounded-2xl

                bg-white/10

                border border-white/10

                text-sm
              "
            >

              <i className="ri-lock-line"></i>

              Complete 100% of your
              learning path to unlock
              the assessment.

            </div>

          )}

        </div>

        {/* RIGHT */}
        <div
          className="
            flex flex-col

            items-center
            justify-center

            shrink-0
          "
        >

          {/* PROGRESS */}
          <div
            className="
              w-40 h-40

              rounded-full

              border-[10px]
              border-white/20

              flex items-center
              justify-center

              bg-white/10

              backdrop-blur-md
            "
          >

            <div className="text-center">

              <h3
                className="
                  text-4xl

                  font-bold
                "
              >
                {Number(
                  progress || 0
                ).toFixed(0)}
                %
              </h3>

              <p
                className="
                  text-sm

                  text-white/70

                  mt-2
                "
              >
                Progress
              </p>

            </div>

          </div>

          {/* BUTTON */}
          <button

            disabled={!unlocked}

            onClick={() => {

              if (!unlocked)
                return;

              navigate(
                "/assessments",
                {
                  state: {
                    fromProgress: true,
                  },
                }
              );

            }}

            className={`
              mt-6

              px-7 py-3

              rounded-2xl

              font-semibold

              transition-all duration-300

              ${
                unlocked
                  ? `
                    bg-white
                    text-purple-700

                    hover:scale-105
                  `
                  : `
                    bg-white/20
                    text-white/60

                    cursor-not-allowed
                  `
              }
            `}
          >

            {unlocked
              ? "Start Final Assessment →"
              : "Assessment Locked"}

          </button>

        </div>

      </div>

    </div>

  );
}

export default FinalAssessmentCard;

