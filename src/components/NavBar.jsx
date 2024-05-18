import { Box } from '@mui/material';
import { MedifyBlueButton, MedifyLogo, MedifyTransparentButton } from './CustomComponents';

export default function NavBar(){

    return (
        <Box display='flex' justifyContent='space-between' alignItems='center' style={{padding:'1rem 2rem'}}>
            <MedifyLogo/>            
            <div style={{display:'inherit'}}>
                <MedifyTransparentButton>Find Doctors</MedifyTransparentButton>
                <MedifyTransparentButton>Hospitals</MedifyTransparentButton>
                <MedifyTransparentButton>Medicines</MedifyTransparentButton>
                <MedifyTransparentButton>Surgeries</MedifyTransparentButton>
                <MedifyTransparentButton>Software for Providers</MedifyTransparentButton>
                <MedifyBlueButton>My Bookings</MedifyBlueButton>
            </div>
        </Box>
    )
}