import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import Box from '@mui/material/Box'

export default function CampaignsBar() {
  return (
    <Box>
    <h3 style={{margin:'50px'}}>Campaign Wise Leads</h3>
    <div style={{ width: '100%' }}>
      <BarChart
      colors={['#3496ac']}
      xAxis={[{ scaleType: 'band', data: ['Campaign 1', 'Campaign 2', 'Campaign 3','Campaign 4','Campaign 5','Campaign 6','Campaign 7.','Campaign 8.'] }]}
      series={[{ data: [40, 30, 50,100,120,60,80,150] }]}
      height={400}
    />
    </div>
      </Box>
  );
}

