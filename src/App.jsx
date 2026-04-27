import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Verify from "./pages/Verify";
//import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/verify" element={<Verify />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            {/* <Dashboard /> */}
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;