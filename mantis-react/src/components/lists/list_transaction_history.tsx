import { Gif, GifBox } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  Typography,
} from "@mui/material";
import React from "react";
import ListItemTransAction from "./list_item_transaction";

export default function TransacionHistory() {
  return (
    <Box component={"div"}>
      <Typography variant='h6' sx={{ my: 2.5 }}>
        Transaction History
      </Typography>

      <List disablePadding sx={{ backgroundColor: "#ffff" }}>
        <ListItemTransAction />
        <Divider />
        <ListItemTransAction />
        <Divider />
        <ListItemTransAction />
      </List>
    </Box>
  );
}
