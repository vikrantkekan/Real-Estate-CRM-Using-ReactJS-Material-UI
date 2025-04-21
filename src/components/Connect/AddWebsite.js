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

function AddCampaign(){

const [cookies, setCookie,removeCookie] = useCookies(['name','all']);

const [projects,setprojects]=useState([])
const [selproject,setselproject]=useState(null)

const [campname,setCampname]=useState(null)
const [weblink,setWeblink]=useState(null)

const [formfieldsdb,setFormfieldsdb]=useState([])

const [snack,setSnack]=useState(0);

function project_changed(e){
  setselproject(e.target.value);
}

useEffect(()=>{

fetch('http://localhost//demo/demo/php/form_fields.php')
.then((response21)=>response21.json())
.then((data21)=>{
setFormfieldsdb(data21)
})
.catch((err)=>console.log(err));

fetch('http://localhost//demo/demo/php/projects.php')
.then((response212)=>response212.json())
.then((data212)=>{
setprojects(data212)
})
.catch((err)=>console.log(err));


},[])



function submit_campaign(){

let clie=cookies.all.clie;
let uid=cookies.all.uid;

let postfield={"uid":uid,"clie":clie,"project":selproject,"campname":campname,"weblink":weblink}


let post_data=JSON.stringify(postfield);

fetch('http://localhost//demo/demo/php/submit_web_campaign.php',{
  method:'post',
  header:{'Content-Type':'application/json'},
  body:post_data
})
.then((response)=>response.json())
.then((data)=>{
  console.log(data)
  if(data=='success'){
    setSnack(1)
    alert('Campaign Added Successfully');
    window.location.reload();
  }
})
.catch((err)=>console.log(err))

}

const allprojectslist=projects.map((itm)=><MenuItem value={itm.id}>{itm.project_name}</MenuItem>);


return(

<Box>

<Paper sx={{borderRadius:'24px'}}>
<Grid container>

<Grid item xs={12} sx={{backgroundColor:'#dde8f8',p:3,borderRadius:3}} elevate='2'>

<p style={{marginLeft:'20px',fontSize:'18px',color:'#193b68'}}>Add New Website Campaign</p>

<Grid container>

<Grid item xs={6}>
<FormControl sx={{p:2,width:'100%'}} >
  <InputLabel id="demo-simple-select-label" sx={{p:2}}>Select Project</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={selproject}
    label="Select Project"
    onChange={(e)=>project_changed(e)}
    sx={{m:1}}
  >

 {allprojectslist}

  </Select>
</FormControl>
</Grid>

<Grid item xs={6}>
<FormControl sx={{p:2,width:'100%'}} >
<TextField label="Campaign Name" placeholder="Campaign Name" sx={{m:1}}  onChange={(e)=>setCampname(e.target.value)}></TextField>
</FormControl>
</Grid>

<Grid item xs={6}>
<FormControl sx={{p:2,width:'100%'}} >
<TextField label="Website Link" placeholder="Website Link" sx={{m:1}} onChange={(e)=>setWeblink(e.target.value)} ></TextField>
</FormControl>
</Grid>

</Grid>


<Grid container>
<Grid item xs={12}>
<FormControl sx={{p:2}} >
<Button variant="contained" sx={{m:1}} onClick={()=>submit_campaign()}>Add Campaign</Button>
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
          New Tag Added Successfuly !
        </Alert>
      </Snackbar>
 
</Box>

	)

}

export default AddCampaign;

