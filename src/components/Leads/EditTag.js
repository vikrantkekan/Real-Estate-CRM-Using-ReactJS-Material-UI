import {useState} from 'react'
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

function EditTag(props){

  const [cookies, setCookie,removeCookie] = useCookies(['name','all']);


  const [status,setStatus]=useState(props.data.status)
  const [snack,setSnack]=useState({"status":0,"severity":"success","msg":""});

  const [tagname,setTagname]=useState(props.data.tag_name);
  const [tagshort,setTagshort]=useState(props.data.tag);

//console.log('tag',props.data.id)

	function change_status(e){
setStatus(e.target.value)

	}


function submit_form(e){
  e.preventDefault();

  let body_data={"status":status,"tagname":tagname,"tagshort":tagshort,"id":props.data.id}

fetch('http://localhost//demo/demo/php/edit_tag.php',{
  method:'post',
  header:{'Content-type':'application/json'},
  body:JSON.stringify(body_data)
}).then((response)=>response.json())
.then((data)=>{
  console.log(data)
  if(data==200){
    setSnack(1)
    setSnack({"status":1,"severity":"success","msg":"Updated Successfuly !"})
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

<p style={{marginLeft:'20px',fontSize:'18px',color:'#193b68'}}>Edit Tag</p>

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
<TextField label="Tag Name" placeholder={props.data.tag_name} defaultValue={props.data.tag_name} sx={{m:1}} onChange={(e)=>setTagname(e.target.value)}></TextField>
</FormControl>
</Grid>

<Grid item xs={6}>
<FormControl sx={{p:2,width:'100%'}} >
<TextField label="Tag" placeholder={props.data.tag} sx={{m:1}} defaultValue={props.data.tag} onChange={(e)=>setTagshort(e.target.value)}></TextField>
</FormControl>
</Grid>
</Grid>

<Grid container>
<Grid item xs={12}>
<FormControl sx={{p:2}} >
<Button type="submit" variant="contained" sx={{m:1}}>Edit Tag</Button>
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

export default EditTag;

