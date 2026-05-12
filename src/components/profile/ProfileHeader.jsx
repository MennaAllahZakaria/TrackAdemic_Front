import {
  Pencil,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

function ProfileHeader({
  user,
  settingsPath =
    "/settings",
}) {

  const navigate =
    useNavigate();

  if (!user) return null;

  const formatSince =
    (date) => {

      if (!date)
        return "Unknown";

      return new Date(
        date
      ).toLocaleDateString(
        "en-US",
        {
          month: "short",
          year: "numeric",
        }
      );

    };

  return (
    <div
      className="
        relative

        bg-white
        rounded-3xl

        p-6
        sm:p-7

        shadow-sm

        flex flex-col
        sm:flex-row

        sm:items-center
        sm:justify-between

        gap-6
      "
    >

      {/* LEFT */}
      <div
        className="
          flex flex-col
          sm:flex-row

          items-center

          gap-5
        "
      >

        {/* IMAGE */}
        <img
          src={
            user?.imageProfile ||
            "https://res.cloudinary.com/dhlgpqcrb/image/upload/v1777564315/images_txkken.png"
          }
          alt="Profile"
          className="
            w-24 h-24

            rounded-full
            object-cover

            border-4
            border-white

            shadow-lg
          "
        />

        {/* INFO */}
        <div
          className="
            text-center
            sm:text-left
          "
        >

          <h2
            className="
              text-2xl
              font-semibold
            "
          >
            {user?.firstName}
            {" "}
            {user?.lastName}
          </h2>

          <div
            className="
              flex flex-wrap

              items-center

              justify-center
              sm:justify-start

              gap-3

              mt-2
            "
          >

            <span
              className="
                bg-purple-100
                text-purple-600

                text-xs

                px-3 py-1

                rounded-full

                font-medium
              "
            >
              ACTIVE MEMBER
            </span>

            <span
              className="
                text-sm
                text-gray-400
              "
            >

              Since{" "}

              <span
                className="
                  font-medium
                  text-gray-500
                "
              >
                {
                  formatSince(
                    user?.createdAt
                  )
                }
              </span>

            </span>

          </div>

        </div>

      </div>

      {/* BUTTON */}
      <button
        className="
          w-full
          sm:w-auto

          flex items-center
          justify-center

          gap-2

          bg-blue-600
          hover:bg-blue-500

          text-white

          px-5 py-3

          rounded-full

          text-sm
          font-medium

          transition-all duration-300
        "
        onClick={() =>
          navigate(
            settingsPath
          )
        }
      >

        <Pencil size={16} />

        Edit Profile

      </button>

    </div>
  );
}

export default ProfileHeader;