import * as React from "react";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Logo from "./Logo";
import segmentData from "../data/segment-data.json";
import { Toolbar } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Logo />
        <Typography variant="h4" component="h1" gutterBottom>
          {segmentData.segmentName}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
