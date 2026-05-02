function TrackCard({ track }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">

      {/* IMAGE */}
      <div className="relative">
        <img
          src={track.trackImage}
          className="w-full h-[160px] object-cover"
        />

        <span className="absolute top-3 left-3 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
          {track.category.toUpperCase()}
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-4">

        <h3 className="font-semibold text-lg">
          {track.title}
        </h3>

        <p className="text-sm text-gray-500 mt-2 line-clamp-3">
          {track.description}
        </p>

        {/* META */}
        <div className="flex justify-between text-xs text-gray-400 mt-4">

          <span>📚 {track.totalModules} Modules</span>
          <span>⏱ {track.totalHours} hours</span>

        </div>

      </div>
    </div>
  );
}

export default TrackCard;