import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'

function Msg2(props){

    console.log(props.data)
    //console.log(props.data2)
    
    let d=new Date(props.data.created_time);
    
    
    return(
        <Grid container>
 <Grid item xs={5}></Grid>
    <Grid item xs={7}>
           <div style={{backgroundColor:'#eee',padding:'10px',borderRadius:'10px',width:'fit-content',position:'relative',
           maxWidth:'90%',margin:'1vw',float:'right'}}>
            <p style={{fontSize:'13px',color:'#000'}}>{props.data.from.name}</p>
            <p style={{fontSize:'16px'}}>{props.data.message}</p>
            <p style={{fontSize:'12px',textAlign:'right',color:'rgb(62, 62, 62)'}}>{d.getDate()  + "/" + (d.getMonth()+1) + "/" + d.getFullYear() + " " +
    d.getHours() + ":" + d.getMinutes()}</p>
           </div>
           </Grid>
           </Grid> 
        )
    
    }
    
    export default Msg2;