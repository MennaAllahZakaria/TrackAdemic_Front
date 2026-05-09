function AnalyticsHeader({ streak }) {

  return (
    <div
      className="
        flex flex-col
        sm:flex-row

        sm:items-start
        justify-between

        gap-5

        mb-8
        sm:mb-10
      "
    >

      <div>

        <h1
          className="
            text-3xl
            md:text-4xl
            xl:text-[52px]

            font-bold
            text-gray-900

            leading-tight
            xl:leading-none
          "
        >
          Performance Analytics
        </h1>

        <p
          className="
            text-gray-500

            text-base
            md:text-lg
            xl:text-xl

            mt-3
            sm:mt-4

            leading-relaxed
          "
        >
          Visualizing your academic
          journey with precision.
        </p>

      </div>

    </div>
  );
}

export default AnalyticsHeader;