import Sidebar
from "../components/Sidebar";

import Topbar
from "../components/Topbar";

import Footer
from "../components/Footer";

import { useAuth }
from "../context/AuthContext";

function MainLayout({
  children,
}) {

  const { token } =
    useAuth();

  return (

    <div
      className="
        min-h-screen
        bg-gray-100
      "
    >

      {/* SIDEBAR */}
      {token && <Sidebar />}

      {/* MAIN CONTENT */}
      <div
        className={`
          flex flex-col
          min-h-screen

          ${
            token
              ? "sm:ml-64"
              : ""
          }
        `}
      >

        {/* TOPBAR */}
        {token && <Topbar />}

        {/* PAGE CONTENT */}
        <main
          className={`
            flex-1

            px-4 py-5
            md:px-6 md:py-6
            lg:px-8 lg:py-8

            ${
              token
                ? "pt-20 sm:pt-6"
                : "pt-6"
            }
          `}
        >

          {children}

        </main>

        {/* FOOTER */}
        <Footer />

      </div>

    </div>
  );
}

export default MainLayout;