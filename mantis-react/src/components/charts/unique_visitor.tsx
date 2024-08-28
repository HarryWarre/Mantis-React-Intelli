import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import AreaChart from "./config/month_visitor_area_chart";
import WeekAreaVistor from "./config/week_visitor_area_chart";

export default function UniqueVisitor() {
  const [date, setDate] = React.useState(false); // Month Chart is default show
  const handleWeekChange = () => {
    setDate(true);
  };
  const handleMonthChange = () => {
    setDate(false);
  };
  return (
    <Box component={"div"}>
      <Box display={"flex"} justifyContent={"space-between"} sx={{ my: 2.5 }}>
        <Typography variant='h6'>Unique Visitor</Typography>
        <Stack direction={"row"} spacing={2}>
          <Button
            onClick={handleMonthChange}
            variant={date ? "text" : "outlined"}
            size='small'
            sx={{ textTransform: "capitalize" }}>
            Month
          </Button>
          <Button
            onClick={handleWeekChange}
            variant={date ? "outlined" : "text"}
            size='small'
            sx={{ textTransform: "capitalize" }}>
            Week
          </Button>
        </Stack>
      </Box>
      {date ? <WeekAreaVistor /> : <AreaChart />}
      {/* <AreaChart />
      <WeekAreaVistor /> */}
    </Box>
  );
}
