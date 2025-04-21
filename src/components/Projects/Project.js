import { Route, Link, useParams } from 'react-router-dom';
import {useState,useEffect} from 'react'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import TabList from '@mui/lab/TabList';


import ProjectInformation from './ProjectInformation'
import Amenities from './Amenities'
import Specification from './Specification'
import Layout from './Layout'
import FloorPlans from './FloorPlans'
import Location from './Location'
import CostSheet from './CostSheet'
import Brochure from './Brochure'
import ProjectConfiguration from './ProjectConfiguration'

function Project(){

	let { pid } = useParams();
	const [tabv,setTabv]=useState('');

	const [projectinfo,setProjectinfo]=useState([]);

	useEffect(()=>{

let url='http://localhost//demo/demo/php/project-details.php?pid='+pid;
//let url='http://localhost/crm/php/project-details.php?pid='+pid;
		fetch(url).
		then((response)=>response.json()).
		then((resp)=>{
			setProjectinfo(resp)
			setTabv('Project Info')
		}).
		catch((err)=>console.log(err));
		},[]
		);

	function handleChange(e,v){
		setTabv(v)
		console.log(projectinfo)
	}

return(

<Box sx={{pt:10}}>

<TabContext value={tabv}>

<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>

<TabList variant="fullWidth" onChange={(e,v)=>handleChange(e,v)}>
<Tab label="Project Info" value="Project Info" />
<Tab label="Amenities" value="Amenities" />
<Tab label="Specifications" value="Specifications" />
<Tab label="Layout Plan" value="Layout Plan" />
<Tab label="Floor Plans" value="Floor Plans" />
<Tab label="Location" value="Location" />
<Tab label="Cost Sheet" value="CostSheet" />
<Tab label="Brochure" value="Brochure" />

</TabList>

</Box>

<TabPanel value="Project Info">
 <ProjectInformation data={tabv} data2={projectinfo} />
</TabPanel>

<TabPanel value="Amenities">
<Amenities data={tabv} data2={projectinfo} /> 
</TabPanel>

<TabPanel value="Specifications">
<Specification data={tabv} data2={projectinfo} />
</TabPanel>

<TabPanel value="Layout Plan">
<Layout data={tabv} data2={projectinfo} />
</TabPanel>

<TabPanel value="Floor Plans">
<FloorPlans data={tabv} data2={projectinfo} />
</TabPanel>

<TabPanel value="Location">
<Location data={tabv} data2={projectinfo} />
</TabPanel>

<TabPanel value="CostSheet">
<CostSheet data={tabv} data2={projectinfo} />
</TabPanel>

<TabPanel value="Brochure">
<Brochure data={tabv} data2={projectinfo} />
</TabPanel>


</TabContext>

 <Box sx={{p:3}}>

 </Box>

</Box>
	)

}

export default Project;