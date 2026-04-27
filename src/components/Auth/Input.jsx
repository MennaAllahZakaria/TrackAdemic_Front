function Input({ icon, error, ...props }) {
  return (
    <div className="space-y-1">
      <div className="relative">

        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <i className={icon}></i>
        </span>

        <input
          {...props}
          className={`w-full pl-11 pr-4 py-3.5 rounded-xl bg-gray-100 text-sm
          outline-none transition
          focus:bg-white focus:ring-2 focus:ring-blue-500
          hover:bg-gray-200
          ${error ? "border border-red-500" : ""}`}
        />
      </div>

      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
}

export default Input;