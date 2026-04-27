function Topbar() {
  return (
    <div className="h-16 bg-white flex items-center justify-between px-6 shadow-sm">

      <input
        placeholder="Search your library..."
        className="bg-gray-100 px-4 py-2 rounded-lg w-80 outline-none"
      />

      <div className="flex items-center gap-4">
        <i className="ri-notification-3-line text-xl"></i>

        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>

    </div>
  );
}

export default Topbar;