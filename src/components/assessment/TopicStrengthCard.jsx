function TopicStrengthCard({
  title,
  topics,
  type = "strong",
}) {
  const isStrong =
    type === "strong";

  return (
    <div
      className={`
        rounded-[32px]
        p-8

        ${
          isStrong
            ? "bg-emerald-50"
            : "bg-red-50"
        }
      `}
    >

      <div className="
        flex items-center gap-4
        mb-7
      ">

        <div
          className={`
            w-16 h-16 rounded-2xl

            flex items-center justify-center

            text-3xl

            ${
              isStrong
                ? `
                  bg-emerald-100
                  text-emerald-600
                `
                : `
                  bg-red-100
                  text-red-600
                `
            }
          `}
        >
          <i
            className={
              isStrong
                ? "ri-arrow-up-line"
                : "ri-alert-line"
            }
          ></i>
        </div>

        <div>

          <p className="
            text-sm text-gray-400
          ">
            Topic Analysis
          </p>

          <h2 className="
            text-2xl font-bold
            text-gray-900
            mt-1
          ">
            {title}
          </h2>

        </div>

      </div>

      <div className="
        flex flex-wrap gap-3
      ">

        {topics?.map((topic, i) => (
          <div
            key={i}
            className={`
              px-4 py-3 rounded-2xl

              text-sm font-semibold

              ${
                isStrong
                  ? `
                    bg-emerald-500/15
                    text-emerald-700
                  `
                  : `
                    bg-red-500/15
                    text-red-700
                  `
              }
            `}
          >
            {topic}
          </div>
        ))}

      </div>

    </div>
  );
}

export default TopicStrengthCard;