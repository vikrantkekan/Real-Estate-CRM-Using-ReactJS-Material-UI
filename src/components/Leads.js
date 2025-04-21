import React from 'react'
import {useState,useEffect} from 'react'
import { Route, Link, useParams,useLocation } from 'react-router-dom';
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableContainer from '@mui/material/TableContainer';

import TableFooter from '@mui/material/TableFooter';

import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';

import TablePagination from '@mui/material/TablePagination'

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

import TextField from '@mui/material/TextField';
import Badge from '@mui/material/Badge';

import EditIcon from '@mui/icons-material/Edit';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import Tooltip from '@mui/material/Tooltip';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Chip from '@mui/material/Chip';

import MenuItem from '@mui/material/MenuItem';

import Modal from '@mui/material/Modal';
import LeadEditModal from './LeadEditModal';
import LeadEditModalRef from './LeadEditModalRef';

import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';

import FullInformation from './FullInformation';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InfoIcon from '@mui/icons-material/Info';
import Grid from '@mui/material/Grid';


import { useCookies,withCookies } from 'react-cookie';

import ControlPointDuplicateIcon from '@mui/icons-material/ControlPointDuplicate';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



function Leads(){

  let { pid } = useParams();

const [alldata,setalldata]=useState([])
const[allstatus,setAllstatus]=useState([]);
const[tags,setTags]=useState([]);
const[tag,setTag]=useState();

let location = useLocation();

let count=alldata.length;

const [page,setPage]=useState(0)
const [rowsperpage,setrowsperpage]=useState(10)
const [star,setStar]=useState(0)

const [tabval,setTabval]=useState('All')

const [anchorElsubmenu, setAnchorElsubmenu,] = useState(null);

const [submenu, setSubmenu]=useState('');

const [update_lead_modal,set_update_lead_modal]=useState({state:0,lid:0,allinfo:[]})
const [update_lead_modal_ref,set_update_lead_modal_ref]=useState({state:0,lid:0,allinfo:[]})

const [fullInformation,setFullInformation]=useState({show:0,lid:0,allinfo:[]})

const [open, setOpen] = useState(false);

const [cookies, setCookie,removeCookie] = useCookies(['name','all']);


useEffect(
()=>{

  if(cookies.all.uroles[0].leads){ //check have leads access

let url='http://localhost//demo/demo/php/Allleads.php?pid='+pid+'&project_access='+cookies.all.project_access+'&tag='+tag;
  fetch(url)
  .then((response)=>response.json())
  .then((data)=>{
    setalldata(data)
  })
  .catch((err)=>console.log(err))


  fetch('http://localhost//demo/demo/php/lead_status.php?clie='+cookies.all.clie)
  .then((response2)=>response2.json())
  .then((data2)=>{
    setAllstatus(data2);
  }
    )
  .catch((err2)=>console.log(err2))


  fetch('http://localhost//demo/demo/php/tags.php?clie='+cookies.all.clie)
  .then((response3)=>response3.json())
  .then((data3)=>{
    setTags(data3);
    
  }
    )
  .catch((err3)=>console.log(err3))


}
}
,[location.pathname]
);

function handle_full_info(e,l,info){
  if(cookies.all.uroles[0].leads.indexOf("details_edit")!=-1){
    setFullInformation({show:1,lid:l,allinfo:info})
  } 
}
function close_full_info(e,l){
setFullInformation({show:0,lid:0,allinfo:[]})
}

function open_lead_modal(e,stat,lid,info){
  if(cookies.all.uroles[0].leads.indexOf("feedback")!=-1){
    set_update_lead_modal({state:stat,lid:lid,allinfo:info})
  } 
}

function open_lead_modal_ref(e,stat,lid,info){
  if(cookies.all.uroles[0].leads.indexOf("feedback")!=-1){
    set_update_lead_modal_ref({state:stat,lid:lid,allinfo:info})
  }
}
function close_lead_modal_ref(){
  set_update_lead_modal_ref({state:0,lid:0,allinfo:[]})
  }

function close_lead_modal(){
set_update_lead_modal({state:0,lid:0,allinfo:[]})
}


function open_sub_menu(e,id){
  setSubmenu('open')
  setAnchorElsubmenu(e.currentTarget)
}

function close_sub_menu(){
setAnchorElsubmenu(null);
setSubmenu('')
}


function change_tab(e,v){
  setTabval(v)
}

  function handlepagechange(e,page){
    setPage(page)
    setStar(page*rowsperpage)
  }

function handlerowschange(e){
    setrowsperpage(e.target.value)
  }

  function search_filter(e){

fetch('http://localhost//demo/demo/php/leads_search.php?pid='+pid+'&project_access='+cookies.all.project_access+'&string='+e.target.value+'&tag='+tag)
  .then((response)=>response.json())
  .then((data)=>{
   // console.log('filter',data)
    setalldata(data)
  })
  .catch((err)=>console.log(err))

  }

  function update_set_tag(e){
    setTag(e.target.value)

    fetch('http://localhost//demo/demo/php/leads_filter.php?pid='+pid+'&project_access='+cookies.all.project_access+'&tag='+e.target.value)
  .then((response)=>response.json())
  .then((data)=>{
   // console.log('filter',data)
    setalldata(data)
  })
  .catch((err)=>console.log(err))

  }


function call_back_fun(a){

 fetch('http://localhost//demo/demo/php/Allleads.php?pid='+pid+'&project_access='+cookies.all.project_access)
  .then((response)=>response.json())
  .then((data)=>{
    setalldata(data)
  })
  .catch((err)=>console.log(err))

}

function map_row(val,id,arr){

var a=JSON.parse(val.last_foll);

var b=val.nxt_foll.split(' ');

if(tabval=='All'){

  if(cookies.all.uroles[0].leads.indexOf("contactinfo")==-1){
    val.name='*******';
    val.mobile='*******';
  }


return <React.Fragment><TableRow hover >
<TableCell >#{val.idl} {val.ref?<IconButton onClick={(e)=>open_lead_modal_ref(e,1,val.ref,val)} >
  <ControlPointDuplicateIcon sx={{color:'#18ca3c'}}/></IconButton> : <p></p>}</TableCell>
            
            <TableCell align="left">{val.name} 
            <p style={{fontSize:'12px',marginTop:'1px',marginBottom:'1px',color:'grey'}}>{val.mobile} </p>
            </TableCell>
            <TableCell align="left">{val.source}
        <p style={{fontSize:'12px',marginTop:'1px',marginBottom:'1px',color:'grey'}}>{val.camp_name} </p>
            </TableCell>
            <TableCell align="left"> 
            <Chip label={val.statu} />
            <p style={{fontSize:'12px',marginTop:'1px',marginBottom:'1px',color:'grey'}}>{val.last_foll_date}</p>
            </TableCell>
              <TableCell align="left"> 
          
{a.tag}
               <Tooltip title={a.cmt}>
  <IconButton>
    <InfoIcon />
  </IconButton>
</Tooltip>

<p style={{fontSize:'12px',marginTop:'1px',marginBottom:'1px',color:'grey'}}>{val.last_foll_date}</p>
            </TableCell>

            <TableCell align="left">
           {b[0]}
<p style={{fontSize:'12px',marginTop:'1px',marginBottom:'1px',color:'grey'}}>{b[1]} {b[2]} </p>
            </TableCell>

             <TableCell align="left">

 <Tooltip title="Update Feedback" >
      <IconButton onClick={(e)=>open_lead_modal(e,1,val.idl,val)}>
        <EditCalendarIcon />
      </IconButton>
    </Tooltip>

    <Tooltip title="More" >
      <IconButton onClick={(e)=>handle_full_info(e,val.idl,val)}
        aria-haspopup="true"
        >
        <MoreVertIcon />
      </IconButton>
    </Tooltip>

    

  </TableCell>
</TableRow>
</React.Fragment>
    
}
else{

  if(cookies.all.uroles[0].leads.indexOf("contactinfo")==-1){
    val.name='*******';
    val.mobile='*******';
  }
  
if(tabval==val.statu){

return <TableRow hover>
<TableCell >#{val.idl} {val.ref?<IconButton onClick={(e)=>open_lead_modal_ref(e,1,val.idl,val)} >
  <ControlPointDuplicateIcon sx={{color:'#18ca3c'}}/></IconButton> : <p></p>}</TableCell>
            <TableCell align="left">{val.name} 
            <p style={{fontSize:'12px',marginTop:'1px',marginBottom:'1px',color:'grey'}}>{val.mobile} </p>
            </TableCell>
            <TableCell align="left">Digital
        <p style={{fontSize:'12px',marginTop:'1px',marginBottom:'1px',color:'grey'}}>{val.camp_name} </p>
            </TableCell>
            <TableCell align="left"> 
            <Chip label={val.statu} />
            <p style={{fontSize:'12px',marginTop:'1px',marginBottom:'1px',color:'grey'}}>{val.last_foll_date}</p>
            </TableCell>
              <TableCell align="left"> 
{a.tag}
               <Tooltip title={a.cmt}>
  <IconButton>
    <InfoIcon />
  </IconButton>
</Tooltip>

<p style={{fontSize:'12px',marginTop:'1px',marginBottom:'1px',color:'grey'}}>{val.last_foll_date}</p>
            </TableCell>

            <TableCell align="left">
           {b[0]}
<p style={{fontSize:'12px',marginTop:'1px',marginBottom:'1px',color:'grey'}}>{b[1]} {b[2]} </p>
            </TableCell>

             <TableCell align="left">

 <Tooltip title="Update Feedback" >
      <IconButton onClick={(e)=>open_lead_modal(e,1,val.id)}>
        <EditCalendarIcon />
      </IconButton>
    </Tooltip>

    <Tooltip title="More" >
      <IconButton onClick={(e)=>handle_full_info(e,val.id)}
        aria-haspopup="true"
        >
        <MoreVertIcon />
      </IconButton>
    </Tooltip>

      </TableCell>
</TableRow>

}
}
  }

  const row_data=alldata.map(map_row)

