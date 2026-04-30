import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function useUserContext(options = {}) {
  const {
    redirectIfEmpty = false, 
    redirectTo = "/onboarding",
  } = options;

  const [context, setContext] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const fetchContext = async () => {
    try {
      const res = await api.get("/user-context");

      if (res.data.data) {
        setContext(res.data.data);
      } else {
        setContext(null);

        if (redirectIfEmpty) {
          navigate(redirectTo);
        }
      }

    } catch (err) {
      if (err.response?.data?.message === "User context not found") {
        setContext(null);

        if (redirectIfEmpty) {
          navigate(redirectTo);
        }
      } else {
        setError(err);
        console.error("UserContext Error:", err);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContext();
  }, []);

  return {
    context,
    loading,
    error,
    refetch: fetchContext,
  };
}