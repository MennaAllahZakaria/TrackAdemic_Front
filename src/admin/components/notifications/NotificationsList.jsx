import NotificationCard
from "./NotificationCard";

function NotificationsList({
  notifications,
  handleDelete,
}) {
  return (
    <div
      className="
        grid grid-cols-1
        lg:grid-cols-2
        2xl:grid-cols-3

        gap-6
      "
    >

      {notifications.map(
        (notification) => (
          <NotificationCard
            key={
              notification._id
            }
            notification={
              notification
            }
            handleDelete={
              handleDelete
            }
          />
        )
      )}

    </div>
  );
}

export default NotificationsList;