import React from "react";
import {
  Box,
  AppBar,
  Typography,
  Avatar,
  Toolbar,
  IconButton,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";

const Footer: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        marginTop: -8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        borderTop: "0.1px solid #666666",
        paddingTop: 1.5,
        paddingBottom: 2,
      }}
    >

      <div>
        <IconButton sx={{ color: "white" }}>
          <InstagramIcon />
        </IconButton>
        <IconButton sx={{ color: "white" }}>
          <EmailIcon />
        </IconButton>
        <IconButton sx={{ color: "white" }}>
          <LanguageIcon />
        </IconButton>
      </div>
    </AppBar>
  );
};

export default Footer;