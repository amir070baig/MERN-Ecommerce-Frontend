// src/components/AdminRoute.jsx
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AdminRoute = () => {
  const { user } = useSelector((state) => state.auth);

  // If no user or not admin → redirect
  if (!user || !user.isAdmin) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />; // render child routes if admin
};

export default AdminRoute;
