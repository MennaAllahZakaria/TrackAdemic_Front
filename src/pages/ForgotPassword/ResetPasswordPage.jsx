import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-hot-toast";
import InputField from "../../components/forgotPassword/InputField";

function ResetPasswordPage() {
  const [form, setForm] = useState({
    newPassword: "",
    passwordConfirm: "",
  });

  const [show, setShow] = useState({
    new: false,
    confirm: false,
  });

    // ================= PASSWORD STRENGTH =================
  const getStrength = (password) => {
    let score = 0;

    if (password.length >= 8) score++;
    if (password.length >= 12) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    return score;
  };

  const strength = getStrength(form.newPassword);

  const strengthColor = [
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-green-400",
    "bg-green-600",
  ][strength - 1] || "bg-gray-200";

  const strengthText = [
    "Weak",
    "Fair",
    "Good",
    "Strong",
    "Very Strong",
  ][strength - 1] || "";

  const passwordsMatch =
    form.passwordConfirm &&
    form.newPassword === form.passwordConfirm;

  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!passwordsMatch) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      await api.post("/auth/resetPassword", {
        email,
        ...form,
      });

      toast.success("Password reset successfully ✔️");

      navigate("/login");

    } catch (err) {
      toast.error("Error resetting password");
    }
  };

return (
  <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-6">

    <div className="w-full max-w-[1100px] bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden flex">

      {/* ================= LEFT ================= */}
      <div className="w-1/2 bg-gray-50 flex flex-col items-center justify-center p-10">

        <img
          src="/reset.png" // حطي الصورة هنا
          alt="reset"
          className="w-[280px] mb-6"
        />

        <h2 className="text-lg font-semibold text-gray-700">
          Trackademic
        </h2>

        <p className="text-sm text-gray-400 mt-2 text-center max-w-[250px]">
          Secure your account and continue your learning journey safely.
        </p>

      </div>

      {/* ================= RIGHT ================= */}
      <div className="w-1/2 flex items-center justify-center p-10">

        {/* 👇 الفورم بتاعك زي ما هو */}
        <div className="w-full max-w-[380px]">

          <h2 className="text-2xl font-bold mb-2">
            Reset Password
          </h2>

          <p className="text-gray-500 text-sm mb-6">
            Create a new secure password for your account.
          </p>

          {/* ===== الفورم (من غير تغيير) ===== */}

          <InputField
            label="New Password"
            name="newPassword"
            value={form.newPassword}
            onChange={handleChange}
            show={show.new}
            toggle={() => setShow({ ...show, new: !show.new })}
            placeholder="Enter your new password"
          />

          <div className="h-[1px] bg-gray-200 my-6"></div>

          {/* STRENGTH */}
          <div className="mt-4">
            <div className="flex justify-between text-xs mb-2">
              <span className="text-gray-400">SECURITY LEVEL</span>
              <span className="text-green-600 font-medium">
                {strengthText}
              </span>
            </div>

            <div className="flex gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                    strength >= i ? strengthColor : "bg-gray-200"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="h-[1px] bg-gray-200 my-6"></div>

          <InputField
            label="Confirm Password"
            name="passwordConfirm"
            value={form.passwordConfirm}
            onChange={handleChange}
            show={show.confirm}
            toggle={() =>
              setShow({ ...show, confirm: !show.confirm })
            }
            placeholder="Confirm your new password"
          />

          {form.passwordConfirm && (
            <p
              className={`text-xs mt-2 ${
                passwordsMatch
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {passwordsMatch
                ? "Passwords match ✔️"
                : "Passwords do not match"}
            </p>
          )}

          <div className="h-[1px] bg-gray-200 my-6"></div>

          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-3 rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-[1.02]"
          >
            Reset Password →
          </button>

        </div>

      </div>

    </div>
  </div>
);
}

export default ResetPasswordPage;