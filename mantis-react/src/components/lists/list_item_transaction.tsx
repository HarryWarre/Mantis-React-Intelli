import { Gif, Redeem, Textsms } from "@mui/icons-material";
import {
  Avatar,
  Box,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  Typography,
} from "@mui/material";
import { green } from "@mui/material/colors";
import React from "react";

export default function ListItemTransAction() {
  return (
    <>
      <ListItemButton sx={{ p: 2 }}>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: "#E6F4FF" }} sizes='small'>
            <Textsms color='primary' />
          </Avatar>
        </ListItemAvatar>
        <Box display={"flex"} justifyContent={"space-between"} width='100%'>
          <Box component={"div"}>
            <Typography>Order #002434</Typography>
            <Typography variant='subtitle2' color={"GrayText"}>
              Today, 2:00 AM
            </Typography>
          </Box>
          <Box display={"flex"} flexDirection={"column"} alignItems={"end"}>
            <Typography>+ $1,430</Typography>
            <Typography variant='subtitle2' color={"GrayText"}>
              78%
            </Typography>
          </Box>
        </Box>
      </ListItemButton>
    </>
  );
}
