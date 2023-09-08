import React from 'react'
import { Box } from '@mui/material'

import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { columns, rows } from './data'
import HeaderText from 'Components/HeaderText'


const Invouces = () => {
  return (
    <Box sx={{ height: 500, width: "98%" , mx:"auto"}}>
          <HeaderText header={"INVOICES"} info={"List of Invoice Balances"}/>

    <DataGrid
    checkboxSelection
    slots={{ toolbar: GridToolbar }}
      rows={rows}
      // @ts-ignore
      columns={columns}
    />
  </Box>
  )
}

export default Invouces