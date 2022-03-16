import { Navigate } from "react-router-dom";
import Dashboard from "./layouts/Dashboard";
import Login from "./pages/Login";
import PageOne from "./pages/PageOne";
import Home from "./pages/Home";
import About from "./pages/About";
import AuthLayout from "./layouts/AuthLayout";

const routes = (isAuthenticated) => [
   {
      path: "/admin",
      element: isAuthenticated ? <Dashboard /> : <Navigate to="/" />,
      children: [
         //  { path: "deliveries/ongoing", element: <OngoingDeliveries /> },
         //  { path: "dashboard/all/requests", element: <AllDeliveryRequests /> },
         //  { path: "delivery/requests/:id", element: <DeliveryRequest /> },
         //  { path: "drivers/:id/edit", element: <EditDriver /> },
         //  { path: "*", element: <Navigate to="/404" /> },
         { path: "pageone", element: <PageOne /> },
         { path: "home", element: <Home /> },
         { path: "about", element: <About /> },
      ],
   },
   // { path: "login", element: <Login /> },
   {
      path: "/",
      element: <AuthLayout />,
      children: [{ path: "", element: <Login /> }],
   },
];

export default routes;
