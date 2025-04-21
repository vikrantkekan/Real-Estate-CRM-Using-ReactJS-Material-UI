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

//const usid='2098810197137245';
//const ucid='34';

const [cookies, setCookie,removeCookie] = useCookies(['name','all']);

const [projects,setprojects]=useState([])
const [selproject,setselproject]=useState(null)

const [adaccount,setAdaccount]=useState([])

const [seladaccount,setseladaccount]=useState(null)

const [campaignlist,setCampaign]=useState([])


const [adlist,setadlist]=useState([])
const [ad,setad]=useState([])

const [page,setPage]=useState(null)

const [pagelist,setPagelist]=useState([])

const [campaign,setCamp]=useState(null)

const [formlist,setFormlist]=useState([])

const [form,setForm]=useState([])

const [formfields,setFormfields]=useState([])
const [formfieldsdb,setFormfieldsdb]=useState([])
const [formmap,setformmap]=useState({})

const [submit_form,setsubmit_form]=useState([])

const [snack,setSnack]=useState(0);


function project_changed(e){

  let clie={"clie":cookies.all.clie}
  
  setselproject(e.target.value);

fetch('http://localhost//demo/demo/php/connection.php',{method:'post',header:{'Content-Type':'application/json'},body:JSON.stringify(clie)})
.then((response2)=>response2.json())
.then((data2)=>{

setPagelist(data2)
console.log('Page List')
console.log(data2[0]['fusid'])

setsubmit_form((prev)=>({...prev,['pid']:e.target.value,['ucid']:data2[0]['uconid'],['forclie']:cookies.all.clie}))

})
.catch((err)=>console.log(err));

}

  function page_changed(e){
    setPage(e.target.value);

    fetch_ad_account(e.target.value);

  }

	function change_adaccount(e){

setseladaccount(e.target.value)

let url='https://graph.facebook.com/v19.0/'+e.target.value+'/campaigns?fields=name&access_token='+page

fetch(url)
.then((response3)=>response3.json())
.then((data3)=>{
setCampaign(data3.data)
})
.catch((err)=>console.log(err))

setsubmit_form((prev)=>({...prev,['account_id']:e.target.value,['acc_tok']:page}))

}


function change_campaign(e){
  setCamp(e.target.value)


for(let k in pagelist){
  if(pagelist[k]['token']==page){

    let pageid=pagelist[k]['pageid'];

let url4='https://graph.facebook.com/v19.0/'+pageid+'/leadgen_forms?access_token='+page

fetch(url4)
.then((response4)=>response4.json())
.then((data4)=>{
  setFormlist(data4.data);

 setsubmit_form((prev)=>({...prev,['pageid']:pageid,['camp_id']:e.target.value,['connect']:pagelist[k]['cid']}))

})
.catch((err)=>console.log(err))


  }
}


let url5='https://graph.facebook.com/v19.0/'+e.target.value+'/ads?fields=name&access_token='+page
fetch(url5)
.then((response5)=>response5.json())
.then((data5)=>{
  setadlist(data5.data);
})
.catch((err)=>console.log(err))



}


function change_ads(e){
  setad(e.target.value);

  setsubmit_form((prev)=>({...prev,['adid']:e.target.value}))
}

function change_form(e){

  setForm(e.target.value)
  let url='https://graph.facebook.com/v19.0/'+e.target.value+'?fields=questions&access_token='+page;

  fetch(url).then((response)=>response.json())
  .then((data5)=>{
    setFormfields(data5.questions)
  setsubmit_form((prev)=>({...prev,['form_id']:e.target.value,['form_field']:data5.questions}))


  })
  .catch((err)=>console.log(err));

}



useEffect(()=>{

fetch('http://localhost//demo/demo/php/form_fields.php')
.then((response21)=>response21.json())
.then((data21)=>{
setFormfieldsdb(data21)
})
.catch((err)=>console.log(err));

fetch('http://localhost//demo/demo/php/projects.php?project_access='+cookies.all.project_access)
.then((response212)=>response212.json())
.then((data212)=>{
setprojects(data212)
})
.catch((err)=>console.log(err));


},[])



