import { Box } from "@mui/material";

const timeSlotsByTimeOfDay = {
    'Morning': ['09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'],
    'Afternoon': ['12:00 PM', '12:30 PM', '02:00 PM', '02:30 PM', '03:00 PM'],
    'Evening': ['05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM']
}

function randomVisibility(selectionProb=0.8){
    return Math.random() < selectionProb ? 'visible' : 'hidden';
}

const TimeSlots = ({timeOfDay, onClickHandler})=>{

    const slots = timeSlotsByTimeOfDay[timeOfDay];

    console.log('timeSlot', timeOfDay, slots, timeSlotsByTimeOfDay[timeOfDay]);

    return (

        <Box display='flex' flexWrap='nowrap' justifyContent='space-between'>
            <Box padding='0.5rem' margin='1rem' sx={{fontWeight:400, fontSize:12, textAlign:'end', width:100}}>{timeOfDay}</Box>
            {slots.map((slot)=>(
                <button
                    style={{border:'1px solid #2AA7FF', padding:'0.5rem', margin:'1rem', backgroundColor:'white', 
                            borderRadius:'4px', color:'#2AA7FF', fontSize:12, fontWeight:400,
                            visibility: randomVisibility()}} 
                    onClick={()=>onClickHandler(slot)}
                >
                    {slot}
                </button>
            ))}
        </Box>
        
    )
    
}

export default function TimeSelector({date=Date(), onClickHandler}){
    return (
        <Box>
            <TimeSlots timeOfDay='Morning' onClickHandler={onClickHandler}/>
            <TimeSlots timeOfDay='Afternoon' onClickHandler={onClickHandler}/>
            <TimeSlots timeOfDay='Evening' onClickHandler={onClickHandler}/>           
        </Box>
    )
}