import React, { useState } from "react";
import { useLocation } from "react-router";
import { Link, NavLink } from "react-router-dom";
import {
  Box,
  Drawer,
  useMediaQuery,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { SidebarWidth } from "../../../assets/global/Theme-variable";
import LogoIcon from "../Logo/LogoIcon";
import Menuitems from "./data"; // Ensure it contains children if needed

const Sidebar = (props) => {
  const { pathname } = useLocation();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const [openSubmenus, setOpenSubmenus] = useState({});

  const handleToggle = (index) => {
    setOpenSubmenus((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const SidebarContent = (
    <Box sx={{ p: 3, height: "calc(100vh - 40px)" }}>
      <Link to="/">
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <LogoIcon />
        </Box>
      </Link>

      <List sx={{ mt: 4 }}>
        {Menuitems.map((item, index) => (
          <React.Fragment key={item.title}>
            <ListItem
              button
              component={item.children ? "div" : NavLink}
              to={!item.children ? item.href : undefined}
              selected={pathname === item.href}
              onClick={() => item.children && handleToggle(index)}
              sx={{
                mb: 1,
                ...(pathname === item.href && {
                  color: "white",
                  backgroundColor: (theme) => `${theme.palette.primary.main}!important`,
                }),
              }}
            >
              <ListItemIcon sx={{ ...(pathname === item.href && { color: "white" }) }}>
                {React.createElement(item.icon, { width: 20, height: 20 })}
              </ListItemIcon>
              <ListItemText primary={item.title} />
              {item.children && (openSubmenus[index] ? <ExpandLess /> : <ExpandMore />)}
            </ListItem>

            {/* Display Children (Nested Menu) */}
            {item.children && (
              <Collapse in={openSubmenus[index]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding sx={{ pl: 4 }}>
                  {item.children.map((child) => (
                    <ListItem
                      key={child.title}
                      button
                      component={NavLink}
                      to={child.href}
                      selected={pathname === child.href}
                      sx={{
                        mb: 1,
                        ...(pathname === child.href && {
                          color: "white",
                          backgroundColor: (theme) => `${theme.palette.primary.light}!important`,
                        }),
                      }}
                    >
                      <ListItemText primary={child.title} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open={props.isSidebarOpen}
        variant="persistent"
        PaperProps={{
          sx: { width: SidebarWidth },
        }}
      >
        {SidebarContent}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      open={props.isMobileSidebarOpen}
      onClose={props.onSidebarClose}
      variant="temporary"
      PaperProps={{
        sx: { width: SidebarWidth },
      }}
    >
      {SidebarContent}
    </Drawer>
  );
};

export default Sidebar;
