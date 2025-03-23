import React from "react";
import { Box, useTheme } from "@mui/material";
import Bar from "./bar";

const BarChart = () => {
  const theme = useTheme();
  return (
    <Box>
      <Bar />
    </Box>
  );
};

export default BarChart;