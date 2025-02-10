import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  return loggedInUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
