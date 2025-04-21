import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import Box from '@mui/material/Box'

export default function Bar() {
  return (
      <Box>
    <h3 style={{margin:'50px'}}>Stages Wise Leads</h3>
    <BarChart
      xAxis={[{ scaleType: 'band', data: ['MAL', 'MQL', 'SAL','SQL','TSM','SAO','Cust.','Disq.'] }]}
      series={[{ data: [40, 30, 50,100,120,60,80,150] }]}
      height={400}
    />
      </Box>
  );
}