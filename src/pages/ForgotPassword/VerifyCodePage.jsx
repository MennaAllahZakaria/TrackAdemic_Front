import { useState,useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-hot-toast";
import OTPInput from "../../components/Auth/OTPInput"

function VerifyCodePage() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");

  const [timer, setTimer] = useState(30);

  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email;

  useEffect(() => {
      if (timer === 0) return;

      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(interval);
    }, [timer]);
  
  const isComplete = code.every((digit) => digit !== "");
  
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      document.getElementById(`code-${index - 1}`)?.focus();
    }
  };

  const handleResend = async () => {
    try {
      await api.post("/auth/forgetPassword", { email });

      toast.success("Code resent ✔️");
      setTimer(30);

    } catch (err) {
      toast.error("Error resending code");
    }
  };

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // move focus
    if (value && index < 5) {
      document.getElementById(`code-${index + 1}`)?.focus();
    }
  };
  
    useEffect(() => {
      if (isComplete) handleVerify();
    }, [code]);

  const handleVerify = async () => {
    if (code.length < 6) {
      return toast.error("Enter full code");
    }

    try {
      setLoading(true);
      const finalCode = code.join("");
      await api.post("/auth/verifyForgotPasswordCode", {
        email,
        code: finalCode,
      });

      toast.success("Verified ✔️");

      navigate("/reset-password", { state: { email } });

    } catch (err) {
      toast.error("Invalid code");
    } finally {
      setLoading(false);
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
              onKeyDown={(e) => handleKeyDown(e, index)}
              maxLength={1}
              className="w-12 h-12 text-center text-lg bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>

        {error && (
          <p className="text-red-500 text-sm mb-2">{error}</p>
        )}

        <button
          onClick={handleVerify}
          className="w-full py-3 rounded-lg text-white font-semibold
          bg-gradient-to-r from-blue-600 to-blue-400"
        >
          Verify Code
        </button>

        <p className="text-sm text-gray-500 mt-4">
            Didn't receive the code?{" "}
            {timer > 0 ? (
              <span className="text-gray-400">
                Resend in {timer}s
              </span>
            ) : (
              <span
                onClick={handleResend}
                className="text-blue-600 cursor-pointer font-medium"
              >
                Resend Code
              </span>
            )}
          </p>

      </div>
    </div>
  );
}

export default VerifyCodePage;