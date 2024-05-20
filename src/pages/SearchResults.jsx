import { Box, Grid } from "@mui/material";
import axios from "axios";
import { enqueueSnackbar, SnackbarProvider } from "notistack";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import HospitalCard from "../components/HospitalCard";
import SearchControls from "../components/SearchControls";
import offer from '../assets/offers/Offer1.png';
import HospitalList from "../components/HospitalList";

export default function SearchResults(){

    const location = useLocation();

    const [hospitals, setHospitals] = useState([]);

    const fetchHospitals = async(stateName, cityName)=>{
        try{
            const fetchHospitals = await axios.get(`https://meddata-backend.onrender.com/data?state=${stateName}&city=${cityName}`)
            console.log('hospital data: ', fetchHospitals.data);
            setHospitals(fetchHospitals.data);
        }
        catch (e){
            enqueueSnackbar('Error occured when fetching hospital data.', {variant:'error'})
        }
    }

    useEffect(()=>{
        console.log(JSON.stringify(location));
        if (location.state !==null && location.city !== null) fetchHospitals(location.state.stateName, location.state.cityName);
    }, [location])

    // const stateHandler = (state)=>{
    //     setStateName(state);
    //     setCityName(null);
    // }

    // const cityHandler = (city)=>{
    //     setCityName(city);
    // }

    // const searchHandler = ()=>{
    //     fetchHospitals();
    // }
    
    return (
        <Box>
            <SnackbarProvider />
            <Box sx={{height:80, background: 'linear-gradient(91.75deg, #2AA7FF 1.4%, #0C8CE6 100.57%)', padding:0, borderRadius:'0px 0px 16px 16px'}}/>            
        
            <Box padding='1rem' textAlign='left'>
                <SearchControls location={location.state} openSearchPage={false}/>
                {hospitals.length > 0 && 
                    <p style={{fontSize:24, fontWeight:'bold', padding:'0.5rem 1rem', margin:'0rem'}}>
                        {`${hospitals.length} medical center${ hospitals.length>1 ? 's' : ''} found in ${hospitals[0].City}.`}
                    </p>
                }
                    <p style={{fontSize:16, padding:'0rem 1rem', margin:'0rem'}}>
                        Book appointments with minimum wait-time & verified doctor details
                    </p>
                {hospitals.length > 0 && 
                    <HospitalList hospitals={hospitals} isBooking={false} />
                }
            </Box>
        </Box>
    )
}