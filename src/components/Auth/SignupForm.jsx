import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "../../utils/validation/signupSchema";

import Input from "./Input";
import PasswordInput from "./PasswordInput";

import api from "../../services/api";

import { useState } from "react";

import { useAuth } from "../../context/AuthContext";

import { useNavigate } from "react-router-dom";

function SignupForm() {
  const [serverError, setServerError] =
    useState("");

  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm({
    resolver:
      zodResolver(
        signupSchema
      ),
  });

  const { login } =
    useAuth();

  const navigate =
    useNavigate();

  const onSubmit =
    async (data) => {
      setServerError("");

      try {
        const res =
          await api.post(
            "/auth/signup",
            data
          );

        console.log(
          res.data
        );

        navigate(
          "/verify",
          {
            state: {
              email:
                data.email,
            },
          }
        );

      } catch (err) {
        setServerError(
          err.response?.data
            ?.message ||
            "Something went wrong"
        );
      }
    };

  const goToLogin =
    () => {
      navigate("/login");
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
        Create your account
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
        Start your learning journey today.
      </p>

      {/* GOOGLE */}
      <button
        className="
          w-full

          flex items-center justify-center

          gap-2

          bg-gray-100
          hover:bg-gray-200

          py-3.5

          rounded-full

          transition-all duration-300

          text-sm
          sm:text-base
        "
      >

        <img
          src="/google-logo.svg"
          className="
            w-5 h-5

            shrink-0
          "
        />

        <span className="truncate">
          Continue with Google
        </span>

      </button>

      {/* DIVIDER */}
      <div
        className="
          flex items-center

          gap-3
          sm:gap-4

          my-5
        "
      >

        <div className="flex-1 h-px bg-gray-200"></div>

        <span
          className="
            text-gray-400

            text-[10px]
            sm:text-xs

            whitespace-nowrap
          "
        >
          OR SIGN UP WITH EMAIL
        </span>

        <div className="flex-1 h-px bg-gray-200"></div>

      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit(
          onSubmit
        )}
        className="
          space-y-4
        "
      >

        <Input
          icon="ri-user-line"
          placeholder="First Name"
          {...register(
            "firstName"
          )}
          error={
            errors.firstName
              ?.message
          }
        />

        <Input
          icon="ri-user-line"
          placeholder="Last Name"
          {...register(
            "lastName"
          )}
          error={
            errors.lastName
              ?.message
          }
        />

        <Input
          icon="ri-mail-line"
          placeholder="Email Address"
          {...register(
            "email"
          )}
          error={
            errors.email
              ?.message
          }
        />

        <PasswordInput
          register={register(
            "password"
          )}
          placeholder="Password"
          error={
            errors.password
              ?.message
          }
        />

        <PasswordInput
          register={register(
            "confirmPassword"
          )}
          placeholder="Confirm Password"
          error={
            errors
              .confirmPassword
              ?.message
          }
        />

        {/* ERROR */}
        {serverError && (
          <p
            className="
              text-red-600

              text-sm

              break-words
            "
          >
            {serverError}
          </p>
        )}

        {/* BUTTON */}
        <button
          type="submit"
          disabled={
            isSubmitting
          }
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

            shadow-[0_8px_20px_rgba(37,99,235,0.3)]

            transition-all duration-300

            hover:scale-[1.01]

            disabled:opacity-50
          "
        >
          {isSubmitting
            ? "Creating..."
            : "Create Account"}
        </button>

      </form>

      {/* LOGIN */}
      <p
        className="
          text-center

          text-sm

          mt-5
        "
      >
        Already have an account?{" "}

        <span
          className="
            text-blue-600

            cursor-pointer

            font-medium
          "
          onClick={
            goToLogin
          }
        >
          Sign In
        </span>

      </p>

    </div>
  );
}

export default SignupForm;