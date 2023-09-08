import React from 'react'
import Row1 from './Row1/Row1'
import Row2 from './Row2/Row2'
import Row3 from './Row3/Row3'
import { Button, Stack } from '@mui/material'
import DownloadingOutlinedIcon from '@mui/icons-material/DownloadingOutlined';
import HeaderText from 'Components/HeaderText'
const Dashboard = () => {
  return (
    <div>
      <Stack direction={"row"} mb={2} alignItems={"center"}>
      <HeaderText isDash={true} header={"DASHBOARD"} info={"Welcome to your dashboard"}/>
      <Button variant='contained' color='primary' sx={{display:"flex" , gap:"5px",m:"0px 0px 0px auto", textTransform:"capitalize",mb:1}}>
        <DownloadingOutlinedIcon/>
        Download Reports
      </Button>

      </Stack>
      <Row1/>
      <Row2/>
      <Row3/>
    </div>
  )
}

export default Dashboard