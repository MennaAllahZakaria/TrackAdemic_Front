import { useRef } from "react";

function OTPInput({ value, onChange, length = 6 }) {
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const val = e.target.value.replace(/[^0-9]/g, "");

    if (!val) return;

    const newValue =
      value.substring(0, index) +
      val +
      value.substring(index + 1);

    onChange(newValue);

    // 👉 move next
    if (index < length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (!value[index] && index > 0) {
        inputsRef.current[index - 1].focus();
      }

      const newValue =
        value.substring(0, index) +
        "" +
        value.substring(index + 1);

      onChange(newValue);
    }
  };

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text").slice(0, length);

    if (!/^\d+$/.test(paste)) return;

    onChange(paste);

    paste.split("").forEach((char, i) => {
      if (inputsRef.current[i]) {
        inputsRef.current[i].value = char;
      }
    });
  };

  return (
    <div
      className="flex gap-3 justify-center"
      onPaste={handlePaste}
    >
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          ref={(el) => (inputsRef.current[i] = el)}
          maxLength={1}
          value={value[i] || ""}
          onChange={(e) => handleChange(e, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          className="w-12 h-12 text-center text-lg font-semibold bg-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      ))}
    </div>
  );
}

export default OTPInput;