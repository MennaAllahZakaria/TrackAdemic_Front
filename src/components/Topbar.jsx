import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import NotificationBell from "../components/Notification/NotificationBell"
import StreakCard from "../components/streak/StreakCard";

function Topbar() {
  const { token } = useAuth();

  if(!token)return;

  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <div className="h-16 bg-white flex items-center justify-between px-6 shadow-sm">

      {/* LEFT (LOGO optional) */}
      <h2 className="text-lg font-semibold text-gray-800">
        Trackademic
      </h2>

      {/* SEARCH */}
      <div className="relative w-[420px]">
        <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>

        <input
          placeholder="Search your library..."
          className="w-full bg-gray-100 pl-10 pr-4 py-2 rounded-xl outline-none focus:ring-2 focus:ring-blue-200"
        />
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-5">

        {/* 🔔 Notifications */}
        <div className="relative cursor-pointer hover:text-gray-800 transition">
          <NotificationBell />

          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full "></span>
        </div>
        {/* 🔥 Streak */}
        <StreakCard streak={user?.streak} />

        {/* 👤 Profile */}
        <div
          onClick={() => navigate("/profile")}
          className="cursor-pointer"
        >
          {user?.imageProfile ? (
            <img
              src={user.imageProfile}
              alt="profile"
              className="w-9 h-9 rounded-full object-cover border border-gray-200 hover:scale-105 transition"
            />
          ) : (
            <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
              <i className="ri-user-line"></i>
            </div>
          )}
        </div>

      </div>

    </div>
  );
}

export default Topbar;