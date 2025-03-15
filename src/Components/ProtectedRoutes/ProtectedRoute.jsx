import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/", { replace: true });
      location.reload();
    }
  }, [token, navigate]);

  return <>{children}</>;
};

export default ProtectedRoute;
