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


function Layout(props){

let x=JSON.parse(JSON.stringify(props.data2[0].layout));
let y=JSON.parse(x);

let q=y.map((itm)=>{
   let img='http://localhost//demo/demo/public/'+itm.img;
	return <Grid item xs={4}>
   <Typography variant="body1" component="div" sx={{color:'#383838',padding:1}}>
      <span><b>{itm.type}: </b></span> 
    </Typography>
    <img src={img} sx={{width:'100%'}}/>
</Grid>
})
return(
<Box>

<Grid container>

<Grid item xs={12} sx={{p:1}}>

<Card sx={{ width:'100%',backgroundColor:'#dde8f8'}}>

 <CardHeader title={'Layout'} subheader={props.data2[0].project_name}  />

<CardContent sx={{backgroundColor:'#fff'}}>

 <Grid container>

{q}

</Grid>
	</CardContent>
 </Card>

</Grid>
</Grid>
</Box>
	)
}

export default Layout;