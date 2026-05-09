import { useState } from "react";
import api from "../../services/api";

function TopicsChecklist({
  topics = [],
  progress,
  setProgress,
}) {
  const [loadingTopic, setLoadingTopic] =
    useState(null);

  const completed =
    progress?.completedTopics || [];

  const handleToggle =
    async (topic) => {
      if (
        completed.includes(topic)
      )
        return;

      try {
        setLoadingTopic(topic);

        const res =
          await api.post(
            "/progress/update",
            {
              topic,
              hours: 1,
            }
          );

        setProgress(
          res.data.data.progress
        );

      } catch (err) {
        console.error(err);
      } finally {
        setLoadingTopic(null);
      }
    };

  return (
    <div className="space-y-3">

      {topics.map((topic) => {
        const isDone =
          completed.includes(topic);

        const isLoading =
          loadingTopic === topic;

        return (
          <div
            key={topic}
            onClick={() =>
              handleToggle(topic)
            }
            className={`
              flex items-start

              gap-3

              p-4

              rounded-2xl

              cursor-pointer

              transition-all duration-300

              ${
                isDone
                  ? "bg-green-50"
                  : "bg-gray-50 hover:bg-gray-100"
              }
            `}
          >

            {/* CHECK */}
            <div
              className={`
                min-w-[22px]
                h-[22px]

                rounded-full

                flex items-center justify-center

                text-xs

                mt-0.5

                ${
                  isDone
                    ? "bg-green-500 text-white"
                    : "border border-gray-300"
                }
              `}
            >
              {isDone ? "✓" : ""}
            </div>

            {/* TEXT */}
            <span
              className={`
                flex-1

                text-sm
                sm:text-base

                leading-relaxed

                break-words

                ${
                  isDone
                    ? "line-through text-gray-400"
                    : "text-gray-700"
                }
              `}
            >
              {topic}
            </span>

            {/* LOADING */}
            {isLoading && (
              <span
                className="
                  text-xs

                  text-gray-400

                  whitespace-nowrap
                "
              >
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