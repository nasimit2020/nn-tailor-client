import React, { useRef, useState } from "react";
import slider1 from '../../img/slider-1.jpg';
import slider2 from '../../img/slider-2.jpg';
import slider3 from '../../img/slider-3.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";
import { Autoplay, Pagination, Navigation, Parallax } from "swiper";

const Slider = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation, Parallax,]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slider1} />
                </SwiperSlide>
                <SwiperSlide><img src={slider2} /></SwiperSlide>
                <SwiperSlide><img src={slider3} /></SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider;