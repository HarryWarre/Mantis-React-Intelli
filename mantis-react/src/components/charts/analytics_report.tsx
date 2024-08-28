import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import AnalyticsColChart from "./config/analytic_col_chart";

export default function AnalyticsReport() {
  return (
    <Box component={"div"}>
      <Typography variant='h6' sx={{ my: 2.5 }}>
        Analytics Report
      </Typography>

      {/* Column chart */}
      {/* <List disablePadding>
        <ListItem disableGutters alignItems='center'>
          <ListItemText>Company Finance Growth</ListItemText>
          <ListItemText>
            <b>+45.14%</b>
          </ListItemText>
        </ListItem>
        <Divider />
        <ListItem disableGutters alignItems='center'>
          <ListItemText>Company Expenses Ratio</ListItemText>
          <ListItemText>
            <b>0.58%</b>
          </ListItemText>
        </ListItem>
        <Divider />
        <ListItem disableGutters alignItems='center'>
          <ListItemText>Business Risk Cases</ListItemText>
          <ListItemText>
            <b>Low</b>
          </ListItemText>
        </ListItem>
      </List> */}

      {/* Column Chart */}
      <AnalyticsColChart />
    </Box>
  );
}
