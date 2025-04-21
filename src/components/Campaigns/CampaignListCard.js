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

import IconButton from '@mui/material/IconButton';

import {useState} from 'react';


function CampaignListCard(props){
    console.log('card',props.data)


    let adset_data=props.data.adsets.data.map((itm)=><CardContent sx={{border:'1px solid #eee'}}>
    
     <p> <span style={{fontSize:'18px'}}>{itm.name} ({itm.id})</span> <span style={{float:'right',color:'#193b68'}}>{itm.effective_status}</span></p>
   <br/>
   <Grid container>
    <Grid item xs="4" sx={{borderRight:'1px solid #eee'}}>
    <p style={{fontSize:'16px;',color:'#797b7d'}}>Platform: {itm.targeting.publisher_platforms}</p>
        <p style={{fontSize:'16px;',color:'#797b7d'}}>Goal: {itm.optimization_goal}</p>
        <p style={{fontSize:'16px;',color:'#797b7d'}}>Age: {itm.targeting.age_min}-{itm.targeting.age_max}</p>
        <p style={{fontSize:'16px;',color:'#797b7d'}}>Bid Strategy: {itm.bid_strategy}</p>
        <p style={{fontSize:'16px;',color:'#797b7d'}}>Lifetime Budget: {itm.lifetime_budget}</p>
        <p style={{fontSize:'16px;',color:'#797b7d'}}>Daily Budget: {itm.daily_budget/100}</p>
        <p style={{fontSize:'16px;',color:'#797b7d'}}>Impressions: {itm.insights.data[0].impressions}</p>
        <p style={{fontSize:'16px;',color:'#797b7d'}}>Total Spend: {itm.insights.data[0].spend}</p>
        <p style={{fontSize:'16px;',color:'#797b7d'}}>Start Time: {itm.start_time}</p>
        <p style={{fontSize:'16px;',color:'#797b7d'}}>Device: {itm.targeting.device_platforms}</p>

    </Grid>
    <Grid item xs="4" sx={{borderRight:'1px solid #eee'}}>
        <div style={{padding:'0vw 1vw',height:'23vw',overflowX:'hidden',overflowY:'scroll'}}>

    <p style={{fontSize:'16px;',color:'#797b7d'}}><span style={{color:'rgb(57, 57, 57)',borderBottom:'1px solid rgb(57, 57, 57)'}}>Locations:</span> 
    {itm.targeting.geo_locations.custom_locations.map((itm)=><div style={{borderBottom:'1px solid #eee'}}>{itm.name?<p>{itm.name}</p>:''}<p>Latitude: {itm.latitude} , Longitude: {itm.longitude}</p><p>Radius: {itm.radius} {itm.distance_unit}</p></div> )} 
    </p>

    <p style={{fontSize:'16px;',color:'#797b7d'}}><span style={{color:'rgb(57, 57, 57)',borderBottom:'1px solid rgb(57, 57, 57)'}}>Interests: </span> 
   <p> {itm.targeting.flexible_spec[0].interests.map((itm)=><Chip label={itm.name} sx={{m:'2px',color:'#193b68'}}/>)} </p>
    </p>

    <p style={{fontSize:'16px;',color:'#797b7d'}}><span style={{color:'rgb(57, 57, 57)',borderBottom:'1px solid rgb(57, 57, 57)'}}>Behaviors: </span> 
   <p> {itm.targeting.flexible_spec[0].behaviors.map((itm)=><Chip label={itm.name} sx={{m:'2px',color:'#193b68'}}/>)} </p>
    </p>

    <p style={{fontSize:'16px;',color:'#797b7d'}}><span style={{color:'rgb(57, 57, 57)',borderBottom:'1px solid rgb(57, 57, 57)'}}>Industries: </span> 
   <p> {itm.targeting.flexible_spec[0].industries.map((itm)=><Chip label={itm.name} sx={{m:'2px',color:'#193b68'}}/>)} </p>
    </p>

    <p style={{fontSize:'16px;',color:'#797b7d'}}><span style={{color:'rgb(57, 57, 57)',borderBottom:'1px solid rgb(57, 57, 57)'}}>Work/Employers: </span> 
   <p> {itm.targeting.flexible_spec[0].work_employers.map((itm)=><Chip label={itm.name} sx={{m:'2px',color:'#193b68'}}/>)} </p>
    </p>

    <p style={{fontSize:'16px;',color:'#797b7d'}}><span style={{color:'rgb(57, 57, 57)',borderBottom:'1px solid rgb(57, 57, 57)'}}>Work Positions: </span> 
   <p> {itm.targeting.flexible_spec[0].work_positions.map((itm)=><Chip label={itm.name} sx={{m:'2px',color:'#193b68'}}/>)} </p>
    </p>

</div>

    </Grid>

<Grid item xs={4}>
    
<div style={{padding:'0vw 1vw',height:'23vw',overflowX:'hidden',overflowY:'scroll'}}>

{itm.ads.data.map((it)=><div style={{borderBottom:'1px solid #eee',paddingBottom:'1vw'}}>
    <p>
    <span style={{color:'rgb(57, 57, 57)'}}>{it.name}:</span> </p>
    <p style={{fontSize:'16px;',color:'#797b7d'}}>Status: {it.effective_status}</p>
    <p style={{fontSize:'16px;',color:'#797b7d'}}>Impressions: {it.insights.data[0].impressions}</p>
    <p style={{fontSize:'16px;',color:'#797b7d'}}>Spend: {it.insights.data[0].spend}</p>
    <Button size="small"><a href={it.preview_shareable_link} target="_blank" style={{color:'#1976d2'}}>View Ad Preview</a></Button>
    </div>)}

</div>

</Grid>

   </Grid>
    
  </CardContent>
    )

   
return(

<Grid item xs={12} sx={{p:1}}>
<Card >

<CardHeader
        title={props.data.camp_name}
        subheader={props.data.created_date}
      />

{adset_data}
 
    </Card>

</Grid>

	)

}

export default CampaignListCard