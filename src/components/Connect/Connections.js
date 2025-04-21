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

import ConnectPage from './ConnectPage';
import { useCookies,withCookies } from 'react-cookie';


function Connections(){

  const [cookies, setCookie,removeCookie] = useCookies(['name','all']);

  const [page,setPage]=useState(0)
  const [rowsperpage,setrowsperpage]=useState(10)

  const [editmodal,setEditmodal]=useState(0);
  const [addmodal,setAddmodal]=useState(0);
  const [conns,setConns]=useState([]);



  function handlepagechange(e,page){
    setPage(page)
  }

function handlerowschange(e){
    setrowsperpage(e.target.value)
  }

  function handle_add_modal(v){
    if(cookies.all.uroles[0].meta_pages.indexOf("add_page")!=-1){
    if(addmodal===0){
      setAddmodal(1)
    }else{
      setAddmodal(0)
    }
  }
  else{
    alert('Access Permission Required');
  }
  }

useEffect(()=>{
  let clie={"clie":cookies.all.clie}

  if(cookies.all.uroles[0].meta_pages){
fetch('http://localhost//demo/demo/php/connection.php',{method:'post',header:{'Content-Type':'application/json'},body:JSON.stringify(clie)})
.then((response)=>response.json())
.then((data)=>{
  setConns(data)
})
.catch((err)=>console.log(err));
  }
},[])


const stages_sort=conns.map((items,ind,arr)=>sort_data(items,ind,arr))


  function sort_data(item,ind,arr){

return <TableRow>

<TableCell align="left" sx={{color:'#575757'}}>{ind+1}</TableCell>

<TableCell align="left" sx={{color:'#575757'}}>
<Chip label={item.platform} ></Chip>
</TableCell>

<TableCell align="left" sx={{color:'#575757'}}>
{item.page}
<p style={{fontSize:'12px',marginTop:'1px',marginBottom:'1px',color:'grey'}}>{item.page}</p>
</TableCell>


<TableCell align="left" sx={{color:'#575757'}}>
{item.other}
</TableCell>

<TableCell align="left" sx={{color:'#575757'}}>
<Chip label={item.ondate} color="success" variant="outlined"></Chip>
</TableCell>

</TableRow>

  }


  return(
<Box sx={{pt:10}}>
<Paper sx={{m:1}}>

<span style={{float:'left',margin:'25px',marginTop:'35px',fontSize:'18px',fontWeight:600}}>Connected Pages</span>

<Button variant="outlined" startIcon={<AddIcon />} sx={{float:'right',m:3}} onClick={handle_add_modal}>
Add New Page Connection
</Button>

<TableContainer>
<Table>
<TableHead>

<TableRow>

<TableCell align="left" sx={{backgroundColor:'#f4f6f8', color:'#637381'}}>Sr. No.</TableCell>
<TableCell align="left" sx={{backgroundColor:'#f4f6f8', color:'#637381'}}>Platform</TableCell>
<TableCell align="left" sx={{backgroundColor:'#f4f6f8', color:'#637381'}}>Page</TableCell>

<TableCell align="left" sx={{backgroundColor:'#f4f6f8', color:'#637381'}}>Permissions</TableCell>

<TableCell align="left" sx={{backgroundColor:'#f4f6f8', color:'#637381'}}>On Date</TableCell>

</TableRow>

</TableHead>

<TableBody>
{stages_sort}
</TableBody>

<TableFooter>

<TablePagination 
count={conns.length}
page={page}
rowsPerPage={rowsperpage}
onPageChange={(e,page)=>handlepagechange(e,page)}
onRowsPerPageChange={(e)=>handlerowschange(e)}
/>

</TableFooter>

</Table>
</TableContainer>


<Modal
  open={addmodal}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
  onClose={handle_add_modal}
>
  <Box sx={{top:'50%',left:'50%',transform: 'translate(-50%, -50%)',
  position: 'absolute',borderRadius:'5%'}}>
    
  <ConnectPage conns={conns} />

  </Box>

</Modal>

</Paper>

</Box>
    )


}

export default Connections;