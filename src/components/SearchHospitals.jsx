import { Autocomplete, Box, Modal, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { MedifyBlueButton } from "./CustomComponents";
import docIcon from '../assets/icons/Doctor.png';
import labIcon from '../assets/icons/Drugstore.png';
import hospitalIcon from '../assets/icons/Hospital.png';
import medicineIcon from '../assets/icons/Capsule.png';
import ambulanceIcon from '../assets/icons/Ambulance.png';
 
import IconCard from "./IconCard";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4
  };


export default function SearchHospitals({isOpen, handleCancel, stateNames}){

    const [stateName, setStateName] = useState(null);
    const [cityNames, setCityNames] = useState(null);
    const [cityName, setCityName] = useState(null);

    const searchTypes = [
        {icon: docIcon, name:'Doctor', selected:false},
        {icon: labIcon, name:'Labs', selected:false},
        {icon: hospitalIcon, name:'Hospital', selected:true},
        {icon: medicineIcon, name:'Medical Store', selected:false},
        {icon: ambulanceIcon, name:'Ambulance', selected:false},    
    ]

    const handleStateSelect =(event, newState)=>{
        setStateName(newState);
        console.log('state name:', stateName);
    }

    const handleCitySelect = (event, newCity)=>{
        setCityName(newCity);
        console.log('city name:', cityName);
    }

    const fetchCityNames = async()=>{
        const fetchCities = await axios.get('https://meddata-backend.onrender.com/cities/' + stateName)
        console.log('cities for ', stateName, ' : ', fetchCities.data);
        setCityNames(fetchCities.data);
    }

    useEffect(()=>{
        fetchCityNames();
    }, [stateName])

    return(
        <Modal open={isOpen} onClose={handleCancel}>
            <Box sx={style} borderRadius='12px' minWidth={900}>
                <Box display='flex' justifyContent='space-around' alignItems='center' margin='6px'>
                    <Autocomplete 
                        options={stateNames}
                        renderInput={(params) => <TextField {...params} label="State" />}
                        sx={{width:250, margin:'1rem'}}
                        onChange={handleStateSelect}
                    />
                    <Autocomplete 
                        options={cityNames}
                        renderInput={(params) => <TextField {...params} label="City" />}
                        sx={{width:250, margin:'1rem'}}
                        onChange={handleCitySelect}
                    />
                    <MedifyBlueButton sx={{height:50, justifySelf:'right'}}>Search</MedifyBlueButton>
                </Box>
                <Box justifyItems='center' textAlign='center'>
                    <p style={{fontSize:'16', fontWeight:'bold'}}>You may be looking for</p>
                    <Box display='flex' justifyContent='space-evenly' alignItems='center'>
                        {searchTypes.map((search)=>(<IconCard icon={search.icon} name={search.name} selected={search.selected} key={`${search.name} card`}/>))}
                    </Box>
                </Box>
            </Box>
        </Modal>
    )

}