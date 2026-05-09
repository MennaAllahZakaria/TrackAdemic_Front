import { useEffect, useCallback } from "react";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function useGoogleAuth() {
  const { login } = useAuth();
  const navigate = useNavigate();

  // Called by Google after the user picks an account
  const handleCredentialResponse = useCallback(
    async (response) => {
      try {
        const res = await api.post("/auth/google-login", {
          token: response.credential,
        });

        login(res.data);
        navigate("/");
      } catch (err) {
        console.error("Google login failed", err);
        alert(err.response?.data?.message || "Google login failed");
      }
    },
    [login, navigate]
  );

  // Render the Google button into a container element
  const renderGoogleButton = useCallback(
    (containerId) => {
      if (!window.google) return;

      window.google.accounts.id.initialize({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse,
      });

      window.google.accounts.id.renderButton(
        document.getElementById(containerId),
        {
          theme: "outline",
          size: "large",
          width: 380,
          shape: "pill",
          text: "continue_with",
        }
      );
    },
    [handleCredentialResponse]
  );

  return { renderGoogleButton };
}

export default useGoogleAuth;
