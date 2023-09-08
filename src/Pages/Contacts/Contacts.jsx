import { Box } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import React from 'react'
import { columns, rows } from './data'
import HeaderText from 'Components/HeaderText'

const Contacts = () => {
  return (
    
    <Box sx={{ height: 500, width: "98%" , mx:"auto"}}>
  <HeaderText header={"CONTACTS"} info={"List of Contacts for Future Reference"}/>

    <DataGrid
    slots={{ toolbar: GridToolbar }}
      rows={rows}
      // @ts-ignore
      columns={columns}
    />
  </Box>
  )
}

export default Contacts