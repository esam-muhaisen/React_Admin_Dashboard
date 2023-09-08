import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { rows } from "./data";
import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import HeaderText from "Components/HeaderText";

const Team = () => {
  const theme = useTheme();
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 33,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    { field: "age", headerName: "Age", align: "center", headerAlign: "center" },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              textAlign: "center",
              borderRadius: "3px",
              width: "99px",
              p: "5px",
              backgroundColor:
                access === "Admin"
                  ? theme.palette.primary.dark
                  : access === "Manager"
                  ? theme.palette.secondary.dark
                  : "#3da58a",
            
            }}
          >
            {access === "Admin" && <AdminPanelSettingsOutlined sx={{color:"#fff"}}  fontSize="small" />}
            {access === "Manager" && <SecurityOutlined sx={{color:"#fff"}}  fontSize="small" />}
            {access === "User" && <LockOpenOutlined sx={{color:"#fff"}} fontSize="small" />}
            <Typography sx={{fontSize:"13px",color:"#fff"}}>{access}</Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box sx={{ height: 500, width: "98%" , mx:"auto"}}>
            <HeaderText header={"TEAM"} info={"Managing the Team Members"}/>

      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
};

export default Team;
