import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import React from "react";
import SalesReportChart from "./config/sales_report_col_chart";

export default function SalesReport() {
  const [date, setDate] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setDate(event.target.value);
  };

  return (
    <Box component={"div"}>
      <Box display={"flex"} justifyContent={"space-between"} sx={{ mt: 2.5 }}>
        <Typography variant='h6'>Sales Report</Typography>

        <FormControl sx={{ m: 1 }}>
          <Select
            value={date}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            size='small'>
            <MenuItem value=''>
              <em>Today</em>
            </MenuItem>

            <MenuItem value={"Week"}>This month</MenuItem>
            <MenuItem value={"Month"}>This year</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <SalesReportChart />
    </Box>
  );
}
