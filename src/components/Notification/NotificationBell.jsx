import { useEffect, useRef, useState } from "react";
import api from "../../services/api";
import NotificationsPanel from "./NotificationsPanel";

function NotificationBell() {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const panelRef = useRef();

  const fetchNotifications = async () => {
    try {
      const res = await api.get("/notifications/all");
      setNotifications(res.data.data || []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  // 🔥 click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="relative" ref={panelRef}>

      {/* ICON */}
      <div
        onClick={() => setOpen(prev => !prev)}
        className="relative cursor-pointer"
      >
        <i className="ri-notification-3-line text-xl text-gray-600"></i>

        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] px-1 rounded-full">
            {unreadCount}
          </span>
        )}
      </div>

      {/* PANEL */}
      {open && (
        <NotificationsPanel
          notifications={notifications}
          setNotifications={setNotifications}
        />
      )}

    </div>
  );
}

export default NotificationBell;