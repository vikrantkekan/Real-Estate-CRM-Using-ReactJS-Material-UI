import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import CardContent from '@mui/material/CardContent';

import Tooltip from '@mui/material/Tooltip';


function ProjectConfigurationCard(props){

    let chip = props.data.map1.map((itm)=>{
        if(itm.isbooked==='0'){
            return <Tooltip title="Available"><Chip sx={{m:1}} label={itm.flatno+' : '+itm.type} color="primary" variant="outlined" /></Tooltip>
        }else{
            return <Tooltip title="Booked"><Chip sx={{m:1}} label={itm.flatno+' : '+itm.type}  /></Tooltip>
        }
    
    }
)

    return(
        
<Grid item xs={12} sx={{p:1}}>
<Card sx={{ width:'100%',backgroundColor:'#dde8f8'}}>

 <CardHeader title={props.data.floor} />


<CardContent sx={{backgroundColor:'#fff',width:'100%'}}>

 <Grid container>
{chip}
</Grid>

</CardContent>
</Card>

 </Grid>
  
    )
}

export default ProjectConfigurationCard;