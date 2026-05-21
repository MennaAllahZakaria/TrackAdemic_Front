import {
  useState,
  useEffect,
} from "react";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import api from "../services/api";

function Verify() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email;


  // REDIRECT IF NO EMAIL
  useEffect(() => {
    if (!email) {
      navigate("/signup");
    }
  }, [email, navigate]);

  // HANDLE INPUT
  const handleChange = (
    value,
    index
  ) => {
    if (
      !/^[0-9]?$/.test(value)
    )
      return;

    const newCode = [...code];

    newCode[index] = value;

    setCode(newCode);

    // NEXT INPUT
    if (
      value &&
      index < 5
    ) {

      document
        .getElementById(
          `code-${index + 1}`
        )
        ?.focus();
    }
  };

  // BACKSPACE
  const handleKeyDown = (
    e,
    index
  ) => {
    if (
      e.key ===
        "Backspace" &&
      !code[index] &&
      index > 0
    ) {

      document
        .getElementById(
          `code-${index - 1}`
        )
        ?.focus();
    }
  };

  // SUBMIT
  const handleSubmit =
    async () => {
      const fullCode =
        code.join("");

      if (
        fullCode.length < 6
      ) {

        setError(
          "Enter full code"
        );

        return;
      }

      try {
        setLoading(true);

        setError("");

        await api.post(
          "/auth/verifyEmailUser",
          {
            email,
            code: fullCode,
          }
        );

        navigate("/login");

      } catch (err) {
        setError(
          err.response?.data
            ?.message ||
            "Invalid code"
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <div
      className="
        min-h-screen

        flex items-center
        justify-center

        bg-gray-100

        px-4
        py-8
      "
    >

      <div
        className="
          bg-white

          p-8
          sm:p-10

          rounded-3xl

          shadow-xl

          text-center

          w-full
          max-w-[500px]
        "
      >

        {/* HEADER */}
        <div className="mb-6">

          {/* ICON */}
          <div
            className="
              bg-blue-100

              w-12 h-12

              rounded-xl

              flex items-center
              justify-center

              mx-auto

              mb-4
            "
          >

            <i
              className="
                ri-shield-check-line

                text-blue-600

                text-xl
              "
            ></i>

          </div>

          {/* TITLE */}
          <h2
            className="
              text-xl
              sm:text-2xl

              font-semibold
            "
          >
            Verification Required
          </h2>

          {/* DESC */}
          <p
            className="
              text-gray-500

              text-sm

              mt-2

              leading-relaxed
            "
          >
            We&apos;ve sent a
            6-digit code to your
            email
          </p>

          {/* EMAIL */}
          {email && (
            <p
              className="
                text-blue-600

                text-sm

                mt-2

                break-all
              "
            >
              {email}
            </p>
          )}

        </div>

        {/* CODE INPUTS */}
        <div
          className="
            flex items-center
            justify-center

            gap-3
            sm:gap-4

            mb-6
          "
        >

          {code.map(
            (
              digit,
              index
            ) => (
              <input
                key={index}
                id={`code-${index}`}
                value={digit}
                onChange={(e) =>
                  handleChange(
                    e.target
                      .value,
                    index
                  )
                }
                onKeyDown={(e) =>
                  handleKeyDown(
                    e,
                    index
                  )
                }
                maxLength={1}
                inputMode="numeric"
                autoComplete="one-time-code"
                className="
                  w-12 h-12
                  sm:w-14 sm:h-14

                  text-center

                  text-lg

                  font-semibold

                  bg-gray-100

                  rounded-2xl

                  outline-none

                  focus:ring-2
                  focus:ring-blue-500

                  focus:bg-white

                  transition-all
                  "
              />
            )
          )}

        </div>

        {/* ERROR */}
        {error && (
          <p
            className="
              text-red-500

              text-sm

              mb-3

              break-words
            "
          >
            {error}
          </p>
        )}

        {/* BUTTON */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="
            w-full

            py-3.5

            rounded-xl

            text-white

            text-sm
            sm:text-base

            font-semibold

            bg-gradient-to-r
            from-blue-600
            to-blue-400

            hover:scale-[1.01]

            transition-all duration-300

            disabled:opacity-50
          "
        >
          {loading
            ? "Verifying..."
            : "Verify Account"}
        </button>

        {/* RESEND */}
        <p
          className="
            text-sm

            text-gray-500

            mt-5

            leading-relaxed
          "
        >
          Didn&apos;t receive
          the code?{" "}

          <button
            type="button"
            className="
              text-blue-600

              hover:text-blue-700

              font-medium

              transition-colors
            "
          >
            Resend Code
          </button>

        </p>

      </div>

    </div>
  );
}

export default Verify;