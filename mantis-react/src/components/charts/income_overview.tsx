import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import ColChart from "./config/col_chart";

export default function IncomeOverview() {
  return (
    <Box component={"div"}>
      <Typography variant='h6' sx={{ my: 2.5 }}>
        Income Overview
      </Typography>

      <ColChart />
    </Box>
  );
}
