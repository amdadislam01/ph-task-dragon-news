import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import CategoryNews from "../pages/CategoryNews/CategoryNews";
import ErrorPage from "../pages/Error/ErrorPage";
import Login from "../pages/SignIn/Login";
import Register from "../pages/SignIn/Register";
import AuthLayout from "../layout/AuthLayout";
import NewsDetails from "../pages/NewsDetails/NewsDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/category/:id",
        element: <CategoryNews />,
        loader: () => fetch("/news.json"),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
  {
    path: '/newsDetails/:id',
    element: <NewsDetails />,
     loader: () => fetch("/news.json"),
  }
]);
