const categories = [
  "All",
  "Design",
  "Development",
  "Data",
  "Ai",
  "Security",
];

function TrackFilters({ active, setActive }) {
  return (
    <div className="flex gap-3 mt-4">

      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={`px-4 py-1 rounded-full text-sm transition
            ${
              active === cat
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-600"
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