import {useState,useEffect} from 'react'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableFooter from '@mui/material/TableFooter'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'

import TablePagination from '@mui/material/TablePagination'

import Chip from '@mui/material/Chip'
import EditIcon from '@mui/icons-material/Edit';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import Tooltip from '@mui/material/Tooltip';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';

import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

import EditUsers from './EditUsers';
import AddRole from './AddRole';
import { useCookies,withCookies } from 'react-cookie';

function UserRoles(){

  const [cookies, setCookie,removeCookie] = useCookies(['name','all']);

  const [page,setPage]=useState(0)
  const [rowsperpage,setrowsperpage]=useState(10)

	const [editmodal,setEditmodal]=useState(0);
  const [addmodal,setAddmodal]=useState(0);
  const [roles,setRoles]=useState([])

  function handlepagechange(e,page){
    setPage(page)
  }

function handlerowschange(e){
    setrowsperpage(e.target.value)
  }

	function handle_edit_modal(v){
    if(cookies.all.uroles[0].user_roles.indexOf("edit_roles")!=-1){
		if(editmodal===0){
			setEditmodal(1)
		}else{
			setEditmodal(0)
		}
  }
	}

  function handle_add_modal(v){
    if(cookies.all.uroles[0].user_roles.indexOf("add_roles")!=-1){
    if(addmodal===0){
      setAddmodal(1)
    }else{
      setAddmodal(0)
    }
  }
  }

  useEffect(()=>{

    if(cookies.all.uroles[0].user_roles){
fetch('http://localhost//demo/demo/php/user_roles.php?clie='+cookies.all.clie)
.then((response)=>response.json())
.then((data)=>{
  console.log(data)
  setRoles(data);
}
  )
.catch((err)=>console.log(err))
    }
  },[]);


let alldata=roles.map((it,id,arr)=>{
let msg="Active";
let col="success";

return <TableRow>

<TableCell align="left">#{it.roleid}</TableCell>
<TableCell align="left">{it.roleid}</TableCell>
<TableCell align="left">
{it.role_name}
</TableCell>
<TableCell align="left">
  <p><span style={{color:'#193b68'}}>Leads:</span> {it.leads}</p>
  <p><span style={{color:'#193b68'}}>Projects:</span> {it.projects}</p>
  <p><span style={{color:'#193b68'}}>Users:</span> {it.users}</p>
  <p><span style={{color:'#193b68'}}>User Roles:</span> {it.user_roles}</p>
  <p><span style={{color:'#193b68'}}>Lead Stages:</span> {it.lead_stages}</p>
  <p><span style={{color:'#193b68'}}>Lead Status:</span> {it.lead_status}</p>
  <p><span style={{color:'#193b68'}}>Lead Tags:</span> {it.lead_tags}</p>
  <p><span style={{color:'#193b68'}}>Facebook Account:</span> {it.meta_account}</p>
  <p><span style={{color:'#193b68'}}>Facebook Pages:</span> {it.meta_pages}</p>
  <p><span style={{color:'#193b68'}}>Facebook Campaigns:</span> {it.meta_campaign} {it.campaign_stat}</p>
  <p><span style={{color:'#193b68'}}>Website Campaigns:</span> {it.website_campaign}</p>
  <p><span style={{color:'#193b68'}}>Social Media:</span> {it.insta} {it.msg}</p>

</TableCell>
<TableCell align="left">
<Chip label={msg} color={col} variant="outlined"></Chip>
</TableCell>

</TableRow>
}
)

	return(
<Box sx={{pt:10}}>

<span style={{float:'left',margin:'25px',marginTop:'35px',fontSize:'18px',fontWeight:600}}>User Roles</span>

<Button variant="outlined" startIcon={<AddIcon />} sx={{float:'right',m:3}} onClick={handle_add_modal}>
Add New User Role
</Button>

<TableContainer>
<Table>
<TableHead>

<TableRow>

<TableCell align="left" sx={{backgroundColor:'#f4f6f8', color:'#637381'}}>Sr. No.</TableCell>
<TableCell align="left" sx={{backgroundColor:'#f4f6f8', color:'#637381'}}>Role Id</TableCell>
<TableCell align="left" sx={{backgroundColor:'#f4f6f8', color:'#637381'}}>Role Name</TableCell>
<TableCell align="left" sx={{backgroundColor:'#f4f6f8', color:'#637381'}}>Access</TableCell>
<TableCell align="left" sx={{backgroundColor:'#f4f6f8', color:'#637381'}}>Status</TableCell>

</TableRow>

</TableHead>

<TableBody>


{alldata}


</TableBody>

<TableFooter>

<TablePagination 
count={roles.length}
page={page}
rowsPerPage={rowsperpage}
onPageChange={(e,page)=>handlepagechange(e,page)}
onRowsPerPageChange={(e)=>handlerowschange(e)}
/>

</TableFooter>

</Table>
</TableContainer>


<Modal
  open={editmodal}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
  onClose={handle_edit_modal}
>

  <Box sx={{top:'50%',left:'50%',transform: 'translate(-50%, -50%)',
  position: 'absolute',borderRadius:'5%'}}>
    
  <EditUsers />

  </Box>

</Modal>


<Modal
  open={addmodal}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
  onClose={handle_add_modal}
>
  <Box sx={{top:'50%',left:'50%',transform: 'translate(-50%, -50%)',
  position: 'absolute',borderRadius:'5%'}}>
    
  <AddRole />

  </Box>

</Modal>





</Box>
		)


}

export default UserRoles;