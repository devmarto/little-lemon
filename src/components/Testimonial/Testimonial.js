import "./Testimonial.css";
import Title from "../Title/Title";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import avatar1 from "../../assets/images/john-smith.png";
import avatar2 from "../../assets/images/amelia-rodriguez.png";
import avatar3 from "../../assets/images/david-lee.png";

function Testimonial(){
  return (
    <section className="testimonial-container">
      <div className="container testimonial-container-initial">
        <div className="testimonial-header">
          <Title 
            title="Our customer say" 
            description="Illuminate your path to success with insights from our customer spotlights." 
          />
          <div className="testimonial-navigation">
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          spaceBetween={32}
          slidesPerView={'auto'}
        >
          <SwiperSlide className="testimonial-slide">
            <TestimonialCard 
              image={avatar1}
              title="Elegant Taste, Culinary Delight! Encountering utmost emotion"
              description="The elegant environment, flawless hospitality. Each meal is a work of art,  exquisitely displayed and filled with taste. A top suggestion for those pursuing a  sample of gastronomic excellence within a luxurious atmosphere."
              name="John Smith"
              position="Designer"
            />
          </SwiperSlide>
          <SwiperSlide className="testimonial-slide">
            <TestimonialCard 
              image={avatar2}
              title="From the moment you step inside, you're transported to a realm of culinary artistry"
              description="The dishes are inventive, the service impeccable, and the ambiance simply enchanting. A true dining experience that lingers long after the last bite."
              name="Amelia Rodriguez"
              position="Architect"
            />
          </SwiperSlide>
          <SwiperSlide className="testimonial-slide">
            <TestimonialCard 
              image={avatar3}
              title="The perfect blend of tradition and innovation creates an unforgettable dining journey"
              description="Every course tells a story, and the attention to detail is remarkable. I highly recommend this hidden gem to anyone seeking a truly exceptional gastronomic adventure."
              name="David Lee"
              position="Software Engineer"
            />
          </SwiperSlide>
        </Swiper>


      </div>
      
    </section>
  )
}

export default Testimonial;