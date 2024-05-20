import { Box, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import { MedifyTab } from "./CustomComponents";

const timeSlotsByTimeOfDay = {
    'Morning': ['09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'],
    'Afternoon': ['12:00 PM', '12:30 PM', '02:00 PM', '02:30 PM', '03:00 PM'],
    'Evening': ['05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM']
}

function randomVisibility(selectionProb=0.8){
    return Math.random() < selectionProb ? 'visible' : 'hidden';
}

var options = { year: 'numeric', month: 'long', day: 'numeric' };

const formatDate =(date)=>{
    console.log('date', date);
    return date.toLocaleDateString('en-IN', options)
}

// function getAvailabilityCount(slots){
//     return slots.map((result, item)=>{
//         let visible = item.slotVisibility === 'visible' ? 1 : 0;
//         return result + visible;
//     })
// }

function getDates(){
    var currDate = new Date();
    var dates = [{label:'Today', date:currDate}];

    for (let i=0; i<6; i++){
        currDate.setDate(currDate.getDate() + 1);
        if (i===0){
            dates.push({label:'Tomorrow', date:currDate})
        } 
        else {
            dates.push({label:formatDate(currDate) , date:currDate})
        }
    }

    return dates;
}

const TimeSlots = ({timeOfDay, onClickHandler})=>{

    const [slots, setSlots] = useState([]);

    // console.log('timeSlot', timeOfDay, slots, timeSlotsByTimeOfDay[timeOfDay]);

    useEffect(()=>{
        setSlots(timeSlotsByTimeOfDay[timeOfDay]);
    }, [timeOfDay])

    return (

        <Box display='flex' flexWrap='nowrap' justifyContent='space-between'>
            <Box padding='0.5rem' margin='1rem' sx={{fontWeight:400, fontSize:12, textAlign:'end', width:100}}>{timeOfDay}</Box>
            {slots.map((slot)=>(
                <button
                    style={{border:'1px solid #2AA7FF', padding:'0.5rem', margin:'1rem', backgroundColor:'white', 
                            borderRadius:'4px', color:'#2AA7FF', fontSize:12, fontWeight:400,
                            visibility: randomVisibility()}} 
                    onClick={()=>onClickHandler(slot)}
                    key={`${timeOfDay}-${slot}`}
                >
                    {slot}
                </button>
            ))}
        </Box>
    )
    
}

const TimeSelector = ({onClickHandler})=>{

    // const [slotCount, setSlotCount] = {Morning:0, Afternoon:0, Evening:0};

    // const setTimeCount = (timeOfDay, count)=>{
    //     let temp_slots = slotCount;
    //     temp_slots[timeOfDay]= count;
    //     setSlotCount(temp_slots);
    // }

    return (
        <Box>
            <TimeSlots timeOfDay='Morning' onClickHandler={onClickHandler} />
            <TimeSlots timeOfDay='Afternoon' onClickHandler={onClickHandler}/>
            <TimeSlots timeOfDay='Evening' onClickHandler={onClickHandler}  />           
        </Box>
    )
}

export default function DateSelector({onClickHandler}){

    const dates = getDates();

    const [dateIndex, setDateIndex] = useState(0);
    // const [selSlot, setSelSlot] = useState('09:00 AM');

    const slotSelectionHandler = (slot)=>{
        // setSelSlot(slot);
        onClickHandler(formatDate(dates[dateIndex].date), slot);
    }

    const dateSelectionHandler = (event, newValue) => {
      if (event.type === 'click'){
        console.log('select tab', event.target.value);
        setDateIndex(newValue);
      }
    };
    
    return (
        <Box>
            <Tabs
                value={dateIndex}
                // onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                onChange={dateSelectionHandler}
            >
                {dates.map((date)=>(
                    <MedifyTab label={date.label} sx={{width:225, fontSize:16, fontWeight:700}}/>
                ))}                             
            </Tabs>
            <TimeSelector onClickHandler={slotSelectionHandler}/>                   
        </Box>       
    )
}