import React from "react";
//import { Link } from 'react-router-dom';
// import { Bell } from "react-bootstrap-icons";

import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
// import AddToPhotosOutlinedIcon from '@mui/icons-material/AddToPhotosOutlined';
// import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Menu,
  MenuItem,
  Typography,
  Button,
  Avatar,
  Divider,
  Badge,
  ListItemIcon,
} from "@mui/material";

import userimg from "../../../assets/images/users/user.jpg";

const Header = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

   // Sample notification data
   const notificationsData = [
    { id: 1, title: "🚀 Word Adventure Awaits", description: "Discover Hidden Puzzles Quickly!", time: "4m" },
    { id: 2, title: "📅 Instagram", description: "", time: "1h" },
  ];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // 4
  const [anchorEl4, setAnchorEl4] = React.useState(null);

  const handleClick4 = (event) => {
    setAnchorEl4(event.currentTarget);
  };

  const handleClose4 = () => {
    setAnchorEl4(null);
  };

  // 5
  const [anchorEl5, setAnchorEl5] = React.useState(null);

  // const handleClick5 = (event) => {
  //   setAnchorEl5(event.currentTarget);
  // };

  const handleClose5 = () => {
    setAnchorEl5(null);
  };

  return (
    <AppBar sx={props.sx} elevation={0} className={props.customClass}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={props.toggleMobileSidebar}
          sx={{
            display: {
              lg: "none",
              xs: "inline",
            },
          }}
        >
          <MenuOutlinedIcon width="20" height="20" />
        </IconButton>
        {/* <IconButton
          aria-label="menu"
          color="inherit"
          aria-controls="dd-menu"
          aria-haspopup="true"
          onClick={handleClick5}
        >
          <AddToPhotosOutlinedIcon />
        </IconButton> */}
        <Menu
          id="dd-menu"
          anchorEl={anchorEl5}
          keepMounted
          open={Boolean(anchorEl5)}
          onClose={handleClose5}
          anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
          transformOrigin={{ horizontal: "left", vertical: "top" }}
          sx={{
            "& .MuiMenu-paper": {
              width: "250px",
              right: 0,
              top: "70px !important",
            },
          }}
        >
          <MenuItem onClick={handleClose5}>
            <Avatar
              sx={{
                width: "35px",
                height: "35px",
              }}
            />
            <Box
              sx={{
                ml: 2,
              }}
            >
              New account
            </Box>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose5}>
            <Avatar
              sx={{
                width: "35px",
                height: "35px",
              }}
            />
            <Box
              sx={{
                ml: 2,
              }}
            >
              New Page
            </Box>
          </MenuItem>
          <MenuItem onClick={handleClose5}>
            <Avatar
              sx={{
                width: "35px",
                height: "35px",
              }}
            />
            <Box
              sx={{
                ml: 2,
              }}
            >
              New Component
            </Box>
          </MenuItem>
        </Menu>
        <Box flexGrow={1} />

        {/* ------------------------------------------- */}
        {/* Notifications Dropdown */}
        {/* ------------------------------------------- */}
        <IconButton color="inherit" onClick={handleClick}>
        <Badge badgeContent={notificationsData.length} color="error">
          <NotificationsNoneOutlinedIcon width="20" height="20" />
        </Badge>
      </IconButton>
      
      <Menu
        id="notification-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)} // ✅ Fix applied
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: 320,
            maxHeight: 400,
            borderRadius: 3,
            boxShadow: 3,
          },
        }}
      >
        <Divider />
        {notificationsData.map((notif) => (
          <MenuItem key={notif.id} onClick={handleClose} sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
            <Typography variant="body1" fontWeight="bold">{notif.title}</Typography>
            <Typography variant="body2" color="textSecondary">{notif.description}</Typography>
            <Typography variant="caption" color="gray" sx={{ marginLeft: "auto" }}>{notif.time}</Typography>
          </MenuItem>
        ))}
        <Divider />
        <MenuItem onClick={handleClose} sx={{ justifyContent: "center" }}>
          <Typography variant="body2" color="primary">View all notifications</Typography>
        </MenuItem>
      </Menu>
        {/* ------------------------------------------- */}
        {/* End Notifications Dropdown */}
        {/* ------------------------------------------- */}
        {/* ------------------------------------------- */}
        {/* Profile Dropdown */}
        {/* ------------------------------------------- */}
        <Box
          sx={{
            width: "1px",
            backgroundColor: "rgba(0,0,0,0.1)",
            height: "25px",
            ml: 1,
          }}
        ></Box>
        <Button
          aria-label="menu"
          color="inherit"
          aria-controls="profile-menu"
          aria-haspopup="true"
          onClick={handleClick4}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Avatar
              src={userimg}
              alt={userimg}
              sx={{
                width: "30px",
                height: "30px",
              }}
            />
          </Box>
        </Button>
        <Menu
          id="profile-menu"
          anchorEl={anchorEl4}
          keepMounted
          open={Boolean(anchorEl4)}
          onClose={handleClose4}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          sx={{
            "& .MuiMenu-paper": {
              width: "250px",
              right: 0,
              top: "70px !important",
            },
          }}
        >
          <MenuItem onClick={handleClose4}>Browse events</MenuItem>
          <MenuItem onClick={handleClose4}>Manage my events</MenuItem>
          <Divider />
          <MenuItem onClick={handleClose4}>Tickets (0)</MenuItem>
          <MenuItem onClick={handleClose4}>Liked</MenuItem>
          <MenuItem onClick={handleClose4}>Following</MenuItem>
          <MenuItem onClick={handleClose4}>Interests</MenuItem>
          <Divider />
          <MenuItem onClick={handleClose4}>
            <ListItemIcon>
              <SettingsOutlinedIcon fontSize="small" />
            </ListItemIcon>
            Account settings
          </MenuItem>
          <MenuItem onClick={handleClose4}>
            <ListItemIcon>
              <LogoutOutlinedIcon fontSize="small" />
            </ListItemIcon>
            Log out
          </MenuItem>
        </Menu>

      </Toolbar>
    </AppBar>
  );
};

export default Header;
