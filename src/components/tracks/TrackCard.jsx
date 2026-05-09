import { Link } from "react-router-dom";

function TrackCard({ track }) {

  return (
    <div
      className="
        bg-white

        rounded-2xl
        overflow-hidden

        shadow-sm

        hover:shadow-md
        hover:-translate-y-1

        transition-all duration-300

        h-full
      "
    >

      <Link
        to={`/track/${track._id}`}
        className="
          flex flex-col
          h-full
        "
      >

        {/* IMAGE */}
        <div className="relative">

          <img
            src={track.trackImage}
            className="
              w-full

              h-[180px]
              sm:h-[200px]

              object-cover
            "
          />

          <span
            className="
              absolute
              top-3 left-3

              bg-black/60
              text-white

              text-xs

              px-2 py-1

              rounded-full
            "
          >

            {track.category.toUpperCase()}

          </span>

        </div>

        {/* CONTENT */}
        <div
          className="
            p-4

            flex flex-col
            flex-1
          "
        >

          <h3
            className="
              font-semibold

              text-lg

              leading-snug
              break-words
            "
          >
            {track.title}
          </h3>

          <p
            className="
              text-sm
              text-gray-500

              mt-2

              line-clamp-3
              leading-relaxed
            "
          >
            {track.description}
          </p>

          {/* META */}
          <div
            className="
              flex flex-wrap
              justify-between

              gap-3

              text-xs
              text-gray-400

              mt-auto
              pt-5
            "
          >

            <span>
              📚 {track.totalModules} Modules
            </span>

            <span>
              ⏱ {track.totalHours} hours
            </span>

          </div>

        </div>

      </Link>

    </div>
  );
}

export default TrackCard;