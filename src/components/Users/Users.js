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
import AddUser from './AddUser';
import { useCookies,withCookies } from 'react-cookie';


function Users(props){

  const [cookies, setCookie,removeCookie] = useCookies(['name','all']);

  const [page,setPage]=useState(0)
  const [rowsperpage,setrowsperpage]=useState(10)

	const [editmodal,setEditmodal]=useState(0);
  const [addmodal,setAddmodal]=useState(0);
  const [users,setUsers]=useState([])
  const [itemdata,setItemdata]=useState([]);


  function handlepagechange(e,page){
    setPage(page)
  }

function handlerowschange(e){
    setrowsperpage(e.target.value)
  }


	function handle_edit_modal(v,item){

    if(cookies.all.uroles[0].users.indexOf("edit_users")!=-1){
      setItemdata(item)
		if(editmodal===0){
			setEditmodal(1)
		}else{
			setEditmodal(0)
		}
  }
	}

  function handle_add_modal(v){
    if(cookies.all.uroles[0].users.indexOf("add_users")!=-1){
    if(addmodal===0){
      setAddmodal(1)
    }else{
      setAddmodal(0)
    }
  }
  }

  useEffect(()=>{
    if(cookies.all.uroles[0].users){

fetch('http://localhost//demo/demo/php/user_list.php?clie='+cookies.all.clie)
.then((response)=>response.json())
.then((data)=>{
  setUsers(data);
}
  )
.catch((err)=>console.log(err))

    }
  },[])


let alldata=users.map((it,id,arr)=>{

let msg="Active";
let col="success";

  return <TableRow>
<TableCell align="left">#{it.uid}</TableCell>
<TableCell align="left">
{it.fullname}
<p style={{fontSize:'12px',marginTop:'1px',marginBottom:'1px',color:'grey'}}>{it.email}</p>
</TableCell>
<TableCell align="left">
{it.mobile}
</TableCell>
<TableCell align="left">{it.projects.map((v)=>v.project_name+' , ')}</TableCell>
<TableCell align="left">{it.role_name}</TableCell>
<TableCell align="left">
<Chip label={msg} color={col} variant="outlined"></Chip>
</TableCell>


<TableCell align="left">

 <Tooltip title="Edit User" >
      <IconButton onClick={()=>handle_edit_modal(1,it)}>
        <EditCalendarIcon />
      </IconButton>
    </Tooltip>

</TableCell>

</TableRow>
})

	return(
<Box sx={{pt:10}}>

<span style={{float:'left',margin:'25px',marginTop:'35px',fontSize:'18px',fontWeight:600}}>User List</span>

<Button variant="outlined" startIcon={<AddIcon />} sx={{float:'right',m:3}} onClick={handle_add_modal}>
Add New user
</Button>

<TableContainer>
<Table>
<TableHead>

<TableRow>

<TableCell align="left" sx={{backgroundColor:'#f4f6f8', color:'#637381'}}>Sr. No.</TableCell>
<TableCell align="left" sx={{backgroundColor:'#f4f6f8', color:'#637381'}}>Name</TableCell>
<TableCell align="left" sx={{backgroundColor:'#f4f6f8', color:'#637381'}}>Contact</TableCell>
<TableCell align="left" sx={{backgroundColor:'#f4f6f8', color:'#637381'}}>Project</TableCell>
<TableCell align="left" sx={{backgroundColor:'#f4f6f8', color:'#637381'}}>Role</TableCell>
<TableCell align="left" sx={{backgroundColor:'#f4f6f8', color:'#637381'}}>Status</TableCell>
<TableCell align="left" sx={{backgroundColor:'#f4f6f8', color:'#637381'}}></TableCell>

</TableRow>

</TableHead>

<TableBody>

{alldata}

</TableBody>

<TableFooter>

<TablePagination 
count={users.length}
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
    
  <EditUsers data={itemdata} />

  </Box>

</Modal>


<Modal
  open={addmodal}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
  onClose={handle_add_modal}
>
  <Box sx={{top:'50%',left:'50%',
  bgcolor: '#fff',transform: 'translate(-50%, -50%)',
  position: 'absolute',borderRadius:'5%'}}>
    
  <AddUser />

  </Box>

</Modal>


</Box>
		)

}

export default Users;