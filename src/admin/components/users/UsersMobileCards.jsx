import UserCard
from "./UserCard";

function UsersMobileCards({
  users,
  handleRoleChange,
  handleStatusChange,
  handleDelete,
}) {
  return (
    <div
      className="
        lg:hidden

        p-4

        space-y-4
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
        />
      ))}

    </div>
  );
}

export default UsersMobileCards;