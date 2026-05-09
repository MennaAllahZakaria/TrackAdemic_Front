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
        rounded-[24px]
        sm:rounded-[32px]

        p-5
        sm:p-8

        ${
          isStrong
            ? "bg-emerald-50"
            : "bg-red-50"
        }
      `}
    >

      {/* HEADER */}
      <div
        className="
          flex items-start
          sm:items-center

          gap-4

          mb-6
          sm:mb-7
        "
      >

        {/* ICON */}
        <div
          className={`
            w-14 h-14
            sm:w-16 sm:h-16

            rounded-2xl

            flex items-center justify-center

            text-2xl
            sm:text-3xl

            shrink-0

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

        {/* TEXT */}
        <div className="min-w-0">

          <p
            className="
              text-xs
              sm:text-sm

              text-gray-400
            "
          >
            Topic Analysis
          </p>

          <h2
            className="
              text-xl
              sm:text-2xl

              font-bold

              text-gray-900

              mt-1

              break-words
            "
          >
            {title}
          </h2>

        </div>

      </div>

      {/* TOPICS */}
      <div
        className="
          flex flex-wrap

          gap-3
        "
      >

        {topics?.map((topic, i) => (
          <div
            key={i}
            className={`
              px-4 py-3

              rounded-2xl

              text-xs
              sm:text-sm

              font-semibold

              break-words

              max-w-full

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