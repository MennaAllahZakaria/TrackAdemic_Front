import {
  useNavigate,
} from "react-router-dom";

function ProgressEmpty() {

  const navigate =
    useNavigate();

  return (

    <div
      className="
        min-h-[70vh]

        flex items-center
        justify-center

        px-4
      "
    >

      <div
        className="
          bg-white

          rounded-[32px]

          border border-gray-100

          shadow-sm

          p-8
          sm:p-10

          text-center

          max-w-xl
          w-full
        "
      >

        {/* ICON */}
        <div
          className="
            w-20 h-20

            rounded-full

            bg-blue-100
            text-blue-600

            flex items-center
            justify-center

            mx-auto
          "
        >

          <i className="ri-bar-chart-box-line text-4xl"></i>

        </div>

        {/* TITLE */}
        <h2
          className="
            text-3xl

            font-bold

            text-gray-900

            mt-7
          "
        >
          No Progress Yet
        </h2>

        {/* DESC */}
        <p
          className="
            text-gray-500

            leading-relaxed

            mt-4

            text-sm
            sm:text-base
          "
        >
          Start building your learning
          roadmap and complete topics
          to track your academic growth
          and unlock practical projects.
        </p>

        {/* BUTTON */}
        <button
          onClick={() =>
            navigate(
              "/growth-plan"
            )
          }

          className="
            mt-8

            bg-blue-600
            text-white

            px-8 py-4

            rounded-2xl

            font-semibold

            hover:bg-blue-700

            transition-all duration-300
          "
        >
          Create Learning Path →
        </button>

      </div>

    </div>

  );
}

export default ProgressEmpty;
