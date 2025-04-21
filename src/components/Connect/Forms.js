import React from 'react'
import {useState,useEffect} from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import Chip from '@mui/material/Chip'
import EditIcon from '@mui/icons-material/Edit';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import Tooltip from '@mui/material/Tooltip';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';

import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'



function Form(props){

	const[formdata,setFormdata]=useState([]);

	useEffect(()=>{
		fetch('http://localhost//demo/demo/php/form_fields.php')
		.then((response)=>response.json())
		.then((data)=>{
			console.log(data)
			setFormdata(data)
		})
		.catch((err)=>console.log(err))
	},[])


let alldata=formdata.map((itm,ind,arr)=>{
	return 	<Grid item xs={4}>
<FormControl sx={{p:2,width:'100%'}} >
<TextField label={itm.txt_name} placeholder={itm.txt_name} sx={{m:1}} disabled></TextField>
</FormControl>
</Grid>
})


console.log(typeof formdata);

return(

	<Box sx={{margin:'15px',marginTop:'75px',backgroundColor:'#dde8f8'}}>
<paper>
<h3 style={{paddingLeft:'50px',paddingTop:'30px',color:'#193b68'}}>Primary Forms Fields Available For Mapping</h3>
<Grid container sx={{p:3,pt:1}}>

{alldata}


</Grid>


</paper>
</Box>
	)
}

export default Form