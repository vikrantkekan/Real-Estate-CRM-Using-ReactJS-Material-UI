
import {useState,useEffect} from 'react';

import Box from '@mui/material/Box'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimeField } from '@mui/x-date-pickers/TimeField';
import Button from '@mui/material/Button';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LoadingButton from '@mui/lab/LoadingButton';
import Rating from '@mui/material/Rating';
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import InputLabel from '@mui/material/InputLabel'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'


function LeadFeedBack(props){

   const [value, setValue] = useState(2);
   const [input,setInput]=useState([]);

   const [label, setLabel] = useState('Fresh');
   const [tag, setTag] = useState('Call Back');
   const [snack,setSnack]=useState(0)
   const[aler,setAlert]=useState({"severity":"success","msg":"..."})

   useEffect(()=>{
     let ondate=new Date();
      let ondate2=ondate.getMonth()+1+'/'+ondate.getDate()+'/'+ondate.getFullYear()

    setInput((prev)=>({['tag']:tag,['lstatus']:label,['cmt']:'',['rating']:3,['lid']:props.data,['uid']:1,['ondate']:ondate2}))
   },[])
   

   function handleChange(e){
    setLabel(e.target.value)
    change_input(e)
   }

   function handleChangeTag(e){
    setTag(e.target.value)
    change_input(e)
   }
   function handleDateTimeChange(e,t){
    let dat=new Date(e);
    if(t=='date'){
      let y=dat.getMonth()+1+'/'+dat.getDate()+'/'+dat.getFullYear()
      let b={"target":{"name":"date","value":y}}
       change_input(b)
    }
    else if(t=='time'){
      let y=dat.getHours()+':'+dat.getMinutes()
      let b={"target":{"name":"time","value":y}}
       change_input(b)
    }
   }

   function handleRating(e){
    setValue(e.target.value)
    change_input(e)
   }

function change_input(e){
  let name=e.target.name;
  let value=e.target.value;
  setInput((prev)=>({...prev,[name]:value}))
}
   function submit_form(e){
      e.preventDefault();
     
     if(input.date){

      let postdata=JSON.stringify(input);

   fetch('http://localhost//demo/demo/php/update_followup.php',{
    method:'post',
    header:{'Content-Type': 'application/json'},
    body:postdata,
    }
    )
   .then((response)=>response.json())
   .then((data)=>{
    console.log(data)
    if(data===200){
      setAlert({'severity':'success','msg':'Followup Recorded Successfully'})
      setSnack(1);
      //window.location.reload()
      props.callback(input);
      
    }else{
setAlert({'severity':'error','msg':'Error!,Please Check All Fields'})
setSnack(1);
    }
  })
   .catch((err)=>console.log(err))

}else{
  setAlert({'severity':'error','msg':'Error!,Please Check All Fields'})
  setSnack(1);
}



 }


return(

<Box sx={{borderRadius:'15px'}}>
<p style={{fontSize:'24px',padding:'12px',margin:'12px',fontWeight:600}} >Update Feedback</p> 

<form onSubmit={(e)=>submit_form(e)}>
<FormControl>
 <InputLabel id="demo-simple-select-label" sx={{ margin:2}}>Lead Status</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={label}
    label="Lead Status"
    onChange={(e)=>handleChange(e)}
    sx={{ margin:2,width: '12.5vw' }}
    name="lstatus">
   {props.status.map((itm)=><MenuItem value={itm.statu}>{itm.statu}</MenuItem>)}
  </Select>
</FormControl>

<FormControl>
 <InputLabel id="demo-simple-select-label" sx={{ margin:2}}>Tag</InputLabel>
  <Select
    labelId="demo-simple-select-tag"
    id="demo-simple-select-tag"
    value={tag}
    label="Tag"
    onChange={(e)=>handleChangeTag(e)}
    sx={{ margin:2,width: '12.5vw' }}
    name="tag">
   {props.tags.map((itm)=><MenuItem value={itm.tag_name}>{itm.tag_name}</MenuItem>)}
  </Select>
</FormControl>

<br/>

<FormControl>
<LocalizationProvider dateAdapter={AdapterDayjs}>
<DatePicker label="Followup Date" sx={{margin:2,width:'12.5vw'}} name="nxtfoll" value="" onChange={(e,c)=>handleDateTimeChange(e,'date')} required /> 
</LocalizationProvider>
</FormControl>

<FormControl>
<LocalizationProvider dateAdapter={AdapterDayjs}>
<TimeField label="Followup Time" sx={{margin:2,width:'12.5vw'}} name="folltime" onChange={(e,c)=>handleDateTimeChange(e,'time')}  /> 
</LocalizationProvider>
</FormControl>

<FormControl>
<TextField
          id="outlined-textarea"
          label="Comment"
          placeholder="Comment"
          multiline 
          rows={4}
          sx={{ margin:2,width: '27vw' }}
        name="cmt" onChange={(e)=>change_input(e)} />
</FormControl> 

<div style={{backgroundColor:'#f0f0f0',margin:'12px',padding:'5px'}}>
<FormControl>
<span style={{marginLeft:25,fontSize:16}}>Rating</span>
</FormControl>
<FormControl>
<Rating name="rating" value={value}  onChange={(event) =>handleRating(event)} sx={{ marginLeft:2}}/>  
</FormControl> 
</div>
<br/>
<FormControl>
 <Button type="submit" endIcon={<CheckCircleOutlineIcon />} variant="contained" sx={{ margin:2}}>Updating
 </Button> 

</FormControl> 

</form>

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

 </Box>

	)

}

export default LeadFeedBack;

