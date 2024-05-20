import { Box, Grid, Rating } from "@mui/material";
import { useState } from "react";
import hospital2 from '../assets/icons/hospital2.png';
import { MedifyBlueButton } from "./CustomComponents";
import './styles.css';
import TimeSelector from "./DateTimeSelector";
import useLocalStorage from 'use-local-storage';
import {enqueueSnackbar } from 'notistack';

var options = { year: 'numeric', month: 'long', day: 'numeric' };

const formatDate =(dateString)=>{
  const newDate = new Date(dateString);
  return newDate.toLocaleDateString('en-IN', options)
}

export default function HospitalCard({name, address, city, state, zipCode, rating, isBooking=false, bookingDate=Date(), bookingTime='09:00 AM'}){

    const [isDateTimeSelectorOpen, setIsDateTimeSelectorOpen] = useState(false);

    const [bookings, setBookings] = useLocalStorage('bookings', []);

    const openDateTimeSelector = ()=> {
        if (!isDateTimeSelectorOpen) setIsDateTimeSelectorOpen(true)
    }

    const timeSelectionHandler = (selectedDate, selectedSlot)=>{
        console.log('time slot selected:', selectedDate, selectedSlot);
        setBookings([...bookings, {
            name:name,
            address:address,
            city: city,
            state: state, 
            zipCode:zipCode,
            rating: rating,
            bookingDate: selectedDate,
            bookingTime:selectedSlot
        }])        
        enqueueSnackbar(`Booking successful on ${selectedDate} at ${selectedSlot}`, {variant:'success'});
        setIsDateTimeSelectorOpen(false);
    }

    return(
        <Box className='hospital-card'>
            <Grid container  spacing={2}>
                <Grid item md={8}>
                    <Box display='flex'>
                        <Box margin={1}>
                            <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:124, height:124, borderRadius:62, backgroundColor:'#8CCFFF'}}>
                                <img src={hospital2} alt={name} style={{width:80, height:80}}/>
                            </div>
                        </Box>
                        <Box margin={1}>
                            <p style={{fontSize:20, fontWeight:600, color:'#14BEF0', margin:0}}>{name}</p>
                            <p style={{fontSize:14, fontWeight:700}}>{`${city}, ${state}, ${zipCode}`}</p>
                            <p style={{fontSize:14}}>{address}</p>
                            <Rating name='rating' value={rating}/>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={4}>
                    <Box display='block' alignItems='center' justifyItems='end' textAlign='center'>
                        <Box display='flex' textAlign='center' justifyContent='center' alignItems='center' margin='0.5rem 0rem 3rem 0rem'>
                            <Box visibility={isBooking ? 'visible' : 'hidden'}  width={80} margin='0.5rem' 
                                style={{fontSize:12, border:'1px solid #2AA7FF', padding:'0.25rem'}}
                            >
                                {bookingTime}
                            </Box>
                            <Box visibility={isBooking ? 'visible' : 'hidden'}  width={80} margin='0.5rem' 
                                style={{fontSize:12, border:'1px solid #00A500', color:'#007100', fontWeight:'bold', padding:'0.25rem'}}
                            >
                                {formatDate(bookingDate)}
                            </Box>
                        </Box>
                        {isBooking || 
                            <Box>
                                <p style={{fontSize:14, fontWeight:500, color:'#01A400', margin:'0.25rem'}}>Available Today</p>
                            <MedifyBlueButton fontSize={14} visibility={isBooking ? 'hidden' : 'visible'} onClick={openDateTimeSelector}>
                                    Book FREE Center Visit
                                </MedifyBlueButton>
                            </Box>
                        }
                    </Box>
                </Grid>
            </Grid>
            {isDateTimeSelectorOpen && 
                <Box backgroundColor='white'>
                    <TimeSelector onClickHandler={timeSelectionHandler}/>
                </Box>
            }
        </Box>
    )
}
