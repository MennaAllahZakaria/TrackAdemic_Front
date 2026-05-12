function NotificationCard({
  notification,
  handleDelete,
}) {
  return (
    <div
      className="
        bg-white

        rounded-[30px]

        border border-gray-100

        shadow-sm

        p-6
      "
    >

      <div
        className="
          flex items-start
          justify-between
          gap-4
        "
      >

        <div>

          <div
            className="
              inline-flex items-center

              px-4 py-2

              rounded-xl

              bg-cyan-100

              text-cyan-700

              text-sm
              font-semibold
            "
          >
            {notification.type}
          </div>

          <h2
            className="
              text-2xl

              font-bold

              text-gray-900

              mt-5
            "
          >
            {notification.title}
          </h2>

        </div>

        <button
          onClick={() =>
            handleDelete(
              notification._id
            )
          }
          className="
            w-12 h-12

            rounded-xl

            bg-red-100

            text-red-700

            flex items-center
            justify-center
          "
        >

          <i className="ri-delete-bin-line"></i>

        </button>

      </div>

      <p
        className="
          text-gray-500

          leading-[1.9]

          mt-5
        "
      >
        {notification.message}
      </p>

      <div
        className="
          flex items-center
          justify-between

          mt-8
        "
      >

        <p
          className="
            text-sm
            text-gray-400
          "
        >
          {new Date(
            notification.createdAt
          ).toLocaleDateString()}
        </p>

        <div
          className="
            flex items-center
            gap-2

            text-cyan-600
          "
        >

          <i className="ri-notification-3-line"></i>

          Sent

        </div>

      </div>

    </div>
  );
}

export default NotificationCard;