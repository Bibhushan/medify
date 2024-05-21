import { Box, Grid } from "@mui/material";
import './styles.css';
import KPI1 from '../assets/kpis/KPI1.png';
import KPI2 from '../assets/kpis/KPI2.png';
import KPI3 from '../assets/kpis/KPI3.png';
import KPI4 from '../assets/kpis/KPI4.png';

function KPICard({image}){
    return (
        <Box>
            <img src={image} alt='kpi' style={{width:'100%', height:'auto'}} />
        </Box>
    )
}

export default function KPIs(){

    return(
        <Box sx={{padding:'2rem 5rem'}}>           
            <Grid container spacing={2}>
                <Grid item md={6} sx={{padding:'2rem'}}>
                    <Box sx={{margin:'2rem', textAlign:'left'}}>
                        <p className="section-subtitle">CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</p>
                        <p className="section-heading">Our Families</p>
                        <p style={{margin:'0.5rem', padding:'1rem 0rem', lineHeight:3}}>We will work with you to develop individualised care plans, 
                        including management of chronic diseases. If we cannot assist, 
                        we can provide referrals or advice about the type of practitioner you require. 
                        We treat all enquiries sensitively and in the strictest confidence.</p>                    
                    </Box>
                </Grid>
                <Grid item md={6} style={{justifyItems:'right'}}>
                    <Grid container spacing={1}>
                        <Grid item md={6} margin={0}>
                            <KPICard image={KPI1}/>
                            <KPICard image={KPI2}/>
                        </Grid>
                        <Grid item md={6} margin='3rem 0 0 0'>
                            <KPICard image={KPI3}/>
                            <KPICard image={KPI4}/>
                        </Grid>
                    </Grid>
                </Grid>                
            </Grid>            
        </Box>
    )
}