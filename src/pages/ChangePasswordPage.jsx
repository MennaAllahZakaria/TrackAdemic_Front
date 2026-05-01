import MainLayout from "../layouts/MainLayout";
import { useState, useEffect } from "react";
import api from "../services/api";
import { toast } from "react-hot-toast";
import { Eye, EyeOff, Shield } from "lucide-react";

function InputField({ label, name, value, onChange, show, toggle , placeholder}) {
  return (
    <div className="mb-6">
      <p className="text-sm font-medium mb-2">{label}</p>

      <div className="relative">
        <input
          type={show ? "text" : "password"}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full bg-gray-100 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition"
          placeholder={placeholder}
        />

        <div
          onClick={toggle}
          className="absolute right-3 top-3 cursor-pointer text-gray-500"
        >
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </div>
      </div>
    </div>
  );
}

function ChangePasswordPage() {
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    passwordConfirm: "",
  });

  const [show, setShow] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
        const newErrors = {};

        if (!form.currentPassword) {
            newErrors.currentPassword = "Required";
        }

        if (form.newPassword.length < 8) {
            newErrors.newPassword = "Minimum 8 characters";
        }

        if (!/[A-Z]/.test(form.newPassword)) {
            newErrors.newPassword = "Add at least one uppercase letter";
        }

        if (!/[0-9]/.test(form.newPassword)) {
            newErrors.newPassword = "Add at least one number";
        }

        if (form.passwordConfirm !== form.newPassword) {
            newErrors.passwordConfirm = "Passwords do not match";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
        };

    const isValid =
            form.currentPassword &&
            form.newPassword &&
            form.passwordConfirm &&
            Object.keys(errors).length === 0;

  // ================= HANDLE =================
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
        validate();
    }, [form]);

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

  // ================= SUBMIT =================
  const handleSubmit = async () => {
    if (!passwordsMatch) {
      toast.error("Passwords do not match");
      return;
    }
    if (!validate()) {
            triggerShake();
            focusFirstError();
            return;
        }

    try {
      setLoading(true);

      await api.put("/auth/changePassword", form);

      toast.success("Password updated successfully ✔️");

      setForm({
        currentPassword: "",
        newPassword: "",
        passwordConfirm: "",
      });

    } catch (err) {
      toast.error(err.response?.data?.message || "Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="max-w-[1200px] mx-auto">

        {/* HEADER */}
        <div className="mb-10">
          <p className="text-sm text-gray-400">
            Settings › <span className="text-blue-600">Security</span>
          </p>

          <h1 className="text-3xl font-bold mt-3">
            Change Password
          </h1>

          <p className="text-gray-500 mt-2">
            Use a strong and unique password.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">

          {/* ================= LEFT ================= */}
          <div className="col-span-2 bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">

            {/* CURRENT */}
            <InputField
              label="Current Password"
              name="currentPassword"
              value={form.currentPassword}
              onChange={handleChange}
              show={show.current}
              toggle={() => setShow({ ...show, current: !show.current })}
              placeholder="Enter your current password"
            />

            <p className="text-sm text-gray-500">
              Forget your password? <a href="/reset-password" className="text-blue-600" >Reset it here</a>.
            </p>

            <div className="h-[1px] bg-gray-200 my-6"></div>

            {/* NEW */}
            <InputField
              label="New Password"
              name="newPassword"
              value={form.newPassword}
              onChange={handleChange}
              show={show.new}
              toggle={() => setShow({ ...show, new: !show.new })}
              placeholder="Enter your new password"
            />

            {/*  STRENGTH */}
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

            {/* CONFIRM */}
            <div className="mt-6">
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

              {/* MATCH */}
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
            </div>

            {/* BUTTONS */}
            <div className="flex gap-4 mt-8">

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-[1.02]"
              >
                {loading ? "Updating..." : "Update Password"}
              </button>

              <button className="bg-gray-200 px-6 py-3 rounded-full">
                Cancel
              </button>

            </div>

          </div>

          {/* ================= RIGHT ================= */}
          <div className="space-y-6">

            {/* BEST PRACTICES */}
            <div className="bg-gradient-to-br from-purple-200 to-purple-300 p-6 rounded-2xl shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Shield size={18} />
                <h3 className="font-semibold">
                  Password Best Practices
                </h3>
              </div>

              <ul className="text-sm space-y-2">
                <li>✔ Minimum 12 characters</li>
                <li>✔ Mix letters, numbers, symbols</li>
                <li>✔ Avoid personal info</li>
              </ul>
            </div>

            {/* 2FA */}
            <div className="bg-green-200 p-6 rounded-2xl shadow-sm">
              <h3 className="font-semibold mb-2">
                Two-Factor Auth
              </h3>
              <p className="text-sm">
                Add extra protection to your account.
              </p>
            </div>

            {/* STATUS */}
            <div className="bg-gray-800 text-white p-6 rounded-2xl shadow-sm">
              <p className="text-xs opacity-70">
                SECURITY STATUS
              </p>
              <p className="mt-2 font-semibold">
                Your account is well-guarded
              </p>
            </div>

          </div>

        </div>
      </div>
    </MainLayout>
  );
}

export default ChangePasswordPage;