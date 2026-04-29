function PhaseCard({ phase, index, status, navigate }) {
  const { isCompleted, isCurrent, isLocked } = status;

  return (
    <div className="w-[420px]">

      {isCompleted && (
        <div className="bg-green-50 p-5 rounded-xl shadow-sm">
          <p className="text-xs text-green-600 mb-2">
            MODULE {phase.phase_number} • COMPLETED
          </p>

          <h3 className="font-semibold">
            {phase.phase_title}
          </h3>

          <ul className="text-sm text-gray-600 mt-2 space-y-1">
            {phase.courses?.[0]?.topics?.map((t, i) => (
              <li key={i}>• {t}</li>
            ))}
          </ul>

          <button
            onClick={() =>
              navigate(`/project/${phase.phase_number}`)
            }
            className="mt-4 w-full bg-green-600 text-white py-2 rounded-full"
          >
            View Project →
          </button>
        </div>
      )}

      {isCurrent && (
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-200">
          <p className="text-xs text-blue-600 mb-2">
            MODULE {phase.phase_number} • IN PROGRESS
          </p>

          <h3 className="font-semibold mb-2">
            {phase.phase_title}
          </h3>

          <p className="text-sm text-gray-500 mb-4">
            {phase.objective}
          </p>

          <button
            onClick={() => navigate(`/my-learning`)}
            className="w-full bg-blue-600 text-white py-3 rounded-full"
          >
            Continue Learning →
          </button>
        </div>
      )}

      {isLocked && (
        <div className="bg-gray-100 p-5 rounded-xl opacity-60">
          <p className="text-xs text-gray-500 mb-2">
            MODULE {phase.phase_number} • LOCKED
          </p>

          <h3 className="font-medium">
            {phase.phase_title}
          </h3>
        </div>
      )}

    </div>
  );
}

export default PhaseCard;