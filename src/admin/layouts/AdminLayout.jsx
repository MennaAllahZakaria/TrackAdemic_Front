import { Outlet } from "react-router-dom";

import AdminSidebar from "../components/AdminSidebar";
import AdminTopbar from "../components/AdminTopbar";

function AdminLayout() {
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
      <div
        className="
          hidden lg:block

          w-[280px]
          shrink-0
        "
      >
        <AdminSidebar />
      </div>

      {/* MAIN */}
      <div
        className="
          flex-1

          flex flex-col

          min-w-0
        "
      >

        {/* TOPBAR */}
        <AdminTopbar />

        {/* PAGE CONTENT */}
        <main
          className="
            flex-1

            overflow-y-auto

            p-4
            sm:p-6
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

            <Outlet />

          </div>

        </main>

      </div>

    </div>
  );
}

export default AdminLayout;