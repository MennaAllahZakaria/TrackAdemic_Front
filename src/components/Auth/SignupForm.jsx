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
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const { login } = useAuth();
  const onSubmit = async (data) => {
    setServerError("");

    try {
      const res = await api.post("/auth/signup", data);
      console.log(res.data);
      navigate("/verify", {
        state: { email: data.email },
      });
    } catch (err) {
      setServerError(
        err.response?.data?.message || "Something went wrong"
      );
    }
  };

  const navigate = useNavigate(); 

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="w-[420px]">
      
      <h2 className="text-2xl font-semibold mb-2">
        Create your account
      </h2>

      <p className="text-gray-500 mb-6">
        Start your learning journey today.
      </p>

      {/* Google */}
      <button className="w-full flex items-center justify-center gap-2 bg-gray-100 py-3.5 rounded-full mb-4">
        <img src="../../assets/google-icon.svg" className="w-5 h-5" />
        Continue with Google
      </button>

      {/* Divider */}
      <div className="flex items-center gap-4 my-4">
        <div className="flex-1 h-px bg-gray-200"></div>
        <span className="text-gray-400 text-xs">
          OR SIGN UP WITH EMAIL
        </span>
        <div className="flex-1 h-px bg-gray-200"></div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <Input
          icon="ri-user-line"
          placeholder="First Name"
          {...register("firstName")}
          error={errors.firstName?.message}
        />

        <Input
          icon="ri-user-line"
          placeholder="Last Name"
          {...register("lastName")}
          error={errors.lastName?.message}
        />

        <Input
          icon="ri-mail-line"
          placeholder="Email Address"
          {...register("email")}
          error={errors.email?.message}
        />

        <PasswordInput
          register={register("password")}
          placeholder="Password"
          error={errors.password?.message}
        />

        <PasswordInput
          register={register("confirmPassword")}
          placeholder="Confirm Password"
          error={errors.confirmPassword?.message}
        />

        {serverError && (
          <p className="text-red-600 text-sm">{serverError}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 rounded-full text-white font-semibold
          bg-gradient-to-r from-blue-600 to-blue-400
          shadow-[0_8px_20px_rgba(37,99,235,0.3)]
          transition"
        >
          {isSubmitting ? "Creating..." : "Create Account"}
        </button>
      </form>

      <p className="text-center text-sm mt-4">
        Already have an account?{" "}
        <span className="text-blue-600 cursor-pointer" onClick={goToLogin}>
          Sign In
        </span>
      </p>

    </div>
  );
}

export default SignupForm;