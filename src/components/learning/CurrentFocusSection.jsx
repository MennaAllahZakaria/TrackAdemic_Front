import PhaseCard from "./PhaseCard";

function CurrentFocusSection({
  data,
}) {
  return (
    <div className="mb-12">

      <div
        className="
          flex flex-col
          sm:flex-row

          sm:items-end
          justify-between

          gap-4

          mb-6
        "
      >

        <div>

          <p
            className="
              text-blue-600

              text-xs
              sm:text-sm

              font-medium

              tracking-wide
            "
          >
            CURRENT FOCUS
          </p>

          <h2
            className="
              text-2xl
              sm:text-3xl

              font-bold

              text-gray-900

              mt-2
            "
          >
            In Progress
          </h2>

        </div>

        <div
          className="
            px-4 py-2

            rounded-full

            bg-blue-50
            text-blue-600

            text-xs
            sm:text-sm

            font-semibold

            w-fit
          "
        >
          {data.phases.length} Active Phases
        </div>

      </div>

      {/* LIST */}
      <div
        className="
          flex gap-5

          overflow-x-auto

          pb-3

          snap-x snap-mandatory

          scrollbar-thin
        "
      >

        {data.phases.map(
          (phase) => (
            <PhaseCard
              key={
                phase.phase_number
              }
              phase={phase}
            />
          )
        )}

      </div>

    </div>
  );
}

export default CurrentFocusSection;