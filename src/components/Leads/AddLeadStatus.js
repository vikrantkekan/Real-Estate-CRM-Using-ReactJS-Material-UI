import {useState,useEffect} from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import { useCookies,withCookies } from 'react-cookie';


function AddLeadStatus(){


    const [status,setStatus]=useState(1)
    const [snack,setSnack]=useState({"status":0,"severity":"success","msg":""});
    const [stage,setStage]=useState(null)
    const [stages,setStages]=useState([])
    const [statusname,setStatusname]=useState([])
    
    const [cookies, setCookie,removeCookie] = useCookies(['name','all']);


  function submit_btn(){
setSnack(1)
}

	function change_status(e){
setStatus(e.target.value)
	}

	function change_stage(e){

		setStage(e.target.value);
	}


  useEffect(()=>{
    fetch('http://localhost//demo/demo/php/stages.php')
    .then((response)=>response.json())
    .then((data)=>{
      console.log(data)
      setStages(data);
    }
      )
    .catch((err)=>console.log(err))
  },[])


  function submit_form(e){
    e.preventDefault();
  
    let body_data={"status":status,"stage":stage,"statusname":statusname,"clie":cookies.all.clie}
  
  fetch('http://localhost//demo/demo/php/add_status.php',{
    method:'post',
    header:{'Content-type':'application/json'},
    body:JSON.stringify(body_data)
  }).then((response)=>response.json())
  .then((data)=>{
    console.log(data)
    if(data==200){
      setSnack(1)
      setSnack({"status":1,"severity":"success","msg":"New Tag Added Successfuly !"})
    }else if(data==201){
      setSnack({"status":1,"severity":"warning","msg":"Duplicate Tag"})
    }else{
      setSnack({"status":1,"severity":"error","msg":"Something went wrong"})
    }
  })
  .catch((err)=>console.log(err))
  
  }


return(

<Box>

<Paper sx={{borderRadius:'24px'}}>
<Grid container>

<form onSubmit={(e)=>submit_form(e)}>
<Grid item xs={12} sx={{backgroundColor:'#dde8f8',p:3,borderRadius:3}} elevate='2'>

<p style={{marginLeft:'20px',fontSize:'18px',color:'#193b68'}}>Add New Lead Status</p>

<Grid container>

<Grid item xs={6}>
<FormControl sx={{p:2,width:'100%'}} >
  <InputLabel id="demo-simple-select-label" sx={{pl:1,m:1}}>Status</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={status}
    label="Status"
    onChange={(e)=>change_status(e)}
    sx={{m:1}}
  >

    <MenuItem value={1}>Active</MenuItem>
    <MenuItem value={0}>Inactive</MenuItem>

  </Select>
</FormControl>
</Grid>
</Grid>


<Grid container>
<Grid item xs={6}>
<FormControl sx={{p:2,width:'100%'}} >
<TextField label="Status Name" placeholder="Status Name" sx={{m:1}} onChange={(e)=>setStatusname(e.target.value)}></TextField>
</FormControl>
</Grid>

<Grid item xs={6}>
<FormControl sx={{p:2,width:'100%'}} >
<InputLabel id="demo-simple-select-label" sx={{pl:1,m:1}}>Select Stage</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={stage}
    label="Select Stage"
    onChange={(e)=>change_stage(e)}
    sx={{m:1,width:250}}
  >
  
   {stages.map((itm)=><MenuItem value={itm.id}>{itm.name}</MenuItem>)}
  </Select>
</FormControl>
</Grid>

</Grid>


<Grid container>
<Grid item xs={12}>
<FormControl sx={{p:2}} >
<Button type="submit" variant="contained" sx={{m:1}} >Add New Status</Button>
</FormControl>

</Grid>
</Grid>
</Grid>

</form>
</Grid>
</Paper>

<Snackbar
        anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
        open={snack.status} 
        autoHideDuration={3000}
        onClose={()=>setSnack({"status":0})}
      >
 <Alert
          severity={snack.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snack.msg}
        </Alert>
      </Snackbar>
 
</Box>

	)

}

export default AddLeadStatus;

