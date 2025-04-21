import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';


function Brochure(props){

let brochure='http://localhost//demo/demo/public/'+props.data2[0].brochure;

return(
<Box>

<Grid container>

<Grid item xs={12} sx={{p:1}}>

<Card sx={{ width:'100%',backgroundColor:'#dde8f8'}}>

 <CardHeader title={'Brochure'} subheader={props.data2[0].project_name}  />

<CardContent sx={{backgroundColor:'#fff'}}>

 <Grid container>

<Grid xs={12}>

 <embed src={brochure} style={{width:'100%',height:'800px'}} />

</Grid>

</Grid>
	</CardContent>
 </Card>

</Grid>
</Grid>
</Box>
	)
}

export default Brochure;