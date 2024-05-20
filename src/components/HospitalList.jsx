import { Box, Grid } from "@mui/material";
import HospitalCard from "./HospitalCard";
import offer from '../assets/offers/Offer1.png';

export default function HospitalList({hospitals, isBooking=false}){
    return (
        <Box padding='1rem'>
            {hospitals.length > 0 && 
                <Box textAlign='left'>
                    <Grid container margin='1rem 0rem' spacing={2}>
                        <Grid item md={8}>
                            {isBooking ? 
                                hospitals.map((hosp)=>(
                                    <HospitalCard 
                                        name={hosp.name} 
                                        address={hosp.address} 
                                        city={hosp.city}
                                        state={hosp.state}
                                        zipCode={hosp.zipCode}
                                        rating={hosp.rating}
                                        isBooking={true}
                                        bookingDate={hosp.bookingDate}
                                        bookingTime={hosp.bookingTime}
                                    />
                                )) 
                                :
                                hospitals.map((hosp)=>(
                                <HospitalCard 
                                    name={hosp['Hospital Name']} 
                                    address={hosp['Address']} 
                                    city={hosp['City']}
                                    state={hosp['State']}
                                    zipCode={hosp['ZIP Code']}
                                    rating={hosp['Hospital overall rating']}
                                    isBooking={isBooking}                                
                                />))
                            }
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