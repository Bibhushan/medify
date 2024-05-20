import { Box } from '@mui/material';
import doctor1 from '../assets/doctors/doctor1.png';
import doctor2 from '../assets/doctors/doctor2.png';
import doctor3 from '../assets/doctors/doctor3.png';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const doctorList = [
    {img:doctor1, name:'Ahmad Khan', spec:'Neurology'},
    {img:doctor2, name:'Heena Sachdeva', spec:'Orthopaedics'},
    {img:doctor3, name:'Ankur Sharma', spec:'Medicine'},
    {img:doctor1, name:'Khan Ahmad', spec:'Neurology'},
    {img:doctor2, name:'Sachdeva Heena', spec:'Orthopaedics'},
    {img:doctor3, name:'Sharma Ankur', spec:'Medicine'},
]

export default function DoctorSwiper(){

    const doctors = doctorList;

    return(
        <Box margin={0}  sx={{backgroundColor:'white', padding:'1rem 3rem'}}>
            <p className='section-heading'>Our Medical Specialists</p>
            <Swiper
                // install Swiper modules
                modules={[Navigation , Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {doctors.map((doctor)=>(
                    <SwiperSlide>{
                        <Box width={300} margin='1rem' padding='1rem'>
                            <img src={doctor.img} alt='doctor' width='90%' height='auto'/>
                            <p style={{fontSize:24, fontWeight:400, margin:0}}>{'Dr. ' + doctor.name}</p>
                            <p style={{fontSize:16, fontWeight:500, color:'#2AA7FF', marginTop:0}}>{doctor.spec}</p>
                        </Box>
                    }
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    )
}