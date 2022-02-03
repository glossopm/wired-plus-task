import { Box } from "@mui/material";
import * as React from "react";
import logo from "../assets/wp-logo.png";

const Logo = () => {
  return (
    <Box
      component="img"
      sx={{
        width: 200,
      }}
      alt="Your logo."
      src={logo}
    />
  );
};

export default Logo;
