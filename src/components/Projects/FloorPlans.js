import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'


function FloorPlans(props){

let x=JSON.stringify(props.data2[0].floor_plans)

let y=JSON.parse(JSON.parse(x));

let q=y.map((itm)=>{
   let img='http://localhost//demo/demo/public/'+itm.img;
	return <Grid item xs={4} >
   <Typography variant="body1" component="div" sx={{color:'#383838',padding:1}}>
      <span><b>{itm.type}: </b></span> 
    </Typography>
    <img src={img} style={{width:'98%'}} />
</Grid>
})

return(

<Box>

<Grid container>

<Grid item xs={12} sx={{p:1}}>

<Card sx={{ width:'100%',backgroundColor:'#dde8f8'}}>

 <CardHeader title={'Floor Plans'} subheader={props.data2[0].project_name}  />

<CardContent sx={{backgroundColor:'#fff'}}>

 <Grid container>
{q}

</Grid>
	</CardContent>
 </Card>

</Grid>
</Grid>
</Box>

	)

}

export default FloorPlans;