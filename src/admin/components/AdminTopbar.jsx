import {
  useState,
} from "react";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  useAuth,
} from "../../context/AuthContext";

function AdminTopbar({ onMenuClick }) {
  const location =
    useLocation();

  const navigate =
    useNavigate();

  const { user } =
    useAuth();

  const [search,
    setSearch] =
    useState("");

  // ================= PAGE TITLE =================
  const getPageTitle =
    () => {

      const pathname =
        location.pathname;

      if (
        pathname === "/admin"
      ) {
        return "Dashboard";
      }

      if (
        pathname.includes(
          "/admin/users"
        )
      ) {
        return "Users";
      }

      if (
        pathname.includes(
          "/admin/tracks"
        )
      ) {
        return "Tracks";
      }

      if (
        pathname.includes(
          "/admin/quizzes"
        )
      ) {
        return "Quizzes";
      }

      if (
        pathname.includes(
          "/admin/contacts"
        )
      ) {
        return "Contacts";
      }

      if (
        pathname.includes(
          "/admin/notifications"
        )
      ) {
        return "Notifications";
      }

      return "Admin Panel";
    };

  return (
    <header
      className="
        sticky top-0 z-30

        bg-white/90
        backdrop-blur-xl

        border-b border-gray-200

        px-3
        sm:px-4
        md:px-6
        lg:px-8

        h-16
        sm:h-20

        flex items-center
        justify-between

        gap-3
        sm:gap-4
      "
    >
      {/* LEFT - Menu Button & Title */}
      <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1">
        <button
          onClick={onMenuClick}
          className="
            lg:hidden
            w-9 h-9
            sm:w-10 sm:h-10
            rounded-xl
            bg-gray-100
            flex items-center
            justify-center
            text-gray-600
            hover:bg-gray-200
            transition-colors
            flex-shrink-0
          "
        >
          <i className="ri-menu-2-line text-base sm:text-lg"></i>
        </button>

        <div className="min-w-0">
          <p
            className="
              hidden sm:block
              text-[10px]
              text-gray-400
            "
          >
            Welcome Back 👋
          </p>

          <h1
            className="
              text-base
              sm:text-xl
              md:text-2xl
              font-bold
              text-gray-900
              truncate
            "
          >
            {getPageTitle()}
          </h1>
        </div>
      </div>

      {/* RIGHT */}
      <div
        className="
          flex items-center
          gap-2
          sm:gap-3
          lg:gap-4
          flex-shrink-0
        "
      >

        {/* SEARCH - Desktop only */}
        <div
          className="
            hidden
            xl:flex

            items-center

            w-[200px]
            lg:w-[240px]

            bg-gray-100

            rounded-2xl

            px-3
            lg:px-4
          "
        >

          <i
            className="
              ri-search-line

              text-gray-400
              text-sm
            "
          ></i>

          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            className="
              w-full

              px-2
              lg:px-3
              py-2

              bg-transparent

              outline-none

              text-xs
              lg:text-sm
            "
          />

        </div>


        {/* PROFILE */}
        <div
          className="
            flex items-center
            gap-1.5
            sm:gap-2
            lg:gap-3

            bg-white

            border border-gray-200

            rounded-2xl

            px-2
            sm:px-3
            py-1.5
            sm:py-2
            
            cursor-pointer
            hover:border-cyan-400
            transition-colors

            flex-shrink-0
          "
          onClick={() =>
            navigate(
              "/admin/profile"
            )
          }
        >

          <img
            src={
              user?.imageProfile ||
              "https://i.pravatar.cc/150?img=12"
            }
            alt="Admin"
            className="
              w-7 h-7
              sm:w-8 sm:h-8
              lg:w-10 lg:h-10

              rounded-lg
              lg:rounded-xl

              object-cover
            "
          />

          <div
            className="
              hidden
              md:block
            "
          >

            <h3
              className="
                text-[10px]
                sm:text-xs
                lg:text-sm
                font-semibold

                text-gray-900
                truncate
                max-w-[80px]
                lg:max-w-[100px]
              "
            >
              {user?.firstName}
            </h3>

            <p
              className="
                text-[8px]
                lg:text-[10px]
                text-gray-400
              "
            >
              Admin
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}

export default AdminTopbar;
