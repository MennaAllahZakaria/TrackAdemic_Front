import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProgress = async () => {
    try {
      const res = await api.get("/progress/me");
      setProgress(res.data.data);
    } catch (err) {
      if (err.response?.data?.message === "No progress found") {
        setProgress({
          completedTopics: [],
          overallProgress: 0,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProgress();
  }, []);

  return (
    <ProgressContext.Provider
      value={{ progress, setProgress, fetchProgress, loading }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => useContext(ProgressContext);