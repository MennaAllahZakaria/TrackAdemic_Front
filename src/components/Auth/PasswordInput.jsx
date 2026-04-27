import { useState } from "react";

function PasswordInput({ register, error, placeholder }) {
  const [show, setShow] = useState(false);

  return (
    <div className="space-y-1">
      <div className="relative">

        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <i className="ri-lock-line"></i>
        </span>

        <input
          type={show ? "text" : "password"}
          {...register}
          placeholder={placeholder}
          className="w-full pl-11 pr-10 py-3.5 rounded-xl bg-gray-100
          focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <span
          onClick={() => setShow(!show)}
          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
        >
          <i className={show ? "ri-eye-off-line" : "ri-eye-line"}></i>
        </span>
      </div>

      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
}

export default PasswordInput;