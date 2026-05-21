import PhaseCard from "./PhaseCard";

function CurrentFocusSection({
  data,
}) {

  // =========================
  // FLATTEN COURSES
  // =========================
  const allCourses =
    data?.phases?.flatMap(
      (phase) =>

        phase.courses.map(
          (course, index) => ({

            ...course,

            phase_number:
              phase.phase_number,

            phase_title:
              phase.phase_title,

            objective:
              phase.objective,

            courseIndex:
              index,

          })
        )
    ) || [];

  return (

    <div className="mb-12">

      {/* HEADER */}
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
          {allCourses.length} Courses
        </div>

      </div>

      {/* COURSES */}
      <div
        className="
          flex gap-5

          overflow-x-auto

          pb-3

          snap-x snap-mandatory

          scrollbar-thin
        "
      >

        {allCourses.map(
          (course, index) => (

            <PhaseCard

              key={`${course.title}-${index}`}

              phase={course}

            />

          )
        )}

      </div>

    </div>

  );
}

export default CurrentFocusSection;