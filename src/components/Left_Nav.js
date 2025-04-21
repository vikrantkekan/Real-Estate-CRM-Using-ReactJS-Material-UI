import React from 'react'
import { Outlet, Link  } from "react-router-dom";

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';

import Menu from '@mui/material/Menu';

import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';

import Drawer from '@mui/material/Drawer';

import ChecklistIcon from '@mui/icons-material/Checklist';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import SpeedIcon from '@mui/icons-material/Speed';

import CircleIcon from '@mui/icons-material/Circle';
import HomeWorkIcon from '@mui/icons-material/HomeWork';

import GroupIcon from '@mui/icons-material/Group';
import GolfCourseIcon from '@mui/icons-material/GolfCourse';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';



class Left_Nav extends React.Component{

	constructor(props){
		super(props);

		this.state={
            collapse:{
               inbox:'1',sent:'' 
            }
		}

  

	}


handle_click(e,v){

if(this.state.collapse[v]=='1'){
    this.setState( { collapse:{[v]:''}  } )
}
else{
    this.setState( { collapse:{[v]:'1'} } )
}

}


render(){

  let project_link=this.props.allcookie.projects.map((itm)=><Link to={'/leads/'+itm.id}>
  <ListItemButton sx={{ pl: 4}} >
   <ListItemIcon ><CircleIcon sx={{fontSize:7}}/></ListItemIcon><ListItemText sx={{}}>{itm.project_name} </ListItemText>
  </ListItemButton>
     </Link>)

	return(

<Grid container >
<Grid item xs={2} >


<div className="left_nav">

<Card sx={{ width: '17vw', height:'100%',borderRight:'none',mt:8 }} >
      <CardContent sx={{ padding:'0' }}>

<List>
<Link to="/dashboard" style={{}}>
<ListItem disablePadding>
<ListItemButton>
<ListItemIcon>
<SpeedIcon />
</ListItemIcon>
<ListItemText>
Dashboard
</ListItemText>

</ListItemButton>

</ListItem>
</Link>
      
        <ListItem disablePadding >
            
          <ListItemButton onClick={(e)=>this.handle_click(e,'inbox')} selected={this.state.collapse.inbox}>

           <ListItemIcon><ChecklistIcon /></ListItemIcon>
              <ListItemText primary="Leads" />
              {this.state.collapse.inbox ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>

        <Collapse in={this.state.collapse.inbox} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

        <Link to="/leads/all" >
          <ListItemButton sx={{ pl: 4}} >
           <ListItemIcon ><CircleIcon sx={{fontSize:7}}/></ListItemIcon><ListItemText sx={{}}> All Leads </ListItemText>
          </ListItemButton>
             </Link>
                 {project_link}
        </List>
      </Collapse>


 <Link to={'/projectlist'} >
<ListItem disablePadding>

<ListItemButton>
<ListItemIcon>
<HomeWorkIcon />
</ListItemIcon>
<ListItemText>
Projects
</ListItemText>

</ListItemButton>

</ListItem>
</Link>


        <ListItem disablePadding>
            <ListItemButton onClick={(e)=>this.handle_click(e,'users')} selected={this.state.collapse.users}>
              <ListItemIcon><GroupIcon /></ListItemIcon>

              <ListItemText primary="Users" />
              {this.state.collapse.users ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

          </ListItem>

        <Collapse in={this.state.collapse.users} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

        <Link to="/Users" >

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon><CircleIcon sx={{fontSize:7}}/></ListItemIcon><ListItemText primary="User List" />
          </ListItemButton>

        </Link>

              <Link to="/UserRoles">
           <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon><CircleIcon sx={{fontSize:7}}/></ListItemIcon><ListItemText primary="User Roles" />
          </ListItemButton>
             </Link>
    
             </List>
         </Collapse>



         <ListItem disablePadding>
            <ListItemButton onClick={(e)=>this.handle_click(e,'leadcycle')} selected={this.state.collapse.leadcycle}>
              <ListItemIcon><GolfCourseIcon /></ListItemIcon>

              <ListItemText primary="Lead Cycle" />
              {this.state.collapse.leadcycle ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

          </ListItem>

        <Collapse in={this.state.collapse.leadcycle} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

        <Link to="/Stages" >

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon><CircleIcon sx={{fontSize:7}}/></ListItemIcon><ListItemText primary="Lead Statges" />
          </ListItemButton>

        </Link>


    <Link to="/Status">
           <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon><CircleIcon sx={{fontSize:7}}/></ListItemIcon><ListItemText primary="Lead Status" />
          </ListItemButton>
    </Link>

     <Link to="/Tags">
           <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon><CircleIcon sx={{fontSize:7}}/></ListItemIcon><ListItemText primary="Lead Tags" />
          </ListItemButton>
    </Link>
    
        </List>
      </Collapse>




        <ListItem disablePadding>
            <ListItemButton onClick={(e)=>this.handle_click(e,'integration')} selected={this.state.collapse.users}>
              <ListItemIcon><IntegrationInstructionsIcon /></ListItemIcon>

              <ListItemText primary="Integration" />
              {this.state.collapse.integration ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

          </ListItem>

        <Collapse in={this.state.collapse.integration} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

        <Link to="/Forms" >

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon><CircleIcon sx={{fontSize:7}}/></ListItemIcon><ListItemText primary="Forms" />
          </ListItemButton>

        </Link>

        <Link to="/ConnectedAccount">
           <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon><CircleIcon sx={{fontSize:7}}/></ListItemIcon><ListItemText primary="Account" />
          </ListItemButton>
             </Link>

        <Link to="/Connections">
           <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon><CircleIcon sx={{fontSize:7}}/></ListItemIcon><ListItemText primary="Pages" />
          </ListItemButton>
             </Link>
    
         <Link to="/Campaigns">
           <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon><CircleIcon sx={{fontSize:7}}/></ListItemIcon><ListItemText primary="Meta Lead Campaigns" />
          </ListItemButton>
             </Link>

             <Link to="/WebsiteCampaigns">
           <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon><CircleIcon sx={{fontSize:7}}/></ListItemIcon><ListItemText primary="Website Campaigns" />
          </ListItemButton>
             </Link>

             </List>
         </Collapse>


         <ListItem disablePadding>
            <ListItemButton onClick={(e)=>this.handle_click(e,'analytics')} selected={this.state.collapse.analytics}>
              <ListItemIcon><GroupIcon /></ListItemIcon>

              <ListItemText primary="Social Media" />
              {this.state.collapse.analytics ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

          </ListItem>

        <Collapse in={this.state.collapse.analytics} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

        <Link to="/CampaignList" >

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon><CircleIcon sx={{fontSize:7}}/></ListItemIcon><ListItemText primary="Campaigns" />
          </ListItemButton>

        </Link>

              <Link to="/Instagram">
           <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon><CircleIcon sx={{fontSize:7}}/></ListItemIcon><ListItemText primary="Instagram" />
          </ListItemButton>
             </Link>

             <Link to="/Messages">
           <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon><CircleIcon sx={{fontSize:7}}/></ListItemIcon><ListItemText primary="Messages" />
          </ListItemButton>
             </Link>
    
             </List>
         </Collapse>


      </List>

      </CardContent>

  </Card>

</div>

  </Grid>
   
   <Grid item xs={10} sx={{padding:1}}>
 <Outlet />
</Grid>

  </Grid>

		);

}

}

export default Left_Nav;