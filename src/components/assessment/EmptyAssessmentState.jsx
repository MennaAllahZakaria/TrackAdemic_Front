function EmptyAssessmentState() {
  return (
    <div
      className="
        mt-8

        bg-white

        rounded-[28px]
        sm:rounded-[36px]
        xl:rounded-[40px]

        border border-gray-100

        shadow-sm

        p-6
        sm:p-10
        xl:p-14

        text-center
      "
    >

      {/* ICON */}
      <div
        className="
          w-20 h-20
          sm:w-24 sm:h-24
          xl:w-28 xl:h-28

          rounded-full

          bg-cyan-50
          text-cyan-600

          flex items-center justify-center

          text-[42px]
          sm:text-[50px]
          xl:text-[58px]

          mx-auto
        "
      >

        <i className="ri-brain-line"></i>

      </div>

      {/* TITLE */}
      <h2
        className="
          text-3xl
          sm:text-4xl
          xl:text-[42px]

          font-bold

          leading-tight

          text-gray-900

          mt-8
          sm:mt-10
        "
      >
        No Active Assessment
      </h2>

      {/* DESCRIPTION */}
      <p
        className="
          text-gray-500

          leading-[1.9]
          sm:leading-[2]

          text-sm
          sm:text-lg

          mt-5
          sm:mt-6

          max-w-[700px]

          mx-auto
        "
      >
        Start a new AI-powered assessment
        to evaluate your technical level,
        discover learning gaps, and receive
        personalized educational insights.
      </p>

    </div>
  );
}

export default EmptyAssessmentState;