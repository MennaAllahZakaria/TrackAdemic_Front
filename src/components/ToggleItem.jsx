import { useState } from "react";

function ToggleItem({ title, desc, defaultOn = false }) {
  const [on, setOn] = useState(defaultOn);

  return (
    <div className="flex justify-between items-center">

      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-gray-500">{desc}</p>
      </div>

      <button
        onClick={() => setOn(!on)}
        className={`w-12 h-6 rounded-full flex items-center px-1 transition
        ${on ? "bg-blue-600" : "bg-gray-300"}`}
      >
        <div
          className={`w-4 h-4 bg-white rounded-full transition
          ${on ? "translate-x-6" : ""}`}
        />
      </button>

    </div>
  );
}

export default ToggleItem;