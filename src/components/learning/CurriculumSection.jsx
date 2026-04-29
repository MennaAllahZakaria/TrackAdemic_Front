function CurriculumSection({ data }) {
  return (
    <div>

      <h2 className="text-xl font-semibold mb-6">
        Your Curriculum
      </h2>

      <div className="grid grid-cols-3 gap-6">

        {data.phases.map((phase) => (
          <div
            key={phase.phase_number}
            className="bg-white p-5 rounded-2xl shadow-sm"
          >

            <div className="w-full h-[120px] bg-gray-200 rounded-xl mb-4" />

            <h3 className="font-semibold">{phase.title}</h3>

            <p className="text-sm text-gray-500 mt-2">
              {phase.objective}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}

export default CurriculumSection;