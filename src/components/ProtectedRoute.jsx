import { Navigate } from "react-router-dom";

import { useAuth }
from "../context/AuthContext";

function ProtectedRoute({
  children,
}) {
  const {
    user,
    loading,
  } = useAuth();

  // LOADING
  if (loading) {
    return (
      <div
        className="
          min-h-screen

          flex items-center
          justify-center
        "
      >
        Loading...
      </div>
    );
  }

  // NOT LOGGED IN
  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  // ADMIN ممنوع يدخل صفحات اليوزر
  if (
    user.role === "admin" &&
    location.pathname !== "/change-password"
  ) {
    return (
      <Navigate
        to="/admin"
        replace
      />
    );
  }

  return children;
}

export default ProtectedRoute;