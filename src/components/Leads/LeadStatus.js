import {useState,useEffect} from 'react'

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
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

import EditUsers from '../Users/EditUsers';
import AddLeadStatus from './AddLeadStatus';
import EditStatus from './EditStatus';
import { useCookies } from 'react-cookie';

function LeadStatus(){

  const [page,setPage]=useState(0)
  const [rowsperpage,setrowsperpage]=useState(10)
  const [star,setStar]=useState(0)

	const [editmodal,setEditmodal]=useState(0);
  const [addmodal,setAddmodal]=useState(0);
  const[stages,setStages]=useState([])
  const [itemdata,setItemdata]=useState([]);
  const [cookies, setCookie,removeCookie] = useCookies(['name','all']);


  function handlepagechange(e,page){
    setPage(page)
    setStar(page*rowsperpage)
  }

function handlerowschange(e){
    setrowsperpage(e.target.value)
  }
  

	function handle_edit_modal(v,item){
    if(cookies.all.uroles[0].lead_status.indexOf("edit_status")!=-1){
    setItemdata(item)
		if(editmodal===0){
			setEditmodal(1)
		}else{
			setEditmodal(0)
		}
  }
	}

  function handle_add_modal(v){
    if(cookies.all.uroles[0].lead_status.indexOf("add_status")!=-1){
    if(addmodal===0){
      setAddmodal(1)
    }else{
      setAddmodal(0)
    }
  }
  }

useEffect(()=>{

  if(cookies.all.uroles[0].lead_status){
fetch('http://localhost//demo/demo/php/lead_status.php?clie='+cookies.all.clie)
.then((response)=>response.json())
.then((data)=>{
  console.log(data)
  setStages(data);
}
  )
.catch((err)=>console.log(err))
  }
  },[]);

  const stages_sort=stages.map((items,ind,arr)=>sort_data(items,ind,arr))

  function sort_data(item,ind,arr){
let msg="Active";
let col="success";

return <TableRow>
<TableCell align="left" sx={{color:'#575757'}}>#{item.id}</TableCell>
<TableCell align="left" sx={{color:'#575757'}}>
{item.statu}
</TableCell>

<TableCell align="left" sx={{color:'#575757'}}>
{item.name}
</TableCell>

<TableCell align="left" sx={{color:'#575757'}}>
<Chip label={msg} color={col} variant="outlined"></Chip>
</TableCell>


<TableCell align="left">

  <Tooltip title="Edit Status" >
      <IconButton onClick={()=>handle_edit_modal(1,item)}>
        <EditCalendarIcon />
      </IconButton>
    </Tooltip>

</TableCell>

</TableRow>

  }


	return(
<Box sx={{pt:10}}>
<Paper sx={{m:1}}>

<span style={{float:'left',margin:'25px',marginTop:'35px',fontSize:'18px',fontWeight:600}}>Lead Status</span>

<Button variant="outlined" startIcon={<AddIcon />} sx={{float:'right',m:3}} onClick={handle_add_modal}>
Add New Status
</Button>

<TableContainer>
<Table>
<TableHead>

<TableRow>

<TableCell align="left" sx={{backgroundColor:'#f4f6f8', color:'#637381'}}>Sr. No.</TableCell>
<TableCell align="left" sx={{backgroundColor:'#f4f6f8', color:'#637381'}}>Name</TableCell>
<TableCell align="left" sx={{backgroundColor:'#f4f6f8', color:'#637381'}}>Stage</TableCell>
<TableCell align="left" sx={{backgroundColor:'#f4f6f8', color:'#637381'}}>Status</TableCell>
<TableCell align="left" sx={{backgroundColor:'#f4f6f8', color:'#637381'}}></TableCell>

</TableRow>

</TableHead>

<TableBody>
{stages_sort}
</TableBody>

<TableFooter>

<TablePagination 
count={stages.length}
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
    
  <EditStatus data={itemdata} />

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
    
  <AddLeadStatus />

  </Box>

</Modal>

</Paper>

</Box>
		)


}

export default LeadStatus;