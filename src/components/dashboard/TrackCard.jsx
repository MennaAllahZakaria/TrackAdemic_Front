import { useNavigate } from "react-router-dom";

function TrackCard({
  id,
  image,
  title,
  desc,
  lessons,
  badge,
  badgeColor,
}) {

  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        if (id)
          navigate(`track/${id}`);
      }}
      className="
        bg-white
        rounded-2xl
        overflow-hidden
        shadow-sm

        flex flex-col
        sm:flex-row

        hover:shadow-lg
        hover:-translate-y-1

        transition-all duration-300

        group
        cursor-pointer
      "
    >

      {/* IMAGE */}
      <div
        className="
          w-full
          sm:w-48

          h-52
          sm:h-auto

          overflow-hidden
          flex-shrink-0
        "
      >

        <img
          src={image}
          alt={title}
          className="
            w-full
            h-full
            object-cover

            group-hover:scale-110

            transition duration-500
          "
        />

      </div>

      {/* CONTENT */}
      <div
        className="
          p-6
          flex flex-col
          justify-between
          flex-1
        "
      >

        <div>

          {/* BADGE */}
          <span
            className={`
              text-xs
              px-3 py-1
              rounded-full
              ${badgeColor}
            `}
          >
            {badge}
          </span>

          <h3
            className="
              font-semibold
              text-lg
              mt-3

              group-hover:text-blue-600
              transition
            "
          >
            {title}
          </h3>

          <p className="text-gray-500 text-sm mt-2">
            {desc}
          </p>

        </div>

        {/* FOOTER */}
        <div
          className="
            flex
            justify-between
            items-center
            mt-4
          "
        >

          <div className="flex -space-x-2">

            <img
              src="/avatar1.svg"
              className="
                w-6 h-6
                rounded-full
                border
              "
            />

            <img
              src="/avatar2.svg"
              className="
                w-6 h-6
                rounded-full
                border
              "
            />

          </div>

          <p
            className="
              text-blue-600
              text-sm
              font-medium

              group-hover:underline
              transition
            "
          >
            {lessons} Lessons
          </p>

        </div>

      </div>

    </div>
  );
}

export default TrackCard;