import ProgressPhaseCard
from "./ProgressPhaseCard";

function ProgressTimeline({

  phases,

  completedTopics,

  navigate,

  normalize,

}) {

  return (

    <div
      className="
        relative
        mt-20
      "
    >

      {/* DESKTOP LINE */}
      <div
        className="
          hidden lg:block

          absolute
          left-1/2
          top-0

          h-full
          w-[2px]

          bg-gray-200

          -translate-x-1/2
        "
      />

      {/* MOBILE LINE */}
      <div
        className="
          lg:hidden

          absolute
          left-6
          top-0

          h-full
          w-[2px]

          bg-gray-200
        "
      />

      <div
        className="
          space-y-12
          lg:space-y-32
        "
      >

        {phases.map(
          (phase, index) => (

            <ProgressPhaseCard

              key={index}

              phase={phase}

              index={index}

              completedTopics={
                completedTopics
              }

              navigate={navigate}

              normalize={normalize}

            />

          )
        )}

      </div>

    </div>

  );
}

export default ProgressTimeline;

