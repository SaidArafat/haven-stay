import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/rootLayout";
import Home from "./components/home";
import NotFound from "./layouts/notFound";
import Signup from "./pages/signUp";
import SignIn from "./pages/signIn";
import Testimonials from "./components/testimonials";
import Rooms from "./pages/rooms/rooms";
import Facilities from "./components/facilities";

const App = () => {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "/signup", element: <Signup /> },
        { path: "/signin", element: <SignIn /> },
        { path: "/reviews", element: <Testimonials /> },
        { path: "/rooms", element: <Rooms /> },
        { path: "/rooms", element: <Rooms /> },
        { path: "/facilities", element: <Facilities /> },
      ],
    },
  ]);
  return <RouterProvider router={routers} />;
};

export default App;
