import React from 'react'
import { Box, useTheme } from '@mui/material'
import { ResponsiveLine } from '@nivo/line'
import Data from 'Pages/DataLine';
import HeaderText from 'Components/HeaderText';





const Line = () => {
  const theme = useTheme();
  return (
    <Box>
        <HeaderText header={"Line Chart"} info={"Simple Line Chart"}/>
        <Data/>
    </Box>
   
  )
}

export default Line