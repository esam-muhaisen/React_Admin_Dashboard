import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'

const HeaderText = ({header , info,isDash = false}) => {
    const theme = useTheme();
  return (
    <Box sx={{mb: isDash?0:2}}>
        <Typography variant='h5' sx={{color:theme.palette.info.light,fontWeight:"bold"}}>
            {header}
        </Typography>
        <Typography variant='body1'>
            {info}
        </Typography>
    </Box>
  )
}

export default HeaderText