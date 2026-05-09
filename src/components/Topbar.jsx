import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

import NotificationBell from "../components/Notification/NotificationBell";
import StreakCard from "../components/streak/StreakCard";

function Topbar() {
  const { token, user } = useAuth();

  const navigate = useNavigate();

  const [showSearch, setShowSearch] = useState(false);

  if (!token) return null;

  return (
    <>
      {/* TOPBAR */}
      <header
        className="
          hidden sm:flex
          h-16
          bg-white
          items-center
          justify-between
          px-4 md:px-6
          border-b border-gray-100
          shadow-sm
          sticky top-0
          z-30
        "
      >

        {/* LEFT */}
        <div className="flex items-center gap-3 min-w-0">

          {/* MOBILE MENU BUTTON */}
          <button
            className="
              lg:hidden
              w-10 h-10
              rounded-xl
              bg-gray-100
              items-center justify-center
              hidden
            "
          >
            <i className="ri-menu-line text-xl"></i>
          </button>

          {/* LOGO */}
          <h2
            className="
              text-base md:text-lg
              font-semibold
              text-gray-800
              whitespace-nowrap
            "
          >
            Trackademic
          </h2>

        </div>

        {/* SEARCH */}
        <div
          className="
            flex-1
            flex justify-center
            px-4
          "
        >

          <div
            className="
              relative
              w-full
              max-w-[420px]
            "
          >
            <i
              className="
                ri-search-line
                absolute left-3 top-1/2
                -translate-y-1/2
                text-gray-400
              "
            ></i>

            <input
              placeholder="Search your library..."
              className="
                w-full
                bg-gray-100
                pl-10 pr-4
                py-2.5
                rounded-xl
                outline-none
                text-sm
                focus:ring-2
                focus:ring-blue-200
              "
            />
          </div>

        </div>

        {/* RIGHT */}
        <div
          className="
            flex items-center
            gap-2 md:gap-4
            flex-shrink-0
          "
        >

          {/* SEARCH BUTTON TABLET */}
          <button
            onClick={() => setShowSearch(true)}
            className="
              md:hidden
              w-10 h-10
              rounded-xl
              bg-gray-100
              flex items-center justify-center
            "
          >
            <i className="ri-search-line text-lg"></i>
          </button>

          {/* NOTIFICATIONS */}
          <div
            className="
              relative
              cursor-pointer
              hover:text-gray-800
              transition
            "
          >
            <NotificationBell />

            <span
              className="
                absolute
                -top-1 -right-1
                w-2 h-2
                bg-red-500
                rounded-full
              "
            ></span>
          </div>

          {/* STREAK */}
          <div className="hidden md:block">
            <StreakCard streak={user?.streak} />
          </div>

          {/* PROFILE */}
          <div
            onClick={() => navigate("/profile")}
            className="
              cursor-pointer
              flex-shrink-0
            "
          >
            {user?.imageProfile ? (
              <img
                src={user.imageProfile}
                alt="profile"
                className="
                  w-9 h-9
                  rounded-full
                  object-cover
                  border border-gray-200
                  hover:scale-105
                  transition
                "
              />
            ) : (
              <div
                className="
                  w-9 h-9
                  rounded-full
                  bg-gray-300
                  flex items-center justify-center
                  text-gray-600
                "
              >
                <i className="ri-user-line"></i>
              </div>
            )}
          </div>

        </div>

      </header>

      {/* MOBILE SEARCH MODAL */}
      {showSearch && (
        <div
          className="
            fixed inset-0
            bg-black/40
            backdrop-blur-[2px]
            z-50
            flex items-start justify-center
            pt-20 px-4
          "
        >

          <div
            className="
              w-full
              max-w-md
              bg-white
              rounded-2xl
              p-4
              shadow-xl
            "
          >

            <div className="flex items-center gap-3">

              <div className="relative flex-1">

                <i
                  className="
                    ri-search-line
                    absolute left-3 top-1/2
                    -translate-y-1/2
                    text-gray-400
                  "
                ></i>

                <input
                  autoFocus
                  placeholder="Search your library..."
                  className="
                    w-full
                    bg-gray-100
                    pl-10 pr-4
                    py-3
                    rounded-xl
                    outline-none
                    text-sm
                    focus:ring-2
                    focus:ring-blue-200
                  "
                />

              </div>

              <button
                onClick={() => setShowSearch(false)}
                className="
                  w-10 h-10
                  rounded-xl
                  bg-gray-100
                  flex items-center justify-center
                "
              >
                <i className="ri-close-line text-lg"></i>
              </button>

            </div>

          </div>

        </div>
      )}
    </>
  );
}

export default Topbar;