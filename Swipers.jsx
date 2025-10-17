import './Swip.css'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
const Swipers = () => {

  let cards = ['card1', 'card2', 'card3', 'card4', 'card5', 'card6', 'card7', 'card8', 'card9', 'card10']
  return (
    <>
      <Swiper className='mySwiper'
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          1100: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          600: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
              380: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
      >
     <Slidebutton />
        {cards.map((card, index) => (
          <SwiperSlide key={index}>   
            <div className='card'>
              {card}
            </div>
          </SwiperSlide>
        ))}
     
        
      </Swiper> 
      {/* import * as React from 'react'; */}


    <Stack direction="row" spacing={2}>
      <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
    </Stack>


    </>
  )
}

export default Swipers


const Slidebutton = () => {
  const swiper = useSwiper();
  return (
    <>
      <button className='button'  onClick={() => swiper.slidePrev()}>&lt;</button>
      <button className='button' onClick={() => swiper.slideNext()}>&gt;</button>
    </>
  );
}