import {useState,useEffect} from 'react';

import React from 'react';
import Button from '@mui/material/Button';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'

import LeadTimeline from './Forms/LeadTimeline'

import FullInformationForm from './Forms/FullInformationForm'


function FullInformation(props){

const [show,setShow]=useState(0);

const [lid,setLid]=useState(props.data.lid);

const [tim,setTim]=useState(<LeadTimeline data={lid.l} c={lid.c}/>)

function handle_close(){
	setShow(0);
}


 return (


<div style={{height:'90%'}}>

<Grid container sx={{height:'94%'}}>
<Grid item xs={4} sx={{height:'100%',overflowY:'scroll',marginTop:3}}>


<Box sx={{p:3}}>
<LeadTimeline data={lid}/>
</Box>

</Grid>


<Grid item xs={8} sx={{marginTop:3}}>

<FullInformationForm data={props.data} callback={props.callback}  />

</Grid>

</Grid>

</div>
  
  );

}

export default FullInformation