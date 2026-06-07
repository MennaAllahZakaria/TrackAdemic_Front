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

          rounded-[24px]
          sm:rounded-[32px]

          p-6
          sm:p-8
          lg:p-10

          text-center

          text-gray-500
          text-sm
          sm:text-base
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
        sm:grid-cols-2
        lg:grid-cols-2
        xl:grid-cols-3

        gap-3
        sm:gap-4
        lg:gap-6
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
