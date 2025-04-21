import React from 'react'
import {useState} from 'react'

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
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import Badge from '@mui/material/Badge';

import EditIcon from '@mui/icons-material/Edit';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import Tooltip from '@mui/material/Tooltip';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Chip from '@mui/material/Chip';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';

import Modal from '@mui/material/Modal';
import LeadEditModal from './LeadEditModal';

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



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});




const rows = [
  { id: 1, dat: '20/02/2024',time:'12:30 PM', firstName: 'dbtret daddad', age: 35,cur_status:'Fresh','sta_date':'23/01/2024','status_by':'1','last_foll':{'tag':'Call Back','tag_date':'12/02/2023','nxt_foll':'24/02/2024','nxt_time':'05:30 PM','cmt':'he was in meeting ask to call back after few days','by_id':'1'} },
  { id: 2, dat: '20th Feb 2024 ',time:'12:30 PM', firstName: 'Cersei dggdfg', age: 42,cur_status:'Nurture','sta_date':'23/01/2024','status_by':'1','last_foll':{'tag':'Call Back','tag_date':'12/02/2023','nxt_foll':'24/02/2024','nxt_time':' 05:30 PM','cmt':'he was in meeting ask to call back after few days','by_id':'1'}  },
  { id: 3, dat: '20th Feb 2024 ',time:'12:30 PM', firstName: 'Jaime efsdf', age: 45,cur_status:'Warm','sta_date':'23/01/2024','status_by':'1','last_foll':{'tag':'Call Back','tag_date':'12/02/2023','nxt_foll':'24/02/2024','nxt_time':' 05:30 PM','cmt':'he was in meeting ask to call back after few days','by_id':'1'}  },
  { id: 4, dat: '20th Feb 2024 ',time:'12:30 PM', firstName: 'Arya vsfe', age: 16,cur_status:'Cold','sta_date':'23/01/2024','status_by':'1','last_foll':{'tag':'Call Back','tag_date':'12/02/2023','nxt_foll':'24/02/2024','nxt_time':' 05:30 PM','cmt':'he was in meeting ask to call back after few days','by_id':'1'}  },
  { id: 5, dat: '20th Feb 2024 ',time:'12:30 PM', firstName: 'Daenerys fsdf', age: null,cur_status:'Prospect','sta_date':'23/01/2024','status_by':'1','last_foll':{'tag':'Call Back','tag_date':'12/02/2023','nxt_foll':'24/02/2024','nxt_time':' 05:30 PM','cmt':'he was in meeting ask to call back after few days','by_id':'1'}  },
  { id: 6, dat: '20th Feb 2024 ',time:'12:30 PM', firstName: 'Jaime fsdfds', age: 150,cur_status:'Meeting Set','sta_date':'23/01/2024','status_by':'1','last_foll':{'tag':'Call Back','tag_date':'12/02/2023','nxt_foll':'24/02/2024','nxt_time':' 05:30 PM','cmt':'he was in meeting ask to call back after few days','by_id':'1'}  },
  { id: 7, dat: '20th Feb 2024 ',time:'12:30 PM', firstName: 'Ferrara fsfds', age: 44,cur_status:'Opportunity','sta_date':'23/01/2024','status_by':'1','last_foll':{'tag':'Call Back','tag_date':'12/02/2023','nxt_foll':'24/02/2024','nxt_time':' 05:30 PM','cmt':'he was in meeting ask to call back after few days','by_id':'1'}  },
  { id: 8, dat: '20th Feb 2024 ',time:'12:30 PM', firstName: 'Rossini fsdf', age: 36,cur_status:'Opportunity Lost','sta_date':'23/01/2024','status_by':'1','last_foll':{'tag':'Call Back','tag_date':'12/02/2023','nxt_foll':'24/02/2024','nxt_time':' 05:30 PM','cmt':'he was in meeting ask to call back after few days','by_id':'1'}  },
  { id: 9, dat: '20th Feb 2024 ',time:'12:30 PM', firstName: 'sdf Hell', age: 65,cur_status:'Disqualified','sta_date':'23/01/2024','status_by':'1','last_foll':{'tag':'Call Back','tag_date':'12/02/2023','nxt_foll':'24/02/2024','nxt_time':' 05:30 PM','cmt':'he was in meeting ask to call back after few days','by_id':'1'}  },
  { id: 10, dat: '20th Feb 2024 ',time:'12:30 PM', firstName: 'Hellrwer wr', age: 65,cur_status:'New','sta_date':'23/01/2024','status_by':'1','last_foll':{'tag':'Call Back','tag_date':'12/02/2023','nxt_foll':'24/02/2024','nxt_time':' 05:30 PM','cmt':'he was in meeting ask to call back after few days','by_id':'1'}  },
  { id: 11, dat: '20th Feb 2024 ',time:'12:30 PM', firstName: 'dfsdf wesfd', age: 35,cur_status:'New','sta_date':'23/01/2024','status_by':'1','last_foll':{'tag':'Call Back','tag_date':'12/02/2023','nxt_foll':'24/02/2024','nxt_time':' 05:30 PM','cmt':'he was in meeting ask to call back after few days','by_id':'1'}  },
  { id: 12, dat: '20th Feb 2024 ',time:'12:30 PM', firstName: 'Cerse igfnfgn', age: 42,cur_status:'New','sta_date':'23/01/2024','status_by':'1','last_foll':{'tag':'Call Back','tag_date':'12/02/2023','nxt_foll':'24/02/2024','nxt_time':' 05:30 PM','cmt':'he was in meeting ask to call back after few days','by_id':'1'}  },
  { id: 13, dat: '20th Feb 2024 ',time:'12:30 PM', firstName: 'Jaimeg dfgfdg', age: 45,cur_status:'Pending','sta_date':'23/01/2024','status_by':'1','last_foll':{'tag':'Call Back','tag_date':'12/02/2023','nxt_foll':'24/02/2024','nxt_time':' 05:30 PM','cmt':'he was in meeting ask to call back after few days','by_id':'1'}  },
  { id: 14, dat: '20th Feb 2024 ',time:'12:30 PM', firstName: 'Arya ertret', age: 16,cur_status:'New','sta_date':'23/01/2024','status_by':'1','last_foll':{'tag':'Call Back','tag_date':'12/02/2023','nxt_foll':'24/02/2024','nxt_time':' 05:30 PM','cmt':'he was in meeting ask to call back after few days','by_id':'1'}  },
  { id: 15, dat: '20th Feb 2024 ',time:'12:30 PM', firstName: 'Daenerys tret', age: null,cur_status:'New','sta_date':'23/01/2024','status_by':'1','last_foll':{'tag':'Call Back','tag_date':'12/02/2023','nxt_foll':'24/02/2024','nxt_time':' 05:30 PM','cmt':'he was in meeting ask to call back after few days','by_id':'1'}  },
  { id: 16, dat: '20th Feb 2024 ',time:'12:30 PM', firstName: 'Jaime qwesd', age: 150,cur_status:'New','sta_date':'23/01/2024','status_by':'1','last_foll':{'tag':'Call Back','tag_date':'12/02/2023','nxt_foll':'24/02/2024','nxt_time':' 05:30 PM','cmt':'he was in meeting ask to call back after few days','by_id':'1'}  },
  { id: 17, dat: '20th Feb 2024 ',time:'12:30 PM', firstName: 'Ferrara gdfg', age: 44,cur_status:'New','sta_date':'23/01/2024','status_by':'1','last_foll':{'tag':'Call Back','tag_date':'12/02/2023','nxt_foll':'24/02/2024','nxt_time':' 05:30 PM','cmt':'he was in meeting ask to call back after few days','by_id':'1'}  },
  { id: 18, dat: '20th Feb 2024 ',time:'12:30 PM', firstName: 'Rossini sfsde', age: 36,cur_status:'Call Back','sta_date':'23/01/2024','status_by':'1','last_foll':{'tag':'Call Back','tag_date':'12/02/2023','nxt_foll':'24/02/2024','nxt_time':' 05:30 PM','cmt':'he was in meeting ask to call back after few days','by_id':'1'}  },
  { id: 19, dat: '20th Feb 2024 ',time:'12:30 PM', firstName: 'Hell ffd', age: 65,cur_status:'New','last_foll':{'tag':'Call Back','tag_date':'12/02/2023','nxt_foll':'24/02/2024','nxt_time':'after 05:30 PM','cmt':'he was in meeting ask to call back  few days','by_id':'1'}  },
  { id: 20, dat: '20th Feb 2024 ',time:'12:30 PM', firstName: 'Hello sfd', age: 65,cur_status:'New','sta_date':'23/01/2024','status_by':'1','last_foll':{'tag':'Call Back','tag_date':'12/02/2023','nxt_foll':'24/02/2024','nxt_time':' 05:30 PM','cmt':'he was in meeting ask to call back after few days','by_id':'1'}  },
  { id: 21, dat: '20th Feb 2024 ',time:'12:30 PM', firstName: 'gdgfdd fgret', age: 35,cur_status:'Call Not Received','sta_date':'23/01/2024','status_by':'1','last_foll':{'tag':'Call Back','tag_date':'12/02/2023','nxt_foll':'24/02/2024','nxt_time':' 05:30 PM','cmt':'he was in meeting ask to call back after few days','by_id':'1'}  },
  { id: 22, dat: '20th Feb 2024 ',time:'12:30 PM', firstName: 'Cersei gdfgre', age: 42 ,cur_status:'New','sta_date':'23/01/2024','status_by':'1','last_foll':{'tag':'Call Back','tag_date':'12/02/2023','nxt_foll':'24/02/2024','nxt_time':' 05:30 PM','cmt':'he was in meeting ask to call back after few days','by_id':'1'} },
  { id: 23, dat: '20th Feb 2024 ',time:'12:30 PM', firstName: 'Jaime jyujyj', age: 45 ,cur_status:'New','sta_date':'23/01/2024','status_by':'1','last_foll':{'tag':'Call Back','tag_date':'12/02/2023','nxt_foll':'24/02/2024','nxt_time':' 05:30 PM','cmt':'he was in meeting ask to call back after few days','by_id':'1'} },
  { id: 24, dat: '20th Feb 2024 ',time:'12:30 PM', firstName: 'Arya fghgfu', age: 16,cur_status:'Todays Followup','sta_date':'23/01/2024','status_by':'1','last_foll':{'tag':'Call Back','tag_date':'12/02/2023','nxt_foll':'24/02/2024','nxt_time':' 05:30 PM','cmt':'he was in meeting ask to call back after few days','by_id':'1'}  },
  { id: 25, dat: '20th Feb 2024 ',time:'12:30 PM', firstName: 'Daenerys fghfg', age: null,cur_status:'New','sta_date':'23/01/2024','status_by':'1','last_foll':{'tag':'Call Back','tag_date':'12/02/2023','nxt_foll':'24/02/2024','nxt_time':' 05:30 PM','cmt':'he was in meeting ask to call back after few days','by_id':'1'}  },
  { id: 26, dat: '20th Feb 2024 ',time:'12:30 PM', firstName: 'Jaime fgrer', age: 150,cur_status:'New','sta_date':'23/01/2024','status_by':'1','last_foll':{'tag':'Call Back','tag_date':'12/02/2023','nxt_foll':'24/02/2024','nxt_time':' 05:30 PM','cmt':'he was in meeting ask to call back after few days','by_id':'1'}  },
  { id: 27, dat: '20th Feb 2024 ',time:'12:30 PM', firstName: 'Ferrara sfiuy', age: 44 ,cur_status:'Call Back','sta_date':'23/01/2024','status_by':'1','last_foll':{'tag':'Call Back','tag_date':'12/02/2023','nxt_foll':'24/02/2024','nxt_time':' 05:30 PM','cmt':'he was in meeting ask to call back after few days','by_id':'1'} },
  { id: 28, dat: '20th Feb 2024 ',time:'12:30 PM', firstName: 'Rossini fsybjh', age: 36 ,cur_status:'New','sta_date':'23/01/2024','status_by':'1','last_foll':{'tag':'Call Back','tag_date':'12/02/2023','nxt_foll':'24/02/2024','nxt_time':' 05:30 PM','cmt':'he was in meeting ask to call back after few days','by_id':'1'} },
  { id: 29, dat: '20th Feb 2024 ',time:'12:30 PM', firstName: 'test of', age: 65,cur_status:'Call Not Received','sta_date':'23/01/2024','status_by':'1','last_foll':{'tag':'Call Back','tag_date':'12/02/2023','nxt_foll':'24/02/2024','nxt_time':' 05:30 PM','cmt':'he was in meeting ask to call back after few days','by_id':'1'}  },
  { id: 30, dat: '20th Feb 2024 ',time:'12:30 PM', firstName: 'lorem ipsum', age: 65,cur_status:'New','sta_date':'23/01/2024','status_by':'1','last_foll':{'tag':'Call Back','tag_date':'12/02/2023','nxt_foll':'24/02/2024','nxt_time':' 05:30 PM','cmt':'he was in meeting ask to call back after few days','by_id':'1'}  },
];

