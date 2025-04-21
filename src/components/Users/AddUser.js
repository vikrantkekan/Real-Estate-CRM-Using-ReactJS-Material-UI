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
import { json } from 'react-router-dom';

function AddUser(){

  const [cookies, setCookie,removeCookie] = useCookies(['name','all']);


  let project_link=cookies.all.projects.map((itm)=>itm.project_name)

  //let project_link=['Bungalow Plots','Swayam Plots1'];
  
  const [role,setRole]=useState('')
  const [snack,setSnack]=useState({"sev":'',"status":0,"msg":''});
  const [roles,setRoles]=useState([])

  const [projects,setProjects]=useState([])
  const [password,setPassword]=useState([])
  const [contact,setContact]=useState([])
  const [email,setEmail]=useState([])
  const [name,setName]=useState([])

      
  
  useEffect(()=>{

    if(cookies.all.uroles[0].user_roles){
fetch('http://localhost//demo/demo/php/user_roles.php')
.then((response)=>response.json())
.then((data)=>{
  setRoles(data);
}
  )
.catch((err)=>console.log(err))
    }
  },[]);

  function submit_form(e){
      e.preventDefault();

let body_data={"name":name,"email":email,"contact":contact,"password":password,"role":role,"projects":projects,"by":cookies.all.uid}

fetch('http://localhost//demo/demo/php/add_new_user.php',{method:'post',header:{'Content-Type':'application/json'},body:JSON.stringify(body_data)})
.then((response)=>response.json())
.then((data)=>{
  if(data==200){
    setSnack({"msg":"New User Created!","status":1,"sev":"success"})
  }else{
    setSnack({"msg":"Error!","status":1,"sev":"error"})
  }
}

)
.catch((err)=>console.log(err))

}



  function change_role(e){
setRole(e.target.value)
  }

return(

<Box>
<Paper sx={{borderRadius:'24px'}}>
<Grid container>


<Grid item xs={12} sx={{backgroundColor:'#dde8f8',p:3,borderRadius:3}} elevate='2'>


<p style={{marginLeft:'20px',fontSize:'18px',color:'#193b68'}}>Add New User</p>

<form onSubmit={(e)=>submit_form(e)}>

<Grid container>
<Grid item xs={6}>
<FormControl sx={{p:2,width:'100%'}} >  
<TextField label="Full Name" placeholder="Full Name" sx={{m:1}} onChange={(e)=>setName(e.target.value)} required></TextField>
</FormControl>
</Grid>

<Grid item xs={6}>
<FormControl sx={{p:2,width:'100%'}}>  
<TextField label="Email Address" placeholder="Email Address" sx={{m:1}} onChange={(e)=>setEmail(e.target.value)} required></TextField>
</FormControl>
</Grid>

</Grid>

<Grid container>
<Grid item xs={6}>
<FormControl sx={{p:2,width:'100%'}}>  
<TextField label="Contact Number" placeholder="Contact Number" sx={{m:1}} onChange={(e)=>setContact(e.target.value)} required></TextField>
</FormControl>
</Grid>

<Grid item xs={6}>
<FormControl sx={{p:2,width:'100%'}}>
 <InputLabel id="demo-simple-select-label" sx={{pl:1,m:2}}>Select User Role</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={role}
    label="Select User Role"
    onChange={(e)=>change_role(e)}
    sx={{m:1}}
    required
  >

  <MenuItem value={''}>Select User Role</MenuItem>
  {roles.map((itm)=><MenuItem value={itm.roleid}>{itm.role_name}</MenuItem>)}  

  </Select>

</FormControl>
</Grid>
</Grid>

<Grid container>
<Grid item xs={12}>
<FormControl sx={{p:2,width:'100%'}}>
<TextField label="Password" placeholder="Password" sx={{m:1}} onChange={(e)=>setPassword(e.target.value)} required></TextField>
</FormControl>
</Grid>
</Grid>

<Grid container>  
<Grid item xs={12}>
<FormControl sx={{p:2}} >

 <Autocomplete
      multiple
      id="combo-box-demo"
      options={project_link}
      sx={{width:500,m:1}}
      onChange={(e,newv)=>setProjects(newv)}
      renderInput={(params) => <TextField {...params} label="Projects"  />}
    />
</FormControl>
</Grid>
</Grid>

<Grid container>
<Grid item xs={12}>
<FormControl sx={{p:2}} >
<Button type="submit" variant="contained" sx={{m:1}}>Add User</Button>
</FormControl>

</Grid>
</Grid>


</form>

</Grid>


</Grid>
</Paper>


<Snackbar
        anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
        open={snack.status} 
        autoHideDuration={3000}
        onClose={()=>setSnack(0)}
      >
 <Alert
          severity={snack.sev}
          variant="filled"
          sx={{ width: '100%' }}
        >
         {snack.msg}
        </Alert>
      </Snackbar>

</Box>

	)

}

export default AddUser;

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 }
];