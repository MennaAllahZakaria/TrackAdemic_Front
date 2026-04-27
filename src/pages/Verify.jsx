import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../services/api";

function Verify() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email;

  // لو دخل الصفحة مباشرة
  if (!email) {
    navigate("/signup");
  }

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // auto focus next
    if (value && index < 5) {
      document.getElementById(`code-${index + 1}`).focus();
    }
  };

  const handleSubmit = async () => {
    const fullCode = code.join("");

    if (fullCode.length < 6) {
      setError("Enter full code");
      return;
    }

    try {
      await api.post("/auth/verifyEmailUser", {
        email,
        code: fullCode,
      });

      navigate("/login");

    } catch (err) {
      setError(err.response?.data?.message || "Invalid code");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-10 rounded-2xl shadow-md text-center w-[400px]">

        <div className="mb-6">
          <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
            <i className="ri-shield-check-line text-blue-600 text-xl"></i>
          </div>

          <h2 className="text-xl font-semibold">
            Verification Required
          </h2>

          <p className="text-gray-500 text-sm mt-2">
            We've sent a 6-digit code to your email
          </p>
        </div>

        {/* CODE INPUTS */}
        <div className="flex justify-between mb-6">
          {code.map((digit, index) => (
            <input
              key={index}
              id={`code-${index}`}
              value={digit}
              onChange={(e) =>
                handleChange(e.target.value, index)
              }
              maxLength={1}
              className="w-12 h-12 text-center text-lg bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>

        {error && (
          <p className="text-red-500 text-sm mb-2">{error}</p>
        )}

        <button
          onClick={handleSubmit}
          className="w-full py-3 rounded-lg text-white font-semibold
          bg-gradient-to-r from-blue-600 to-blue-400"
        >
          Verify Account
        </button>

        <p className="text-sm text-gray-500 mt-4">
          Didn't receive the code?{" "}
          <span className="text-blue-600 cursor-pointer">
            Resend Code
          </span>
        </p>

      </div>
    </div>
  );
}

export default Verify;