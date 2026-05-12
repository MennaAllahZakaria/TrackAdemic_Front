import { Navigate }
from "react-router-dom";

import { useAuth }
from "../../context/AuthContext";

function AdminRoute({
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

  // USER ممنوع يدخل الادمن
  if (
    user.role !== "admin"
  ) {
    return (
      <Navigate
        to="/"
        replace
      />
    );
  }

  return children;
}

export default AdminRoute;