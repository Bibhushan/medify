import { Box, Grid } from "@mui/material";
import './styles.css';
import patientCaring from '../assets/PatientCaring.png';

export default function PatientCaring(){

    return(
        <Box sx={{padding:'2rem 5rem'}}>           
            <Grid container spacing={2}>
                <Grid item md={6} style={{justifyItems:'right'}}>
                    <img src={patientCaring} alt='faq' style={{maxWidth:'100%', maxHeight:480}}></img>
                </Grid>
                <Grid item md={6} sx={{padding:'2rem'}}>
                    <Box sx={{textAlign:'left', margin:'2rem', alignItems:'center'}}>
                        <p className="section-subtitle">HELPING PATIENTS FROM AROUND THE GLOBE!!</p>
                        <p className="section-heading">Patient <span style={{color:'#2AA7FF'}}>Caring</span></p>
                        <p style={{margin:'0.5rem', padding:'1rem 0rem'}}>Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. 
                            We hope you will allow us to care for you and strive to be the first and best choice for healthcare.</p>
                        <li style={{fontSize:18, fontWeight:'bold', margin:'1rem'}}>Stay Updated About Your Health</li>
                        <li style={{fontSize:18, fontWeight:'bold', margin:'1rem'}}>Check Your Results Online</li>
                        <li style={{fontSize:18, fontWeight:'bold', margin:'1rem'}}>Manage Your Appointments</li>
                    </Box>
                </Grid>
            </Grid>            
        </Box>
    )
}