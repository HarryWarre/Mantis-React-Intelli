import React from "react";
import { useMemo } from "react";
import { data } from "./dataOrder";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { Box, Typography } from "@mui/material";

export default function RecentOrderTable() {
  const columns = useMemo(
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
        size: 100,
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
    paginationDisplayMode: "pages",
    //   mrtTheme
    muiTableBodyRowProps: { hover: false },

    muiTableContainerProps: { sx: { minHeight: "320px", maxHeight: "320px" } },
  });

  return (
    <Box component={"div"}>
      <Typography variant='h6' sx={{ my: 2.5 }}>
        Recent Order
      </Typography>
      <MaterialReactTable table={orderTable} />
    </Box>
  );
}
