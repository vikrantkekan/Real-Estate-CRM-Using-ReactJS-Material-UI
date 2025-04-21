import  {useState,useEffect} from 'react';
import {useCookies,withCookies} from 'react-cookie';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'

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
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';

import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Msg from './Msg';
import Msg2 from './Msg2';


function Messages(props){
    const [cookies, setCookie,removeCookie] = useCookies(['name','all']);
    const [conns,setConns]=useState([]);
    const [conns2,setConns2]=useState([]);
    const [pageid,setPageid]=useState(null);
    const[msgg,setMsg]=useState([])
  

    useEffect(
        ()=>{
        let clie={"clie":cookies.all.clie}
        if(cookies.all.uroles[0].msg){
          fetch('https://www.3dotsdesign.in/demo/demo/php/connection.php',{
            method:'post',
            header:{'Content-Type':'application/json'},
            body:JSON.stringify(clie)
          })
          .then((response)=>response.json())
          .then((data)=>{
            
            console.log(data[0]['pageid'])
            setPageid(data[0]['pageid']);
            const token=data[0]['token']


  let fields='messages{id,created_time,from,to,message}';
  let platform='messenger';

            let url='https://graph.facebook.com/v19.0/'+data[0]['pageid']+'/conversations?platform='+platform+'&fields='+fields+'&access_token='+token;
            fetch(url).then((response2)=>response2.json()).then((data2)=>{
                   // console.log(data2);
                    setConns(data2.data);
            }).catch((err2)=>console.log(err2))

            /*
            let platform2='instagram';
          
                      let url2='https://graph.facebook.com/v19.0/'+data[0]['pageid']+'/conversations?platform='+platform2+'&fields='+fields+'&access_token='+token;
                      fetch(url2).then((response3)=>response3.json()).then((data3)=>{
                              console.log('insta',data3);
                              setConns2(data3.data);
                      }).catch((err3)=>console.log(err3))
*/
          }).catch((err)=>console.log(err));

        }
          },[1])



let leftmenu=conns.map((itm)=>{

  let d=new Date(itm.messages.data[0].created_time);

return <ListItem disablePadding sx={{borderBottom:'1px solid #eee'}} onClick={()=>show_msg(itm.messages.data)}>
<ListItemButton>
<ListItemText>
 <p style={{fontSize:'16px',color:'rgba(25, 59, 104, 0.88)',marginBottom:'1px'}}>{itm.messages.data[itm.messages.data.length-1].from.name} </p>
  <span style={{fontSize:'12px',color:'rgb(151, 151, 151)',float:'right'}}>
  {d.getDate()  + "/" + (d.getMonth()+1) + "/" + d.getFullYear() + " " +
d.getHours() + ":" + d.getMinutes()}
  </span>
</ListItemText>
</ListItemButton>
</ListItem>
 
}

)

let rightmenu=conns2.map((itm)=>{

  let d=new Date(itm.messages.data[0].created_time);

return <ListItem disablePadding sx={{borderBottom:'1px solid #eee'}} onClick={()=>show_msg(itm.messages.data)}>
<ListItemButton>
<ListItemText>
 <p style={{fontSize:'16px',color:'rgba(25, 59, 104, 0.88)',marginBottom:'1px'}}>{itm.messages.data[itm.messages.data.length-1].from.name} </p>
  <span style={{fontSize:'12px',color:'rgb(151, 151, 151)',float:'right'}}>
  {d.getDate()  + "/" + (d.getMonth()+1) + "/" + d.getFullYear() + " " +
d.getHours() + ":" + d.getMinutes()}
  </span>
</ListItemText>
</ListItemButton>
</ListItem>
 
}
)

function show_msg(d){
  let b=d.reverse();
  setMsg(b);
}

let msgdata=msgg.map((itm2)=>{
if(itm2.from.id===pageid){
  return <Msg2 data={itm2} data2={pageid} />
}else{
  return <Msg data={itm2} data2={pageid} />
}

})

return(
<Box sx={{pt:1,overflowY:'hidden',height:'96vh'}} >
 <Grid container sx={{overflowY:'hidden'}}>
    <Grid item xs={3}>
<div style={{width: 'auto',height:'100vh'}}>
    <Card sx={{height:'100vh',width: '100%',borderRight:'none',paddingTop:'2vw',overflowY:'scroll',overflowX:'hidden'}}>
    <div style={{backgroundColor:'#eee',padding:2}}><p style={{fontSize:'21px',color:'#193b68',paddingLeft:'2vw'}}>Messenger</p></div>
<CardContent style={{pt:1}}>

{leftmenu}

<List>

</List>
      </CardContent>

      </Card>
</div>
    </Grid>

<Grid item xs={9} sx={{paddingTop:'4vw',paddingBottom:'4vw'}}>

<div style={{height:'90vh',overflowY: 'scroll',overflowX: 'hidden'}}>
{msgdata}
  </div>

</Grid>

/*
<Grid item xs={3}>
<div style={{width: 'auto',height:'100vh'}}>
    <Card sx={{height:'100vh',width: '100%',borderRight:'none',paddingTop:'2vw',overflowY:'scroll',overflowX:'hidden'}}>
    <div style={{backgroundColor:'#eee',padding:2}}><p style={{fontSize:'21px',color:'#193b68',paddingLeft:'2vw'}}>Instagram</p></div>
<CardContent style={{pt:1}}>

{rightmenu}

<List>

</List>
      </CardContent>

      </Card>
</div>
    </Grid>
*/

</Grid>
</Box>
)

}
export default Messages

