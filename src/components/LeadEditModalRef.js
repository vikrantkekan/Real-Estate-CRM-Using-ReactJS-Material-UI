import React from 'react'

import Box from '@mui/material/Box';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Chip from '@mui/material/Chip'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Divider from '@mui/material/Divider';

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import FlagIcon from '@mui/icons-material/Flag';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import CampaignIcon from '@mui/icons-material/Campaign';

import LeadFeedBack from './Forms/LeadFeedBack';
import LeadTimeline from './Forms/LeadTimeline'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/Star';
import BusinessIcon from '@mui/icons-material/Business';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80vw',
  height: '80vh',
  bgcolor: 'background.paper',
  border: '2px solid #fff',
  boxShadow: 2,
  p: 4,
  borderRadius:'15px',
  overflowY:'scroll',
};


class LeadEditModalRef extends React.Component{
	constructor(props){
super(props)
this.state={
  alldata:props.data.allinfo
}

fetch('http://localhost//demo/demo/php/referencelead.php?lid='+props.data.lid)
.then((response)=>response.json())
.then((data)=>{
    console.log('ref',data[0])
    this.setState({ alldata:data[0]});
})
.catch((err)=>console.log(err));
}


	render(){

let wa='https://wa.me/'+this.state.alldata.mobile+'?text=Hello,';

		return(

		<Box sx={style}>


<Typography id="modal-modal-title" variant="h6" component="h2">
        
          </Typography>

<Grid container id="modal-modal-description" spacing={3}>

<Grid item  xs={6} md={6} sx={{overflowY:'scroll',maxHeight:'36vw',mt:4}}>

<LeadTimeline data={this.props.data.lid} />

</Grid>

<Grid item xs={6} md={6} sx={{Height:550}}>

<Paper sx={{padding:2,height:'auto'}}>

<Grid container>

<Grid item xs={12} md={12} sx={{backgroundColor:'#f0f0f0',height:'auto'}}>

<Chip label={this.state.alldata.statu} sx={{float:'right',m:1}} color="success"></Chip>

<Box sx={{ml:3}}>
<p style={{fontSize:'24px',fontWeight:600,marginBottom:'5px'}}>{this.state.alldata.name}</p> 

<a href={'tel:'+this.state.alldata.mobile} style={{color:'#1f1f1f'}}>
  <Tooltip title="Call Now" >
      <IconButton aria-haspopup="true" color="inherit">
        <LocalPhoneIcon />
      </IconButton>
    </Tooltip>
    </a>

<a href={wa} style={{color:'#1f1f1f'}} target="_blank">
     <Tooltip title="Send WhatsApp" >
      <IconButton aria-haspopup="true" color="inherit">
        <WhatsAppIcon />
      </IconButton>
    </Tooltip>
   </a>

<a href={'mailto:'+this.state.alldata.email} style={{color:'#1f1f1f'}}>
    <Tooltip title="Send Email" >
      <IconButton aria-haspopup="true" color="inherit">
        <EmailIcon />
      </IconButton>
    </Tooltip>
</a>

    <span style={{float:'right',marginRight:'10px',marginTop:'5px'}}>
    <StarIcon sx={{color:'#faaf00',fontSize:'16px'}} />
    <StarIcon sx={{color:'#faaf00',fontSize:'16px'}} />
    <StarIcon sx={{color:'#faaf00',fontSize:'16px'}} />
    <StarIcon sx={{color:'#faaf00',fontSize:'16px'}} />
    <StarIcon sx={{color:'#faaf00',fontSize:'16px'}} />
    </span>

    </Box>

<Divider/>

<div style={{margin:'15px'}}>

<List>

<ListItem>
<ListItemIcon><LocalPhoneIcon /></ListItemIcon> <ListItemText sx={{p:0,m:-3}} >{this.state.alldata.mobile}</ListItemText>
</ListItem>

<ListItem>
<ListItemIcon><EmailIcon /></ListItemIcon> <ListItemText sx={{p:0,m:-3}} >{this.state.alldata.email}</ListItemText>
</ListItem>

<ListItem>
<ListItemIcon><LocationOnIcon /></ListItemIcon> <ListItemText sx={{p:0,m:-3}} >{this.state.alldata.location}</ListItemText>
</ListItem>

<ListItem>
<ListItemIcon><HomeRepairServiceIcon /></ListItemIcon> <ListItemText sx={{p:0,m:-3}} >{this.state.alldata.profession}</ListItemText>
</ListItem>

<ListItem>
<ListItemIcon><BusinessIcon /></ListItemIcon> <ListItemText sx={{p:0,m:-3}} >{this.state.alldata.comp_name}</ListItemText> 
</ListItem>

</List>
<Divider/>



<List>
<ListItem>
<ListItemIcon><FlagIcon /></ListItemIcon> <ListItemText sx={{p:0,m:-3}} >{this.state.alldata.interested}</ListItemText>
</ListItem>

<ListItem>
<ListItemIcon><HomeWorkIcon /></ListItemIcon> <ListItemText sx={{p:0,m:-3}} >{this.state.alldata.project_name}</ListItemText> 
</ListItem>

<ListItem>
<ListItemIcon><CampaignIcon /></ListItemIcon> <ListItemText sx={{p:0,m:-3}} >{this.state.alldata.camp_name}</ListItemText>
</ListItem>

<ListItem>
<ListItemIcon><EventIcon /></ListItemIcon> <ListItemText sx={{p:0,m:-3}} >{this.state.alldata.on_date}</ListItemText>
</ListItem>




</List>

</div>
</Grid>



</Grid>

</Paper>

</Grid>

</Grid>

        </Box>


			)
	}
}

export default LeadEditModalRef;

