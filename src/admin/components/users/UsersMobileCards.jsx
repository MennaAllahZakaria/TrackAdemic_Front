import UserCard
from "./UserCard";

function UsersMobileCards({
  users,
  handleRoleChange,
  handleStatusChange,
  handleDelete,
  setDeleteModal,
  setSelectedUser,
}) {
  return (
    <div
      className="
        lg:hidden

        p-3
        sm:p-4

        space-y-2.5
        sm:space-y-3
      "
    >

      {users.map((user) => (
        <UserCard
          key={user._id}
          user={user}
          handleRoleChange={
            handleRoleChange
          }
          handleStatusChange={
            handleStatusChange
          }
          handleDelete={
            handleDelete
          }
          setDeleteModal={setDeleteModal}
          setSelectedUser={setSelectedUser}
        />
      ))}

    </div>
  );
}

export default UsersMobileCards;
