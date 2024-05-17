import { Button } from '@mui/material';
import medifyLogo from '../assets/medify-logo.png';
import { MedifyBlueButton, MedifyTransparentButton } from './MedifyButton';

export default function NavBar(){

    return (
        <div className='menu'>
            <div style={{display:'inherit'}}>
                <img src={medifyLogo} alt='medify logo' style={{width:24, height:24, padding:'1rem 0.25rem'}}/>
                <p style={{fontWeight:'bolder', color:'#2AA8FF'}}>Medify</p>
            </div>            
            <div style={{display:'inherit'}}>
                <MedifyTransparentButton>Find Doctors</MedifyTransparentButton>
                <MedifyTransparentButton>Hospitals</MedifyTransparentButton>
                <MedifyTransparentButton>Medicines</MedifyTransparentButton>
                <MedifyTransparentButton>Surgeries</MedifyTransparentButton>
                <MedifyTransparentButton>Software for Providers</MedifyTransparentButton>
                <MedifyBlueButton>My Bookings</MedifyBlueButton>
            </div>
        </div>
    )
    // return (
    //     <Box >
    //         <AppBar position="static">
    //             <Toolbar>
    //             <IconButton
    //                 size="large"
    //                 edge="start"
    //                 color="inherit"
    //                 aria-label="menu"
    //                 sx={{ mr: 2 }}
    //             >
    //                 <medifyLogo />
    //             </IconButton>
    //             <Typography variant="h6" component="div" textTransform='none' sx={{ flexGrow: 1 }}>
    //                 News
    //             </Typography>
    //             <Button color="inherit">Login</Button>
    //             </Toolbar>
    //         </AppBar>
    //     </Box>
    // )
}