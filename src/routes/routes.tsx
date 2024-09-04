import { ReactNode } from "react";
import config from "../config";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Team from "../pages/Team";
import Contact from "../pages/Contact";
import Invoices from "../pages/Invoices";
import CreateUser from "../pages/CreateUser";
import Calendar from "../components/Calendar/Calendar";
import FAQ from "../pages/FAQ";
import Bar from "../pages/Bar/Bar";
import Pie from "../pages/Pie";
import Line from "../pages/Line";
import Geography from "../pages/Geo/Geo";

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
    path: config.routes.team.home,
    component: Team,
    layout: DashboardLayout,
  },
  {
    path: config.routes.contact,
    component: Contact,
    layout: DashboardLayout,
  },
  {
    path: config.routes.invoice,
    component: Invoices,
    layout: DashboardLayout,
  },
  {
    path: config.routes.team.createUser,
    component: CreateUser,
    layout: DashboardLayout,
  },
  {
    path: config.routes.calendar,
    component: Calendar,
    layout: DashboardLayout,
  },
  {
    path: config.routes.faq,
    component: FAQ,
    layout: DashboardLayout,
  },
  {
    path: config.routes.bar,
    component: Bar,
    layout: DashboardLayout,
  },
  {
    path: config.routes.pie,
    component: Pie,
    layout: DashboardLayout,
  },
  {
    path: config.routes.line,
    component: Line,
    layout: DashboardLayout,
  },
  {
    path: config.routes.geo,
    component: Geography,
    layout: DashboardLayout,
  },
];


export { publicRoutes, privateRoutes };
