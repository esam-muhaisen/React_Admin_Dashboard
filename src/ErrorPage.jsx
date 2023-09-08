import { Typography, useTheme } from '@mui/material'
import React from 'react'

const ErrorPage = () => {
    const theme = useTheme();
  return (
    <Typography variant='h2' textAlign={"center"} color={theme.palette.error.main}>This is not design yet</Typography>
  )
}

export default ErrorPage