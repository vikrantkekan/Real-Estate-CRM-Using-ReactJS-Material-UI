import {useState,useEffect } from 'react'
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
import {getFacebookLoginStatus,initFacebookSdk,fbLogin,} from "./FacebookSDK";
import { useCookies,withCookies } from 'react-cookie';

function Connectnewuser(){

const [cookies, setCookie,removeCookie] = useCookies(['name','all']);

const [status,setStatus]=useState('Active')
const [user, setUser] = useState({})

	function change_status(e){
setStatus(e.target.value)
	}

 useEffect(() => {

   (function(d, s, id){
                              var js, fjs = d.getElementsByTagName(s)[0];
                              if (d.getElementById(id)) {return;}
                              js = d.createElement(s); js.id = id;
                              js.src = "https://connect.facebook.net/en_US/sdk.js";
                              fjs.parentNode.insertBefore(js, fjs);
                            }(document, 'script', 'facebook-jssdk')
        );

    console.log("Started use effect");
    initFacebookSdk().then(() => {
      getFacebookLoginStatus().then((response) => {
        if (response == null) {
          console.log("No login status for the person");
        } else {
          console.log('existing login:'+response);
        }
      });
    });
  }, []);


  function login() {
const promis= new Promise((resolve, reject)=>{

console.log("reached log in button");
    fbLogin().then((response) => {
      console.log(response);

      if (response.status === "connected") {
        console.log("Person is connected");

          console.log(response.authResponse.userID);
         // console.log(response.authResponse.accessToken);
         // console.log(response.extra.name);
         // console.log(response.extra.email);

          resolve(response)

      } else {
        // something
      }
    });

})

promis.then((resp)=> {
  setUser(
    {"userid":resp.authResponse.userID,
    "name":resp.extra.name,
    "email":resp.extra.email,
    "token":resp.authResponse.accessToken
  });
  
  return resp;
}
).then((resp)=>{
  get_long_lived(resp.authResponse.userID,resp.authResponse.accessToken,resp.extra.name,resp.extra.email)
}
  )

  }

function get_long_lived(u,t,n,e){

const post_data={"userid":u,"name":n,"email":e,"token":t,'clie':cookies.all.clie};

 let post_data2=JSON.stringify(post_data);
console.log(post_data2);

fetch('http://localhost//demo/demo/php/fb/long-lived-user.php',
  {
    method:'post',
    headers:{'Content-Type': 'application/json'},
    body:post_data2,
})
.then((response)=>response.json())
.then((data)=>{
  console.log(data)
  if(data=='success'){
    alert('User Account Connected Successfully');
    window.location.reload();
  }
})
.catch((err)=>console.log(err))


}

return(

<Box sx={{backgroundColor:'#dde8f8',p:3,borderRadius:3}}>


  
<Grid container>
<p style={{color:'#193b68',fontSize:'18px'}}>Select, Facebook Account to Proceed</p>
<Grid item xs={12}>
<Button onClick={login} variant="contained">Login</Button>
</Grid>
</Grid>

</Box>

)

}

export default Connectnewuser; 