const tags = [
  { label: 'New Lead', year: 1994 },
  { label: 'Assigned', year: 1972 },
  { label: 'Call Back', year: 1974 },
  { label: 'Busy', year: 2008 },
  { label: 'Not Responding', year: 1957 },
  { label: "Not Interested", year: 1993 },
  { label: 'Not Connected', year: 1994 },
  ];


const allstatus=[
{'name':'Fresh','sf':'Fresh','status':'Active','Stage':'Marketing Accepted Lead'},
{'name':'Nurture','sf':'Nurture','status':'Active','Stage':'Marketing Qualified Lead'},
{'name':'Warm','sf':'Warm','status':'Active','Stage':'Sales Accepted Lead'},
{'name':'Cold','sf':'Cold','status':'Active','Stage':'Sales Accepted Lead'},
{'name':'Prospect','sf':'Prospect','status':'Active','Stage':'Sales Qualified Lead'},
{'name':'Meeting Set','sf':'Meeting Set','status':'Active','Stage':'Tele Sales Meeting'},
{'name':'Opportunity','sf':'Opportunity','status':'Active','Stage':'Sales Accepted Opportunity'},
{'name':'Customer','sf':'Customer','status':'Active','Stage':'Customer'},
{'name':'Opportunity Lost','sf':'Opportunity Lost','status':'Active','Stage':'Sales Recycled Lead'},
{'name':'Disqualified','sf':'Disqualified','status':'Active','Stage':'Disqualified'},
]

