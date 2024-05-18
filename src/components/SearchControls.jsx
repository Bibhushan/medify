import { Autocomplete, Box, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MedifyBlueButton } from "./CustomComponents";
import axios from "axios";
import { enqueueSnackbar } from "notistack";

export default function SearchControls(){

    const navigate = useNavigate(null);
   
    const [stateNames, setStateNames] = useState([]);
    const [stateName, setStateName] = useState(null);
    const [cityNames, setCityNames] = useState([]);
    const [cityName, setCityName] = useState(null);

   const handleStateSelect =(event, newState)=>{
        setStateName(newState);
        console.log('state name:', stateName);
        // if (stateHandler !== null) stateHandler(newState);
    }

    const handleCitySelect = (event, newCity)=>{
        setCityName(newCity);
        console.log('city name:', cityName);
        // if (cityHandler !== null) cityHandler(newCity);
    }

    const fetchCityNames = async()=>{
        const fetchCities = await axios.get('https://meddata-backend.onrender.com/cities/' + stateName)
        console.log('cities for ', stateName, ' : ', fetchCities.data);
        setCityNames(fetchCities.data);
    }

    useEffect(()=>{
        let states = JSON.parse(localStorage.getItem('StateNames'));        
        console.log('state names in search controls: ', states);
        setStateNames(states);
    }, []);

    useEffect(()=>{
        fetchCityNames();
    }, [stateName])

    const onSearch = ()=>{
        if (!stateName){
            enqueueSnackbar('Please select a State.', {variant:'warning'});
            return;
        }

        if (!cityName){
            enqueueSnackbar('Please select a City', {variant:'warning'});
            return;
        }
        
        localStorage.setItem('State', stateName);
        localStorage.setItem('City', cityName);

        // if (searchHandler === null){
            navigate('search', {state:{stateName:stateName, cityName:cityName}});
        // } else {
            // searchHandler();
        // }
    }

    return(
        <Box display='flex' justifyContent='space-around' alignItems='center' margin='6px'>
            <Autocomplete 
                options={stateNames}
                renderInput={(params) => <TextField {...params} label="State" />}
                sx={{width:250, margin:'1rem'}}
                onChange={handleStateSelect}
                value={stateName}
            />
            <Autocomplete 
                options={cityNames}
                renderInput={(params) => <TextField {...params} label="City" />}
                sx={{width:250, margin:'1rem'}}
                onChange={handleCitySelect}
                value={cityName}
            />
            <MedifyBlueButton sx={{height:50, justifySelf:'right'}} onClick={onSearch}>Search</MedifyBlueButton>
        </Box>
    )
}