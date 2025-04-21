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
import { useCookies,withCookies } from 'react-cookie';

import {useState} from 'react';



import { useNavigate } from "react-router-dom";


function ProjectCard(props){

const [cookies, setCookie,removeCookie] = useCookies(['name','all']);

 const navigate = useNavigate();
  
  const routeChange = (p) =>{ 
   if(cookies.all.uroles[0].projects.indexOf("project_details")!=-1){
      navigate('/project/'+p);
   }
  }

 

//let b=JSON.parse(props.data.config.replace(/&quot;/ig,'"'));
//console.log(typeof b)

//let z=JSON.parse(b);

//console.log(typeof z)


let u=JSON.stringify(props.data.config);
let p=JSON.parse(JSON.parse(u));

const q=p.map((it)=>{
     return <Grid item xs={6}>
    <Typography variant="body2" component="div" sx={{color:'#383838',padding:1}}>
       {it.type} Size: {it.sizes}
    </Typography>
     <Typography variant="body2" component="div" sx={{color:'#383838',padding:1}}>
       {it.type} Price: ₹{it.prices}
    </Typography>
    </Grid>
})

return(

<Grid item xs={4} sx={{p:1}}>

<Card sx={{ width:'100%',backgroundColor:'#dde8f8'}}>

 <CardHeader title={props.data.project_name} subheader={props.data.location}  />

 <CardMedia
        component="img"
        height="194"
        image="http://localhost//demo/demo/public/slider1.jpg"
        alt="Image"
      />

      <CardContent sx={{backgroundColor:'#fff'}}>
    <Grid container>
<Grid item xs={6}>
  
   <Typography variant="body2" component="div" sx={{color:'#383838',padding:1}}>
      <span> Rera :</span> {props.data.rera}
    </Typography>

     <Typography variant="body2" component="div" sx={{color:'#383838',padding:1}}>
        Project Area : {props.data.projectarea}
    </Typography>

    <Typography variant="body2" component="div" sx={{color:'#383838',padding:1}}>
        Possesion : {props.data.possesion}
   </Typography>

</Grid>

<Grid item xs={6}>
  
   <Typography variant="body2" component="div" sx={{color:'#383838',padding:1}}>
      <span> Total Units :</span> {props.data.units}
    </Typography>
    <Typography variant="body2" component="div" sx={{color:'#383838',padding:1}}>
      <span> Rem. Units :</span> {props.data.rem_units}
    </Typography>

     <Typography variant="body2" component="div" sx={{color:'#383838',padding:1}}>
        Floors : {props.data.floors}
    </Typography>

</Grid>
 {q}


  </Grid>
      </CardContent>

      <CardActions>
           
        <Chip label={props.data.units+' Units'} ></Chip> 
        <Chip label={props.data.floors+' Floors'} ></Chip>


         <Button size="small" variant="outlined" flexItem onClick={()=>routeChange(props.data.id)}>Know More</Button>

      </CardActions>
    </Card>

</Grid>

	)

}

export default ProjectCard