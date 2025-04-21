import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LoadingButton from '@mui/lab/LoadingButton';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

import {useState,useEffect} from 'react'

function FullInformationForm(props){

	const [stage, setStage] = useState('Marketing Stage');

  const handleChangeStage = (event) => {
    setStage(event.target.value);
  };

  const [dat,setDat]=useState(props.data.allinfo);
  const [snack,setSnack]=useState(0)
  const[aler,setAlert]=useState({"severity":"success","msg":"..."})


let old={"idl":dat.idl,"name":dat.name,"email":dat.email,"mobile":dat.mobile,"wanumber":dat.wanumber,"location":dat.location,"profession":dat.profession,"interested":dat.interested,"budget":dat.budget}

const [input,setinput]=useState(old)
let changed_data={}

useEffect(()=>{
let ondate=new Date();
let ondate2=ondate.getMonth()+1+'/'+ondate.getDate()+'/'+ondate.getFullYear()
setinput((prev)=>({...prev,['uid']:1,['ondate']:ondate2,['changed']:changed_data}))
},[])
  


function changeinput(e,v){
  
  e.preventDefault()
  let name1=e.target.name;
  let value1=e.target.value;

if(value1!=old[name1]){
  let a=old[name1]+'=>'+value1

//setchanged_data((prv)=>({...changed_data,[name1]:a}));

input["changed"][name1]=a

setinput((prev)=>({...prev,[name1]:value1}))

  }

}

function submit_form1(e){
  
  e.preventDefault()
console.log(input)
let post_data=JSON.stringify(input);


fetch('http://localhost//demo/demo/php/update_lead.php',{
  method:"post",
  header:{"Content-Type":"application/json"},
  body:post_data,
})
.then((response)=>response.json())
.then((data)=>{
  console.log(data)

  if(data===200){
      setAlert({'severity':'success','msg':'Edited Successfully'})
      setSnack(1);
      props.callback(input);
      //window.location.reload()
    }else{
setAlert({'severity':'error','msg':'Error!,Please Check All Fields'})
setSnack(1);
    }

})
.catch((err)=>console.log(err))

}

return(

<Box sx={{p:3}}>

<Paper sx={{backgroundColor:'#f0f0f0',p:3}}>

<Snackbar
        anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
        open={snack} 
        autoHideDuration={4000}
        onClose={()=>setSnack(0)}
      >
 <Alert severity={aler.severity} variant="filled" sx={{ width: '100%' }}>
          {aler.msg}
        </Alert>
      </Snackbar>

<h2 style={{paddingLeft:'6px',color:'#193b68'}}>Personal Information</h2>

<form onSubmit={(e)=>submit_form1(e)}>

<FormControl sx={{p:1}}>
<TextField placeholder="Full Name" label="Full Name" size="small" name="name" defaultValue={dat.name} required onChange={(e)=>changeinput(e)}></TextField>
</FormControl>

<FormControl sx={{p:1}}>
<TextField placeholder="Email" label="Email" size="small" name="email" defaultValue={dat.email} required onChange={(e)=>changeinput(e)}></TextField>
</FormControl>

<FormControl sx={{p:1}}>
<TextField placeholder="Phone Number" label="Phone Number" size="small" name="mobile" defaultValue={dat.mobile} required onChange={(e)=>changeinput(e)}></TextField>
</FormControl>

<FormControl sx={{p:1}}>
<TextField placeholder="Whatsapp Number" label="Whatsapp Number" size="small" name="wanumber" defaultValue={dat.wanumber} onChange={(e)=>changeinput(e)}></TextField>
</FormControl>

<FormControl sx={{p:1}}>
<TextField placeholder="Location" label="Location" size="small" name="location" defaultValue={dat.location} onChange={(e)=>changeinput(e)}></TextField>
</FormControl>

<FormControl sx={{p:1}}>
<TextField placeholder="Profession" label="Profession" size="small" name="profession" defaultValue={dat.profession} onChange={(e)=>changeinput(e)}></TextField>
</FormControl>

<FormControl sx={{p:1}}>
<TextField placeholder="Enquiry For" label="Enquiry For" size="small" name="interested" defaultValue={dat.interested} onChange={(e)=>changeinput(e)}></TextField>
</FormControl>

<FormControl sx={{p:1}}>
<TextField placeholder="Budget" label="Budget" size="small" name="budget" defaultValue={dat.budget} onChange={(e)=>changeinput(e)}></TextField>
</FormControl>

<FormControl>
 <Button type="submit"  endIcon={<CheckCircleOutlineIcon />} variant="contained" sx={{ margin:2}}>Update
 </Button> 

</FormControl> 

</form>

</Paper>



<Paper sx={{backgroundColor:'#f0f0f0',p:3,mt:1}}>

<h2 style={{paddingLeft:'6px',color:'#193b68'}}>Lead Information</h2>

<FormControl sx={{p:1}}>
<TextField placeholder="Project" label="Project" size="small" value="Project"></TextField>
</FormControl>

<FormControl sx={{p:1}}>
<TextField placeholder="Platform/Campaign" label="Platform/Campaign" size="small" value="Platform/Campaign"></TextField>
</FormControl>


<FormControl sx={{p:1}}>
<TextField placeholder="On Date" label="On Date" size="small" value="12-12-2023"></TextField>
</FormControl>


<FormControl sx={{p:1}}>
<TextField placeholder="Lead Score" label="Lead Score" size="small" value="5"></TextField>
</FormControl>

<FormControl sx={{p:1}}>
<TextField placeholder="Last Followup By" label="Last Followup By" size="small" value="Last Followup By"></TextField>
</FormControl>


<FormControl sx={{p:1}}>
<TextField placeholder="Call Back" label="Call Back" size="small" value="Call Back"></TextField>
</FormControl>

<FormControl sx={{p:1}}>
<TextField placeholder="Last Followup Date" label="Last Followup Date" size="small" value="12-01-2024"></TextField>
</FormControl>

<FormControl sx={{p:1}}>
<InputLabel id="demo-simple-select-label">Stage</InputLabel>
  <Select
  labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={stage}
    label="Stage"
    size="small"
    onChange={(e)=>handleChangeStage(e)}
  >
    <MenuItem value={'Marketing Stage'}>Marketing Stage</MenuItem>
    <MenuItem value={'Sales Stage'}>Sales Stage</MenuItem>
    <MenuItem value={'Bargaining Stage'}>Bargaining Stage</MenuItem>
  </Select>
</FormControl>

<FormControl>
 <LoadingButton loadingPosition="end" endIcon={<CheckCircleOutlineIcon />} variant="contained" sx={{ margin:2}}>Update
 </LoadingButton> 

</FormControl> 


</Paper>


</Box>

	)

}

export default FullInformationForm