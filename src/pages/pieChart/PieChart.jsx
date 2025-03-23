import React from "react";
import { Box, useTheme } from "@mui/material";
import Pie from "./Pie";

const PieChart = () => {
  const theme = useTheme();
  return (
    <Box>

      <Pie />
    </Box>
  );
};

export default PieChart;