import { useForm } from "react-hook-form";

import Input from "./Input";
import PasswordInput from "./PasswordInput";

import api from "../../services/api";

import { useAuth } from "../../context/AuthContext";

import { useNavigate } from "react-router-dom";

import { useState } from "react";

function LoginForm() {
  const {
    register,
    handleSubmit,
  } = useForm();

  const { login } =
    useAuth();

  const navigate =
    useNavigate();

  const [error, setError] =
    useState("");

  const onSubmit =
    async (data) => {
      try {
        setError("");

        const res =
          await api.post(
            "/auth/login",
            data
          );

        login(res.data);

        navigate("/");

      } catch (err) {
        setError(
          err.response?.data
            ?.message ||
            "Login failed"
        );
      }
    };

  return (
    <div
      className="
        w-full
        max-w-[420px]

        mx-auto
      "
    >

      {/* TITLE */}
      <h2
        className="
          text-2xl
          sm:text-3xl

          font-semibold

          mb-2

          text-center
          sm:text-left
        "
      >
        Login to your account
      </h2>

      {/* DESC */}
      <p
        className="
          text-gray-500

          mb-6

          text-sm
          sm:text-base

          text-center
          sm:text-left
        "
      >
        Welcome back 👋
      </p>

      {/* FORM */}
      <form
        onSubmit={handleSubmit(
          onSubmit
        )}
        className="
          space-y-4
        "
      >

        {/* EMAIL */}
        <Input
          icon="ri-mail-line"
          placeholder="Email"
          {...register("email")}
        />

        {/* PASSWORD */}
        <PasswordInput
          register={register(
            "password"
          )}
          placeholder="Password"
        />

        {/* RESET */}
        <p
          className="
            text-sm

            text-gray-500

            leading-relaxed
          "
        >
          Forgot your password?{" "}

          <button
            type="button"
            onClick={() =>
              navigate(
                "/forgot-password"
              )
            }
            className="
              text-blue-600

              hover:text-blue-700

              font-medium

              transition-colors
            "
          >
            Reset it here
          </button>

          .

        </p>

        {/* ERROR */}
        {error && (
          <p
            className="
              text-red-500

              text-sm

              break-words
            "
          >
            {error}
          </p>
        )}

        {/* BUTTON */}
        <button
          type="submit"
          className="
            w-full

            py-3.5

            rounded-full

            text-white

            text-sm
            sm:text-base

            font-semibold

            bg-gradient-to-r
            from-blue-600
            to-blue-400

            hover:scale-[1.01]

            transition-all duration-300

            shadow-[0_8px_20px_rgba(37,99,235,0.25)]
          "
        >
          Login
        </button>

        {/* SIGNUP */}
        <p
          className="
            text-center

            text-sm

            mt-4

            leading-relaxed
          "
        >
          Don&apos;t have an account?{" "}

          <button
            type="button"
            onClick={() =>
              navigate(
                "/signup"
              )
            }
            className="
              text-blue-600

              hover:text-blue-700

              font-medium

              transition-colors
            "
          >
            Sign Up
          </button>

          .

        </p>

      </form>

    </div>
  );
}

export default LoginForm;