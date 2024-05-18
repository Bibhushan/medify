import { Box, Button, Container, Grid, InputAdornment, TextField } from "@mui/material"
import downloadAppImage from '../assets/download-App.png';
// import vectorImage from '../assets/Vector.png';
import { MedifyBlueButton } from "./CustomComponents";
import './styles.css';

export default function AppDownload(){

    return(

        <Box sx={{padding:'2rem 5rem 0rem 5rem'}} >
            <Grid container spacing={3}>
                <Grid item md={6} justifyItems='center' height='100%' width='auto'>
                    <img src={downloadAppImage} alt='phones' style={{height:'100%'}}/>
                </Grid>
                <Grid item md={6} textAlign='left' padding='2rem' display='grid'>
                    <Box >
                        <p className="section-heading">Download the <br/><span style={{color:'#2AA7FF'}}> Medify </span> App</p> 
                        <h6>Get the link to download the app</h6>
                        <Box display='flex'>
                        {/* TODO handle phone number input */}
                        <TextField
                            sx={{ m: 1, width: 250 }}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                            }}
                            />
                            <MedifyBlueButton>Send SMS</MedifyBlueButton>
                        </Box>
                        {/* TODO Style and implement download buttons */}
                        <Container>
                            <Button>
                                Google Play
                            </Button>
                            <Button>
                                App Store
                            </Button>
                        </Container>
                    </Box>                   
                </Grid>
            </Grid>
        </Box>
        
    )

}