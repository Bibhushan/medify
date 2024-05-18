import { Box, Modal } from "@mui/material";
import docIcon from '../assets/icons/Doctor.png';
import labIcon from '../assets/icons/Drugstore.png';
import hospitalIcon from '../assets/icons/Hospital.png';
import medicineIcon from '../assets/icons/Capsule.png';
import ambulanceIcon from '../assets/icons/Ambulance.png'; 
import IconCard from "./IconCard";
import SearchControls from "./SearchControls";
import { useMemo } from "react";

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

const searchTypeList = [
    {icon: docIcon, name:'Doctor', selected:false},
    {icon: labIcon, name:'Labs', selected:false},
    {icon: hospitalIcon, name:'Hospital', selected:true},
    {icon: medicineIcon, name:'Medical Store', selected:false},
    {icon: ambulanceIcon, name:'Ambulance', selected:false},    
];

export default function SearchHospitals({isOpen, handleCancel}){

    const searchTypes = searchTypeList;
    
    return(
        <Modal open={isOpen} onClose={handleCancel}>
            <Box sx={style} borderRadius='12px' minWidth={900}>
                <SearchControls openSearchPage={true}/>                
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