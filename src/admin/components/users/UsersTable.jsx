import UsersMobileCards
from "./UsersMobileCards";

import UserTableRow
from "./UserTableRow";

function UsersTable({
  users,
  pagination,
  handleRoleChange,
  handleStatusChange,
  handleDelete,
  setCreateUserModal,
  setDeleteModal,
  setSelectedUser,
}) {
  return (
    <div
      className="
        bg-white

        rounded-[32px]

        border border-gray-100

        shadow-sm

        overflow-hidden
      "
    >

      {/* HEADER */}
      <div
        className="
          px-6
          py-5

          border-b border-gray-100

          flex items-center
          justify-between
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
            USERS TABLE
          </p>

          <h2
            className="
              text-2xl

              font-bold

              text-gray-900

              mt-1
            "
          >
            Platform Members
          </h2>

        </div>
        

        <div
          className="
            px-4 py-2

            rounded-xl

            bg-cyan-100

            text-cyan-700

            font-semibold
          "
        >
          {pagination?.totalItems || users?.length || 0} Users
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

      {/* MOBILE */}
      <UsersMobileCards
        users={users}
        handleRoleChange={
          handleRoleChange
        }
        handleStatusChange={
          handleStatusChange
        }
        handleDelete={
          handleDelete
        }
      />

      {/* DESKTOP */}
      <div
        className="
          hidden lg:block

          overflow-x-auto
        "
      >

        <table className="w-full">

          <thead
            className="
              bg-gray-50
            "
          >

            <tr>

              <th
                className="
                  text-left

                  px-6 py-5

                  text-sm
                  font-semibold

                  text-gray-500
                "
              >
                User
              </th>

              <th
                className="
                  text-left

                  px-6 py-5

                  text-sm
                  font-semibold

                  text-gray-500
                "
              >
                Role
              </th>

              <th
                className="
                  text-left

                  px-6 py-5

                  text-sm
                  font-semibold

                  text-gray-500
                "
              >
                Status
              </th>

              <th
                className="
                  text-left

                  px-6 py-5

                  text-sm
                  font-semibold

                  text-gray-500
                "
              >
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {users.map((user) => (
              <UserTableRow
                key={user._id}
                user={user}
                handleRoleChange={
                  handleRoleChange
                }
                handleStatusChange={
                  handleStatusChange
                }
                setDeleteModal={setDeleteModal}
                setSelectedUser={setSelectedUser}
              />
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default UsersTable;