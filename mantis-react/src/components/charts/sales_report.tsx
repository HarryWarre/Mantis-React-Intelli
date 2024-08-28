import {
  Box,
  FormControl,
  InputLabel,
  NativeSelect,
  Typography,
} from "@mui/material";
import React from "react";
import SalesReportChart from "./config/sales_report_col_chart";

export default function SalesReport() {
  return (
    <Box component={"div"}>
      <Box display={"flex"} justifyContent={"space-between"} sx={{ my: 2.5 }}>
        <Typography variant='h6'>Sales Report</Typography>

        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id='date-select'></InputLabel>
          <NativeSelect
            variant='filled'
            defaultValue={"Day"}
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}>
            <option value={"Day"}>Day</option>
            <option value={"Month"}>Month</option>
            <option value={"Year"}>Year</option>
          </NativeSelect>
        </FormControl>
      </Box>
      <SalesReportChart />
    </Box>
  );
}
