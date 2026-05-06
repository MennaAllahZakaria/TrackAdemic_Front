import { useNavigate } from "react-router-dom";

function AssessmentHistoryCard({
  assessment,
}) {
  const navigate = useNavigate();

  return (
    <div
      className="
        bg-white
        rounded-[30px]

        border border-gray-100
        shadow-sm

        p-7

        hover:-translate-y-1
        hover:shadow-xl

        transition-all duration-300
      "
    >

      {/* TOP */}
      <div className="
        flex items-start justify-between
      ">

        <div>

          <div className="
            inline-flex items-center gap-2

            px-3 py-2 rounded-full

            bg-cyan-50
            text-cyan-600

            text-xs font-semibold
          ">

            <i className="
              ri-brain-line
            "></i>

            {assessment?.result?.level}

          </div>

          <h2 className="
            text-2xl
            font-bold
            text-gray-900
            mt-5
          ">
            AI Assessment
          </h2>

        </div>

        <div className="
          w-14 h-14 rounded-2xl

          bg-gradient-to-br
          from-cyan-500
          to-blue-600

          flex items-center justify-center

          text-white text-2xl
        ">
          <i className="
            ri-flashlight-line
          "></i>
        </div>

      </div>

      {/* DATE */}
      <p className="
        text-sm text-gray-400
        mt-5
      ">
        {new Date(
          assessment?.createdAt
        ).toLocaleDateString()}
      </p>

      {/* SUMMARY */}
      <p className="
        text-gray-500
        leading-[1.9]
        mt-5
        line-clamp-3
      ">
        {assessment?.result?.summary}
      </p>

      {/* STATS */}
      <div className="
        flex gap-4
        mt-7
      ">

        <div className="
          flex-1

          bg-emerald-50
          rounded-2xl

          p-4
        ">

          <p className="
            text-xs
            text-emerald-600
            font-semibold
          ">
            STRONG TOPICS
          </p>

          <h3 className="
            text-2xl
            font-bold
            text-emerald-700
            mt-2
          ">
            {
              assessment?.result
                ?.strongTopics?.length
            }
          </h3>

        </div>

        <div className="
          flex-1

          bg-red-50
          rounded-2xl

          p-4
        ">

          <p className="
            text-xs
            text-red-600
            font-semibold
          ">
            WEAK TOPICS
          </p>

          <h3 className="
            text-2xl
            font-bold
            text-red-700
            mt-2
          ">
            {
              assessment?.result
                ?.weakTopics?.length
            }
          </h3>

        </div>

      </div>

      {/* BUTTON */}
      <button
        onClick={() =>
          navigate(
            `/assessment/${assessment?.sessionId}`
          )
        }
        className="
          w-full
          mt-8

          py-4 rounded-2xl

          bg-gray-100
          hover:bg-gray-200

          font-semibold
          text-gray-800

          transition-all duration-300
        "
      >
        View Full Analysis →
      </button>

    </div>
  );
}

export default AssessmentHistoryCard;