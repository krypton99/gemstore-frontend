import classNames from "classnames/bind";
import styles from "./Dashboard.module.scss";
import { Box } from "@mui/material";
import Header from "../../layouts/components/DashboardHeader/DashboardHeader";


const cx = classNames.bind(styles);

const Dashboard: React.FC<{}> = () => {
  return (
    <Box m="20px">
      <Header title="DASHBOARD" subtitle="Welcome to dashboard!" />
    </Box>
  );
};

export default Dashboard;
