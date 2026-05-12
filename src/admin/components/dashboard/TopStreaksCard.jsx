function TopStreaksCard({
  users,
}) {
  return (
    <div
      className="
        bg-white

        rounded-[32px]

        border border-gray-100

        shadow-sm

        p-6
        sm:p-8
      "
    >

      <div
        className="
          flex items-center
          justify-between

          mb-8
        "
      >

        <div>

          <p
            className="
              text-sm
              text-cyan-600

              font-semibold
            "
          >
            TOP USERS
          </p>

          <h2
            className="
              text-2xl

              font-bold

              text-gray-900

              mt-2
            "
          >
            Highest Streaks
          </h2>

        </div>

        <div
          className="
            w-14 h-14

            rounded-2xl

            bg-orange-100

            flex items-center
            justify-center

            text-orange-600
            text-2xl
          "
        >

          🔥

        </div>

      </div>

      <div
        className="
          space-y-4
        "
      >

        {users?.map(
          (
            user,
            index
          ) => (
            <div
              key={index}
              className="
                flex items-center
                justify-between

                bg-gray-50

                rounded-2xl

                p-4
              "
            >

              <div
                className="
                  flex items-center
                  gap-4
                "
              >

                <div
                  className="
                    w-12 h-12

                    rounded-xl

                    bg-cyan-100

                    flex items-center
                    justify-center

                    font-bold

                    text-cyan-700
                  "
                >
                  {index + 1}
                </div>

                <div>

                  <h3
                    className="
                      font-semibold

                      text-gray-900
                    "
                  >
                    {user.firstName}
                  </h3>

                  <p
                    className="
                      text-sm
                      text-gray-500
                    "
                  >
                    Longest:
                    {" "}
                    {
                      user
                        ?.streak
                        ?.longest
                    }
                    {" "}
                    days
                  </p>

                </div>

              </div>

              <div
                className="
                  px-4 py-2

                  rounded-xl

                  bg-orange-100

                  text-orange-700

                  font-semibold
                "
              >
                🔥{" "}
                {
                  user
                    ?.streak
                    ?.count
                }
              </div>

            </div>
          )
        )}

      </div>

    </div>
  );
}

export default TopStreaksCard;