import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { rows } from './Data';
import { Box, Typography, useTheme } from '@mui/material';
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";

function ManageTeam() {
  const theme = useTheme();
  const columns = [
    { 
        field: 'id',
        headerName: 'ID',
        align: 'center', 
        headerAlign: 'center', 
        width: 33,
    },
    { 
        field: 'Name', 
        headerName: 'Name', 
        flex: 1, 
        align: 'center', 
        headerAlign: 'center',
    },
    { 
        field: 'Email', 
        headerName: 'Email', 
        flex: 1, 
        align: 'center', 
        headerAlign: 'center',
    },
    { 
        field: 'Age', 
        headerName: 'Age', 
        align: 'center', 
        headerAlign: 'center', 
        width: 33,
    },
    { 
        field: 'Phone', 
        headerName: 'Phone', 
        flex: 1, 
        align: 'center', 
        headerAlign: 'center',
    },
    { 
        field: 'Access', 
        headerName: 'Access', 
        flex: 1, 
        align: 'center', 
        headerAlign: 'center',
        renderCell: ({ row: { Access } }) => {
          return (
            <Box
              sx={{
                p: "5px",
                width: "99px",
                borderRadius: "3px",
                textAlign: "center",
                display: "flex",
                margin: "auto",
                mt: "9px",
                justifyContent: "center",
                backgroundColor:
                  Access === "Admin"
                    ? theme.palette.primary.dark
                    : Access === "Manager"
                    ? theme.palette.secondary.dark
                    : "#3da58a",
              }}
            >
              {Access === "Admin" && (
                <AdminPanelSettingsOutlined
                  sx={{ color: "#fff" }}
                  fontSize="small"
                />
              )}
              {Access === "Manager" && (
                <SecurityOutlined sx={{ color: "#fff" }} fontSize="small" />
              )}
              {Access === "User" && (
                <LockOpenOutlined sx={{ color: "#fff" }} fontSize="small" />
              )}
              <Typography sx={{ ml: 1 }}>{Access}</Typography>
            </Box>
          );
        },
    },
  ];

  return (
    <Box>
      {/* <Header title={"TEAM"} subTitle={"Managing the Team Members"} /> */}
      <Box style={{ height: 250, width: '100%', height: '100%' }}>
        <DataGrid rows={rows} columns={columns} />
      </Box>
    </Box>
  );
}

export default ManageTeam;