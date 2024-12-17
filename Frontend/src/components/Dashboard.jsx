// components/Dashboard.jsx
import { Grid, Box } from "@mui/material";
import StatsCard from "./StatsCard";
import TrafficSourceChart from "./TrafficSourceChart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PeopleIcon from "@mui/icons-material/People";
import AssignmentIcon from "@mui/icons-material/Assignment";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const Dashboard = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <StatsCard
            title="BUDGET"
            value="$24k"
            icon={<AttachMoneyIcon />}
            change={12}
            changeText="Since last month"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatsCard
            title="TOTAL CUSTOMERS"
            value="1.6k"
            icon={<PeopleIcon />}
            change={-16}
            changeText="Since last month"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatsCard
            title="TASK PROGRESS"
            value="75.5%"
            icon={<AssignmentIcon />}
            change={0}
            changeText="Since last month"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatsCard
            title="TOTAL PROFIT"
            value="$15k"
            icon={<TrendingUpIcon />}
            change={0}
            changeText="Since last month"
          />
        </Grid>
        <Grid item xs={12} md={8}>
        </Grid>
        <Grid item xs={12} md={4}>
          <TrafficSourceChart />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
