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

import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

import {useState,useEffect} from 'react';

function InstaCard(props){

   const[med,setMed]=useState(null);
   const[statdata,setStatdata]=useState([]);

   useEffect(()=>{

    if(props.data.media_type==='IMAGE'){
      
      setMed('img');
      //let metric='impressions,reach,replies,engagement,saved,likes,comments,shares,total_interactions';
      // let metric='impressions, reach, replies, saved, video_views, likes, comments, shares, plays, total_interactions, ig_reels_video_view_total_time, ig_reels_avg_watch_time, clips_replays_count, ig_reels_aggregated_all_plays_count';
      let metric='impressions,reach,saved,likes,comments,shares,total_interactions';

      let url='https://graph.facebook.com/v19.0/'+props.data.id+'/insights?metric='+metric+'&access_token='+props.token
      fetch(url).then((response)=>response.json()).then((data)=>{
        setStatdata(data.data)
       // console.log('image',data)
      }).catch((err)=>console.log(err))
     }
     else if(props.data.media_type==='VIDEO'){
      setMed('video');
      let metric='reach,saved,likes,comments,shares,total_interactions,video_views,plays';
      let url='https://graph.facebook.com/v19.0/'+props.data.id+'/insights?metric='+metric+'&access_token='+props.token
      fetch(url).then((response)=>response.json()).then((data)=>{
        setStatdata(data.data)
       
      }).catch((err)=>console.log(err))
     }else{

let metric='impressions,reach,saved,likes,comments,shares,total_interactions';

      let url='https://graph.facebook.com/v19.0/'+props.data.id+'/insights?metric='+metric+'&access_token='+props.token
      fetch(url).then((response)=>response.json()).then((data)=>{
        setStatdata(data.data)
      
      }).catch((err)=>console.log(err))

     }

   },[1])

   console.log(statdata)
   let content=statdata.map((itm)=><Grid item xs={6} sx={{padding:'2px'}}><span>{itm.title} : {itm.values[0].value}</span></Grid> )

return(
<Grid item xs={4} sx={{p:1}}>

<Card sx={{height:'auto'}}>
      
      <CardMedia
        component={med}
        height="450vh"
        src={props.data.media_url}
        alt={props.data.id}
      />

      <CardContent sx={{height:'auto',mt:1,overflowY:'auto'}}>
      <Grid container>
        {content}
        </Grid>
      </CardContent>
   
        </Card>
  </Grid>

	)

}

export default InstaCard