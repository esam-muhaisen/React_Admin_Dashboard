import React from 'react'
import {Typography, useTheme } from '@mui/material'

const Text = ({text}) => {
    const theme = useTheme()

  return (
    <Typography
    color={theme.palette.secondary.main}
    sx={{padding:"30px 30px 0 30px"}}
    variant='h6'
    fontWeight={"600"}
   >
       {text}
   </Typography>
  )
}

export default Text