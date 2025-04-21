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


function Location(props){

let x=JSON.parse(JSON.stringify(props.data2[0].location_highlights));
let y=JSON.parse(x);

let q=y.map((itm)=>{

	return <Grid item xs={6}>
   <Typography variant="body1" component="div" sx={{color:'#383838',padding:1}}>
      <span>{itm.place}: {itm.dist}: </span> 
    </Typography>
</Grid>
})
return(
<Box>

<Grid container>

<Grid item xs={12} sx={{p:1}}>

<Card sx={{ width:'100%',backgroundColor:'#dde8f8'}}>

 <CardHeader title={'Location Highlights'} subheader={props.data2[0].project_name}  />

<CardContent sx={{backgroundColor:'#fff'}}>

 <Grid container>

<Grid item xs="7">
<Grid container>
{q}
</Grid>
</Grid>

<Grid item xs="5">
 <iframe src={props.data2[0].location_map} title="3DOts Digital" style={{width:'100%',height:'400px'}}></iframe> 
</Grid>

</Grid>
	</CardContent>
 </Card>

</Grid>
</Grid>
</Box>
	)
}

export default Location;