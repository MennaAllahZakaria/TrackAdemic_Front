import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

const menu = [
  { name: "Home", icon: "ri-home-5-line", path: "/dashboard" },
  { name: "Tracky", icon: "ri-robot-2-line", path: "/chat" },
  { name: "My Learning", icon: "ri-book-open-line", path: "/my-learning" },
  { name: "Tracks", icon: "ri-compass-3-line", path: "/tracks" },
  { name: "Analytics", icon: "ri-line-chart-line", path: "/analytics" },
  { name: "Settings", icon: "ri-settings-3-line", path: "/settings" },
  { name: "Onboarding", icon: "ri-trophy-line", path: "/onboarding" },
  { name: "Profile", icon: "ri-user-3-line", path: "/profile" },
  { name: "About", icon: "ri-information-line", path: "/about" },
  { name: "Progress", icon: "ri-bar-chart-line", path: "/progress" },
  { name: "Quizzes", icon: "ri-brain-line", path: "/quizzes" },
  { name: "Support", icon: "ri-question-line", path: "/ContactUs" },
];

function Sidebar() {
  const { token, logout } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  if (!token) return null;

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sidebarOpen]);

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
      return;
    }

    navigate(item.path);
    setSidebarOpen(false);
  };

  const handleLogout = () => {
    logout();
    setShowLogout(false);
    navigate("/login");
  };

  return (
    <>
      {/* MOBILE TOPBAR */}
      <div
        className="
          sm:hidden
          fixed top-0 left-0 right-0
          h-16
          bg-white
          border-b border-gray-200
          px-4
          flex items-center justify-between
          z-50
        "
      >
        <div className="flex items-center gap-3">
          <div
            className="
              w-9 h-9
              bg-blue-600
              rounded-full
              flex items-center justify-center
              text-white
            "
          >
            🎓
          </div>

          <h2 className="text-[17px] font-bold text-gray-900">
            Trackademic
          </h2>
        </div>

        <button
          onClick={() => setSidebarOpen(true)}
          className="
            w-10 h-10
            rounded-xl
            bg-gray-100
            flex items-center justify-center
          "
        >
          <i className="ri-menu-line text-xl"></i>
        </button>
      </div>

      {/* MOBILE OVERLAY */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="
            sm:hidden
            fixed inset-0
            bg-black/50
            backdrop-blur-[2px]
            z-40
          "
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed top-0 left-0
          h-screen
          w-[85%] max-w-[320px]
          bg-[#F9FAFB]
          border-r border-gray-100
          z-50

          p-5
          flex flex-col
          overflow-y-auto
          no-scrollbar

          transition-transform duration-300 ease-in-out

          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }

          sm:translate-x-0
          sm:w-64
          sm:flex
        `}
      >

        {/* MOBILE HEADER */}
        <div className="sm:hidden flex items-center justify-between mb-8">

          <div className="flex items-center gap-3">
            <div
              className="
                w-10 h-10
                bg-blue-600
                rounded-full
                flex items-center justify-center
                text-white
              "
            >
              🎓
            </div>

            <h2 className="text-lg font-bold text-gray-900">
              Trackademic
            </h2>
          </div>

          <button
            onClick={() => setSidebarOpen(false)}
            className="
              w-10 h-10
              rounded-xl
              bg-gray-100
              flex items-center justify-center
            "
          >
            <i className="ri-close-line text-xl"></i>
          </button>

        </div>

        {/* DESKTOP LOGO */}
        <div className="hidden sm:flex items-center gap-3 mb-10">

          <div
            className="
              w-10 h-10
              bg-blue-600
              rounded-full
              flex items-center justify-center
              text-white text-lg
            "
          >
            🎓
          </div>

          <div>
            <h2 className="text-[18px] font-bold text-gray-900">
              Trackademic
            </h2>

            <p
              className="
                text-[11px]
                text-gray-400
                tracking-wide
              "
            >
              ACADEMIC EXCELLENCE
            </p>
          </div>

        </div>

        {/* MENU */}
        <nav className="flex flex-col gap-2 flex-1">

          {menu.map((item) => {
            const isActive =
              location.pathname === item.path;

            return (
              <div
                key={item.name}
                onClick={() => handleClick(item)}
                className={`
                  group
                  flex items-center gap-3
                  px-4 py-3
                  rounded-2xl
                  cursor-pointer
                  transition-all duration-300
                  border

                  ${
                    isActive
                      ? `
                        bg-blue-50
                        text-blue-600
                        border-blue-100
                        shadow-sm
                      `
                      : `
                        text-gray-500
                        border-transparent
                        hover:bg-white
                        hover:border-gray-200
                        hover:text-gray-900
                      `
                  }
                `}
              >

                <div
                  className={`
                    w-10 h-10
                    rounded-xl
                    flex items-center justify-center
                    transition-all duration-300

                    ${
                      isActive
                        ? `
                          bg-blue-100
                          text-blue-600
                        `
                        : `
                          bg-gray-100
                          text-gray-500
                          group-hover:bg-[#9FF79F]
                        `
                    }
                  `}
                >
                  <i
                    className={`
                      ${getIcon(item, isActive)}
                      text-[18px]
                    `}
                  ></i>
                </div>

                <span className="text-sm font-medium">
                  {item.name}
                </span>

              </div>
            );
          })}

        </nav>
        {/* LOGOUT */}
        <div
          className="
            pt-4
            mt-4

            border-t border-gray-200
          "
        >

          <button
            onClick={() =>
              setShowLogout(true)
            }
            className="
              w-full

              group

              flex items-center
              gap-3

              px-4 py-3

              rounded-2xl

              transition-all
              duration-300

              text-red-500

              hover:bg-red-50
            "
          >

            {/* ICON */}
            <div
              className="
                w-10 h-10

                rounded-xl

                flex items-center
                justify-center

                bg-red-100

                text-red-500

                transition-all
                duration-300

                group-hover:bg-red-200
              "
            >

              <i className="ri-logout-box-r-line text-[18px]"></i>

            </div>

            {/* TEXT */}
            <span
              className="
                text-sm
                font-medium
              "
            >
              Logout
            </span>

          </button>

        </div>
      </aside>

      {/* LOGOUT MODAL */}
      {showLogout && (
        <div
          className="
            fixed inset-0
            bg-black/40
            backdrop-blur-[2px]
            flex items-center justify-center
            p-4
            z-[60]
          "
        >

          <div
            className="
              bg-white
              w-full
              max-w-[380px]
              rounded-3xl
              p-6
              shadow-2xl
            "
          >

            <div
              className="
                w-16 h-16
                rounded-2xl
                bg-red-100
                text-red-500
                flex items-center justify-center
                mx-auto
              "
            >
              <i className="ri-logout-box-r-line text-3xl"></i>
            </div>

            <h3
              className="
                text-2xl
                font-bold
                text-gray-900
                text-center
                mt-5
              "
            >
              Confirm Logout
            </h3>

            <p
              className="
                text-sm
                text-gray-500
                text-center
                mt-3
                leading-relaxed
              "
            >
              Are you sure you want to log out from your account?
            </p>

            <div className="flex gap-3 mt-8">

              <button
                onClick={() => setShowLogout(false)}
                className="
                  flex-1
                  h-12
                  rounded-2xl
                  bg-gray-100
                  text-gray-700
                  hover:bg-gray-200
                  transition-all duration-300
                  font-medium
                "
              >
                Cancel
              </button>

              <button
                onClick={handleLogout}
                className="
                  flex-1
                  h-12
                  rounded-2xl
                  bg-red-500
                  text-white
                  hover:bg-red-600
                  transition-all duration-300
                  font-medium
                "
              >
                Logout
              </button>

            </div>

          </div>

        </div>
      )}
    </>
  );
}

export default Sidebar;