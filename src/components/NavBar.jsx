import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { MedifyBlueButton, MedifyLogo, MedifyTransparentButton } from './CustomComponents';

export default function NavBar(){

    const navigate = useNavigate();

    return (
        <Box display='flex' justifyContent='space-between' alignItems='center' style={{padding:'1rem 2rem'}}>
            <MedifyLogo/>            
            <div style={{display:'inherit'}}>
                <MedifyTransparentButton onClick={()=>navigate('/')}>Find Doctors</MedifyTransparentButton>
                <MedifyTransparentButton onClick={()=>navigate('/search')}>Hospitals</MedifyTransparentButton>
                <MedifyTransparentButton>Medicines</MedifyTransparentButton>
                <MedifyTransparentButton>Surgeries</MedifyTransparentButton>
                <MedifyTransparentButton>Software for Providers</MedifyTransparentButton>
                <MedifyBlueButton onClick={()=>navigate('/bookings')}>My Bookings</MedifyBlueButton>
            </div>
        </Box>
    )
}