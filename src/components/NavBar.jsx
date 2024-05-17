import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import medifyLogo from '../assets/medify-logo.png';

export default function NavBar(){

    return (
        <div className='menu'>
            <div style={{display:'inherit'}}>
                <img src={medifyLogo} style={{width:24, height:24, padding:'1rem 0.25rem'}}/>
                <p style={{fontWeight:'bolder', color:'#2AA8FF'}}>Medify</p>
            </div>            
            <div style={{display:'inherit'}}>
                <div className='menu-item'>Find Doctors</div>
                <div className='menu-item'>Hospitals</div>
                <div className='menu-item'>Medicines</div>
                <div className='menu-item'>Surgeries</div>
                <div className='menu-item'>Software for Providers</div>
                <div className='menu-item'>My Bookings</div>
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