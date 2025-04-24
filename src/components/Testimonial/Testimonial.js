import "./Testimonial.css";
import Title from "../Title/Title";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

function Testimonial(){
  return (
    <section className="testimonial-container">
      <div className="container">
        <div className="testimonial-header">
          <Title 
            title="Our customer say" 
            description="Illuminate your path to success with insights from our customer spotlights." 
          />
        </div>



        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>


      </div>
      
    </section>
  )
}

export default Testimonial;