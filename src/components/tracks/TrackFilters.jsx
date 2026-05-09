const categories = [
  "All",
  "Design",
  "Development",
  "Data",
  "Ai",
  "Security",
];

function TrackFilters({
  active,
  setActive,
}) {

  return (
    <div
      className="
        flex

        gap-3
        mt-4

        overflow-x-auto
        no-scrollbar

        pb-2
      "
    >

      {categories.map((cat) => (

        <button
          key={cat}
          onClick={() =>
            setActive(cat)
          }
          className={`
            px-4 py-2

            rounded-full

            text-sm

            whitespace-nowrap

            flex-shrink-0

            transition-all duration-200

            ${
              active === cat
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }
          `}
        >

          {cat}

        </button>

      ))}

    </div>
  );
}

export default TrackFilters;