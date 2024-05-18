import { Box, Grid } from "@mui/material";
import hospital2 from '../assets/icons/hospital2.png';
import { MedifyBlueButton } from "./CustomComponents";
import './styles.css';

export default function HospitalCard({name, address, type}){
    return(
        <Grid container className='hospital-card' spacing={2} margin='1rem'>
            <Grid item md={8}>
                <Box display='flex'>
                    <Box margin={1}>
                        <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:124, height:124, borderRadius:62, backgroundColor:'#8CCFFF'}}>
                            <img src={hospital2} alt={name} style={{width:80, height:80}}/>
                        </div>
                    </Box>
                    <Box margin={1}>
                        <p style={{fontSize:20, fontWeight:600, color:'#14BEF0'}}>{name}</p>
                        <p style={{fontSize:14, fontWeight:700}}>{address}</p>
                        <p style={{fontSize:14}}>{type}</p>
                    </Box>
                </Box>
            </Grid>
            <Grid item md={4}>
                <Box display='block' alignItems='center' justifyItems='end' textAlign='center'>
                    <p style={{fontSize:14, fontWeight:500, color:'#01A400', margin:'0.25rem'}}>Available Today</p>
                    <MedifyBlueButton>Book FREE Center Visit</MedifyBlueButton>
                </Box>
            </Grid>
        </Grid>
    )
}