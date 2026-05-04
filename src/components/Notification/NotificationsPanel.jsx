import { useEffect, useState } from "react";
import api from "../../services/api";

function NotificationsPanel({ notifications, setNotifications }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 10);
  }, []);

  // ================= GROUP =================
  const groupNotifications = () => {
    const today = [];
    const yesterday = [];

    const now = new Date();

    notifications.forEach((n) => {
      const date = new Date(n.createdAt);

      const diff = now - date;
      const oneDay = 24 * 60 * 60 * 1000;

      if (diff < oneDay && date.getDate() === now.getDate()) {
        today.push(n);
      } else {
        yesterday.push(n);
      }
    });

    return { today, yesterday };
  };

  const { today, yesterday } = groupNotifications();

  // ================= ACTIONS =================

  const markAsRead = async (id) => {
    try {
      // optimistic
      setNotifications(prev =>
        prev.map(n =>
          n._id === id ? { ...n, read: true } : n
        )
      );

      await api.put(`/notifications/read/${id}`);

    } catch (err) {
      console.error(err);
    }
  };

  const deleteOne = async (id) => {
    try {
      await api.delete(`/notifications/${id}`);
      setNotifications(prev => prev.filter(n => n._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const markAllRead = async () => {
    try {
      // optimistic
      setNotifications(prev =>
        prev.map(n => ({ ...n, read: true }))
      );

      // ⚠️ لو عندك API جماعي استخدميه
      await Promise.all(
        notifications.map(n =>
          !n.read && api.put(`/notifications/read/${n._id}`)
        )
      );

    } catch (err) {
      console.error(err);
    }
  };

  // ================= UI =================

  const renderGroup = (title, list) => {
    if (!list.length) return null;

    return (
      <div>
        <p className="text-xs text-gray-400 px-4 py-2">{title}</p>

        {list.map((n) => (
          <div
            key={n._id}
            onClick={() => !n.read && markAsRead(n._id)}
            className={`
              p-4 border-b flex justify-between gap-3 transition cursor-pointer
              ${!n.read ? "bg-blue-50" : "hover:bg-gray-50"}
            `}
          >
            <div className="flex-1">

              <p className="text-sm font-medium text-gray-800">
                {n.title}
              </p>

              <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                {n.message}
              </p>

              <p className="text-[10px] text-gray-400 mt-1">
                {new Date(n.createdAt).toLocaleTimeString()}
              </p>

            </div>

            {/* DELETE */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteOne(n._id);
              }}
              className="text-gray-400 hover:text-red-500"
            >
              <i className="ri-close-line"></i>
            </button>

          </div>
        ))}
      </div>
    );
  };

  return (
    <div
      className={`
        absolute right-0 mt-4 w-[360px]
        bg-white rounded-2xl shadow-xl border border-gray-100
        origin-top-right transform transition-all duration-200
        ${visible ? "scale-100 opacity-100" : "scale-95 opacity-0"}
      `}
    >

      {/* HEADER */}
      <div className="flex justify-between items-center p-4 border-b">

        <h3 className="font-semibold text-gray-800">
          Notifications
        </h3>

        <div className="flex gap-3 text-xs">

          <button
            onClick={markAllRead}
            className="text-blue-600 hover:underline"
          >
            Mark all read
          </button>

        </div>

      </div>

      {/* BODY */}
      <div className="max-h-[420px] overflow-y-auto">

        {notifications.length === 0 ? (
          <div className="p-8 text-center text-gray-400 text-sm">
            You're all caught up 🎉
          </div>
        ) : (
          <>
            {renderGroup("Today", today)}
            {renderGroup("Yesterday", yesterday)}
          </>
        )}

      </div>

    </div>
  );
}

export default NotificationsPanel;