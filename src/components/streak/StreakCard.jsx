import { useEffect, useRef, useState } from "react";

function StreakCard({ streak }) {
  const [open, setOpen] = useState(false);

  const streakRef = useRef();

  // ================= CLICK OUTSIDE =================
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        streakRef.current &&
        !streakRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  return (
    <div
      ref={streakRef}
      className="relative"
    >

      {/* BUTTON */}
      <button
        onClick={() =>
          setOpen((prev) => !prev)
        }
        className="
          flex items-center gap-2
          bg-orange-50
          hover:bg-orange-100

          px-3 py-2
          rounded-full

          transition-all duration-300
        "
      >

        <i className="
          ri-fire-fill
          text-orange-500
          text-sm
        "></i>

        <span className="
          text-sm font-semibold
          text-orange-600
        ">
          {streak?.count || 0}
        </span>

      </button>

      {/* CARD */}
      {open && (
        <div
          className="
            absolute right-0 top-14
            w-[320px]

            bg-white
            rounded-[28px]

            border border-orange-100
            shadow-[0_20px_60px_rgba(0,0,0,0.12)]

            overflow-hidden
            z-50

            animate-[fadeIn_.25s_ease]
          "
        >

          {/* TOP */}
          <div
            className="
              bg-gradient-to-br
              from-orange-400
              to-orange-500

              p-6
              text-white
              relative overflow-hidden
            "
          >

            <div className="
              absolute -top-6 -right-6
              w-28 h-28 rounded-full
              bg-white/10
            "></div>

            <div className="
              flex items-center justify-between
            ">

              <div>

                <p className="
                  text-white/80
                  text-sm
                ">
                  Current Streak
                </p>

                <h2 className="
                  text-[42px]
                  font-bold
                  leading-none
                  mt-2
                ">
                  {streak?.count || 0}
                </h2>

                <p className="
                  text-white/80
                  mt-2 text-sm
                ">
                  days in a row 🔥
                </p>

              </div>

              <div className="
                w-16 h-16 rounded-2xl
                bg-white/20
                flex items-center justify-center
                backdrop-blur-md
              ">
                <i className="
                  ri-fire-fill text-3xl
                "></i>
              </div>

            </div>

          </div>

          {/* BODY */}
          <div className="p-6">

            {/* LONGEST */}
            <div
              className="
                flex items-center justify-between

                bg-orange-50
                rounded-2xl
                px-4 py-4
              "
            >

              <div>

                <p className="
                  text-xs text-gray-400
                ">
                  Longest Streak
                </p>

                <h3 className="
                  text-2xl font-bold
                  text-gray-900
                  mt-1
                ">
                  {streak?.longest || 0}
                </h3>

              </div>

              <div className="
                w-12 h-12 rounded-xl
                bg-white
                flex items-center justify-center
                text-orange-500
              ">
                <i className="
                  ri-trophy-fill text-xl
                "></i>
              </div>

            </div>

            {/* LAST ACTIVE */}
            <div className="
              mt-5 flex items-center gap-3
            ">

              <div className="
                w-11 h-11 rounded-xl
                bg-blue-50
                text-blue-600
                flex items-center justify-center
              ">
                <i className="
                  ri-calendar-check-line
                "></i>
              </div>

              <div>

                <p className="
                  text-xs text-gray-400
                ">
                  Last Active
                </p>

                <p className="
                  text-sm font-medium
                  text-gray-700 mt-1
                ">
                  {streak?.lastActiveDate
                    ? new Date(
                        streak.lastActiveDate
                      ).toLocaleDateString()
                    : "No activity"}
                </p>

              </div>

            </div>

            {/* FOOTER */}
            <div
              className="
                mt-6

                bg-gradient-to-r
                from-orange-50
                to-yellow-50

                rounded-2xl
                p-4
              "
            >

              <div className="
                flex items-start gap-3
              ">

                <div className="
                  w-10 h-10 rounded-xl
                  bg-white
                  flex items-center justify-center
                  text-orange-500
                  shrink-0
                ">
                  ✨
                </div>

                <div>

                  <h4 className="
                    text-sm font-semibold
                    text-gray-900
                  ">
                    Keep Going
                  </h4>

                  <p className="
                    text-xs text-gray-500
                    leading-relaxed mt-1
                  ">
                    Study daily to maintain
                    your streak and improve
                    consistency.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default StreakCard;