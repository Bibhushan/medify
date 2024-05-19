import { Box, Grid } from "@mui/material";
import HospitalCard from "./HospitalCard";
import offer from '../assets/offers/Offer1.png';

export default function HospitalList({hospitals, isBooking=false}){
    return (
        <Box padding='1rem'>
            {hospitals.length > 0 && 
                <Box textAlign='left'>
                    <p style={{fontSize:24, fontWeight:'bold', padding:'0.5rem 1rem', margin:'0rem'}}>
                        {`${hospitals.length} medical center${ hospitals.length>1 ? 's' : ''} found in ${hospitals[0].City}.`}
                    </p>
                    <p style={{fontSize:16, padding:'0rem 1rem', margin:'0rem'}}>
                        Book appointments with minimum wait-time & verified doctor details
                    </p>
                    <Grid container margin='1rem 0rem' spacing={2}>
                        <Grid item md={8}>
                            {hospitals.map((hosp)=>(
                            <HospitalCard 
                                name={hosp['Hospital Name']} 
                                address={hosp['Address']} 
                                city={hosp['City']}
                                state={hosp['State']}
                                zipCode={hosp['ZIP Code']}
                                rating={hosp['Hospital overall rating']}
                                isBooking={isBooking}                                
                            />))}
                        </Grid>
                        <Grid item md={4} display='flex'>
                            <Box borderRadius={12} margin='1rem' padding='0rem 1rem'>
                                <img src={offer} alt='offer' style={{width:'80%', height:'auto'}}/>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            }
        </Box>

    )
}