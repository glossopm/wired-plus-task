import * as React from "react";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Logo from "./Logo";

const Header = () => {
  return (
    <AppBar position="static">
      <Logo />
      <Typography variant="h4" component="h1" gutterBottom>
        Header
      </Typography>
    </AppBar>
  );
};

export default Header;
