function FieldCard({ icon, title, desc, selected, onClick, color }) {
  return (
    <div
      onClick={onClick}
      className={`relative p-5 rounded-xl cursor-pointer transition border
      ${selected 
        ? "border-blue-500 bg-blue-50" 
        : "bg-white hover:shadow-sm border-gray-200"}`}
    >
      {/* check icon */}
      {selected && (
        <div className="absolute top-3 right-3 text-blue-600">
          <i className="ri-checkbox-circle-fill"></i>
        </div>
      )}

      {/* icon */}
      <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 ${color}`}>
        <i className={`${icon} text-lg`}></i>
      </div>

      <h3 className="font-semibold">{title}</h3>

      <p className="text-gray-500 text-sm mt-1">
        {desc}
      </p>
    </div>
  );
}

export default FieldCard;