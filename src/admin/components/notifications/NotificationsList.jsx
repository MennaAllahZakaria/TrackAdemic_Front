import NotificationCard
from "./NotificationCard";

function NotificationsList({
  notifications,
  handleDelete,
}) {

  if (!notifications.length) {
    return (

      <div
        className="
          bg-white

          rounded-3xl

          p-10

          text-center

          text-gray-500
        "
      >
        No notifications found
      </div>

    );
  }

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