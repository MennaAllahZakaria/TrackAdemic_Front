function Sidebar() {
  return (
    <div className="w-64 bg-white p-6 shadow-sm">

      <h2 className="text-blue-600 font-bold mb-8">
        Trackademic
      </h2>

      <nav className="space-y-4 text-gray-600">

        <p className="flex items-center gap-2 cursor-pointer">
          <i className="ri-home-line"></i> Home
        </p>

        <p className="flex items-center gap-2">
          <i className="ri-dashboard-line"></i> Dashboard
        </p>

        <p className="flex items-center gap-2 text-blue-600 bg-blue-50 p-2 rounded-lg">
          <i className="ri-user-line"></i> Tutor
        </p>

        <p className="flex items-center gap-2">
          <i className="ri-book-line"></i> My Courses
        </p>

      </nav>

    </div>
  );
}

export default Sidebar;