import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Unidades from "../pages/unidades/page";
import QuemSomos from "../pages/quem-somos/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/unidades",
    element: <Unidades />,
  },
  {
    path: "/quem-somos",
    element: <QuemSomos />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
