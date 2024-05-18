
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import axios from 'axios';
import { useEffect, useState } from "react";
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import SearchHospitals from "../components/SearchHospitals";

export default function HomePage(){

    const [stateNames, setStateNames] = useState([]);

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
            setStateNames(fetchStates.data);
        }
        catch (e){
            enqueueSnackbar('Error occured when fetching state names.', {variant:'error'})
        }
    }

    useEffect(()=>{
        fetchStates();
        console.log('state names: ', stateNames);            
    }, [])

    return (
        <div style={{padding:'1rem 2rem'}}>
            <SnackbarProvider/>
            <NavBar />
            <HeroSection 
                topText='Skip the travel! Find Online'
                middleNormal='Medical'
                middleHighlight='Center'
                bottomText='Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.'
                onSearch={openSearch}
            />
            <SearchHospitals isOpen={isSearchOpen} handleCancel={closeSearch} stateNames={stateNames}/>
        </div>
    )
}