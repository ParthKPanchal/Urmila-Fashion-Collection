import { useRoutes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Product from "../pages/Product";
import AdminProduct from "../pages/adminproduct";
import AdminLayout from "../layout/AdminLayout";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/ContactUs";
import AdminDashboard from "../pages/AdminDashboard";

function Router() {
  return useRoutes([
    // User Layout
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/products", element: <Product /> },
        { path: "/about", element: <AboutUs /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
    // Login Page
    { path: "/login", element: <Login /> },

    // Register Page
    { path: "/register", element: <Register /> },

    // Admin Layout
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        { path: "/admin", element: <AdminDashboard /> },
        { path: "/admin/products", element: <AdminProduct /> },
      ],
    },

    // Not Found Page
    { path: "*", element: <NotFound /> },
  ]);
}
export default Router;
