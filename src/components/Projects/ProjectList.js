import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'
import ProjectCard from './ProjectCard'
import Dialog from '@mui/material/Dialog'
import Slide from '@mui/material/Slide';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';


class ProjectList extends React.Component{

	constructor(props){
		super(props)

		this.state={
project_data:[]
		}

}


componentDidMount(){

	if(this.props.allcookie.uroles[0].projects){

let url='http://localhost//demo/demo/php/projects.php?project_access='+this.props.allcookie.project_access;

//let url='http://localhost/crm/php/projects.php?project_access='+this.props.allcookie.project_access;

fetch(url).
then((response)=>response.json()).
then((data)=>{this.setState({project_data:data})}).
catch((error)=>console.log(error))

	}
}


render(){

	const dat=this.state.project_data.map((item)=><ProjectCard data={item} />)

	return(

<Box sx={{pt:10}}>
<Grid container sx={{p:2}}>

{dat}
</Grid>


</Box>
			)
	}
}

export default ProjectList;

