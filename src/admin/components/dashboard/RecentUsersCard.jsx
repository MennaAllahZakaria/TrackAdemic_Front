function RecentUsersCard({
  users,
  setCreateUserModal,
}) {

  return (

    <div
      className="
        bg-white

        rounded-[32px]

        border border-gray-100

        shadow-sm

        p-6 sm:p-8
      "
    >

      {/* HEADER */}
      <div
        className="
          flex items-center
          justify-between

          mb-8
        "
      >

        <div>

          <p
            className="
              text-sm
              text-cyan-600

              font-semibold
            "
          >
            NEW MEMBERS
          </p>

          <h2
            className="
              text-2xl

              font-bold

              text-gray-900

              mt-2
            "
          >
            Recent Signups
          </h2>

        </div>

        {/* CREATE USER BUTTON */}
        <div
          onClick={() =>
            setCreateUserModal(true)
          }
          className="
            w-14 h-14

            rounded-2xl

            bg-violet-100

            flex items-center
            justify-center

            text-violet-600
            text-2xl

            cursor-pointer

            hover:scale-105
            hover:bg-violet-200

            transition-all
          "
        >

          <i className="ri-user-add-line"></i>

        </div>

      </div>

      {/* USERS */}
      <div className="space-y-4">

        {users?.map((user) => (

          <div
            key={user._id}
            className="
              flex items-center
              justify-between

              bg-gray-50

              rounded-2xl

              p-4
            "
          >

            <div
              className="
                flex items-center
                gap-4
              "
            >

              {user.imageProfile ? (

                <img
                  src={user.imageProfile}
                  alt="profile"
                  className="
                    w-12 h-12

                    rounded-xl

                    object-cover
                  "
                />

              ) : (

                <div
                  className="
                    w-12 h-12

                    rounded-xl

                    bg-cyan-100

                    flex items-center
                    justify-center

                    text-cyan-700
                  "
                >

                  <i className="ri-user-line"></i>

                </div>

              )}

              <div>

                <h3
                  className="
                    font-semibold

                    text-gray-900
                  "
                >
                  {user.firstName}{" "}
                  {user.lastName}
                </h3>

                <p
                  className="
                    text-sm
                    text-gray-500
                  "
                >
                  {user.email}
                </p>

              </div>

            </div>

            <div
              className="
                text-sm
                text-gray-400
              "
            >
              New
            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default RecentUsersCard;