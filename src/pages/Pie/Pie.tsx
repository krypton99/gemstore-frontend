import { Box } from "@mui/material";
import Header from "../../layouts/components/DashboardHeader/DashboardHeader";
import PieChart from "../../components/PieChart";

const Pie: React.FC<{}> = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
