import { useForm } from "react-hook-form";
import Input from "./Input";
import PasswordInput from "./PasswordInput";
import api from "../../services/api";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function LoginForm() {
  const { register, handleSubmit } = useForm();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const onSubmit = async (data) => {
    try {
      const res = await api.post("/auth/login", data);

      login(res.data);
      navigate("/dashboard");
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

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button className="w-full py-3.5 rounded-full text-white font-semibold
        bg-gradient-to-r from-blue-600 to-blue-400">
          Login
        </button>
      </form>

    </div>
  );
}

export default LoginForm;