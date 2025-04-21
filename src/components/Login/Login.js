import React from 'react';
import {useState,useEffect} from 'react';
import {useCookies,withCookies} from 'react-cookie';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import HttpsIcon from '@mui/icons-material/Https';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert'

function Login(props){

console.log(props.data) //token

  const [username,setUsername]=useState();
  const [password,setPassword]=useState();
  const[sncbar,setSncbar]=useState({"open":0,"severity":"error","msg":""})

 const[cookie,setCookie,removeCookie]=useCookies(['name','all']);

function on_submit(e){
e.preventDefault()
fetch('http://localhost//demo/demo/php/user_login.php',{
  method:"post",
  header:{'Content-Type': 'application/json'},
  body:JSON.stringify({'username':username,'password':password,'tok':props.data})

})
.then((response)=>response.json())
.then((data)=>{
  
if(data[0].uid){

console.log('udata',data[0])

setSncbar({"open":1,"severity":"success","msg":"Successfully Logedin"})

setCookie('all', data[0], { path: '/' });
setCookie('name', data[0]['fullname'], { path: '/' });

}else{
  setSncbar({"open":1,"severity":"error","msg":"Invalid Credntials"})

}
})
.catch((err)=>console.log(err))
}

return(
<Box sx={{borderRadius:'15px',width:'100%',backgroundImage:'url(http://localhost//demo/demo/public/social-media.jpg)',backgroundSize:'cover'}}>

<Grid container>

<Grid item xs={4} sx={{}}>

<Paper sx={{height:'100vh'}}>

<div style={{padding:'2vw'}}>
<center>
<img src="http://localhost//demo/demo/public/3dots.png" style={{padding:1}} />
</center>
<form onSubmit={(e)=>on_submit(e)}>
<FormControl sx={{width:'100%',p:2}}>
<TextField id="outlined-basic" label="Username" variant="outlined" name="username"  InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}  onChange={(e)=>setUsername(e.target.value)} />
</FormControl>

<FormControl sx={{width:'100%',p:2}}>
<TextField id="outlined-basic" label="Password" variant="outlined"  name="password" InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <HttpsIcon />
            </InputAdornment>
          ),
        }} onChange={(e)=>setPassword(e.target.value)} />
</FormControl>

<Button type="submit" variant="contained" startIcon={<AccountCircle />} sx={{m:2}}>
  Sign In
</Button>

</form>

</div>

<Snackbar  open={sncbar.open}>
<Alert severity={sncbar.severity} variant="filled" sx={{ width: '100%' }}>{sncbar.msg}
</Alert>
</Snackbar>


</Paper>

</Grid>

</Grid>

</Box>
	)

}

export default Login;