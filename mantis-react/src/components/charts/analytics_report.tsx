import { Box, Typography } from "@mui/material";
import React from "react";
import AnalyticsColChart from "./config/analytic_col_chart";

export default function AnalyticsReport() {
  return (
    <Box component={"div"}>
      <Typography variant='h6' sx={{ my: 2.5 }}>
        Analytics Report
      </Typography>

      <AnalyticsColChart />
    </Box>
  );
}
