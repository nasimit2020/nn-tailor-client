import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Customer1 from '../../assets/images/customer1.jpg'
import Customer2 from '../../assets/images/customer2.jpg'
import Customer3 from '../../assets/images/customer3.jpg'
import Customer4 from '../../assets/images/customer4.jpg'
const reviewSection = [
    { name: 'Loren Austin', designation: 'IT Consultant', img: Customer1 },
    { name: 'Jengina Paku', designation: 'Business Man', img: Customer2 },
    { name: 'Pawlo Piko', designation: 'House Wife', img: Customer3 },
    { name: 'Anisa Wastin', designation: 'CEO', img: Customer4 }

]
import { Autoplay } from "swiper";

const Review = () => {
    return (
        <div className='lg:px-32 sm:px-12 py-12'>
            <p>--- SOME HAPPY FACES</p>
            <h2 className='text-3xl font-semibold pb-12 pt-5'>Real Happy Customers, Real Stories</h2>
            <Swiper

                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
                loop={true}
                modules={[Autoplay]}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >

                {
                    reviewSection.map(rev => (
                        <SwiperSlide>
                            <div className="hero border-l-8 border-l-indigo-500">
                                <div className="hero-content flex-col lg:flex-row-reverse">
                                    <img src={rev.img} className="max-w-sm rounded-lg shadow-2xl" />
                                    <div>
                                        <p className="pb-6"><span className='font-black text-5xl'>"</span>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                        <div className='ml-5'>
                                            <p className="font-semibold">- {rev.name}</p>
                                            <p className='py-3'>{rev.designation}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper >
        </div >
    );
};

export default Review;