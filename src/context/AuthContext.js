import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });
  const navigate = useNavigate();

  const API_URL = "https://cdr-backend-murex.vercel.app/api/auth";;

  // ================= SIGNUP =================
  const signUp = async (email, password) => {
    try {
      const res = await axios.post(`${API_URL}/signup`, { email, password });
      localStorage.setItem("user", JSON.stringify(res.data));
      setUser(res.data);
      return { error: null };
    } catch (err) {
      return {
        error: { message: err.response?.data?.error || "Signup failed" },
      };
    }
  };

  // ================= SIGNIN =================
const signIn = async (email, password) => {
  try {
    const res = await axios.post(`${API_URL}/login`, { email, password });
    localStorage.setItem("user", JSON.stringify(res.data));
    setUser(res.data); // res.data includes { email, token, role }
    return { error: null };
  } catch (err) {
    return { error: { message: err.response?.data?.error || "Login failed" } };
  }
};

  // ================= LOGOUT =================
  const logout = () => {
    localStorage.removeItem("user"); // remove JWT & user info
    setUser(null); // clear state
    navigate("/login"); // redirect to login page
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);