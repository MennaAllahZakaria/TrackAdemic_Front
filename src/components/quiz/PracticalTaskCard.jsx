function PracticalTaskCard({ task }) {

  if (!task) return null;

  return (
    <div
      className="
        mt-10

        rounded-[24px]
        md:rounded-[28px]
        xl:rounded-[32px]

        border border-blue-100

        bg-gradient-to-br
        from-[#EFF6FF]
        via-[#F8FAFC]
        to-white

        p-5
        md:p-6
        xl:p-8

        shadow-[0_10px_40px_rgba(59,130,246,0.08)]

        relative
        overflow-hidden
      "
    >

      {/* DECOR */}
      <div
        className="
          absolute -top-16 -right-16

          w-40 h-40
          md:w-52 md:h-52
          xl:w-56 xl:h-56

          rounded-full

          bg-blue-200/30

          blur-3xl
        "
      ></div>

      {/* HEADER */}
      <div
        className="
          relative z-10

          flex flex-col
          sm:flex-row

          sm:items-start

          gap-5
        "
      >

        {/* ICON */}
        <div
          className="
            min-w-[56px]
            h-[56px]

            md:min-w-[60px]
            md:h-[60px]

            xl:min-w-[64px]
            xl:h-[64px]

            rounded-2xl

            bg-blue-600
            text-white

            flex items-center justify-center

            shadow-lg
          "
        >

          <i
            className="
              ri-code-box-line

              text-2xl
              md:text-[28px]
              xl:text-[30px]
            "
          ></i>

        </div>

        {/* TEXT */}
        <div className="min-w-0">

          <div
            className="
              flex items-center

              gap-3

              flex-wrap
            "
          >

            <h2
              className="
                text-2xl
                sm:text-[26px]
                xl:text-[30px]

                font-bold
                text-gray-900

                leading-tight
              "
            >
              Practical Challenge
            </h2>

            <span
              className="
                px-3 py-1

                rounded-full

                bg-blue-100
                text-blue-600

                text-[11px]
                sm:text-xs

                font-semibold

                whitespace-nowrap
              "
            >
              HANDS-ON TASK
            </span>

          </div>

          <p
            className="
              text-gray-500

              mt-3

              leading-relaxed

              text-sm
              sm:text-[15px]

              max-w-2xl
            "
          >
            Apply what you've learned
            through a real-world coding
            challenge designed to
            strengthen your practical
            understanding.
          </p>

        </div>

      </div>

      {/* CONTENT */}
      <div
        className="
          relative z-10

          mt-8
          xl:mt-10
        "
      >

        {/* TITLE */}
        <div
          className="
            bg-white/80
            backdrop-blur

            rounded-[24px]
            sm:rounded-3xl

            border border-white

            p-5
            sm:p-6

            shadow-sm
          "
        >

          <div
            className="
              flex flex-col
              lg:flex-row

              lg:items-start
              justify-between

              gap-5
            "
          >

            <div className="min-w-0">

              <p
                className="
                  text-xs

                  uppercase
                  tracking-wide

                  text-gray-400

                  font-medium
                "
              >
                Task Title
              </p>

              <h3
                className="
                  text-xl
                  sm:text-[24px]
                  xl:text-[26px]

                  font-bold
                  text-gray-900

                  mt-2

                  leading-snug

                  break-words
                "
              >
                {task.title}
              </h3>

            </div>

            {/* TIME */}
            <div
              className="
                w-full
                sm:w-auto

                sm:min-w-[140px]

                rounded-2xl

                bg-blue-50

                border border-blue-100

                p-4

                text-center
              "
            >

              <p
                className="
                  text-xs
                  text-gray-400

                  uppercase
                  tracking-wide
                "
              >
                Estimated Time
              </p>

              <h4
                className="
                  text-xl
                  sm:text-2xl

                  font-bold
                  text-blue-600

                  mt-2
                "
              >
                {task.estimated_minutes}m
              </h4>

            </div>

          </div>

          {/* DESCRIPTION */}
          <div className="mt-8">

            <p
              className="
                text-xs

                uppercase
                tracking-wide

                text-gray-400

                font-medium

                mb-3
              "
            >
              Description
            </p>

            <p
              className="
                text-gray-700

                leading-[1.9]

                text-sm
                sm:text-[15px]
              "
            >
              {task.description}
            </p>

          </div>

          {/* EXPECTED OUTPUT */}
          <div className="mt-8">

            <p
              className="
                text-xs

                uppercase
                tracking-wide

                text-gray-400

                font-medium

                mb-3
              "
            >
              Expected Output
            </p>

            <div
              className="
                rounded-2xl

                bg-gray-900
                text-gray-100

                p-4
                sm:p-5

                text-sm

                leading-relaxed

                border border-gray-800

                shadow-inner

                overflow-x-auto
              "
            >
              {task.expected_output}
            </div>

          </div>

        </div>

        {/* EVALUATION */}
        <div className="mt-8">

          <div
            className="
              flex items-start

              gap-3
              sm:gap-4

              mb-5
            "
          >

            <div
              className="
                w-10 h-10
                sm:w-11 sm:h-11

                rounded-xl

                bg-green-100
                text-green-600

                flex items-center justify-center

                flex-shrink-0
              "
            >

              <i className="ri-checkbox-circle-line text-xl"></i>

            </div>

            <div>

              <h3
                className="
                  text-lg
                  sm:text-xl

                  font-bold
                  text-gray-900
                "
              >
                Evaluation Criteria
              </h3>

              <p
                className="
                  text-sm
                  text-gray-500

                  mt-1

                  leading-relaxed
                "
              >
                Your solution will be
                evaluated based on these
                points.
              </p>

            </div>

          </div>

          {/* CRITERIA */}
          <div
            className="
              grid

              grid-cols-1
              md:grid-cols-2

              gap-4
            "
          >

            {task.evaluation_criteria?.map(
              (item, index) => (

                <div
                  key={index}
                  className="
                    bg-white

                    rounded-2xl

                    border border-gray-100

                    p-4
                    sm:p-5

                    flex items-start

                    gap-4

                    shadow-sm

                    hover:shadow-md
                    hover:-translate-y-1

                    transition-all duration-300

                    group
                  "
                >

                  {/* CHECK */}
                  <div
                    className="
                      min-w-[36px]
                      h-[36px]

                      rounded-full

                      bg-green-100
                      text-green-600

                      flex items-center justify-center

                      group-hover:bg-[#9FF79F]

                      transition-all duration-300
                    "
                  >

                    <i className="ri-check-line text-lg"></i>

                  </div>

                  {/* TEXT */}
                  <p
                    className="
                      text-sm
                      text-gray-700

                      leading-relaxed
                    "
                  >
                    {item}
                  </p>

                </div>

              )
            )}

          </div>

        </div>

      </div>

    </div>
  );
}

export default PracticalTaskCard;