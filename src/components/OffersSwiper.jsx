import { Box } from '@mui/material';
import offer1 from '../assets/offers/Offer1.png';
import offer2 from '../assets/offers/Offer2.png';
import offer3 from '../assets/offers/Offer3.png';
import offer4 from '../assets/offers/Offer4.png'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const offersList = [
    offer1, offer2, offer3, offer4,
    offer1, offer2, offer3, offer4,
    offer1, offer2, offer3, offer4,
]

export default function OffersSwiper(){

    const offers = offersList;

    return(
        <Box margin={0}  sx={{backgroundColor:'white', padding:'2rem 2rem'}}>
            <p className='section-heading'>Offers for you</p>
            <Swiper
                // install Swiper modules
                modules={[Navigation , Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {offers.map((offer)=>(
                    <SwiperSlide>{
                        <Box width={300} margin='1rem' padding='1rem'>
                            <img src={offer} alt='offer' width='90%' height='auto' style={{margin:'1rem'}}/>
                        </Box>
                    }
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    )
}