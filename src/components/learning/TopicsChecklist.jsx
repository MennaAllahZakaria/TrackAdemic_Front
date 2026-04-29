import { useState } from "react";
import api from "../../services/api";

function TopicsChecklist({ topics = [], progress, setProgress }) {
  const [loadingTopic, setLoadingTopic] = useState(null);

  const completed = progress?.completedTopics || [];

  const handleToggle = async (topic) => {
    // لو already completed → منعملش حاجة (أو ممكن نعمل undo لو الباك يدعم)
    if (completed.includes(topic)) return;

    try {
      setLoadingTopic(topic);

      const res = await api.post("/progress/update", {
        topic,
        hours: 1,
      });

      // update progress مباشرة
      setProgress(res.data.data);

    } catch (err) {
      console.error(err);
    } finally {
      setLoadingTopic(null);
    }
  };

  return (
    <div className="space-y-3">
      {topics.map((topic, i) => {
        const isDone = completed.includes(topic);
        const isLoading = loadingTopic === topic;

        return (
          <div
            key={topic} // topic string unique هنا
            onClick={() => handleToggle(topic)}
            className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition
              ${isDone ? "bg-green-50" : "bg-gray-50 hover:bg-gray-100"}
            `}
          >
            {/* checkbox */}
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center text-xs
                ${isDone ? "bg-green-500 text-white" : "border"}
              `}
            >
              {isDone ? "✓" : ""}
            </div>

            {/* text */}
            <span
              className={`flex-1 ${
                isDone ? "line-through text-gray-400" : "text-gray-700"
              }`}
            >
              {topic}
            </span>

            {/* loading */}
            {isLoading && (
              <span className="text-xs text-gray-400">
                Updating...
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default TopicsChecklist;