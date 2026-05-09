function LockedMilestoneCard() {

  return (
    <div
      className="
        border-2 border-dashed
        border-gray-200

        rounded-[28px]
        md:rounded-[32px]
        xl:rounded-[36px]

        p-5
        md:p-6
        xl:p-8

        text-center

        bg-white
      "
    >

      <div
        className="
          w-12 h-12
          md:w-14 md:h-14
          xl:w-16 xl:h-16

          rounded-2xl

          bg-gray-100

          flex items-center
          justify-center

          text-2xl
          md:text-[28px]
          xl:text-3xl

          text-gray-400

          mx-auto
        "
      >

        <i
          className="
            ri-lock-line
          "
        ></i>

      </div>

      <p
        className="
          text-gray-500

          mt-4
          xl:mt-5

          font-medium

          text-sm
          md:text-[15px]
          xl:text-base
        "
      >
        Next Milestone Unlocks at 75%
      </p>

      <div
        className="
          h-2

          rounded-full

          bg-gray-100

          mt-5

          overflow-hidden
        "
      >

        <div
          className="
            h-full

            bg-blue-600

            rounded-full

            w-[75%]
          "
        ></div>

      </div>

    </div>
  );
}

export default LockedMilestoneCard;