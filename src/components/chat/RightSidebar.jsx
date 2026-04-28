import { useEffect, useState } from "react";
import api from "../../services/api";

function RightSidebar() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchContext = async () => {
      try {
        const res = await api.get("/user-context");
        setData(res.data.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchContext();
  }, []);

  if (!data) return null;

  return (
    <div className="space-y-4">

      {/* CURRENT TRACK */}
      <div className="bg-white p-5 rounded-2xl shadow-sm">

        <div className="flex justify-between items-center mb-3">
          <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
            ACTIVE
          </span>

          <span className="text-xs text-gray-400">
            {Math.round(data.overallProgressPercent)}%
          </span>
        </div>

        <h3 className="font-semibold">
          {data.currentCourseTitle}
        </h3>

        <p className="text-xs text-gray-500 mt-1">
          Focus: {data.currentPhaseTitle}
        </p>

        {/* progress bar */}
        <div className="h-2 bg-gray-200 rounded-full mt-4">
          <div
            className="h-full bg-blue-600 rounded-full"
            style={{ width: `${data.overallProgressPercent}%` }}
          />
        </div>

      </div>

      {/* MILESTONE */}
      <div className="bg-green-100 p-5 rounded-2xl">

        <p className="text-xs text-green-700 font-medium">
          MILESTONE
        </p>

        <h4 className="font-semibold mt-1">
          Complete Integration Quiz
        </h4>

        <p className="text-xs text-green-700 mt-1">
          Scheduled soon
        </p>

      </div>

      {/* ACTIONS */}
      <div className="grid grid-cols-2 gap-3">

        <button className="bg-white p-4 rounded-xl shadow-sm text-sm">
          📘 View Syllabus
        </button>

        <button className="bg-white p-4 rounded-xl shadow-sm text-sm">
          🎥 Video Recap
        </button>

        <button className="bg-white p-4 rounded-xl shadow-sm text-sm">
          ✅ Exercises
        </button>

        <button className="bg-white p-4 rounded-xl shadow-sm text-sm">
          🕒 History
        </button>

      </div>

      {/* TOGGLES */}
      <div className="bg-white p-5 rounded-2xl shadow-sm">

        <p className="text-xs text-gray-400 mb-3">
          TUTOR MODE
        </p>

        <div className="flex justify-between items-center mb-3">
          <span>Encouraging</span>
          <input type="checkbox" defaultChecked />
        </div>

        <div className="flex justify-between items-center">
          <span>Deep Dive</span>
          <input type="checkbox" />
        </div>

      </div>

    </div>
  );
}

export default RightSidebar;