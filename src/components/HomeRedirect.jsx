import {
  Navigate,
} from "react-router-dom";

import {
  useAuth,
} from "../context/AuthContext";

import {
  useUserContext,
} from "../context/UserContext";

import Dashboard
from "../pages/Dashboard";

function HomeRedirect() {

  const {
    user,
    loading: authLoading,
  } = useAuth();

  const {
    userContext,
    loading: contextLoading,
  } = useUserContext();

  // =========================
  // LOADING
  // =========================
  if (
    authLoading ||
    contextLoading
  ) {

    return null;

  }

  // =========================
  // GUEST
  // =========================
  if (!user) {

    return (
      <Dashboard />
    );

  }

  // =========================
  // ADMIN
  // =========================
  if (
    user.role === "admin"
  ) {

    return (
      <Navigate
        to="/admin"
        replace
      />
    );

  }

  // =========================
  // FIRST SETUP
  // =========================
  if (
     user &&
  !userContext?.currentPhaseTitle
  ) {

    return (
      <Navigate
        to="/my-learning"
        replace
      />
    );

  }

  // =========================
  // NORMAL USER
  // =========================
  return (

    <Navigate
      to="/dashboard"
      replace
    />

  );
}

export default HomeRedirect;