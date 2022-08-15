import React from "react";
import { Navigate } from "react-router-dom";

export function isLogout({ children }) {
    const access_token = localStorage.access_token;

    if (access_token) return <Navigate to="/" replace />;
    else return children;
}
