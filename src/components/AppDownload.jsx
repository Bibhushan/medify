import { Box, Grid, InputAdornment, TextField } from "@mui/material"
import downloadAppImage from '../assets/download-App.png';
// import vectorImage from '../assets/Vector.png';
import { MedifyBlueButton } from "./CustomComponents";

export default function AppDownload(){

    return(

        <Box sx={{padding:'2rem 5rem 0rem 5rem'}} >
            <Grid container spacing={3}>
                <Grid item md={6} justifyItems='center' height='100%' width='auto'>
                    <img src={downloadAppImage} alt='phones' style={{height:'100%'}}/>
                </Grid>
                <Grid item md={6} textAlign='left' padding='2rem' display='grid'>
                    <Box >
                        <p style={{color:'#1B3C74', fontSize:30, fontWeight:600}}>Download the <br/><span style={{color:'#2AA7FF'}}> Medify </span> App</p> 
                        <h6>Get the link to download the app</h6>
                        <Box display='flex'>
                        <TextField
                            sx={{ m: 1, width: 250 }}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                            }}
                            />
                            <MedifyBlueButton>Send SMS</MedifyBlueButton>
                        </Box>
                    </Box>                   
                </Grid>
            </Grid>
        </Box>
        
    )

}