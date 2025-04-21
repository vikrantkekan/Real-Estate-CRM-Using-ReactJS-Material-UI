import  {useState,useEffect} from 'react';
import {useCookies,withCookies} from 'react-cookie';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'
//import ProjectCard from './ProjectCard'
import Dialog from '@mui/material/Dialog'
import Slide from '@mui/material/Slide';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import CampaignListCard from './CampaignListCard';

function CampaignList(props){

    const [conns,setConns]=useState([]);
    const [cookies, setCookie,removeCookie] = useCookies(['name','all']);

    useEffect(()=>{
      if(cookies.all.uroles[0].campaign_stat){
        fetch('https://www.3dotsdesign.in/demo/demo/php/allcamapigns_ad.php',{
          method:'post',
          header:{'Content-type':'application/json'},
          body:JSON.stringify(cookies.all.projects)
        })
        .then((response)=>response.json())
        .then((data)=>{
          setConns(data)
          
        }).catch((err)=>console.log(err));
        }
      }
        ,[])


let camp_card=conns.map((itm)=><CampaignListCard data={itm} />)

    return(

        <Box sx={{pt:10}}>
        <Grid container sx={{p:2}}>
{camp_card}
  </Grid>
</Box>   

    )

}
export default CampaignList;