import { Box, Grid } from "@mui/material";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import HospitalCard from "../components/HospitalCard";
import SearchControls from "../components/SearchControls";
import offer from '../assets/offers/Offer1.png';

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
        fetchHospitals(location.state.stateName, location.state.cityName);
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
        <Box padding='1rem'>
            <SearchControls location={location.state} openSearchPage={false}/>
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