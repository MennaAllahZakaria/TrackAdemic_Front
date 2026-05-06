import { useEffect, useState } from "react";
import api from "../../services/api";

function NotificationsPanel({ notifications, setNotifications }) {
  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    setTimeout(() => setVisible(true), 10);
  }, []);

  // ================= FILTER =================
  const filteredNotifications =
    activeTab === "unread"
      ? notifications.filter((n) => !n.read)
      : notifications;

  // ================= GROUP =================
  const groupNotifications = () => {
    const today = [];
    const yesterday = [];

    const now = new Date();

    filteredNotifications.forEach((n) => {
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
      setNotifications((prev) =>
        prev.map((n) =>
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

      setNotifications((prev) =>
        prev.filter((n) => n._id !== id)
      );

    } catch (err) {
      console.error(err);
    }
  };

  const markAllRead = async () => {
    try {
      setNotifications((prev) =>
        prev.map((n) => ({
          ...n,
          read: true,
        }))
      );

      await Promise.all(
        notifications.map(
          (n) =>
            !n.read &&
            api.put(`/notifications/read/${n._id}`)
        )
      );

    } catch (err) {
      console.error(err);
    }
  };

  // ================= RENDER =================

  const renderGroup = (title, list) => {
    if (!list.length) return null;

    return (
      <div className="mb-3">

        <p className="text-[11px] font-medium text-gray-400 px-4 py-2 uppercase tracking-wide">
          {title}
        </p>

        <div className="space-y-2 px-2">

          {list.map((n) => (
            <div
              key={n._id}
              onClick={() =>
                !n.read && markAsRead(n._id)
              }
              className={`
                relative
                px-4 py-4
                rounded-2xl
                flex gap-4
                cursor-pointer
                transition-all duration-300

                ${
                  !n.read
                    ? `
                      bg-gradient-to-r from-blue-50 to-blue-100/40
                      border border-blue-100
                      shadow-[0_4px_12px_rgba(59,130,246,0.08)]
                      hover:bg-blue-100/60
                    `
                    : `
                      bg-white
                      border border-gray-100
                      hover:bg-gray-50
                    `
                }
              `}
            >

              {/* UNREAD DOT */}
              {!n.read && (
                <div className="absolute left-2 top-6 w-2 h-2 rounded-full bg-blue-500"></div>
              )}

              {/* ICON */}
              <div
                className={`
                  min-w-[42px] h-[42px]
                  rounded-full
                  flex items-center justify-center
                  transition

                  ${
                    !n.read
                      ? "bg-blue-100 text-blue-600"
                      : "bg-gray-100 text-gray-500"
                  }
                `}
              >
                <i className="ri-notification-3-line text-lg"></i>
              </div>

              {/* CONTENT */}
              <div className="flex-1">

                <div className="flex justify-between gap-3">

                  <div>

                    <p
                      className={`
                        text-sm
                        ${
                          !n.read
                            ? "font-semibold text-gray-900"
                            : "font-medium text-gray-700"
                        }
                      `}
                    >
                      {n.title}
                    </p>

                    <p className="text-xs text-gray-500 mt-1 leading-relaxed line-clamp-2">
                      {n.message}
                    </p>

                    <p className="text-[10px] text-gray-400 mt-2">
                      {new Date(n.createdAt).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>

                  </div>

                  {/* DELETE */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteOne(n._id);
                    }}
                    className="
                      min-w-[28px] h-[28px]
                      rounded-full
                      flex items-center justify-center
                      text-gray-400
                      hover:bg-red-50
                      hover:text-red-500
                      transition
                    "
                  >
                    <i className="ri-close-line"></i>
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    );
  };

  return (
    <div
      className={`
        absolute right-0 mt-4 w-[380px]
        bg-white/95 backdrop-blur-xl
        rounded-[28px]
        border border-gray-100
        shadow-[0_20px_50px_rgba(0,0,0,0.08)]
        origin-top-right
        transform transition-all duration-200
        overflow-hidden z-50

        ${
          visible
            ? "scale-100 opacity-100"
            : "scale-95 opacity-0"
        }
      `}
    >

      {/* HEADER */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-gray-100">

        <div className="flex justify-between items-center px-5 py-4">

          <div>
            <h3 className="font-semibold text-gray-900">
              Notifications
            </h3>

            <p className="text-xs text-gray-400 mt-1">
              Stay updated with your activity
            </p>
          </div>

          <button
            onClick={markAllRead}
            className="
              text-xs font-medium text-blue-600
              hover:text-blue-700 transition
            "
          >
            Mark all read
          </button>

        </div>

        {/* TABS */}
        <div className="flex gap-2 px-4 pb-4">

          <button
            onClick={() => setActiveTab("all")}
            className={`
              px-4 h-9 rounded-full text-sm font-medium transition

              ${
                activeTab === "all"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }
            `}
          >
            All
          </button>

          <button
            onClick={() => setActiveTab("unread")}
            className={`
              px-4 h-9 rounded-full text-sm font-medium transition flex items-center gap-2

              ${
                activeTab === "unread"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }
            `}
          >
            Unread

            {notifications.filter((n) => !n.read).length > 0 && (
              <span
                className={`
                  text-[10px]
                  min-w-[18px] h-[18px]
                  rounded-full
                  flex items-center justify-center
                  px-1

                  ${
                    activeTab === "unread"
                      ? "bg-white/20 text-white"
                      : "bg-blue-100 text-blue-600"
                  }
                `}
              >
                {
                  notifications.filter((n) => !n.read).length
                }
              </span>
            )}

          </button>

        </div>

      </div>

      {/* BODY */}
      <div className="max-h-[500px] overflow-y-auto py-2">

        {filteredNotifications.length === 0 ? (
          <div className="py-14 px-6 text-center">

            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
              <i className="ri-notification-off-line text-2xl text-gray-400"></i>
            </div>

            <h4 className="font-medium text-gray-700">
              No notifications
            </h4>

            <p className="text-sm text-gray-400 mt-2">
              You're all caught up ✨
            </p>

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