import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const menuItems: string[] = ["Dashboard"];

const Navbar: React.FC = () => {
  const profileItems = ["Logout"];
  const [anchorElMenu, setAnchorElMenu] = React.useState<null | HTMLElement>(
    null
  );
  const [isTop, setIsTop] = useState(true);

  const [anchorElProfile, setAnchorElProfile] =
    React.useState<null | HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY < 5;
      if (top !== isTop) {
        setIsTop(top);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isTop]);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElMenu(event.currentTarget);
  };

  const handleOpenProfile = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElProfile(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorElMenu(null);
  };

  const handleCloseProfile = () => {
    setAnchorElProfile(null);
  };

  return (
    <AppBar
      position="fixed"
      elevation={isTop ? 0 : 1}
      sx={{
        backgroundColor: isTop ? "transparent" : "#212121",
        borderBottom: "1px solid #666666",
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <IconButton
            size="large"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElMenu}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            sx={{ opacity : "0.9" }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElMenu)}
            onClose={handleCloseMenu}
          >
            {menuItems.map((page) => (
              <MenuItem key={page} onClick={handleCloseMenu}  sx={{mt: -1, mb: -1}}>
                <Link
                  to={`/${page.toLowerCase()}`}
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  {page}
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        <Box>
          <Tooltip title="Profile">
            <IconButton
              onClick={handleOpenProfile}
              sx={{color: "white"}}
            >
              <AccountCircleIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          sx={{ mt: "30px", opacity : "0.9" }}
          id="menu-appbar"
          anchorEl={anchorElProfile}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElProfile)}
          onClose={handleCloseProfile}
        >
          {profileItems.map((page) => (
            <MenuItem key={page} onClick={handleCloseProfile} sx={{ mt: -1, mb: -1 }}>
              <Link
                to={`/${page === "Logout" ? 'login' : page.toLowerCase()}`}
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
                >
                {page}
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;