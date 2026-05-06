function EmptyAssessmentState() {
  return (
    <div
      className="
        mt-8

        bg-white
        rounded-[40px]

        border border-gray-100
        shadow-sm

        p-14

        text-center
      "
    >

      <div className="
        w-28 h-28 rounded-full

        bg-cyan-50
        text-cyan-600

        flex items-center justify-center

        text-[58px]

        mx-auto
      ">
        <i className="
          ri-brain-line
        "></i>
      </div>

      <h2 className="
        text-[42px]
        font-bold
        text-gray-900
        mt-10
      ">
        No Active Assessment
      </h2>

      <p className="
        text-gray-500
        leading-[2]
        text-lg

        mt-6
        max-w-[700px]

        mx-auto
      ">
        Start a new AI-powered assessment
        to evaluate your technical level,
        discover learning gaps, and receive
        personalized educational insights.
      </p>

    </div>
  );
}

export default EmptyAssessmentState;