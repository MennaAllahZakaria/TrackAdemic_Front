import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";

function MainLayout({ children }) {

  return (
    <div
      className="
        min-h-screen
        bg-gray-100
      "
    >

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div
        className="
          flex flex-col
          min-h-screen

          sm:ml-64
        "
      >

        {/* TOPBAR */}
        <Topbar />

        {/* PAGE CONTENT */}
        <main
          className="
            flex-1

            pt-20 sm:pt-6

            px-4 py-5
            md:px-6 md:py-6
            lg:px-8 lg:py-8
          "
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