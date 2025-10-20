import React, { use } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate } from "react-router";
import Loading from "../pages/Loading/Loading";

const PrivetRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  if(loading){
    return <Loading />
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate to={"/auth/login"} />
};

export default PrivetRoute;
