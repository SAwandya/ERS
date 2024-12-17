// components/SalesChart.jsx
import { Paper, Typography, Box } from "@mui/material";
import { BarChart } from "@mui/x-charts";

const SalesChart = () => {
  const data = [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20];

  return (
    <Paper sx={{ p: 3 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography variant="h6">Sales</Typography>
        <Box>Sync</Box>
      </Box>
      <BarChart
        series={[{ data }]}
        height={300}
        xAxis={[{ data: Array.from({ length: 12 }, (_, i) => i + 1) }]}
      />
    </Paper>
  );
};

export default SalesChart;
