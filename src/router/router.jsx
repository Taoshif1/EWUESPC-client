import { createBrowserRouter } from "react-router";
import { MainLayout } from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Events from "../pages/Events";
import Tournament from "../pages/Tournament";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "events",
        Component: Events,
      },
      {
        path: "tournaments",
        Component: Tournament,
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
