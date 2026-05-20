import {
  Navigate,
} from "react-router-dom";

import { useAuth }
from "../context/AuthContext";
import Dashboard from "../pages/Dashboard";

function HomeRedirect() {

  const { user } =
    useAuth();

  // guest
  if (!user) {
    return (
      <Dashboard />
    );
  }

  // admin
  if (user.role === "admin") {
    return (
      <Navigate
        to="/admin"
        replace
      />
    );
  }

  // normal user
  return (
    <Navigate
      to="/dashboard"
      replace
    />
  );
}

export default HomeRedirect;