import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Testimonial.css";
import { Autoplay, Pagination, Navigation, Parallax } from "swiper";
import Testimonial from './Testimonial';

const TestimonialAll = () => {
    const [testimonials, setTestimonials] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="bg-info"
            >
                
                    {
                        testimonials.map(testimonial => <SwiperSlide><Testimonial testimonial={testimonial}></Testimonial></SwiperSlide>)
                    }
                
            </Swiper>
        </>
    );
};

export default TestimonialAll;