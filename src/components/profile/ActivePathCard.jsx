import { useNavigate } from "react-router-dom";

function ActivePathCard({ context }) {
    const navigate = useNavigate();

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm flex justify-between gap-6">

      {/* LEFT */}
      <div className="flex-1">

        <p className="text-xs text-blue-600 font-medium mb-2">
          ACTIVE PATH
        </p>

        <h3 className="text-lg font-semibold leading-snug">
          {context.pathTitle}
        </h3>

        <p className="text-sm text-gray-500 mt-3">
          Currently diving deep into {context.currentPhaseTitle}
        </p>

        {/* PROGRESS */}
        <div className="mt-6">

          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-400">Overall Progress</span>
            <span className="text-blue-600 font-semibold">
              {context.overallProgressPercent?.toFixed(0)}%
            </span>
          </div>

          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 bg-blue-600 rounded-full transition-all duration-500"
              style={{ width: `${context.overallProgressPercent}%` }}
            />
          </div>

        </div>
      </div>

      {/* RIGHT */}
      <div className="w-[200px] bg-gray-100 rounded-2xl p-4 flex flex-col justify-between">

        <p className="text-xs text-gray-400">NEXT MILESTONE</p>

        <div>
          <p className="font-medium text-sm mt-2">
            System Architect Certificate
          </p>
        </div>

        <button className="text-blue-600 text-sm mt-4" onClick={()=>navigate("/my-learning")}>
          Resume Lesson →
        </button>

      </div>

    </div>
  );
}

export default ActivePathCard;