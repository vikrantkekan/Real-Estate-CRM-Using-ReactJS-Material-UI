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
import { useCookies,withCookies } from 'react-cookie';

function ConnectPage(props){

  const [cookies, setCookie,removeCookie] = useCookies(['name','all']);

const [status,setStatus]=useState('Active')
const [pages, setPages] = useState([])

const [p, setP] = useState({});

const[udata,setUdata]=useState({});



const handleChange = (event) => {
    setP({"pid":event.target.value});

    let pid=event.target.value;

for(let k in pages){
if(pid===pages[k]['id']){
  console.log('New page id event: '+pages[k]['id']);
  let pro=new Promise((resolve,reject)=>{
    
    resolve()
  }
  )
  pro.then(()=>setP({"pid":pid,"pname":pages[k]['name'],"paccess":pages[k]['access_token'],"tasks":pages[k]['tasks'],"uconid":udata.ucid,"fusid":udata.useid,"clie":cookies.all.clie}))
  
}
}

};


 useEffect(()=>{
let url='http://localhost//demo/demo/php/user_connections.php?uid='+cookies.all.clie;
fetch(url)
.then((response)=>response.json())
.then((data)=>{
  let tok=data[0].tokenu;
  setUdata({"ucid":data[0].ucid,"useid":data[0].useid,"tokenu":data[0].tokenu})
  if(tok){
get_pages(tok,data[0].useid)
//set ucid and ussid and uctoken;
  }
  console.log('data for pages')
console.log(data);
})
.catch((err)=>console.log(err));
},[])


 function get_pages(tok,useid){

  console.log('get pages started: '+tok);
  let url2='https://graph.facebook.com/v19.0/'+useid+'/accounts?access_token='+tok;
  fetch(url2)
  .then((response2)=>response2.json())
  .then((data2)=>{
    setPages(data2.data);
    console.log(data2)
  }
    );

 }

console.log('p state:'+JSON.stringify(p))

const page_list=pages.map((itm)=>{
console.log('page name: '+itm.name);
console.log('page id: '+itm.id);
console.log('page access_token: '+itm.access_token);
console.log('TASK: '+itm.tasks);
 return <MenuItem value={itm.id}>{itm.name}</MenuItem>
});


function add_page(){

 let post_data2=JSON.stringify(p);
console.log(post_data2);

fetch('http://localhost//demo/demo/php/fb/long-lived-page.php',
  {
    method:'post',
    headers:{'Content-Type': 'application/json'},
    body:post_data2,
})
.then((response)=>response.json())
.then((data)=>{
  console.log(data)
  if(data=='success'){
    alert('Page Connected Successfully');
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
<FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Select Page</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={p.pid}
    label="Select Page"
    onChange={handleChange}
  >
   {page_list}
 
  </Select>
</FormControl>
</Grid>

<Grid item xs={12}>
<Button variant="contained" sx={{mt:3}} onClick={()=>add_page()}>ADD PAGE</Button>
</Grid>

</Grid>

</Box>

)

}

export default ConnectPage; 

