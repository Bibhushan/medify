
import HeroSection from "../components/HeroSection";
import axios from 'axios';
import { useEffect, useState } from "react";
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import SearchHospitals from "../components/SearchHospitals";
import useLocalStorage from 'use-local-storage';
import OffersSwiper from "../components/OffersSwiper";
import SearchSpecialization from "../components/SearchBySpecialization";
import DoctorSwiper from "../components/DoctorsSwiper";

export default function HomePage(){

    const [stateNames, setStateNames] = useLocalStorage('StateNames', "");

    const [isSearchOpen, setSearchOpen] = useState(false);

    const openSearch = ()=>{
        setSearchOpen(true);
    }

    const closeSearch = ()=>{
        setSearchOpen(false);
    }

    const fetchStates = async ()=>{
        try{
            const fetchStates = await axios.get('https://meddata-backend.onrender.com/states') 
            localStorage.setItem('StateNames', stateNames);           
            setStateNames(fetchStates.data);
        }
        catch (e){
            enqueueSnackbar('Error occured when fetching state names.', {variant:'error'})
        }
    }

    useEffect(()=>{
        fetchStates();
        // console.log('state names: ', stateNames);            
    }, [])

    return (
        <div >
            <SnackbarProvider/>
            <HeroSection 
                topText='Skip the travel! Find Online'
                middleNormal='Medical'
                middleHighlight='Center'
                bottomText='Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.'
                onSearch={openSearch}
            />
            <OffersSwiper/>
            <DoctorSwiper />
            <SearchSpecialization />
            <SearchHospitals isOpen={isSearchOpen} handleCancel={closeSearch} stateNames={stateNames}/>
        </div>
    )
}