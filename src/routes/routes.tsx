import config from "../config";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

type Route = {
    path : string,
    component : any,
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
  },
];

export { publicRoutes, privateRoutes };
