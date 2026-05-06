function LockedMilestoneCard() {
  return (
    <div className="
      border-2 border-dashed
      border-gray-200

      rounded-[36px]
      p-8

      text-center
      bg-white
    ">

      <div className="
        w-16 h-16
        rounded-2xl
        bg-gray-100

        flex items-center
        justify-center

        text-3xl
        text-gray-400

        mx-auto
      ">
        <i className="
          ri-lock-line
        "></i>
      </div>

      <p className="
        text-gray-500
        mt-5
        font-medium
      ">
        Next Milestone Unlocks at 75%
      </p>

      <div className="
        h-2 rounded-full
        bg-gray-100
        mt-5 overflow-hidden
      ">

        <div className="
          h-full
          bg-blue-600
          rounded-full
          w-[75%]
        "></div>

      </div>

    </div>
  );
}

export default LockedMilestoneCard;