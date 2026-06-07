import { Outlet } from "react-router-dom";
import { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import AdminTopbar from "../components/AdminTopbar";

function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
      className="
        h-screen
        bg-gray-100
        flex
        overflow-hidden
      "
    >
      {/* SIDEBAR */}
      <AdminSidebar 
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* MAIN CONTENT */}
      <div
        className="
          flex-1
          flex flex-col
          min-w-0
          overflow-hidden
        "
      >
        {/* TOPBAR */}
        <AdminTopbar 
          onMenuClick={() => setSidebarOpen(true)}
        />

        {/* PAGE CONTENT */}
        <main
          className="
            flex-1
            overflow-y-auto
            p-3
            sm:p-4
            md:p-6
            lg:p-8
          "
        >
          <div
            className="
              max-w-[1600px]
              mx-auto
              w-full
            "
          >
            {children || <Outlet />}
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
