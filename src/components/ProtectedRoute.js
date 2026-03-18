import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children, adminOnly = false }) {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" replace />; // not logged in

  if (adminOnly && user.role !== "admin") return <Navigate to="/" replace />; // not admin

  return children;
}