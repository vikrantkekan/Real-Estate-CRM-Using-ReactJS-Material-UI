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


function AddNewStage(){


  const [status,setStatus]=useState('Active')
  const [snack,setSnack]=useState(0);
  function submit_btn(){
setSnack(1)
}

	function change_status(e){
setStatus(e.target.value)
	}




return(

<Box>

<Paper sx={{borderRadius:'24px'}}>
<Grid container>

<Grid item xs={12} sx={{backgroundColor:'#dde8f8',p:3,borderRadius:3}} elevate='2'>

<p style={{marginLeft:'20px',fontSize:'18px',color:'#193b68'}}>Add New Stage</p>

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

    <MenuItem value={'Active'}>Active</MenuItem>
    <MenuItem value={'Inactive'}>Inactive</MenuItem>

  </Select>
</FormControl>
</Grid>
</Grid>


<Grid container>
<Grid item xs={6}>
<FormControl sx={{p:2,width:'100%'}} >
<TextField label="Stage Name" placeholder="Stage Name" sx={{m:1}}></TextField>
</FormControl>
</Grid>

<Grid item xs={6}>
<FormControl sx={{p:2,width:'100%'}} >
<TextField label="Short name" placeholder="Short name" sx={{m:1}}></TextField>
</FormControl>
</Grid>
</Grid>


<Grid container>
<Grid item xs={12}>
<FormControl sx={{p:2}} >
<Button variant="contained" sx={{m:1}} onClick={()=>submit_btn()}>Add New Stage</Button>
</FormControl>

</Grid>
</Grid>

</Grid>


</Grid>
</Paper>

      <Snackbar
        anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
        open={snack} 
        autoHideDuration={3000}
        onClose={()=>setSnack(0)}
      >
 <Alert
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          New Stage Added Successfuly !
        </Alert>
      </Snackbar>
 
</Box>

	)

}

export default AddNewStage;

