import IconCard from "./IconCard";
import laboratory from '../assets/icons/Drugstore.png';
import primary from '../assets/icons/Stethoscope.png';
import cardio from '../assets/icons/HeartRate.png';
import mri from '../assets/icons/HeartRateMonitor.png';
import bloodTest from '../assets/icons/BloodSample.png';
import pisco from '../assets/icons/q.png';
import xRay from '../assets/icons/X-Ray.png';
import ambulance from '../assets/icons/Ambulance.png';
import medicine from '../assets/icons/Capsule.png';
import { Box } from "@mui/material";
import { useState } from "react";
import { MedifyBlueButton } from "./CustomComponents";

const specializationList = [
    {icon:laboratory, name:'Dentistry'},
    {icon:primary, name:'Primary Care'},
    {icon:cardio, name:'Cardiology'},
    {icon:mri, name:'MRI Resonance'},
    {icon:bloodTest, name:'Blood Test'},
    {icon:pisco, name:'Piscologist'},
    {icon:laboratory, name:'Laboratory'},
    {icon:xRay, name:'X-Ray'},
    {icon:laboratory, name:'Laboratory'},
    {icon:ambulance, name:'Ambulance'},
    {icon:medicine, name:'Pharmacy'}
]

export default function SearchSpecialization(){

    const [isExpanded, setIsExpanded] = useState(false);
    const [specs, setSpecs] = useState(specializationList);

    const toggleExpanded = ()=>{
        setIsExpanded(!isExpanded);
    }

    return (
        <Box margin={0}  sx={{padding:'2rem 2rem'}}>
            <p className='section-heading'>Find by specialisation</p>
            <Box display='flex' flexWrap='wrap' margin='2rem'>
                {specs.slice(1,9).map((item)=>(<IconCard icon={item.icon} name={item.name}/>))}
                {isExpanded && 
                    specs.slice(9,12).map((item)=>(<IconCard icon={item.icon} name={item.name}/>))
                }
            </Box>
            <MedifyBlueButton onClick={toggleExpanded}>{isExpanded ? 'Collapse' : 'Expand All'}</MedifyBlueButton>
        </Box>
    )
}