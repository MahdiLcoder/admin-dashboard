import { Box, useTheme } from "@mui/material";
import React from "react";
import { ResponsiveLine } from "@nivo/line";
import Line from "./Line";


const LineChart = () => {
  const theme = useTheme();
  return (
    <Box>
      <Line />
    </Box>
  );
};

export default LineChart;