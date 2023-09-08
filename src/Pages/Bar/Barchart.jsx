import { Box } from "@mui/material";
import HeaderText from "Components/HeaderText";
import Bardata from "Pages/Bardata";
import React from "react";

const Bar = () => {
  return (
    <Box>
    <HeaderText header={"Bar Chart"} info={"The minimum wage in Germany, France and Spain (EUR/month)"}/>

      <Bardata />
</Box>

  )
};

export default Bar;
