import { useCallback, useRef } from "react";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function useGoogleAuth() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const initialized = useRef(false);

  const handleCredentialResponse =
    useCallback(async (response) => {
      try {
        const res = await api.post(
          "/auth/google-login",
          {
            token: response.credential,
          }
        );

        login(res.data);

        navigate("/");

      } catch (err) {
        console.error(err);
      }
    }, [login, navigate]);

  const renderGoogleButton =
    useCallback((containerId) => {

      if (!window.google) return;

      const container =
        document.getElementById(containerId);

      if (!container) return;

      // مهم جدا
      container.innerHTML = "";

      // initialize مرة واحدة فقط
      if (!initialized.current) {

        window.google.accounts.id.initialize({
          client_id:
            import.meta.env
              .VITE_GOOGLE_CLIENT_ID,

          callback:
            handleCredentialResponse,
        });

        initialized.current = true;
      }

      window.google.accounts.id.renderButton(
        container,
        {
          theme: "outline",
          size: "large",
          width: 350,
          shape: "pill",
        }
      );

    }, [handleCredentialResponse]);

  return { renderGoogleButton };
}

export default useGoogleAuth;