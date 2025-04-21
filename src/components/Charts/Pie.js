import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import Box from '@mui/material/Box'

const data = [
  { id: 0, value: 10, label: 'Project A Leads' },
  { id: 1, value: 15, label: 'Project B Leads' },
  { id: 2, value: 20, label: 'Project C Leads' },
];

export default function Pie() {
  return (
  	<Box>
  	<h3 style={{margin:'50px'}}>Project Wise Leads</h3>
    <PieChart
     colors={['#294271', '#194a55', '#2c7b56']}
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      height={400}
    />
    </Box>
  );
}