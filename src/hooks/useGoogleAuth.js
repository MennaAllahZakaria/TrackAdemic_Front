import { useCallback } from "react";

import api from "../services/api";

import { useAuth }
from "../context/AuthContext";

import {
  useNavigate,
} from "react-router-dom";

// IMPORTANT
// global initialize
let googleInitialized = false;

function useGoogleAuth() {

  const { login } =
    useAuth();

  const navigate =
    useNavigate();

  // =========================
  // GOOGLE RESPONSE
  // =========================
  const handleCredentialResponse =
    useCallback(

      async (response) => {

        try {

          const res =
            await api.post(
              "/auth/google-login",
              {
                token:
                  response.credential,
              }
            );

          // SAVE USER
          login(res.data);

          // IMPORTANT
          // let HomeRedirect decide
          navigate("/", {
            replace: true,
          });

        } catch (err) {

          console.error(
            "Google login error:",
            err
          );

        }
      },

      [login, navigate]
    );

  // =========================
  // RENDER BUTTON
  // =========================
  const renderGoogleButton =
    useCallback(

      (containerId) => {

        // GOOGLE NOT READY
        if (!window.google) {
          return;
        }

        const container =
          document.getElementById(
            containerId
          );

        // NO ELEMENT
        if (!container) {
          return;
        }

        // IMPORTANT
        // clear old renders
        container.innerHTML = "";

        // =========================
        // INITIALIZE ONCE ONLY
        // =========================
        if (!googleInitialized) {

          window.google.accounts.id.initialize({

            client_id:
              import.meta.env
                .VITE_GOOGLE_CLIENT_ID,

            callback:
              handleCredentialResponse,

          });

          googleInitialized = true;
        }

        // =========================
        // RENDER BUTTON
        // =========================
        window.google.accounts.id.renderButton(

          container,

          {
            theme: "outline",

            size: "large",

            width: 350,

            shape: "pill",
          }

        );

      },

      [handleCredentialResponse]
    );

  return {
    renderGoogleButton,
  };
}

export default useGoogleAuth;

