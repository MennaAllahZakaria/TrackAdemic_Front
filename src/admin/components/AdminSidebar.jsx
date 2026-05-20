import {
  useNavigate,
  useLocation,
} from "react-router-dom";

import {
  useEffect,
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

function AdminSidebar() {

  const {
    token,
    logout,
  } = useAuth();

  const navigate =
    useNavigate();

  const location =
    useLocation();

  const [
    sidebarOpen,
    setSidebarOpen,
  ] = useState(false);

  const [
    showLogout,
    setShowLogout,
  ] = useState(false);

  if (!token) return null;

  // =========================
  // BODY SCROLL
  // =========================
  useEffect(() => {

    if (sidebarOpen) {

      document.body.style.overflow =
        "hidden";

    } else {

      document.body.style.overflow =
        "auto";

    }

    return () => {

      document.body.style.overflow =
        "auto";

    };

  }, [sidebarOpen]);

  // =========================
  // HANDLE CLICK
  // =========================
  const handleClick =
    (item) => {

      if (
        item.name === "Logout"
      ) {

        setShowLogout(true);

        return;
      }

      navigate(item.path);

      setSidebarOpen(false);

    };

  // =========================
  // HANDLE LOGOUT
  // =========================
  const handleLogout =
    () => {

      logout();

      setShowLogout(false);

      navigate("/login");

    };

  return (

    <>

      {/* MOBILE TOPBAR */}
      <div
        className="
          lg:hidden

          fixed top-0 left-0 right-0

          h-16

          bg-[#0F172A]

          border-b border-white/10

          px-4

          flex items-center
          justify-between

          z-50
        "
      >

        <div
          className="
            flex items-center
            gap-3
          "
        >

          <div
            className="
              w-10 h-10

              rounded-full

              bg-cyan-400

              flex items-center
              justify-center

              text-black
            "
          >
            🛡️
          </div>

          <h2
            className="
              text-lg

              font-bold

              text-white
            "
          >
            Admin Panel
          </h2>

        </div>

        <button
          onClick={() =>
            setSidebarOpen(true)
          }
          className="
            w-10 h-10

            rounded-xl

            bg-white/10

            flex items-center
            justify-center

            text-white
          "
        >

          <i className="ri-menu-line text-xl"></i>

        </button>

      </div>

      {/* OVERLAY */}
      {sidebarOpen && (

        <div
          onClick={() =>
            setSidebarOpen(false)
          }
          className="
            lg:hidden

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

          w-[85%]
          max-w-[320px]

          lg:w-[280px]

          bg-[#0F172A]

          text-white

          border-r border-white/10

          z-50

          flex flex-col

          p-5

          overflow-y-auto

          transition-transform
          duration-300
          ease-in-out

          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }

          lg:translate-x-0
        `}
      >

        {/* MOBILE HEADER */}
        <div
          className="
            lg:hidden

            flex items-center
            justify-between

            mb-8
          "
        >

          <div
            className="
              flex items-center
              gap-3
            "
          >

            <div
              className="
                w-10 h-10

                rounded-full

                bg-cyan-400

                flex items-center
                justify-center

                text-black
              "
            >
              🛡️
            </div>

            <h2
              className="
                text-lg

                font-bold
              "
            >
              Admin Panel
            </h2>

          </div>

          <button
            onClick={() =>
              setSidebarOpen(false)
            }
            className="
              w-10 h-10

              rounded-xl

              bg-white/10

              flex items-center
              justify-center
            "
          >

            <i className="ri-close-line text-xl"></i>

          </button>

        </div>

        {/* DESKTOP LOGO */}
        <div
          className="
            hidden lg:flex

            items-center
            gap-3

            mb-10
          "
        >

          <div
            className="
              w-10 h-10

              rounded-full

              bg-cyan-400

              flex items-center
              justify-center

              text-black
            "
          >
            🛡️
          </div>

          <div>

            <h2
              className="
                text-[20px]

                font-bold
              "
            >
              Trackademic
            </h2>

            <p
              className="
                text-[11px]

                text-white/50

                tracking-wide
              "
            >
              ADMIN PANEL
            </p>

          </div>

        </div>

        {/* MENU */}
        <nav
          className="
            flex flex-col
            gap-2
          "
        >

          {menu.map((item) => {

            const isActive =
              location.pathname ===
              item.path;

            return (

              <div
                key={item.name}
                onClick={() =>
                  handleClick(item)
                }
                className={`
                  group

                  flex items-center
                  gap-4

                  px-4 py-3

                  rounded-2xl

                  cursor-pointer

                  transition-all
                  duration-300

                  ${
                    isActive
                      ? `
                        bg-cyan-400
                        text-black
                        font-semibold
                      `
                      : `
                        text-white/70

                        hover:bg-white/10
                        hover:text-white
                      `
                  }
                `}
              >

                <div
                  className={`
                    w-10 h-10

                    rounded-xl

                    flex items-center
                    justify-center

                    transition-all

                    ${
                      isActive
                        ? `
                          bg-black/10
                        `
                        : `
                          bg-white/5

                          group-hover:bg-cyan-400
                          group-hover:text-black
                        `
                    }
                  `}
                >

                  <i
                    className={`
                      ${item.icon}
                      text-xl
                    `}
                  ></i>

                </div>

                <span
                  className="
                    text-sm
                  "
                >
                  {item.name}
                </span>

              </div>

            );
          })}

        </nav>

        {/* PUSH TO BOTTOM */}
        <div className="flex-1"></div>

        {/* LOGOUT */}
        <div
          className="
            pt-4
            mt-4

            border-t border-white/10
          "
        >

          <button
            onClick={() =>
              setShowLogout(true)
            }
            className="
              w-full

              flex items-center
              gap-4

              px-4 py-3

              rounded-2xl

              text-red-300

              hover:bg-red-500/10
              hover:text-red-200

              transition-all
              duration-300

              group
            "
          >

            {/* ICON */}
            <div
              className="
                w-10 h-10

                rounded-xl

                bg-red-500/10

                flex items-center
                justify-center

                group-hover:bg-red-500/20

                transition-all
              "
            >

              <i className="ri-logout-box-r-line text-xl"></i>

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

            flex items-center
            justify-center

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

                flex items-center
                justify-center

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
              Are you sure you want
              to log out from your
              admin account?
            </p>

            <div
              className="
                flex gap-3

                mt-8
              "
            >

              <button
                onClick={() =>
                  setShowLogout(false)
                }
                className="
                  flex-1

                  h-12

                  rounded-2xl

                  bg-gray-100

                  text-gray-700

                  hover:bg-gray-200

                  transition-all
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

                  transition-all
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

export default AdminSidebar;