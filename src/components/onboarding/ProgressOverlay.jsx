function ProgressOverlay({ progress }) {
  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">

      <div className="bg-white p-8 rounded-2xl w-[400px] text-center shadow-xl">

        <h3 className="font-semibold text-lg mb-2">
          Generating your learning path...
        </h3>

        <p className="text-sm text-gray-500 mb-6">
          This may take a few seconds
        </p>

        {/* progress bar */}
        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-xs text-gray-400 mt-2">
          {progress}%
        </p>

      </div>

    </div>
  );
}

export default ProgressOverlay;