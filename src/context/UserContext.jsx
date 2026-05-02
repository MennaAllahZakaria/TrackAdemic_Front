import { createContext, useContext, useState, useEffect } from "react";
import api from "../services/api";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userContext, setUserContext] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUserContext = async () => {
    try {
      const res = await api.get("/user-context");

      setUserContext(res.data.data);

      // 👉 cache
      localStorage.setItem(
        "userContext",
        JSON.stringify(res.data.data)
      );

    } catch (err) {
      console.error("UserContext error", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const cached = localStorage.getItem("userContext");

    if (cached) {
      setUserContext(JSON.parse(cached));
      setLoading(false);
    } else {
      fetchUserContext();
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        userContext,
        setUserContext,
        loading,
        refreshUserContext: fetchUserContext,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);