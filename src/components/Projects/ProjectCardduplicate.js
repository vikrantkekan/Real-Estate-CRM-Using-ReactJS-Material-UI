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

import {useState} from 'react';



import { useNavigate } from "react-router-dom";


let pdata2=
  {
    "id": 1,
    "project_name": "Swayam Bungalow Plots",
    "location": "Nere, Pune",
    "rera": "P000000000",
    "projectarea": "10 Acres",
    "possesion": "June 2025",
    "units": "52",
    "rem_units": "52",
    "floors": "3",
    "config": "[{type:'2BHK',prices:'50 Lakh',pricee:'65 Lakh',sizes:'800 Sq.Ft',sizee:'1800 Sq.Ft',psqft:'3000'},{type:'3BHK',prices:'70 Lakh',pricee:'95 Lakh',sizes:'2000 Sq.Ft',sizee:'4000 Sq.Ft',psqft:'2800'}]",
    "floor_plans": "{'type':'1st Floor','img':'florr1.jpg'},\r\n{'type':'2nd Floor','img':'florr2.jpg'},",
    "layout": "{'type':'A Wing','img':'A-wing-layout.jpg'},\r\n{'type':'B Wing','img':'B-wing-layout.jpg'},",
    "cost_sheet": "img/costsheet.pdf",
    "amenities": "garden,kid play area,solar water, life, DG Backup, Internal Roads",
    "specifications": "{'Doors':'Doors'}",
    "location_highlights": "",
    "location_map": "",
    "brochure": "",
    "status": 1
  }

function ProjectCard(props){

 const navigate = useNavigate();
  
  const routeChange = (p) =>{ 
  navigate('/project/'+p);
  }



console.log(props);

return(


<Grid item xs={4} sx={{p:1}}>

<Card sx={{ width:'100%',backgroundColor:'#dde8f8'}}>

 <CardHeader title={props.data.project_name} subheader={props.data.location}  />

 <CardMedia
        component="img"
        height="194"
        image="./images/slider1.jpg"
        alt="Paella dish"
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
       2 BHK : ₹{props.data.config[0].prices}
    </Typography>

    <Typography variant="body2" component="div" sx={{color:'#383838',padding:1}}>
       3 BHK : ₹{props.data.config[1].prices}
    </Typography>

</Grid>

<Grid item xs={6}>
 <Typography variant="body2" component="div" sx={{color:'#383838',padding:1}}>
        Possesion : {props.data.possesion}
    </Typography>
<Typography variant="body2" component="div" sx={{color:'#383838',padding:1}}>
       2 BHK Range : {props.data.config[0].sizes}
    </Typography>
    <Typography variant="body2" component="div" sx={{color:'#383838',padding:1}}>
       3 BHK Range : {props.data.config[1].sizes}
    </Typography>
</Grid>
       </Grid>
      </CardContent>

      <CardActions>
        <Chip label={props.data.config[0].type} ></Chip>   
        <Chip label={props.data.units} ></Chip> 
        <Chip label={props.data.floors} ></Chip>

         <Button size="small" variant="outlined" flexItem onClick={()=>routeChange(2)}>Know More</Button>

      </CardActions>
    </Card>

</Grid>


	)

}

export default ProjectCard