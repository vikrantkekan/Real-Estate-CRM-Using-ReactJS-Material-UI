import {useState,useEffect} from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

import ProjectBooking from './ProjectBooking';

import Modal from '@mui/material/Modal';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert'
import { useCookies,withCookies } from 'react-cookie';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: '#dde8f8',
  boxShadow: 24,
  p: 3,
  border:'5px solid #fff',
  borderRadius:3,
};

function ProjectInformation(props){

  const [cookies, setCookie,removeCookie] = useCookies(['name','all']);

const [pro_data,set_prodata]=useState(props.data2[0]);

const [pro_data_show,set_prodata_show]=useState(props.data2[0]);

const [editform,setEditform]=useState(0);

const [inputs, setInputs] = useState({});
const [inputs2, setInputs2] = useState({});

const [snack,setSnack]=useState(0);

var u=JSON.stringify(pro_data_show.config);

var p=JSON.parse(JSON.parse(u));

//console.log(pro_data);

function handleChange(event){
    const name = event.target.name;
    const value = event.target.value;
    set_prodata((prevFormData) => ({ ...prevFormData, [name]: value }));
    console.log('First: '+pro_data)
}

function handleChange2(event){

const name = event.target.name;

p.forEach(function(a,b,c){
if(a.id===name){
let type=document.getElementById("type"+name).value;
let size=document.getElementById("size"+name).value;
let price=document.getElementById("price"+name).value;

 //alert(type+' '+size+' '+price+' ')

c[b]['type']=type;
c[b]['sizes']=size;
c[b]['prices']=price;
 
    p[b]=c[b]
    //console.log(p[b])

}
})

//console.log('change1: '+pro_data.config)
let o=JSON.stringify(p);

set_prodata((prevFormData) => ({ ...prevFormData, ['config']: o }));
//console.log('change2: '+pro_data.config)

}

function handleClose(){
   setEditform(0)
}

function open_edit(){
  if(cookies.all.uroles[0].projects.indexOf("edit_project")!=-1){
    setEditform(1)
  }
}


 function submit_data(event){
    event.preventDefault();
    
let post_data=JSON.stringify(pro_data);

console.log('Pro Data: '+post_data);

//http://localhost:3030/ProjectUpdate/Project/
//http://localhost/crm/php/update-project-info.php

    fetch('http://localhost//demo/demo/php/update-project-info.php',{
    method: 'POST',
    header: {'Content-Type':'application/json'},
    body: post_data,
   })
    .then((response)=>response.json())
    .then((data)=>{
        if(data==200){
          set_prodata_show(pro_data); 
          setSnack(1)
          //window.location.reload(); 
        }
        console.log(data)
    })
    .catch((err)=>console.log(err))
  
  };

if(props.data==='Project Info'){


const q=p.map((it)=>{
     return <Grid item xs={6}>
    <Typography variant="body1" component="div" sx={{color:'#383838',padding:1}}>
       {it.type} Size: <b>{it.sizes}</b>
    </Typography>
     <Typography variant="body1" component="div" sx={{color:'#383838',padding:1}}>
       {it.type} Price: <b>₹{it.prices}</b>
    </Typography>
    </Grid>
})

const v=p.map((i,ind)=>{

    return <Grid container>
<Grid item xs={4}>
<FormControl sx={{p:2,width:'100%'}} >
<TextField id={'type'+i.id} label="Type" defaultValue={i.type} placeholder="Type" name={i.id} sx={{m:1}} required onChange={(e)=>handleChange2(e)}></TextField>
</FormControl>
</Grid>
<Grid item xs={4}>
<FormControl sx={{p:2,width:'100%'}}>
<TextField id={'size'+i.id} label="Size" defaultValue={i.sizes} placeholder="Size" name={i.id} sx={{m:1}} required onChange={(e)=>handleChange2(e)}></TextField>
</FormControl>
</Grid>
<Grid item xs={4}>
<FormControl sx={{p:2,width:'100%'}}>
<TextField id={'price'+i.id} label="Price" defaultValue={i.prices} placeholder="Price" name={i.id} sx={{m:1}} required onChange={(e)=>handleChange2(e)}></TextField>
</FormControl>
</Grid>
</Grid>

})

return(

<Box>

<Grid container>

<Grid item xs={6} sx={{p:1}}>

<Card sx={{ width:'100%',backgroundColor:'#dde8f8'}}>

 <CardHeader title={pro_data_show.project_name} subheader={pro_data_show.location}  action={
          <Button aria-label="Edit Information" onClick={()=>open_edit()}>Edit</Button>
        }/>

<CardContent sx={{backgroundColor:'#fff'}}>

 <Grid container>

<Grid item xs={6}>
   <Typography variant="body1" component="div" sx={{color:'#383838',padding:1}}>
      <span> Rera :</span> <b>{pro_data_show.rera}</b>
    </Typography>

     <Typography variant="body1" component="div" sx={{color:'#383838',padding:1}}>
        Project Area : <b>{pro_data_show.projectarea}</b>
    </Typography>

    <Typography variant="body1" component="div" sx={{color:'#383838',padding:1}}>
        Floors : <b>{pro_data_show.floors}</b>
    </Typography>

</Grid>

<Grid item xs={6}>
 <Typography variant="body1" component="div" sx={{color:'#383838',padding:1}}>
        Possesion : <b>{pro_data_show.possesion}</b>
    </Typography>
 <Typography variant="body1" component="div" sx={{color:'#383838',padding:1}}>
        Total Units : <b>{pro_data_show.units}</b>
    </Typography>
     <Typography variant="body1" component="div" sx={{color:'#383838',padding:1}}>
        Rem. Units : <b>{pro_data_show.rem_units}</b>
    </Typography>
</Grid>

{q}

</Grid>

</CardContent>


  </Card>

</Grid>

<Grid item xs={6} sx={{p:1}}>
<ProjectBooking/>
</Grid>


</Grid>

<Modal
        open={editform}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
 
<form onSubmit={(e)=>submit_data(e)}> 
<Grid container>
<Grid item xs={6}>
<FormControl sx={{p:2,width:'100%'}} >
<TextField label="Project Name" defaultValue={props.data2[0].project_name} placeholder="Project Name" name="project_name" sx={{m:1}} required onChange={(e)=>handleChange(e)}></TextField>
</FormControl>
</Grid>
<Grid item xs={6}>
<FormControl sx={{p:2,width:'100%'}}>
<TextField label="Project Location" defaultValue={props.data2[0].location} placeholder="Location" name="location" sx={{m:1}} required onChange={(e)=>handleChange(e)}></TextField>
</FormControl>
</Grid>
</Grid>

<Grid container>
<Grid item xs={6}>
<FormControl sx={{p:2,width:'100%'}} >
<TextField label="Project Area" defaultValue={props.data2[0].projectarea} placeholder="Project Area" name="projectarea" sx={{m:1}} required onChange={(e)=>handleChange(e)}></TextField>
</FormControl>
</Grid>
<Grid item xs={6}>
<FormControl sx={{p:2,width:'100%'}}>
<TextField label="Project RERA" defaultValue={props.data2[0].rera} placeholder="RERA" name="rera" sx={{m:1}} required onChange={(e)=>handleChange(e)}></TextField>
</FormControl>
</Grid>
</Grid>

<Grid container>
<Grid item xs={4}>
<FormControl sx={{p:2,width:'100%'}} >
<TextField label="No. of Floors" defaultValue={props.data2[0].floors} placeholder="No. of Floors" name="floors" sx={{m:1}} required onChange={(e)=>handleChange(e)}></TextField>
</FormControl>
</Grid>
<Grid item xs={4}>
<FormControl sx={{p:2,width:'100%'}}>
<TextField label="Total Units" defaultValue={props.data2[0].units} placeholder="Total Units" name="units" sx={{m:1}} required onChange={(e)=>handleChange(e)}></TextField>
</FormControl>
</Grid>
<Grid item xs={4}>
<FormControl sx={{p:2,width:'100%'}}>
<TextField label="Possesion" defaultValue={props.data2[0].possesion} placeholder="Possesion" name="possesion" sx={{m:1}} required onChange={(e)=>handleChange(e)}></TextField>
</FormControl>
</Grid>
</Grid>

{v}

<Button type="submit" variant="contained" sx={{ml:3}}>Submit</Button>
</form> 

<Snackbar
        anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
        open={snack} 
        autoHideDuration={4000}
        onClose={()=>setSnack(0)}
      >
 <Alert
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Data Updated Successfully !
        </Alert>
      </Snackbar>

</Box>
      </Modal>

</Box>

)

}
else{

	return(
		<div>NAN</div>
		)
}
	

}

export default ProjectInformation;