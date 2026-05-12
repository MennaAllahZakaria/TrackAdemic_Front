import {
  NavLink,
  useNavigate,
} from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

function AdminSidebar() {
  const navigate =
    useNavigate();

  const { logout } =
    useAuth();

  const links = [
    {
      title: "Dashboard",
      icon: "ri-dashboard-line",
      path: "/admin",
    },
    {
      title: "Users",
      icon: "ri-team-line",
      path: "/admin/users",
    },
    {
      title: "Tracks",
      icon: "ri-book-open-line",
      path: "/admin/tracks",
    },
    {
      title: "Quizzes",
      icon: "ri-file-list-3-line",
      path: "/admin/quizzes",
    },
    {
      title: "Contacts",
      icon: "ri-customer-service-2-line",
      path: "/admin/contacts",
    },
    {
      title: "Notifications",
      icon: "ri-notification-3-line",
      path: "/admin/notifications",
    },
  ];

  const handleLogout =
    () => {
      logout();

      navigate("/login");
    };

  return (
    <aside
      className="
          hidden
          lg:flex

          fixed left-0 top-0

          h-screen
          w-[280px]

          bg-[#0F172A]

          text-white

          flex-col

          border-r border-white/10

          z-40
      "
    >

      {/* LOGO */}
      <div
        className="
          h-20

          flex items-center

          px-8

          border-b border-white/10
        "
      >

        <h2
          className="
            text-2xl

            font-bold

            tracking-tight
          "
        >
          Trackademic
          <span
            className="
              text-cyan-400
            "
          >
            {" "}
            Admin
          </span>
        </h2>

      </div>

      {/* LINKS */}
      <div
        className="
          flex-1

          px-4
          py-6

          space-y-2
        "
      >

        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={
              link.path ===
              "/admin"
            }
            className={({
              isActive,
            }) =>
              `
              flex items-center
              gap-4

              px-5 py-4

              rounded-2xl

              transition-all duration-300

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
            `
            }
          >

            <i
              className={`
                ${link.icon}

                text-xl
              `}
            ></i>

            <span>
              {link.title}
            </span>

          </NavLink>
        ))}

      </div>

      {/* LOGOUT */}
      <div
        className="
          p-4

          border-t border-white/10
        "
      >

        <button
          onClick={
            handleLogout
          }
          className="
            w-full

            flex items-center
            gap-4

            px-5 py-4

            rounded-2xl

            text-red-300

            hover:bg-red-500/10

            transition-all duration-300
          "
        >

          <i className="ri-logout-box-r-line text-xl"></i>

          Logout

        </button>

      </div>

    </aside>
  );
}

export default AdminSidebar;