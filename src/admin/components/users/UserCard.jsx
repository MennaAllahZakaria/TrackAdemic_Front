function UserCard({
  user,
  handleRoleChange,
  handleStatusChange,
  handleDelete,
  setDeleteModal,
  setSelectedUser,
}) {
  return (
    <div
      className="
        rounded-2xl

        border border-gray-100

        p-4
        sm:p-5

        bg-white
        hover:shadow-md
        transition-shadow
      "
    >

      {/* TOP - User Info */}
      <div
        className="
          flex items-center
          gap-3
          sm:gap-4
          min-w-0
        "
      >

        {user.imageProfile ? (
          <img
            src={
              user.imageProfile
            }
            alt="profile"
            className="
              w-12 h-12
              sm:w-14 sm:h-14

              rounded-2xl

              object-cover
              flex-shrink-0
            "
          />
        ) : (
          <div
            className="
              w-12 h-12
              sm:w-14 sm:h-14

              rounded-2xl

              bg-cyan-100

              flex items-center
              justify-center

              text-cyan-700
              flex-shrink-0
            "
          >

            <i className="ri-user-line text-lg sm:text-xl"></i>

          </div>
        )}

        <div className="min-w-0 flex-1">

          <h3
            className="
              font-bold

              text-gray-900
              text-sm
              sm:text-base
              truncate
            "
          >
            {user.firstName}{" "}
            {user.lastName}
          </h3>

          <p
            className="
              text-xs
              sm:text-sm
              text-gray-500
              truncate
            "
          >
            {user.email}
          </p>

        </div>

      </div>

      {/* ACTIONS */}
      <div
        className="
          mt-4
          sm:mt-5

          flex flex-col
          gap-2
          sm:flex-wrap
          sm:flex-row
          sm:gap-3
        "
      >

        {/* ROLE */}
        <select
          value={user.role}
          onChange={(e) =>
            handleRoleChange(
              user._id,
              e.target.value
            )
          }
          className="
            px-3 py-2
            sm:px-4 sm:py-3

            rounded-xl

            bg-gray-100

            outline-none

            focus:ring-2
            focus:ring-cyan-400

            text-xs
            sm:text-sm

            flex-1
            sm:flex-none

            cursor-pointer
          "
        >

          <option value="user">
            User
          </option>

          <option value="admin">
            Admin
          </option>

        </select>

        {/* STATUS */}
        <select
          value={user.status}
          onChange={(e) =>
            handleStatusChange(
              user._id,
              e.target.value
            )
          }
          className="
            px-3 py-2
            sm:px-4 sm:py-3

            rounded-xl

            bg-gray-100

            outline-none

            focus:ring-2
            focus:ring-cyan-400

            text-xs
            sm:text-sm

            flex-1
            sm:flex-none

            cursor-pointer
          "
        >

          <option value="active">
            Active
          </option>

          <option value="inactive">
            Inactive
          </option>

          <option value="banned">
            Banned
          </option>

        </select>

        {/* DELETE */}
        <button
          onClick={() => {
            if (setDeleteModal && setSelectedUser) {
              setSelectedUser(user);
              setDeleteModal(true);
            } else {
              handleDelete(user._id);
            }
          }}
          className="
            px-3 py-2
            sm:px-5 sm:py-3

            rounded-xl

            bg-red-100

            text-red-700

            font-semibold

            hover:bg-red-200

            transition-all 
            duration-300

            text-xs
            sm:text-sm

            flex-1
            sm:flex-none
          "
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default UserCard;
