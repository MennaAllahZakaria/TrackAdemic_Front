import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";

function MainLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar />

        <div className="p-8 overflow-y-auto">
          {children}
        </div>
        <Footer/>
      </div>

    </div>
  );
}

export default MainLayout;