import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Chip from '@mui/material/Chip'
import {useState,useEffect} from 'react'

function LeadTimeline(props){

const [timeline,setTimeline]=useState([]);

useEffect(
()=>{
    let url='http://localhost//demo/demo/php/timeline.php?lid='+props.data
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data)
        setTimeline(data);
    })
}
,[]
    );

let q=timeline.map((itm)=>{
    let c=JSON.parse(itm.updat);

    if(itm.up_type=='lead_status'){

return <Step index={0} active = {true}>
<StepLabel label="one">
<Chip sx={{fontSize:'14px',color:'#4f4f4d',fontWeight:400}} label={c.tag} ></Chip>  

</StepLabel>
 <StepContent sx={{color:'#4f4f4d',fontSize:'13px'}} > 
 <span style={{fontSize:'12px',color:'#4f4f4d'}}> {itm.on_date} <span style={{fontSize:'13px'}}><b>By {itm.fullname}</b></span> </span>
 <p>{c.cmt}</p>
 </StepContent>
</Step>
}

 else if(itm.up_type=='lead_details'){
    var g='';
    for(let k in c){
g=g+''+k+' : '+c[k]+' , '
    }
return <Step index={0} active = {true}>
<StepLabel label="one">
<Chip sx={{fontSize:'14px',color:'#4f4f4d',fontWeight:400}} label="Lead Details Edited" ></Chip>  

</StepLabel>
 <StepContent sx={{color:'#4f4f4d',fontSize:'13px'}} > 
 <span style={{fontSize:'12px',color:'#4f4f4d'}}> {itm.on_date} <span style={{fontSize:'13px'}}><b>By {itm.fullname}</b></span> </span>
 <p>{g}</p>
 </StepContent>
</Step>
}

  else if(itm.up_type=='lead_transfer'){

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let dat=new Date(itm.on_date);

    let dat_form=dat.getDate()+'th '+ months[dat.getMonth()]+' '+dat.getFullYear()

return <Step index={0} active = {true}>
<StepLabel label="one">
<Chip sx={{fontSize:'14px',color:'#4f4f4d',fontWeight:400}} label={'Assigned to '+c.name} ></Chip>  

</StepLabel>
 <StepContent sx={{color:'#4f4f4d',fontSize:'13px'}} > 
 <span style={{fontSize:'12px',color:'#4f4f4d'}}>{dat_form} <span style={{fontSize:'13px'}}><b>By {itm.fullname}</b></span> </span>
 <p>{c.comment}</p>
 </StepContent>
</Step>
}

})

	return(

<Stepper activeStep={0,1} orientation="vertical">
{q}
</Stepper>

		)
}

export default LeadTimeline