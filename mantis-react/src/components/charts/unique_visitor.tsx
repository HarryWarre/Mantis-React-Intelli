import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

export default function UniqueVisitor() {
  return (
    <Box component={"div"}>
      <Box display={"flex"} justifyContent={"space-between"} sx={{ my: 2.5 }}>
        <Typography variant='h6'>Unique Visitor</Typography>
        <Stack direction={"row"} spacing={2}>
          <Button variant='outlined' size='small'>
            Month
          </Button>
          <Button variant='outlined' size='small'>
            Week
          </Button>
        </Stack>
      </Box>
      
    </Box>
  );
}
