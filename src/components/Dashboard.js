import React from 'react'
import Paper from '@mui/material/Paper'
import Pie from './Charts/Pie'
import Bar from './Charts/Bar'
import CampaignsBar from './Charts/CampaignsBar'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'

class Dashboard extends React.Component{

	constructor(props){
		super(props)

		
	}

	render(){
	

		return(

<Paper sx={{margin:1,pt:6}}>

<Box>
<Grid container>

<Grid item xs={12}>
<Paper sx={{p:'5px'}}>
<CampaignsBar />
</Paper>
</Grid>

<Grid item xs={6}>
<Paper sx={{p:'5px'}}>
<Pie />
</Paper>
</Grid>
<Grid item xs={6}>
<Paper sx={{p:'5px'}}>
<Bar />
</Paper>
</Grid>

</Grid>
</Box>
</Paper>

			)
	}
}

export default	Dashboard