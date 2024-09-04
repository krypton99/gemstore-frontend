import { Box } from "@mui/material";
import Header from "../../layouts/components/DashboardHeader/DashboardHeader";
import LineChart from "../../components/LineChart";

const Line: React.FC<{}> = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;