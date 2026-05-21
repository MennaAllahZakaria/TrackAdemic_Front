function ProgressTopicsList({
  topics,
  completedTopics,
}) {

  const normalize =
    (str) =>
      str
        ?.trim()
        ?.toLowerCase();

  return (

    <div
      className="
        space-y-2

        text-sm
        text-gray-600
      "
    >

      <p
        className="
          font-medium
          mb-3
        "
      >
        Topics covered:
      </p>

      {topics.map(
        (topic, index) => {

          const completed =
            completedTopics.some(
              (t) =>
                normalize(t) ===
                normalize(topic)
            );

          return (

            <div
              key={index}

              className="
                flex items-center
                gap-2
              "
            >

              {completed ? (

                <span
                  className="
                    text-green-600
                    font-bold
                  "
                >
                  ✓
                </span>

              ) : (

                <span
                  className="
                    w-2 h-2

                    rounded-full

                    bg-gray-300

                    block
                  "
                />

              )}

              <span>
                {topic}
              </span>

            </div>

          );
        }
      )}

    </div>

  );
}

export default ProgressTopicsList;

