import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import img_avatar from "../../assets/imgs/avatar.avif"; // Avatar Img
import { Edit, LogoutRounded, RemoveRedEye } from "@mui/icons-material";

export default function NavbarDashBoard() {
  const [anchorEl, setanchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setanchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setanchorEl(null);
  };

  return (
    <AppBar position='static' color='transparent'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <Box display={"flex"} justifyContent={"flex-end"}>
              <Tooltip title='Open setting'>
                <Box>
                  <Button
                    onClick={handleClick}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup='true'
                    aria-expanded={open ? "true" : undefined}
                    sx={{ p: 0 }}
                    startIcon={<Avatar alt='avatar' src={img_avatar}></Avatar>}>
                    <Typography
                      textTransform={"capitalize"}
                      variant='h6'
                      color={"black"}
                      sx={{ px: 2 }}>
                      John Doe
                    </Typography>
                  </Button>
                </Box>
              </Tooltip>
            </Box>
          </Box>
        </Toolbar>

        {/* Menu options */}
        <Menu
          anchorEl={anchorEl}
          id='account-menu'
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 5,
              },
              "::before": {
                conent: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "backgroud.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
          {/*  Short Describe account   */}

          <Box
            display={"flex"}
            // alignItems={"flex-start"}
            justifyContent={"center"}
            alignContent={"center"}
            sx={{ px: 1, py: 1, mx: 1 }}>
            <Avatar src={img_avatar} />
            <Box component={"div"}>
              <Typography gutterBottom variant='body1'>
                JWT User
              </Typography>
              <Typography color={"gray"} gutterBottom variant='caption'>
                UI/UX Designer
              </Typography>
            </Box>
          </Box>
          <Divider />

          {/* </MenuItem> */}
          <MenuItem>
            <ListItemIcon>
              <Edit color='inherit' fontSize='small' />
            </ListItemIcon>
            <Typography color={"inherit"} variant='body1'>
              Edit Profile
            </Typography>
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
              <RemoveRedEye color='inherit' fontSize='small' />
            </ListItemIcon>
            <Typography color={"inherit"} variant='body1'>
              View Profile
            </Typography>
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
              <LogoutRounded color='inherit' fontSize='small' />
            </ListItemIcon>
            <Typography color={"inherit"} variant='body1'>
              Log out
            </Typography>
          </MenuItem>
        </Menu>
      </Container>
    </AppBar>
  );
}
