import { Box, Paper, Stack, Typography, useTheme } from '@mui/material'
import Piechart from 'Pages/Pie/piechart'
import React from 'react'
import Text from './text'
import Bardata from 'Pages/Bardata'
import Geo from 'Pages/Geography/geo'

const Row3 = () => {
    const theme = useTheme()
  return (
    <Stack direction={"row"} gap={1} mt={2} flexWrap={"wrap"}>
        <Paper sx={{flexGrow:1  ,width:"33%",minWidth:"200px"}}>
            <Text text={"Compaign"}/>
        <Piechart isDashboard={true}/>
        <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          $48,352 revenue generated
        </Typography>
        <Typography variant="body2" px={0.7} pb={3} align="center">
          Includes extra misc expenditures and costs
        </Typography>
        </Paper>
        <Paper sx={{flexGrow:1  ,width:"33%",minWidth:"200px"}}>
        <Text text={"Sales Quantity"}/>
        <Bardata isDashboard={true}/>
        </Paper>
        <Paper sx={{flexGrow:1  ,width:"33%",minWidth:"200px"}}>
            <Geo isDashboard={true}/>
        </Paper>
    </Stack>
  )
}

export default Row3