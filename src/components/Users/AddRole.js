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
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';




function AddRole(){

  const [role,setRole]=useState(null)
  const [snack,setSnack]=useState(0);

  const [leads,setLeads]=useState([]);
  const [projects,setProjects]=useState([]);
  const [users,setUsers]=useState([]);
  const [roles,setRoles]=useState([]);
  const [stages,setStages]=useState([]);
  const [status,setStatus]=useState([]);
  const [tags,setTags]=useState([]);
  const [account,setAccount]=useState([]);
  const [pages,setPages]=useState([]);
  const [mcamp,setMcamp]=useState([]);
  const [wcamp,setWcamp]=useState([]);
  const [social,setSocial]=useState([]);
  const [stats,setStats]=useState([]);
  const [msg,setMsg]=useState([]);
  

  
  

  function change_role(e){
    setRole(e.target.value)
  }

  function change_access(e,t){

 
    if(t=='leads'){
      if(leads[e]){setLeads((leads) => ({ ...leads, [e]: '' }));}else{setLeads((leads) => ({ ...leads, [e]: e }));}
      }
      else if(t=='projects'){
        if(projects[e]){setProjects((projects) => ({ ...projects, [e]: '' }));}else{setProjects((projects) => ({ ...projects, [e]: e }));}
        }
        else if(t=='users'){
          if(users[e]){setUsers((users) => ({ ...users, [e]: '' }));}else{setUsers((users) => ({ ...users, [e]: e }));}
          }
          else if(t=='roles'){
            if(roles[e]){setRoles((roles) => ({ ...roles, [e]: '' }));}else{setRoles((roles) => ({ ...roles, [e]: e }));}
            }
            else if(t=='stages'){
              if(stages[e]){setStages((stages) => ({ ...stages, [e]: '' }));}else{setStages((stages) => ({ ...stages, [e]: e }));}
              }
              else if(t=='status'){
                if(status[e]){setStatus((status) => ({ ...status, [e]: '' }));}else{setStatus((status) => ({ ...status, [e]: e }));}
                }
                else if(t=='tags'){
                  if(tags[e]){setTags((tags) => ({ ...tags, [e]: '' }));}else{setTags((tags) => ({ ...tags, [e]: e }));}
                  }
                  else if(t=='account'){
                    if(account[e]){setAccount((account) => ({ ...account, [e]: '' }));}else{setAccount((account) => ({ ...account, [e]: e }));}
                    }
                    else if(t=='pages'){
                      if(pages[e]){setPages((pages) => ({ ...pages, [e]: '' }));}else{setPages((pages) => ({ ...pages, [e]: e }));}
                      }
                      else if(t=='mcamp'){
                        if(mcamp[e]){setMcamp((mcamp) => ({ ...mcamp, [e]: '' }));}else{setMcamp((mcamp) => ({ ...mcamp, [e]: e }));}
                        }
                        else if(t=='wcamp'){
                          if(wcamp[e]){setWcamp((wcamp) => ({ ...wcamp, [e]: '' }));}else{setWcamp((wcamp) => ({ ...wcamp, [e]: e }));}
                          }
                          else if(t=='social'){
                            if(social[e]){setSocial((social) => ({ ...social, [e]: '' }));}else{setSocial((social) => ({ ...social, [e]: e }));}
                            }
                            else if(t=='msg'){
                              if(msg[e]){setMsg((msg) => ({ ...msg, [e]: '' }));}else{setMsg((msg) => ({ ...msg, [e]: e }));}
                              }else{
                              if(stats[e]){setStats((stats) => ({ ...stats, [e]: '' }));}else{setStats((stats) => ({ ...stats, [e]: e }));}
                            }
                
  }


  function submit_form(e){

  e.preventDefault();

  let body_data={"role":role,"leads":leads,"projects":projects,"users":users,"roles":roles,"stages":stages,"status":status,"tags":tags,"account":account,"pages":pages,"mcamp":mcamp,"wcamp":wcamp,"social":social,"stats":stats,"msg":msg}
    

  fetch('http://localhost//demo/demo/php/add_role.php',{method:'post',header:{'Content-type':'application/json'},body:JSON.stringify(body_data)})
  .then((response)=>response.json())
  .then((data)=>{
    if(data==200){
      setSnack(1)
    }else{
      alert('Enter Valid Details');
    }
  })
  .catch((err)=>console.log(err))
  }

return(

<Box>
<form onSubmit={(e)=>submit_form(e)}>
<Paper sx={{borderRadius:'24px'}}>
<Grid container>


<Grid item xs={12} sx={{backgroundColor:'#dde8f8',p:3,borderRadius:3,height:'85vh',overflowY:'scroll'}} elevate='2'>


<p style={{marginLeft:'20px',fontSize:'18px',color:'#193b68'}}>Add New User Role</p>

<Grid container>
<Grid item xs={11}>
<FormControl sx={{p:2,width:'100%'}} >
<TextField label="Role Name" placeholder="Role Name" sx={{m:1}} onChange={(e)=>change_role(e)}></TextField>
</FormControl>
</Grid>
</Grid>


<Grid container>

<Grid item xs={12}>

<p style={{marginLeft:'30px',fontSize:'16px',color:'#193b68'}}>Leads Access & Permissions</p>
<FormControl sx={{pl:2}} >
<FormControlLabel value="contactinfo" control={<Checkbox />} label="Contact Information" labelPlacement="start" onChange={(e)=>change_access(e.target.value,'leads')} />
</FormControl>

<FormControl sx={{pl:2}} >
<FormControlLabel value="feedback" control={<Checkbox />} label="Lead Feedback" labelPlacement="start" onChange={(e)=>change_access(e.target.value,'leads')} />
</FormControl>

<FormControl sx={{pl:2}} >
<FormControlLabel value="details_edit" control={<Checkbox />} label="Lead Details Edit" labelPlacement="start" onChange={(e)=>change_access(e.target.value,'leads')} />
</FormControl>

</Grid>


<Grid item xs={12}>
<p style={{marginLeft:'30px',fontSize:'16px',color:'#193b68'}}>Projects Access & Permissions</p>
<FormControl sx={{pl:2}} >
<FormControlLabel value="view_project" control={<Checkbox />} label="View Projects" labelPlacement="start" onChange={(e)=>change_access(e.target.value,'projects')} />
</FormControl>
<FormControl sx={{pl:2}} >
<FormControlLabel value="edit_project" control={<Checkbox />} label="Edit Project Details" labelPlacement="start" onChange={(e)=>change_access(e.target.value,'projects')} />
</FormControl>
<FormControl sx={{pl:2}} >
<FormControlLabel value="project_details" control={<Checkbox />} label="View Project Details" labelPlacement="start" onChange={(e)=>change_access(e.target.value,'projects')} />
</FormControl>
</Grid>


<Grid item xs={12}>
<p style={{marginLeft:'30px',fontSize:'16px',color:'#193b68'}}>Users Access & Permissions</p>
<FormControl sx={{pl:2}} >
<FormControlLabel value="view_users" control={<Checkbox />} label="View Users" labelPlacement="start" onChange={(e)=>change_access(e.target.value,'users')} />
</FormControl>
<FormControl sx={{pl:2}} >
<FormControlLabel value="edit_users" control={<Checkbox />} label="Edit Users Details" labelPlacement="start" onChange={(e)=>change_access(e.target.value,'users')} />
</FormControl>
<FormControl sx={{pl:2}} >
<FormControlLabel value="add_users" control={<Checkbox />} label="Add New User" labelPlacement="start" onChange={(e)=>change_access(e.target.value,'users')} />
</FormControl>
</Grid>


<Grid item xs={12}>
<p style={{marginLeft:'30px',fontSize:'16px',color:'#193b68'}}>Roles Access & Permissions</p>
<FormControl sx={{pl:2}} >
<FormControlLabel value="view_roles" control={<Checkbox />} label="View User Roles" labelPlacement="start" onChange={(e)=>change_access(e.target.value,'roles')} />
</FormControl>
<FormControl sx={{pl:2}} >
<FormControlLabel value="edit_roles" control={<Checkbox />} label="Edit User Roles" labelPlacement="start" onChange={(e)=>change_access(e.target.value,'roles')} />
</FormControl>
<FormControl sx={{pl:2}} >
<FormControlLabel value="add_roles" control={<Checkbox />} label="Add New Roles" labelPlacement="start" onChange={(e)=>change_access(e.target.value,'roles')} />
</FormControl>
</Grid>


<Grid item xs={12}>
<p style={{marginLeft:'30px',fontSize:'16px',color:'#193b68'}}>Lead Stages Access & Permissions</p>
<FormControl sx={{pl:2}} >
<FormControlLabel value="view_stages" control={<Checkbox />} label="View Stages" labelPlacement="start" onChange={(e)=>change_access(e.target.value,'stages')} />
</FormControl>
<FormControl sx={{pl:2}} >
<FormControlLabel value="edit_stages" control={<Checkbox />} label="Edit Stages" labelPlacement="start" onChange={(e)=>change_access(e.target.value,'stages')} />
</FormControl>
</Grid>

<Grid item xs={12}>
<p style={{marginLeft:'30px',fontSize:'16px',color:'#193b68'}}>Lead Status Access & Permissions</p>
<FormControl sx={{pl:2}} >
<FormControlLabel value="view_status" control={<Checkbox />} label="View Lead Status" labelPlacement="start" onChange={(e)=>change_access(e.target.value,'status')} />
</FormControl>
<FormControl sx={{pl:2}} >
<FormControlLabel value="edit_status" control={<Checkbox />} label="Edit Lead Status" labelPlacement="start" onChange={(e)=>change_access(e.target.value,'status')} />
</FormControl>
<FormControl sx={{pl:2}} >
<FormControlLabel value="add_status" control={<Checkbox />} label="Add New Lead Status" labelPlacement="start" onChange={(e)=>change_access(e.target.value,'status')} />
</FormControl>
</Grid>

<Grid item xs={12}>
<p style={{marginLeft:'30px',fontSize:'16px',color:'#193b68'}}>Lead Tags Access & Permissions</p>
<FormControl sx={{pl:2}} >
<FormControlLabel value="view_tags" control={<Checkbox />} label="View Lead Tags" labelPlacement="start" onChange={(e)=>change_access(e.target.value,'tags')} />
</FormControl>
<FormControl sx={{pl:2}} >
<FormControlLabel value="edit_tags" control={<Checkbox />} label="Edit Lead Tags" labelPlacement="start" onChange={(e)=>change_access(e.target.value,'tags')} />
</FormControl>
<FormControl sx={{pl:2}} >
<FormControlLabel value="add_tags" control={<Checkbox />} label="Add New Tags" labelPlacement="start" onChange={(e)=>change_access(e.target.value,'tags')} />
</FormControl>
</Grid>

<Grid item xs={12}>
<p style={{marginLeft:'30px',fontSize:'16px',color:'#193b68'}}>Facebook Accounts</p>
<FormControl sx={{pl:2}} >
<FormControlLabel value="view_account" control={<Checkbox />} label="View Connected Accounts" labelPlacement="start" onChange={(e)=>change_access(e.target.value,'account')} />
</FormControl>
<FormControl sx={{pl:2}} >
<FormControlLabel value="add_account" control={<Checkbox />} label="Connect New Account" labelPlacement="start" onChange={(e)=>change_access(e.target.value,'account')} />
</FormControl>
</Grid>

<Grid item xs={12}>
<p style={{marginLeft:'30px',fontSize:'16px',color:'#193b68'}}>Facebook Pages</p>
<FormControl sx={{pl:2}} >
<FormControlLabel value="view_page" control={<Checkbox />} label="View Connected Pages" labelPlacement="start" onChange={(e)=>change_access(e.target.value,'pages')} />
</FormControl>
<FormControl sx={{pl:2}} >
<FormControlLabel value="add_page" control={<Checkbox />} label="Connect Page" labelPlacement="start" onChange={(e)=>change_access(e.target.value,'pages')} />
</FormControl>
</Grid>

<Grid item xs={12}>
<p style={{marginLeft:'30px',fontSize:'16px',color:'#193b68'}}>Facebook Campaigns</p>
<FormControl sx={{pl:2}} >
<FormControlLabel value="view_campaign" control={<Checkbox />} label="View Campaigns" labelPlacement="start" onChange={(e)=>change_access(e.target.value,'mcamp')} />
</FormControl>
<FormControl sx={{pl:2}} >
<FormControlLabel value="add_campaign" control={<Checkbox />} label="Add Campaign" labelPlacement="start" onChange={(e)=>change_access(e.target.value,'mcamp')} />
</FormControl>
<FormControl sx={{pl:2}} >
<FormControlLabel value="view_camp_stat" control={<Checkbox />} label="View Campaign Stats" labelPlacement="start" onChange={(e)=>change_access(e.target.value,'stats')} />
</FormControl>
</Grid>

<Grid item xs={12}>
<p style={{marginLeft:'30px',fontSize:'16px',color:'#193b68'}}>Website Campaigns</p>
<FormControl sx={{pl:2}} >
<FormControlLabel value="view_webcampaign" control={<Checkbox />} label="View Campaigns" labelPlacement="start" onChange={(e)=>change_access(e.target.value,'wcamp')} />
</FormControl>
<FormControl sx={{pl:2}} >
<FormControlLabel value="add_webcampaign" control={<Checkbox />} label="Add Campaign" labelPlacement="start" onChange={(e)=>change_access(e.target.value,'wcamp')} />
</FormControl>
</Grid>

<Grid item xs={12}>
<p style={{marginLeft:'30px',fontSize:'16px',color:'#193b68'}}>Social Media</p>
<FormControl sx={{pl:2}} >
<FormControlLabel value="view_insta" control={<Checkbox />} label="View Instagram" labelPlacement="start" onChange={(e)=>change_access(e.target.value,'social')} />
</FormControl>
<FormControl sx={{pl:2}} >
<FormControlLabel value="view_msg" control={<Checkbox />} label="View Messages" labelPlacement="start" onChange={(e)=>change_access(e.target.value,'msg')} />
</FormControl>
</Grid>

</Grid>

<Grid container>
<Grid item xs={12}>
<FormControl sx={{p:2}} >
<Button type="submit" variant="contained" sx={{m:1}} >Add Role</Button>
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
          New Role Added Successfuly !
        </Alert>
      </Snackbar>

      </form>
</Box>

	)

}

export default AddRole;


// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: 'Leads' },
  { label: 'Project' },
  { label: 'users' },
  { label: 'Role' }
];