function fetch_ad_account(ptoken){

  let url='https://graph.facebook.com/v19.0/'+pagelist[0]['fusid']+'/adaccounts?fields=name&access_token='+ptoken

fetch(url)
.then((response)=>response.json())
.then((data)=>{
  console.log(data)
  setAdaccount(data.data)

})
.catch((err)=>console.log(err))

}


function change_form_map(e,l){

setformmap((prev)=>({...prev,[l]:e.target.value}));

let old_data=formmap;

old_data[l]=e.target.value;

setsubmit_form((prev)=>({...prev,['form_map']:old_data}));

}




function submit_campaign(){

//pageid,camp_name,form_id,form_name,camp_form,created_date,created_by,platform,connect,account_id,camp_id

 //error in last field get

console.log(submit_form)

let post_data=JSON.stringify(submit_form);

fetch('http://localhost//demo/demo/php/fb/submit_campaign.php',{
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

const staticformfields=formfieldsdb.map((itm)=><MenuItem value={itm.col_name}>{itm.txt_name}</MenuItem>);

const adaccountlist=adaccount.map((itm)=><MenuItem value={itm.id}>{itm.name} ({itm.id.replace('act_','')})</MenuItem>)

const allpagelist=pagelist.map((itm)=><MenuItem value={itm.token}>{itm.page}</MenuItem>)

const allcampaignlist=campaignlist.map((itm)=><MenuItem value={itm.id}>{itm.name}</MenuItem>)

const alladslist=adlist.map((itm)=><MenuItem value={itm.id}>{itm.name}</MenuItem>);


const allleadforms=formlist.map((itm)=><MenuItem value={itm.id}>{itm.name}</MenuItem>)

const allformfields=formfields.map((itm)=>{
  let k=itm.key
  return <Grid item xs={6}>
<FormControl sx={{p:2,width:'100%'}} >
  <InputLabel id="demo-simple-select-label" sx={{p:2}}>{itm.key}</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={formmap[k]}
    label={itm.key}
    onChange={(e)=>change_form_map(e,itm.key)}
    sx={{m:1}}
  >

 {staticformfields}

  </Select>
</FormControl>
</Grid>
})

return(

<Box>

<Paper sx={{borderRadius:'24px'}}>
<Grid container>

<Grid item xs={12} sx={{backgroundColor:'#dde8f8',p:3,borderRadius:3}} elevate='2'>

<p style={{marginLeft:'20px',fontSize:'18px',color:'#193b68'}}>Add New Campaign</p>

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
  <InputLabel id="demo-simple-select-label" sx={{p:2}}>Select Page</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={page}
    label="Select Page"
    onChange={(e)=>page_changed(e)}
    sx={{m:1}}
  >

 {allpagelist}

  </Select>
</FormControl>
</Grid>

<Grid item xs={6}>
<FormControl sx={{p:2,width:'100%'}} >
  <InputLabel id="demo-simple-select-label" sx={{p:2}}>Select Ad Account</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={seladaccount}
    label="Select Ad Account"
    onChange={(e)=>change_adaccount(e)}
    sx={{m:1}}
  >

 {adaccountlist}

  </Select>
</FormControl>
</Grid>

<Grid item xs={6}>
<FormControl sx={{p:2,width:'100%'}} >
  <InputLabel id="demo-simple-select-label" sx={{p:2}}>Select Campaign</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={campaign}
    label="Select Campaign"
    onChange={(e)=>change_campaign(e)}
    sx={{m:1}}
  >
 {allcampaignlist}
  </Select>
</FormControl>
</Grid>

</Grid>

<Grid container>

<Grid item xs={6}>
<FormControl sx={{p:2,width:'100%'}} >
  <InputLabel id="demo-simple-select-label" sx={{p:2}}>Select Ad</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={ad}
    label="Select Ad"
    onChange={(e)=>change_ads(e)}
    sx={{m:1}}
  >
 {alladslist}
  </Select>
</FormControl>
</Grid>

<Grid item xs={6}>
<FormControl sx={{p:2,width:'100%'}} >
  <InputLabel id="demo-simple-select-label" sx={{p:2}}>Select Lead Form</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={form}
    label="Select Lead Form"
    onChange={(e)=>change_form(e)}
    sx={{m:1}}
  >
 {allleadforms}
  </Select>
</FormControl>
</Grid>

</Grid>


<Grid container>
{allformfields}

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

