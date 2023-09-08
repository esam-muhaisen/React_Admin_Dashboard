import React from "react";
import { ResponsiveChoropleth } from "@nivo/geo";
import { Box } from "@mui/material";
import { geo } from "./world_countries";
import { data } from "./data";
import { useTheme } from "@mui/material";
import Geo from "./geo";
import HeaderText from "Components/HeaderText";

const Geography = () => {
  const theme = useTheme();

  return (
    <Box>
      <HeaderText header={"Geography"} info={"Simple Geography Chart"}/>
      <Geo/>
    </Box>
  
  );
};

export default Geography;