return(

<div style={{paddingTop:60}}>

<Paper sx={{margin:1}}>

<Box sx={{ width: '100%' }}>

<TabContext value={tabval}>
<Box>
      <Tabs
        value={tabval}
        textColor="primary"
        indicatorColor=""
        aria-label="secondary tabs example"
      
      onChange={(e,v)=>change_tab(e,v)}
      >

        <Tab value="All" label="All"  > </Tab>
        <Badge badgeContent={4} color="info" sx={{margin:2,ml:-2}} variant="dot"></Badge>
{allstatus.map((it)=><Tab value={it.statu} label={it.statu} />)}

      </Tabs>
</Box>

</TabContext>

</Box>

<Box sx={{float:'left',mb:4}}>
<Grid container>

<Grid item xs={3}>
<FormControl sx={{margin:3,height:20,width:'95%'}}>
  <TextField id="search" label="Search" variant="outlined" onChange={(e)=>search_filter(e)}/>
</FormControl>
</Grid>

<Grid item xs={3}>
  <FormControl sx={{margin:3,height:20,width:'99%'}}>
<LocalizationProvider dateAdapter={AdapterDayjs}>
<DatePicker label="Start Date" onChange={(v,con)=>alert(v)} /> 
</LocalizationProvider>
</FormControl>
</Grid>
<Grid item xs={3}>
 <FormControl sx={{margin:3,height:20,width:'95%'}}>
<LocalizationProvider dateAdapter={AdapterDayjs}>
<DatePicker label="End Date" onChange={(v,context)=>alert(v)} />
</LocalizationProvider>
</FormControl>
</Grid>

<Grid item xs={3}>
<FormControl sx={{margin:3,height:20,width:'100%'}}>
  <InputLabel id="demo-simple-select-label">Filter</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={tag}
    label="Filter"
    onChange={(e)=>update_set_tag(e)}
  >
    <MenuItem value={''}>Filter By Tags</MenuItem>
 {tags.map((itm)=><MenuItem value={itm.tag_name}>{itm.tag_name}</MenuItem>)}
  </Select>
</FormControl>
</Grid>
</Grid>
 </Box>



<TableContainer sx={{ maxHeight: 'auto' }}>

 <Table aria-label="simple table" stickyHeader >

        <TableHead>
        
          <TableRow selected>
          <TableCell align="left" sx={{backgroundColor:'#f4f6f8', color:'#637381'}}>Sr. No.</TableCell>
        <TableCell align="left" sx={{backgroundColor:'#f4f6f8', color:'#637381'}}>Name</TableCell>
            <TableCell align="left" sx={{backgroundColor:'#f4f6f8', color:'#637381'}}>Source</TableCell>
            <TableCell align="left" sx={{backgroundColor:'#f4f6f8', color:'#637381'}}>Status</TableCell>
<TableCell align="left" sx={{backgroundColor:'#f4f6f8', color:'#637381'}}>Last Followup</TableCell>
            <TableCell align="left" sx={{backgroundColor:'#f4f6f8', color:'#637381'}}>Next Followup</TableCell>
            
            <TableCell align="left" sx={{backgroundColor:'#f4f6f8', color:'#637381'}}>Action</TableCell>
          </TableRow>

        </TableHead>

  <TableBody>

{row_data.slice(star,star+rowsperpage)}

  </TableBody>

<TableFooter>
        
<TablePagination 
count={count}
page={page}
rowsPerPage={rowsperpage}
onPageChange={(e,page)=>handlepagechange(e,page)}
onRowsPerPageChange={(e)=>handlerowschange(e)}

/>


</TableFooter>

</Table>
</TableContainer>
</ Paper>


      <Modal
        open={update_lead_modal.state}
        onClose={()=>close_lead_modal()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{zIndex:99}}
      >

     <Box sx={{Width:'90%',borderRadius:'15px'}}>
         <LeadEditModal data={update_lead_modal} status={allstatus} tags={tags} callback={call_back_fun} />
         </Box>

     </Modal>

      <Modal
        open={update_lead_modal_ref.state}
        onClose={()=>close_lead_modal_ref()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{zIndex:99}}
      >

      <Box sx={{Width:'90%',borderRadius:'15px'}}>
         <LeadEditModalRef data={update_lead_modal_ref} status={allstatus} tags={tags} callback={call_back_fun} />
         </Box>
      </Modal>

  

  <Dialog
        fullScreen
        open={fullInformation.show}
        TransitionComponent={Transition}
        sx={{zIndex:9999}}
      >
      <AppBar sx={{ position: 'relative',backgroundColor:'#193B68'}}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="close"
            onClick={(e)=>close_full_info()}
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {fullInformation.allinfo.name}
            </Typography>

<a href={'tel:'+fullInformation.allinfo.mobile} style={{color:'#fff'}}>
    <Tooltip title="Call Now" >
      <IconButton aria-haspopup="true" color="inherit">
        <LocalPhoneIcon />
      </IconButton>
    </Tooltip>
    </a>

<a href={'https://wa.me/'+fullInformation.allinfo.mobile+'?text=Hello,'} style={{color:'#fff'}} target="_blank">
<Tooltip title="Send WhatsApp" >
      <IconButton aria-haspopup="true" color="inherit">
        <WhatsAppIcon />
      </IconButton>
    </Tooltip>
</a>

<a href={'mailto:'+fullInformation.allinfo.email} style={{color:'#fff'}}>
    <Tooltip title="Send Email" >
      <IconButton aria-haspopup="true" color="inherit">
        <EmailIcon />
      </IconButton>
    </Tooltip>
    </a>


          </Toolbar>
        </AppBar>

<FullInformation data={fullInformation} callback={call_back_fun} />

  </Dialog>



        </div>




	)

}


export default Leads