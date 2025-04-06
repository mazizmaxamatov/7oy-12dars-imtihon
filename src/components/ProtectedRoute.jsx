import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const isAuth = localStorage.getItem("auth");

  if (!isAuth) {
    navigate("/signin");
    return null;
  }

  return children;
};

export default ProtectedRoute;
