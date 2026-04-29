import PhaseCard from "./PhaseCard";
function CurrentFocusSection({ data }) {
  return (
    <div className="mb-10">

      <p className="text-blue-600 text-sm font-medium">
        CURRENT FOCUS
      </p>

      <h2 className="text-xl font-semibold mb-4">
        In Progress
      </h2>

      <div className="flex gap-6 overflow-x-auto">

        {data.phases.map((phase) => (
          <PhaseCard key={phase.phase_number} phase={phase} />
        ))}

      </div>

    </div>
  );
}

export default CurrentFocusSection;