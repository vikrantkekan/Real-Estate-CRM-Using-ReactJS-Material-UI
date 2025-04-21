import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';



	const pdata={
			title:'Swayam Bungalow Plots',
			location:'Nere, Pune',
			rera:'P0000000000',
			projectarea:'12 Acre',
			possesion:'Dec 2025',
			units:'128 Units',
			floor:'12 Floor',
			config:[
				{type:'2BHK',price:'50 Lakh',size:'800-1200 Sq.Ft'},
				{type:'3BHK',price:'65 Lakh',size:'1200-1800 Sq.Ft'}
			]
		}

function ProjectBooking(props){

return(

<Card sx={{ width:'100%',backgroundColor:'#dde8f8'}}>

 <CardHeader title={'Booking Details'} />


<CardContent sx={{backgroundColor:'#fff'}}>

 <Grid container>

<Grid item xs={6}>
   <Typography variant="body2" component="div" sx={{color:'#383838',padding:1}}>
      <span> 2 BHK  :</span> 128 Units
    </Typography>

     <Typography variant="body2" component="div" sx={{color:'#383838',padding:1}}>
       3 BHK : 98 Units
    </Typography>

</Grid>



<Grid item xs={6}>

 <Typography variant="body2" component="div" sx={{color:'#383838',padding:1}}>
      <span> 2 BHK Booked  :</span> 28 Units
    </Typography>

     <Typography variant="body2" component="div" sx={{color:'#383838',padding:1}}>
       3 BHK Booked: 9 Units
    </Typography>

</Grid>

</Grid>

</CardContent>

  </Card>


)	

}

export default ProjectBooking;