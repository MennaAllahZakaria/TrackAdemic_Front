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

function AdminTopbar() {
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
        return "Users Management";
      }

      if (
        pathname.includes(
          "/admin/tracks"
        )
      ) {
        return "Tracks Management";
      }

      if (
        pathname.includes(
          "/admin/quizzes"
        )
      ) {
        return "Quiz Analytics";
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

        px-4
        sm:px-6
        lg:px-8

        h-20

        flex items-center
        justify-between

        gap-4
      "
    >

      {/* LEFT */}
      <div>

        <p
          className="
            text-sm
            text-gray-400
          "
        >
          Welcome Back 👋
        </p>

        <h1
          className="
            text-2xl
            font-bold

            text-gray-900

            mt-1
          "
        >
          {getPageTitle()}
        </h1>

      </div>

      {/* RIGHT */}
      <div
        className="
          flex items-center
          gap-4
        "
      >

        {/* SEARCH */}
        <div
          className="
            hidden
            md:flex

            items-center

            w-[280px]

            bg-gray-100

            rounded-2xl

            px-4
          "
        >

          <i
            className="
              ri-search-line

              text-gray-400
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

              px-3 py-3

              bg-transparent

              outline-none
            "
          />

        </div>


        {/* PROFILE */}
        <div
          className="
            flex items-center
            gap-3

            bg-white

            border border-gray-200

            rounded-2xl

            px-3 py-2
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
              w-12 h-12

              rounded-xl

              object-cover
            "
          />

          <div
            className="
              hidden
              sm:block
            "
          >

            <h3
              className="
                text-sm
                font-semibold

                text-gray-900
              "
            >
              {user?.firstName}
              {" "}
              {user?.lastName}
            </h3>

            <p
              className="
                text-xs
                text-gray-400
                mt-1
              "
            >
              Administrator
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}

export default AdminTopbar;