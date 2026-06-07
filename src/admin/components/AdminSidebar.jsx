import {
  useNavigate,
  useLocation,
} from "react-router-dom";

import {
  useState,
} from "react";

import {
  useAuth,
} from "../../context/AuthContext";

const menu = [
  {
    name: "Dashboard",
    icon: "ri-dashboard-line",
    path: "/admin",
  },
  {
    name: "Users",
    icon: "ri-team-line",
    path: "/admin/users",
  },
  {
    name: "Tracks",
    icon: "ri-book-open-line",
    path: "/admin/tracks",
  },
  {
    name: "Quizzes",
    icon: "ri-file-list-3-line",
    path: "/admin/quizzes",
  },
  {
    name: "Contacts",
    icon: "ri-customer-service-2-line",
    path: "/admin/contacts",
  },
  {
    name: "Notifications",
    icon: "ri-notification-3-line",
    path: "/admin/notifications",
  },
];

function AdminSidebar({ isOpen, onClose }) {
  const {
    token,
    logout,
  } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const [showLogout, setShowLogout] = useState(false);

  if (!token) return null;

  const handleClick = (item) => {
    navigate(item.path);
    if (onClose) onClose();
  };

  const handleLogout = () => {
    logout();
    setShowLogout(false);
    navigate("/login");
  };

  return (
    <>
      {/* OVERLAY for mobile/tablet */}
      {isOpen && (
        <div
          onClick={onClose}
          className="
            lg:hidden
            fixed inset-0
            bg-black/50
            backdrop-blur-sm
            z-40
          "
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed top-0 left-0
          h-screen
          w-[280px]
          bg-[#0F172A]
          text-white
          border-r border-white/10
          z-50
          flex flex-col
          p-4
          sm:p-5
          transition-transform
          duration-300
          ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
          lg:static
          lg:z-auto
        `}
      >
        {/* LOGO SECTION */}
        <div className="flex items-center justify-between mb-8 lg:mb-10">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-10 h-10 rounded-full bg-cyan-400 flex items-center justify-center text-black flex-shrink-0">
              🛡️
            </div>
            <div className="min-w-0">
              <h2 className="text-lg sm:text-[20px] font-bold truncate">Trackademic</h2>
              <p className="text-[10px] sm:text-[11px] text-white/50 tracking-wide">ADMIN PANEL</p>
            </div>
          </div>
          
          {/* Close button for mobile */}
          <button 
            onClick={onClose}
            className="lg:hidden w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 flex-shrink-0"
          >
            <i className="ri-close-line text-lg"></i>
          </button>
        </div>

        {/* MENU */}
        <nav className="flex flex-col gap-2 flex-1 overflow-y-auto">
          {menu.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <div
                key={item.name}
                onClick={() => handleClick(item)}
                className={`
                  group
                  flex items-center
                  gap-3 sm:gap-4
                  px-3 sm:px-4 py-2.5 sm:py-3
                  rounded-2xl
                  cursor-pointer
                  transition-all
                  duration-300
                  ${isActive 
                    ? "bg-cyan-400 text-black font-semibold" 
                    : "text-white/70 hover:bg-white/10 hover:text-white"}
                `}
              >
                <div className={`
                  w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all flex-shrink-0
                  ${isActive ? "bg-black/10" : "bg-white/5 group-hover:bg-cyan-400 group-hover:text-black"}
                `}>
                  <i className={`${item.icon} text-base sm:text-lg`}></i>
                </div>
                <span className="text-xs sm:text-sm truncate">{item.name}</span>
              </div>
            );
          })}
        </nav>

        {/* LOGOUT */}
        <div 
          onClick={() => {
            handleLogout();
          }}
          className="mt-auto pt-4 sm:pt-5 border-t border-white/10 flex items-center gap-3 sm:gap-4 px-3 sm:px-4 py-2.5 sm:py-3 text-red-400 hover:bg-red-500/10 rounded-2xl cursor-pointer transition-all"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
            <i className="ri-logout-box-line text-base sm:text-lg"></i>
          </div>
          <span className="text-xs sm:text-sm font-medium truncate">Logout</span>
        </div>
      </aside>
    </>
  );
}

export default AdminSidebar;
