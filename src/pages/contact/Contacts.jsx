import React from 'react'
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { columns, rows } from "./data";
function Contacts() {
  return (
    <Box>
    <Box sx={{ height: 650, width: "99%", mx: "auto" }}>
      <DataGrid
        slots={{
          toolbar: GridToolbar,
        }}
        rows={rows}
        columns={columns}
      />
    </Box>
  </Box>
  )
}

export default Contacts