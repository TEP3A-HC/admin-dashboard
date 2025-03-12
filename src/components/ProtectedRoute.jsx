import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
console.log("jwtDecode:", jwtDecode);

const ProtectedRoute = ({ children, requiredRoles }) => {
  const token = Cookies.get("auth_token");
  const userRole = Cookies.get("user_role") || "";

  if (!token) {
    console.log("No token found, redirecting to login.");
    // Redirect to login page if token is missing
    return <Navigate to="/" />;
  }

  try {
    const decodedToken = jwtDecode(token);
    console.log("Decoded token:", decodedToken);

    // Check if token is expired
    const isTokenExpired = decodedToken.exp * 1000 < Date.now();
    console.log("Is token expired:", isTokenExpired);

    if (isTokenExpired) {
      console.log("Token expired, redirecting to login.");
      Cookies.remove("auth_token"); // Clear expired token
      Cookies.remove("user_roles");
      return <Navigate to="/" />;
    }

    // Role validation
    console.log("Required roles:", requiredRoles);
    console.log("User roles from cookies:", userRole);

    // Check if user has required roles
    if (requiredRoles && !requiredRoles.includes(userRole)) {
      console.log("User lacks required roles, redirecting to unauthorized.");
      return <Navigate to="/unauthorized" />;
    }

    return children; // Render the protected component if all checks pass
  } catch (error) {
    console.error("Error decoding token:", error, token);
    Cookies.remove("auth_token"); // Remove invalid token
    Cookies.remove("user_roles");
    return <Navigate to="/" />;
  }
};

export default ProtectedRoute;
