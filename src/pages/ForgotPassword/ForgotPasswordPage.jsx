import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-hot-toast";

function ForgotPasswordPage() {

  const [email, setEmail] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const navigate =
    useNavigate();

  const isValidEmail = (
    email
  ) => {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      email
    );

  };

  const isValid =
    email &&
    isValidEmail(email);

  const handleChange = (
    e
  ) => {

    const value =
      e.target.value;

    setEmail(
      value.toLowerCase()
    );

    if (!value) {

      setError(
        "Email is required"
      );

    } else if (
      !isValidEmail(value)
    ) {

      setError(
        "Enter a valid email"
      );

    } else {

      setError("");

    }

  };

  const handleSubmit =
    async () => {

      if (!email) {

        return toast.error(
          "Enter your email"
        );

      }

      if (
        !isValidEmail(email)
      ) {

        return setError(
          "Invalid email format"
        );

      }

      try {

        setLoading(true);

        await api.post(
          "/auth/forgetPassword",
          { email }
        );

        toast.success(
          "Code sent to your email ✔️"
        );

        navigate(
          "/verify-code",
          {
            state: { email },
          }
        );

      } catch (err) {

        toast.error(
          err.response?.data
            ?.message || "Error"
        );

      } finally {

        setLoading(false);

      }

    };

  return (
    <div
      className="
        min-h-screen

        flex items-center justify-center

        bg-[#f8fafc]

        px-4
        py-8
      "
    >

      <div
        className="
          w-full
          max-w-[1000px]

          bg-white

          rounded-3xl

          shadow-lg

          overflow-hidden

          flex flex-col
          lg:flex-row
        "
      >

        {/* LEFT */}
        <div
          className="
            lg:w-1/2

            bg-gray-50

            flex flex-col
            justify-center
            items-center

            p-8
            sm:p-10
          "
        >

          <img
            src="/forgot.png"
            className="
              w-[180px]
              sm:w-[240px]
              lg:w-[300px]
            "
          />

          <h2
            className="
              mt-6

              text-lg
              font-semibold
            "
          >
            Trackademic
          </h2>

        </div>

        {/* RIGHT */}
        <div
          className="
            lg:w-1/2

            p-6
            sm:p-10
          "
        >

          <div
            className="
              w-full
              max-w-[420px]

              mx-auto
            "
          >

            <h2
              className="
                text-2xl
                sm:text-3xl

                font-bold

                mb-3
              "
            >
              Forgot password?
            </h2>

            <p
              className="
                text-gray-500

                mb-6

                leading-relaxed

                text-sm
                sm:text-base
              "
            >
              No worries. Enter the
              email address associated
              with your account and
              we'll send you a link to
              reset your password.
            </p>

            <h5
              className="
                text-sm
                font-medium

                mb-2
              "
            >
              Email Address
            </h5>

            <input
              type="email"
              placeholder="name@email.com"
              value={email}
              onChange={
                handleChange
              }
              className="
                w-full

                bg-gray-100

                p-3
                sm:p-4

                rounded-xl

                outline-none

                mb-4
              "
            />

            {error && (

              <p
                className="
                  text-red-500

                  text-sm

                  mb-5
                "
              >
                {error}
              </p>

            )}

            <button
              disabled={
                !isValid ||
                loading
              }
              onClick={
                handleSubmit
              }
              className={`
                w-full

                py-3

                rounded-xl

                transition-all duration-300

                ${
                  isValid
                    ? "bg-blue-600 text-white"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }
              `}
            >

              {loading
                ? "Sending..."
                : "Send Reset Link →"}

            </button>

            {/* BACK */}
            <div
              className="
                text-center

                mt-6
              "
            >

              <button
                onClick={() =>
                  navigate(
                    "/login"
                  )
                }
                className="
                  text-blue-600

                  text-sm
                  font-medium

                  hover:underline

                  flex items-center
                  justify-center

                  gap-2

                  mx-auto
                "
              >
                ← Back to log in
              </button>

            </div>

            {/* DIVIDER */}
            <div
              className="
                h-[1px]

                bg-gray-200

                my-8
              "
            ></div>

            {/* TERMS */}
            <p
              className="
                text-xs
                text-gray-400

                text-center

                leading-relaxed
              "
            >

              By continuing, you agree
              to Trackademic's{" "}

              <span
                className="
                  underline
                  cursor-pointer

                  hover:text-gray-600
                "
                onClick={() =>
                  navigate(
                    "/terms"
                  )
                }
              >
                Terms of Service
              </span>

              {" "}and{" "}

              <span
                className="
                  underline
                  cursor-pointer

                  hover:text-gray-600
                "
                onClick={() =>
                  navigate(
                    "/privacy"
                  )
                }
              >
                Privacy Policy
              </span>.

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ForgotPasswordPage;