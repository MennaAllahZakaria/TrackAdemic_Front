import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";
import PasswordInput from "./PasswordInput";
import api from "../../services/api";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import useGoogleAuth from "../../hooks/useGoogleAuth";

function LoginForm() {
  const { register, handleSubmit } = useForm();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { renderGoogleButton } = useGoogleAuth();

  // Render Google button once GSI script is ready
  useEffect(() => {
    if (window.google) {
      renderGoogleButton("google-login-btn");
    }
  }, [renderGoogleButton]);

  const onSubmit = async (data) => {
    try {
      const res = await api.post("/auth/login", data);
      login(res.data);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="w-[420px]">

      <h2 className="text-2xl font-semibold mb-2">
        Login to your account
      </h2>

      <p className="text-gray-500 mb-6">
        Welcome back 👋
      </p>

      {/* ===== GOOGLE BUTTON ===== */}
      <div id="google-login-btn" className="flex justify-center mb-4"></div>

      {/* Divider */}
      <div className="flex items-center gap-4 my-4">
        <div className="flex-1 h-px bg-gray-200"></div>
        <span className="text-gray-400 text-xs">OR LOGIN WITH EMAIL</span>
        <div className="flex-1 h-px bg-gray-200"></div>
      </div>

      {/* ===== EMAIL FORM ===== */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <Input
          icon="ri-mail-line"
          placeholder="Email"
          {...register("email")}
        />

        <PasswordInput
          register={register("password")}
          placeholder="Password"
        />

        <p className="text-sm text-gray-500">
          Forget your password?{" "}
          <a onClick={() => navigate("/forgot-password")} className="text-blue-600 cursor-pointer">
            Reset it here
          </a>.
        </p>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full py-3.5 rounded-full text-white font-semibold
          bg-gradient-to-r from-blue-600 to-blue-400"
          onClick={(e) => e.stopPropagation()}
        >
          Login
        </button>

        <p className="text-center text-sm mt-4">
          Didn't have an account?{" "}
          <a onClick={() => navigate("/signup")} className="text-blue-600 cursor-pointer">
            Sign Up
          </a>.
        </p>

      </form>
    </div>
  );
}

export default LoginForm;