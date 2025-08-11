import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children, authUser }) => {
  return authUser ? children : <Navigate></Navigate>;
};
