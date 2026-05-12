function NotificationsStats({
  stats,
}) {
  const cards = [
    {
      title: "Total Notifications",
      value:
        stats?.total || 0,
      icon: "ri-notification-3-line",
      bg: "from-cyan-500 to-blue-600",
    },
    {
      title: "Sent Today",
      value:
        stats?.today || 0,
      icon: "ri-send-plane-line",
      bg: "from-emerald-500 to-green-600",
    },
    {
      title: "Unread Users",
      value:
        stats?.unread || 0,
      icon: "ri-eye-off-line",
      bg: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div
      className="
        grid grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-3

        gap-6
      "
    >

      {cards.map((card, i) => (
        <div
          key={i}
          className="
            bg-white

            rounded-[30px]

            border border-gray-100

            shadow-sm

            p-6
          "
        >

          <div
            className={`
              w-16 h-16

              rounded-2xl

              flex items-center
              justify-center

              text-white
              text-3xl

              bg-gradient-to-br
              ${card.bg}
            `}
          >

            <i className={card.icon}></i>

          </div>

          <p
            className="
              text-gray-400

              text-sm

              mt-6
            "
          >
            {card.title}
          </p>

          <h2
            className="
              text-4xl

              font-bold

              text-gray-900

              mt-2
            "
          >
            {card.value}
          </h2>

        </div>
      ))}

    </div>
  );
}

export default NotificationsStats;