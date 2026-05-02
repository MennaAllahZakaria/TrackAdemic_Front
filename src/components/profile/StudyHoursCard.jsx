function StudyHoursCard({ context }) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">

      <div className="flex justify-between items-center mb-4">
        <h4 className="font-medium">Study Hours</h4>

        <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
          THIS WEEK
        </span>
      </div>

      <div className="text-center mt-6">
        <p className="text-3xl font-bold">
          {context.hoursStudiedThisWeek}
        </p>

        <p className="text-sm text-gray-400 mt-1">
          Total hours focused
        </p>
      </div>

      {/* DAYS */}
      <div className="flex justify-between text-xs text-gray-400 mt-6 px-4">
        {["M","T","W","T","F","S","S"].map((d, i) => (
          <span key={i} className={d === "W" ? "text-blue-600 font-bold" : ""}>
            {d}
          </span>
        ))}
      </div>

      {/* NOTE */}
      <div className="bg-gray-50 rounded-xl p-3 mt-6 text-sm text-gray-500">
        You are 12% more active on Wednesdays.
      </div>

    </div>
  );
}

export default StudyHoursCard;