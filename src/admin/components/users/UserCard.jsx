function UserCard({
  user,
  handleRoleChange,
  handleStatusChange,
  handleDelete,
}) {
  return (
    <div
      className="
        rounded-2xl

        border border-gray-100

        p-5
      "
    >

      {/* TOP */}
      <div
        className="
          flex items-center
          gap-4
        "
      >

        {user.imageProfile ? (
          <img
            src={
              user.imageProfile
            }
            alt="profile"
            className="
              w-14 h-14

              rounded-2xl

              object-cover
            "
          />
        ) : (
          <div
            className="
              w-14 h-14

              rounded-2xl

              bg-cyan-100

              flex items-center
              justify-center

              text-cyan-700
            "
          >

            <i className="ri-user-line text-xl"></i>

          </div>
        )}

        <div>

          <h3
            className="
              font-bold

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

      {/* ACTIONS */}
      <div
        className="
          mt-5

          flex flex-wrap
          gap-3
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
            px-4 py-3

            rounded-xl

            bg-gray-100

            outline-none
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
            px-4 py-3

            rounded-xl

            bg-gray-100

            outline-none
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
          onClick={() =>
            handleDelete(
              user._id
            )
          }
          className="
            px-5 py-3

            rounded-xl

            bg-red-100

            text-red-700

            font-semibold

            hover:bg-red-200

            transition-all duration-300
          "
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default UserCard;