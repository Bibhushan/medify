import { Box, Divider, Grid } from "@mui/material";
import { Copyright, MedifyLogo, SocialMediaLogo } from "./CustomComponents";
import iconFacebook from '../assets/iconFacebook.png';
import iconTwitter from '../assets/iconTwitter.png';
import iconYoutube from '../assets/iconYoutube.png';
import iconPintrest from '../assets/iconPintrest.png';

export default function Footer(){

    return(
        <Box sx={{backgroundColor:'#1B3C74', padding:'2rem 5rem', color:'white', textAlign:'left'}}>
            <Box display='flex' marginBottom='2rem'>
                <Box display='grid' sx={{alignContent:'space-between', minWidth:200, width:240}}>
                    <MedifyLogo/>
                    <Box>
                        <SocialMediaLogo logo={iconFacebook} logoName='facebook'/>
                        <SocialMediaLogo logo={iconTwitter} logoName='twitter'/>
                        <SocialMediaLogo logo={iconYoutube} logoName='youtube'/>
                        <SocialMediaLogo logo={iconPintrest} logoName='pintrest'/>
                    </Box>
                </Box>
                <Grid container spacing={2} style={{fontSize:12}}>
                    <Grid item md={4}>
                        <p>{">   About Us"}</p>
                        <p>{">   Out Pricing"}</p>
                        <p>{">   Our Gallery"}</p>
                        <p>{">   Appointments"}</p>
                        <p>{">   Privacy Policy"}</p>
                    </Grid>
                    <Grid md={4} item>
                        <p>{">   Orthology"}</p>
                        <p>{">   Neurology"}</p>
                        <p>{">   Dental Care"}</p>
                        <p>{">   Opthalmology"}</p>
                        <p>{">   Cardiology"}</p>
                    </Grid>
                    <Grid item md={4} sx={{marginBottom:'1rem'}}>
                        <p>{">   About Us"}</p>
                        <p>{">   Out Pricing"}</p>
                        <p>{">   Our Gallery"}</p>
                        <p>{">   Appointments"}</p>
                        <p>{">   Privacy Policy"}</p>
                    </Grid>
                </Grid>       
            </Box>
            <Divider variant='fullWidth' sx={{backgroundColor:'grey'}}/>
            <Copyright year={2024}/>
        </Box>
    )
}