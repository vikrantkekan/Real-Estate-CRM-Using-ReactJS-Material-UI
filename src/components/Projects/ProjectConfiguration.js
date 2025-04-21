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

import ProjectConfigurationCard from './ProjectConfigurationCard';


import { useState,useEffect } from 'react';


const allstatus=[
    {"floor":"1","map":[{"type":"2bhk","flatno":"1001","isbooked":"0"}]},
    {'floor':'2','map':'Nurture','status':'Active','Stage':'Marketing Qualified Lead'},
    {'floor':'3','map':'Warm','status':'Active','Stage':'Sales Accepted Lead'},
    {'floor':'4','map':'Cold','status':'Active','Stage':'Sales Accepted Lead'},
    ]


function ProjectConfiguration(props){

//console.log(props.data2[0].id)

const[confi,setConfi]=useState([])

useEffect(()=>{
    console.log(props.data2[0].id)

    let pid={"pid":props.data2[0].id}

    const pid2=JSON.stringify(pid);

fetch('http://localhost//demo/demo/php/layout_frame.php',{method:'post',header:{'Content-Type':'application/json'},body:pid2}).then((response)=>response.json()).then((data)=>{
    console.log(data)
    setConfi(data);
}).catch((err)=>console.log(err))
},[])

const allconfig=confi.map((itm)=>{
return <div>{itm.all.map((it)=>{
    return <ProjectConfigurationCard data={it} />
})}</div>
}
);

return(
<Box>

<Grid container>

{allconfig}

</Grid>
</Box>
	)
}

export default ProjectConfiguration;