import React from 'react'
import { ResponsivePie } from '@nivo/pie'
import { Box } from '@mui/material'
import { useTheme } from "@mui/material";
import Piechart from './piechart';
import HeaderText from 'Components/HeaderText';


const data = [
  {
    "id": "rust",
    "label": "rust",
    "value": 232,
    "color": "hsl(40, 70%, 50%)"
  },
  {
    "id": "Go",
    "label": "Go",
    "value": 396,
    "color": "hsl(340, 70%, 50%)"
  },
  {
    "id": "hack",
    "label": "hack",
    "value": 71,
    "color": "hsl(321, 70%, 50%)"
  },
  {
    "id": "erlang",
    "label": "erlang",
    "value": 345,
    "color": "hsl(291, 70%, 50%)"
  },
  {
    "id": "make",
    "label": "make",
    "value": 60,
    "color": "hsl(46, 70%, 50%)"
  }
]

const Pie = () => {
  const theme = useTheme();

  return (
    <Box>
      <HeaderText header={"Pie Chart"} info={"Simple Pie Chart"}/>
      <Piechart/>

    </Box>
  )
}

export default Pie