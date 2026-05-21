function ProgressHero({
  title,
  progress,
  goal,
}) {

  const [mainTitle, subTitle] =
    title?.includes(":")
      ? title.split(":")
      : [title, ""];

  return (

    <div className="mb-20">

      {/* TOP BADGES */}
      <div
        className="
          flex flex-wrap
          items-center
          gap-3

          mb-4
        "
      >

        <span
          className="
            bg-green-100
            text-green-600

            px-3 py-1

            rounded-full

            text-xs
            font-medium
          "
        >
          ACTIVE PATH
        </span>

        <span
          className="
            text-gray-400
            text-sm
          "
        >
          {Number(progress || 0).toFixed(0)}
          % Completed
        </span>

      </div>

      {/* TITLE */}
      <h1
        className="
          text-3xl
          sm:text-5xl

          font-bold

          leading-tight
          tracking-tight
        "
      >

        {mainTitle}

        <br />

        <span
          className="
            text-blue-600
          "
        >
          {subTitle}
        </span>

      </h1>

      {/* DESCRIPTION */}
      <p
        className="
          text-gray-500

          mt-6

          max-w-xl

          text-base
          sm:text-lg
        "
      >
        {goal}
      </p>

    </div>

  );
}

export default ProgressHero;
