// components/TrafficSourceChart.jsx
import { Paper, Typography, Box } from "@mui/material";
import { PieChart } from "@mui/x-charts";

const TrafficSourceChart = () => {
  const data = [
    { value: 45, label: "Direct" },
    { value: 30, label: "Social" },
    { value: 25, label: "Referral" },
  ];

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6">Traffic Source</Typography>
      <PieChart series={[{ data }]} height={300} />
    </Paper>
  );
};

export default TrafficSourceChart;
