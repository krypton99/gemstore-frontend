import classNames from "classnames/bind";
import styles from "./DashboardLayout.module.scss";
import { useAuth } from "../../authenticate";
import Navbar from "../../layouts/components/DashboardNavbar";
import Sidebar from "../../layouts/components/DashboardSidebar";
import { Box } from "@mui/material";
import Header from "../../layouts/components/DashboardHeader";
import { ReactNode } from "react";


const cx = classNames.bind(styles);

const DashboardLayout: React.FC<{children : ReactNode}> = ({children}) => {
  const auth = useAuth();
  console.log(auth.user)
  return (
    <div className={cx("wrapper")}>
      <Sidebar />
      <main className={cx("content")}>
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;