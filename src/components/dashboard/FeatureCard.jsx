function FeatureCard({ icon, title, desc, color }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm 
                    hover:shadow-md hover:-translate-y-1 
                    transition duration-300">

      <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${color}`}>
        <i className={`${icon} text-lg`}></i>
      </div>

      <h3 className="font-semibold text-lg mb-2">
        {title}
      </h3>

      <p className="text-gray-500 text-sm">
        {desc}
      </p>

    </div>
  );
}

export default FeatureCard;