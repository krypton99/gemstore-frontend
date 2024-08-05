import { ReactNode } from "react";
import config from "../config";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Team from "../pages/Team";

type Route = {
    path : string,
    component : React.FC,
    layout? : React.FC<{children : ReactNode}>
}

const publicRoutes : Route[] = [
  {
    path: config.routes.login,
    component: Login,
  },
];

const privateRoutes : Route[] = [
  {
    path: config.routes.dashboard,
    component: Dashboard,
    layout: DashboardLayout,
  },
  {
    path: config.routes.team,
    component: Team,
    layout: DashboardLayout,
  },
];


export { publicRoutes, privateRoutes };
