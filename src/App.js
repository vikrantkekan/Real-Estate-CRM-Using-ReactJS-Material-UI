import logo from './logo.svg';
import './App.css';
import './assets/style.css'
import {useState,useEffect} from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import Left_Nav from './components/Left_Nav'
import Leads from './components/Leads'
import About from './components/About'
import Dashboard from './components/Dashboard'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ProjectList from './components/Projects/ProjectList'
import Project from './components/Projects/Project'
import Users from './components/Users/Users'
import UserRoles from './components/Users/UserRoles'
import LeadStages from './components/Leads/LeadStages'
import LeadStatus from './components/Leads/LeadStatus'
import LeadTags from './components/Leads/LeadTags'
import Forms from './components/Connect/Forms'
import ConnectedAccount from './components/Connect/ConnectedAccount'
import Connections from './components/Connect/Connections'
import Campaigns from './components/Connect/Campaigns'
import Login from './components/Login/Login'
import CampaignList from './components/Campaigns/CampaignList'
import Instagram from './components/Campaigns/Instagram'
import Messages from './components/Campaigns/Messages'
import WebsiteCampaigns from './components/Connect/WebsiteCampaigns'

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import Avatar from '@mui/material/Avatar';

import { useCookies } from 'react-cookie';

import { Route, Routes, BrowserRouter, HashRouter as Router } from "react-router-dom";

import { generateToken,messaging } from './firebase_config';
import { onMessage } from 'firebase/messaging';

function App(props) {
  
const [cookies, setCookie,removeCookie] = useCookies(['name','all']);

//setCookie('name', 'Vikrant', { path: '/' });

const [open, setOpen] = useState(false);
const [msg, setMsg] = useState();

const [tok,setTok]=useState();

const [anchorEl, setAnchorEl] = useState(null);
  const open2 = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl(null);
  };



const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }
  setOpen(false);
}

function logout(){
  removeCookie('name',{path:'/'})
  removeCookie('all',{path:'/'})
  window.location.reload();
}

useEffect(()=>{

generateToken().then((resp)=>setTok(resp))

  onMessage(messaging,(payload)=>{
    console.log(payload);
    setOpen(true);
    setMsg(payload.data.title);
  })
},[])

  return (
<div>

<Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical:'bottom',horizontal:'right'}} >
  <Alert severity="success" variant="filled"sx={{ width: '100%' }} onClose={handleClose}>
    {msg}
  </Alert>
</Snackbar>

<Grid container>

       <AppBar position="fixed" sx={{zIndex:9,backgroundColor:'#193B68',display:cookies.name?'block':'none'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,color:'#dde8f8' }}>
            3 Dots Design
          </Typography>
          <Button color="inherit"
          id="basic-button"
          aria-controls={open2 ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open2 ? 'true' : undefined}
          onClick={handleClick}
          >
      <Avatar sx={{ bgcolor:'#fff' }}><span style={{color:'#193b68'}}>{cookies.name?cookies.name[0]:''}</span></Avatar>
            </Button>
          <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open2}
        onClose={handleClose2}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose2}>{cookies.name?cookies.name : 'Login'}</MenuItem>
        <MenuItem onClick={()=>logout()}>Logout</MenuItem>
      </Menu>

        </Toolbar>
      </AppBar>  


<Grid container >

<Router>
        <Routes>

        <Route path="/" element={ cookies.name?<Left_Nav allcookie={cookies.all} />:<Login data={tok} /> } >

          <Route path="dashboard" element={<Dashboard />} />
          <Route path="about" element={<About />} />

          <Route path="leads/:pid?" element={<Leads />} />
          
          <Route path="projectlist" element={<ProjectList allcookie={cookies.all} />} />
          <Route path="project/:pid" element={<Project />} />
          <Route path="Users" element={<Users />} />
          <Route path="UserRoles" element={<UserRoles />} />
          <Route path="Stages" element={<LeadStages />} />
          <Route path="Status" element={<LeadStatus />} />
          <Route path="Tags" element={<LeadTags />} />
          <Route path="Forms" element={<Forms />} />
          
          <Route path="ConnectedAccount" element={<ConnectedAccount />} />
          <Route path="Connections" element={<Connections />} />
          <Route path="Campaigns" element={<Campaigns />} />
          <Route path="Login" element={<Login />} />
          <Route path="CampaignList" element={<CampaignList />} />
          <Route path="Instagram" element={<Instagram />} />
          <Route path="Messages" element={<Messages />} />
          <Route path="WebsiteCampaigns" element={<WebsiteCampaigns />} />
    
        </Route>

        </Routes>

  </Router>

</Grid>
   
 </Grid>

</div>

  );

}

export default App;
