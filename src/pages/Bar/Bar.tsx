import { Box } from "@mui/material";
import Header from "../../layouts/components/DashboardHeader/DashboardHeader";
import BarChart from "../../components/BarChart";

const Bar: React.FC<{}> = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart isDashboard={false}/>
      </Box>
    </Box>
  );
};

export default Bar;