function Leads(){

let count=rows.length;

const [page,setPage]=useState(0)
const [rowsperpage,setrowsperpage]=useState(10)
const [star,setStar]=useState(0)

const [filter,setFilter]=useState('All')

const [tabval,setTabval]=useState('All')

const [anchorElsubmenu, setAnchorElsubmenu,] = useState(null);

const [submenu, setSubmenu]=useState('');

const [update_lead_modal,set_update_lead_modal]=useState({state:0,lid:0})

const [fullInformation,setFullInformation]=useState({show:0,lid:0})


function handle_full_info(e,l){
setFullInformation({show:1,lid:l})
}
function close_full_info(e,l){
setFullInformation({show:0,lid:0})
}


function open_lead_modal(e,stat,lid){
set_update_lead_modal({state:stat,lid:lid})

}

function close_lead_modal(){
set_update_lead_modal({state:0,lid:0})

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

  function filter_change(e){
    setFilter(e.target.value)
  }


function map_row(val,id,arr){

if(tabval=='All'){

return <TableRow hover>
<TableCell>{val.id}</TableCell>
            <TableCell align="left">{val.firstName} 
            <p style={{fontSize:'12px',marginTop:'1px',marginBottom:'1px',color:'grey'}}>9421973844</p>
            </TableCell>
            <TableCell align="left">Digital
        <p style={{fontSize:'12px',marginTop:'1px',marginBottom:'1px',color:'grey'}}>Offer Campaign</p>
            </TableCell>
            <TableCell align="left"> 
            <Chip label={val.cur_status} />
            <p style={{fontSize:'12px',marginTop:'1px',marginBottom:'1px',color:'grey'}}>{val.sta_date}</p>
            </TableCell>
              <TableCell align="left"> 
          
{val.last_foll['tag']}
               <Tooltip title={val.last_foll['cmt']}>
  <IconButton>
    <InfoIcon />
  </IconButton>
</Tooltip>

<p style={{fontSize:'12px',marginTop:'1px',marginBottom:'1px',color:'grey'}}>{val.last_foll['tag_date']}</p>
            </TableCell>

            <TableCell align="left">
           {val.last_foll['nxt_foll']}
<p style={{fontSize:'12px',marginTop:'1px',marginBottom:'1px',color:'grey'}}>{val.last_foll['nxt_time']}</p>





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
else{

if(tabval==val.cur_status){

return <TableRow hover>
<TableCell>{val.id}</TableCell>
            <TableCell align="left">{val.firstName} 
            <p style={{fontSize:'12px',marginTop:'1px',marginBottom:'1px',color:'grey'}}>9421973844</p>
            </TableCell>
            <TableCell align="left">Digital
        <p style={{fontSize:'12px',marginTop:'1px',marginBottom:'1px',color:'grey'}}>Offer Campaign</p>
            </TableCell>
            <TableCell align="left"> 
            <Chip label={val.cur_status} />
            <p style={{fontSize:'12px',marginTop:'1px',marginBottom:'1px',color:'grey'}}>{val.sta_date}</p>
            </TableCell>
              <TableCell align="left"> 
          
{val.last_foll['tag']}
               <Tooltip title={val.last_foll['cmt']}>
  <IconButton>
    <InfoIcon />
  </IconButton>
</Tooltip>

<p style={{fontSize:'12px',marginTop:'1px',marginBottom:'1px',color:'grey'}}>{val.last_foll['tag_date']}</p>
            </TableCell>

            <TableCell align="left">
           {val.last_foll['nxt_foll']}
<p style={{fontSize:'12px',marginTop:'1px',marginBottom:'1px',color:'grey'}}>{val.last_foll['nxt_time']}</p>

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

  const row_data=rows.map(map_row)

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
{allstatus.map((it)=><Tab value={it.name} label={it.name} />)}

      </Tabs>
</Box>

</TabContext>

</Box>

<Box sx={{float:'left',mb:4}}>


<FormControl sx={{margin:3,height:20}}>
  <TextField id="search" label="Search" variant="outlined" />
</FormControl>

  <FormControl sx={{margin:3,height:20}}>
<LocalizationProvider dateAdapter={AdapterDayjs}>
<DatePicker label="Start Date" sx={{width:175}} onChange={(v,con)=>alert(v)} /> 
</LocalizationProvider>
</FormControl>

 <FormControl sx={{margin:3,height:20}}>
<LocalizationProvider dateAdapter={AdapterDayjs}>
<DatePicker label="End Date" sx={{width:175}} onChange={(v,context)=>alert(v)} />
</LocalizationProvider>
</FormControl>

<FormControl sx={{margin:3,height:20}}>
      
 <Autocomplete
  disablePortal
  id="combo-box-demo"
  options={tags}
  sx={{ width: 300 }}
  renderInput={(params) => <TextField {...params} label="Filter Leads" />}
/>

</FormControl>

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
         <LeadEditModal param={update_lead_modal} />
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
              Vikrant Kekan
            </Typography>

    <Tooltip title="Call Now" >
      <IconButton aria-haspopup="true" color="inherit">
        <LocalPhoneIcon />
      </IconButton>
    </Tooltip>

     <Tooltip title="Send WhatsApp" >
      <IconButton aria-haspopup="true" color="inherit">
        <WhatsAppIcon />
      </IconButton>
    </Tooltip>

    <Tooltip title="Send Email" >
      <IconButton aria-haspopup="true" color="inherit">
        <EmailIcon />
      </IconButton>
    </Tooltip>


          </Toolbar>
        </AppBar>

<FullInformation data={1} />

  </Dialog>



        </div>




	)

}


export default Leads