import React from "react";
import { useMemo } from "react";
import { data } from "./dataOrder";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { Box, createTheme, ThemeProvider, Typography } from "@mui/material";
import { yellow } from "@mui/material/colors";

export type OrderData = {
  trackingNo: string;
  productName: string;
  totalOrder: number;
  status: "Pending" | "Approved" | "Rejected"; // Assuming possible status values
  totalAmount: string;
};

const theme = createTheme({
  palette: {
    secondary: yellow,
  },
});

export default function RecentOrderTable() {
  const columns = useMemo<MRT_ColumnDef<OrderData>[]>(
    () => [
      {
        accessorKey: "trackingNo", //access nested data with dot notation
        header: "Tracking No",
        muiTableBodyCellProps: {
          sx: {
            color: "gray",
          },
        },
        size: 100,
      },
      {
        accessorKey: "productName",
        header: "Product Name",
        size: 200,
      },
      {
        accessorKey: "totalOrder", //normal accessorKey
        header: "Total Order",
        size: 100,
      },
      {
        accessorKey: "status",
        header: "Status",
        size: 200,
        // custom conditional format and styling
        Cell: ({ cell }) => (
          <Box
            component='span'
            sx={(theme) => ({
              backgroundColor:
                cell.getValue<string>() === "Rejected"
                  ? theme.palette.error.light
                  : cell.getValue<string>() === "Pending"
                  ? theme.palette.warning.light
                  : theme.palette.success.light,
              borderRadius: "0.25rem",
              color: "#fff",
              maxWidth: "9ch",
              p: "0.25rem",
            })}>
            {cell.getValue<number>()?.toLocaleString?.("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </Box>
        ),
      },
      {
        accessorKey: "totalAmount",
        header: "Total Amount",
        size: 100,
      },
    ],
    []
  );

  const orderTable = useMaterialReactTable({
    columns,
    data,
    enableTopToolbar: false,
    // enableBottomToolbar: false,
    enableColumnActions: false,
    // enableColumnFilters: false,
    // enablePagination: false,
    // enableSorting: false,
    enableStickyHeader: true, // Sticky header
    paginationDisplayMode: "pages",
    //   mrtTheme
    muiTableBodyRowProps: { hover: false },

    muiTableContainerProps: { sx: { minHeight: "340px", maxHeight: "340px" } },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box component={"div"}>
        <Typography variant='h6' sx={{ my: 2.5 }}>
          Recent Order
        </Typography>
        <MaterialReactTable table={orderTable} />
      </Box>
    </ThemeProvider>
  );
}
