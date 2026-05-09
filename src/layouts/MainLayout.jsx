import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";

function MainLayout({ children }) {
  return (
    <div
      className="
        flex
        min-h-screen
        bg-gray-100
      "
    >

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div
        className="
          flex-1
          flex flex-col
          min-w-0
        "
      >

        {/* TOPBAR */}
        <Topbar />

        {/* PAGE CONTENT */}
        <main
          className="
            flex-1
            overflow-y-auto

            pt-20 sm:pt-0

            p-4
            sm:p-6
            lg:p-8
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