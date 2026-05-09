import LoginForm from "../components/Auth/LoginForm";

function Login() {
  return (
    <div
      className="
        min-h-screen

        flex flex-col
        lg:flex-row

        bg-white
      "
    >

      {/* ================= LEFT ================= */}
      <div
        className="
          w-full
          lg:w-1/2

          bg-gray-100

          px-6
          sm:px-10
          lg:px-16

          py-10
          lg:py-16

          flex flex-col
          justify-between

          gap-10
        "
      >

        {/* CONTENT */}
        <div>

          {/* LOGO */}
          <h2
            className="
              text-blue-600

              font-semibold

              text-lg

              mb-6
            "
          >
            Trackademic
          </h2>

          {/* TITLE */}
          <h1
            className="
              text-4xl
              sm:text-5xl
              lg:text-6xl

              font-semibold

              leading-tight
            "
          >
            Welcome Back to <br />

            <span className="text-blue-600">
              Trackademic
            </span>

          </h1>

          {/* DESC */}
          <p
            className="
              text-gray-500

              mt-6

              max-w-md

              text-sm
              sm:text-base

              leading-relaxed
            "
          >
            Continue your journey and
            stay on track with your
            goals.
          </p>

        </div>

        {/* INFO CARD */}
        <div
          className="
            bg-white/80

            backdrop-blur-md

            p-4
            sm:p-5

            rounded-2xl

            shadow-md

            w-full
            sm:w-fit

            max-w-full
          "
        >

          <div
            className="
              flex items-start

              gap-3
            "
          >

            {/* ICON */}
            <div
              className="
                bg-blue-100

                p-2

                rounded-full

                shrink-0
              "
            >

              <i className="ri-line-chart-line text-blue-600"></i>

            </div>

            {/* TEXT */}
            <div className="min-w-0">

              <p
                className="
                  font-semibold

                  text-sm
                  sm:text-base
                "
              >
                Stay Consistent
              </p>

              <p
                className="
                  text-gray-500

                  text-xs
                  sm:text-sm

                  leading-relaxed
                "
              >
                Track your progress,
                maintain streaks, and
                continue learning daily.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* ================= RIGHT ================= */}
      <div
        className="
          w-full
          lg:w-1/2

          flex items-center
          justify-center

          px-6
          sm:px-10

          py-10
          lg:py-0
        "
      >

        <LoginForm />

      </div>

    </div>
  );
}

export default Login;