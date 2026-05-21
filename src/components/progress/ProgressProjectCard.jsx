function ProgressProjectCard({
  phase,
  navigate,
}) {

  return (

    <button

      onClick={() =>
        navigate(
          `/project/${phase.phase_number}`
        )
      }

      className="
        w-full
        mt-5

        bg-green-600
        text-white

        py-3

        rounded-full

        hover:bg-green-700
        hover:scale-[1.02]

        transition-all duration-300
      "
    >
      View Project →
    </button>

  );
}

export default ProgressProjectCard;

