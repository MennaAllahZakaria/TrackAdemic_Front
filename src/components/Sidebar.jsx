import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";


const menu = [
  { name: "Home", icon: "ri-home-5-line", path: "/" },
  { name: "Tutor", icon: "ri-user-line", path: "/chat" },
  { name: "My Learning", icon: "ri-book-open-line", path: "/my-learning" },
  { name: "Tracks", icon: "ri-compass-3-line", path: "/tracks" },
  { name: "Analytics", icon: "ri-line-chart-line", path: "/analytics" },
  { name: "Settings", icon: "ri-settings-3-line", path: "/settings" },
  { name: "onboarding", icon: "ri-trophy-line", path: "/onboarding" },
  { name: "profile", icon: "ri-user-3-line", path: "/profile" },
  { name: "About", icon: "ri-information-line", path: "/about" },
  { name: "Progress", icon: "ri-bar-chart-line", path: "/progress" },
  { name: "Logout", icon: "ri-logout-box-r-line", path: "/logout" },
  { name: "Support", icon: "ri-question-line", path: "/support" },
];

function Sidebar() {
  const { token } = useAuth();

  if(!token)return;
  
  const navigate = useNavigate();
  const location = useLocation();
  const [showLogout, setShowLogout] = useState(false);

  const { logout } = useAuth();

  const getIcon = (item, isActive) => {
    if (item.name === "Profile") {
      return isActive ? "ri-user-3-fill" : "ri-user-3-line";
    }

    if (item.name === "My Learning") {
      return isActive
        ? "ri-graduation-cap-fill"
        : "ri-graduation-cap-line";
    }

    return item.icon;
  };

  const handleClick = (item) => {
    if (item.name === "Logout") {
      setShowLogout(true);
    } else {
      navigate(item.path);
    }
  };

  const handleLogout = () => {
    
    logout();

    setShowLogout(false);

    navigate("/login");
  };

  return (
    <div className="w-64 h-screen bg-[#F9FAFB] p-6 flex flex-col">

      {/* LOGO */}
      <div className="flex items-center gap-3 mb-10">
        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-lg">
          🎓
        </div>

        <div>
          <h2 className="text-[18px] font-bold text-gray-900">
            Trackademic
          </h2>
          <p className="text-[11px] text-gray-400 tracking-wide">
            ACADEMIC EXCELLENCE
          </p>
        </div>
      </div>

      {/* MENU */}
      <nav className="flex flex-col gap-2">

        {menu.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <div
              key={item.name}
              onClick={() => handleClick(item)}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer
                transition-all duration-200

                ${
                  isActive
                    ? "bg-blue-50 text-blue-600 shadow-sm"
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                }
              `}
            >
              <i className={`${getIcon(item, isActive)} text-[18px]`}></i>

              <span className="text-sm font-medium">
                {item.name}
              </span>
            </div>
          );
        })}

      </nav>
      {showLogout && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">

          <div className="bg-white w-[380px] rounded-2xl p-6 shadow-xl">

            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Confirm Logout
            </h3>

            <p className="text-sm text-gray-500 mb-6">
              Are you sure you want to log out?
            </p>

            <div className="flex gap-3">

              <button
                onClick={() => setShowLogout(false)}
                className="flex-1 py-2 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
              >
                Cancel
              </button>

              <button
                onClick={handleLogout}
                className="flex-1 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600 transition"
              >
                Logout
              </button>

            </div>

          </div>

        </div>
      )}
    </div>
  );
  
}

export default Sidebar;