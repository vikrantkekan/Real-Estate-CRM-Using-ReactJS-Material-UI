import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'

function Msg(props){

console.log(props.data)
//console.log(props.data2)

let d=new Date(props.data.created_time);


return(
    <Grid container>

    <Grid item xs={7}>
        <div style={{backgroundColor:'#193b68',padding:'10px',borderRadius:'10px',width:'fit-content',position:'relative',maxWidth:'90%',margin:'1vw'}}>
        <p style={{fontSize:'13px',color:'#fff'}}>{props.data.from.name}</p>
        <p style={{fontSize:'16px',color:'#fff'}}>{props.data.message}</p>
        <p style={{fontSize:'12px',textAlign:'right',color:'rgb(227, 227, 227)'}}>{d.getDate()  + "/" + (d.getMonth()+1) + "/" + d.getFullYear() + " " +
d.getHours() + ":" + d.getMinutes()}</p>
       </div>
       </Grid>
       <Grid item xs={5}>
        </Grid>

       </Grid>
    )

}

export default Msg;