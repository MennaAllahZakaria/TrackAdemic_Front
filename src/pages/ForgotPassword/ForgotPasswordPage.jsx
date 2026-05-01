import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-hot-toast";



function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValid = email && isValidEmail(email);

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value.toLowerCase());

    if (!value) {
      setError("Email is required");
    } else if (!isValidEmail(value)) {
      setError("Enter a valid email");
    } else {
      setError("");
    }
  };

  const handleSubmit = async () => {
    if (!email) return toast.error("Enter your email");

    if (!isValidEmail(email)) {
      return setError("Invalid email format");
    }

    try {
      setLoading(true);

      await api.post("/auth/forgetPassword", { email });

      toast.success("Code sent to your email ✔️");

      navigate("/verify-code", { state: { email } });

    } catch (err) {
      toast.error(err.response?.data?.message || "Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc]">

      <div className="w-[1000px] bg-white rounded-3xl shadow-lg flex overflow-hidden">

        {/* LEFT */}
        <div className="w-1/2 bg-gray-50 flex flex-col justify-center items-center p-10">
          <img
            src="/forgot.png"
            className="w-[300px]"
          />
          <h2 className="mt-6 text-lg font-semibold">
            Trackademic
          </h2>
        </div>

        {/* RIGHT */}
        <div className="w-1/2 p-10">

          <h2 className="text-2xl font-bold mb-3">
            Forgot password?
          </h2>

          <p className="text-gray-500 mb-6">
            Enter your email to receive reset link.
          </p>

          <input
            type="email"
            placeholder="name@email.com"
            value={email}
            onChange={handleChange}
            className="w-full bg-gray-100 p-3 rounded-xl outline-none mb-6"
          />

          {error && <p className="text-red-500 text-sm mb-6">{error}</p>}

          <button
            disabled={!isValid || loading}
            onClick={handleSubmit}
            className={`w-full py-3 rounded-xl
                      ${
                        isValid
                          ? "bg-blue-600 text-white"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }
                    `}
          >
            {loading ? "Sending..." : "Send Reset Link →"}
          </button>

        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;