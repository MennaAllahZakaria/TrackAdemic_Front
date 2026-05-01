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

export default InputField;