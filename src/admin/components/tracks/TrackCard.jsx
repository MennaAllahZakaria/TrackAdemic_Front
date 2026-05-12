function TrackCard({
  track,
  openEditModal,
  openDeleteModal,
}) {
  return (
    <div
      className="
        bg-white

        rounded-[30px]

        border border-gray-100

        shadow-sm

        overflow-hidden
      "
    >

      <img
        src={track.trackImage}
        alt={track.title}
        className="
          w-full

          h-[220px]

          object-cover
        "
      />

      <div className="p-6">

        <div
          className="
            flex items-center
            justify-between
            gap-4
          "
        >

          <span
            className="
              px-4 py-2

              rounded-xl

              bg-cyan-100

              text-cyan-700

              text-sm
              font-semibold
            "
          >
            {track.level}
          </span>

          <div
            className="
              text-sm
              text-gray-400
            "
          >
            {track.totalModules} Modules
          </div>

        </div>

        <h2
          className="
            text-2xl

            font-bold

            text-gray-900

            mt-5
          "
        >
          {track.title}
        </h2>

        <p
          className="
            text-gray-500

            leading-[1.9]

            mt-4

            line-clamp-3
          "
        >
          {track.description}
        </p>

        <div
          className="
            flex items-center
            gap-3

            mt-8
          "
        >

          <button
            onClick={() =>
              openEditModal(
                track
              )
            }
            className="
              flex-1

              py-3

              rounded-2xl

              bg-cyan-500

              text-white

              font-semibold
            "
          >
            Edit
          </button>

          <button
            onClick={() =>
              openDeleteModal(
                track
              )
            }
            className="
              flex-1

              py-3

              rounded-2xl

              bg-red-100

              text-red-700

              font-semibold
            "
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default TrackCard;