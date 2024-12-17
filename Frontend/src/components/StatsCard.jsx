// components/StatsCard.jsx
import { Paper, Box, Typography, Icon } from "@mui/material";

const StatsCard = ({ title, value, icon, change, changeText }) => {
  return (
    <Paper sx={{ p: 3, height: "100%" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography variant="subtitle2" color="textSecondary">
            {title}
          </Typography>
          <Typography variant="h4" sx={{ my: 1 }}>
            {value}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {changeText}
            <Typography
              component="span"
              color={change >= 0 ? "success.main" : "error.main"}
            >
              {change}%
            </Typography>
          </Typography>
        </Box>
        <Icon sx={{ backgroundColor: "primary.light", p: 1, borderRadius: 2 }}>
          {icon}
        </Icon>
      </Box>
    </Paper>
  );
};

export default StatsCard;
