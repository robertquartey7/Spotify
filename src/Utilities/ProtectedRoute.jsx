import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

export const ProtectedRoute = ({ children }) => {
  const token = Cookies.get("spotify_api_token");

  if (!token) {
    return <Navigate to="/login"></Navigate>;
  }

  return children;
};
