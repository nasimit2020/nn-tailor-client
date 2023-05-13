import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Awal from '../../assets/images/awal.jpg'
const reviewSection = [
    { name: 'Jhankar', img: Awal },
    { name: 'Mahabub', img: 'https://www.facebook.com/photo/?fbid=8027606530646322&set=a.104886309585090' },
    { name: 'Tamima', img: 'https://www.facebook.com/photo/?fbid=8027606530646322&set=a.104886309585090' },
    { name: 'Nasir', img: 'https://www.facebook.com/photo/?fbid=8027606530646322&set=a.104886309585090' },
    { name: 'Sakib', img: 'https://www.facebook.com/photo/?fbid=8027606530646322&set=a.104886309585090' },
    { name: 'Sisir', img: 'https://www.facebook.com/photo/?fbid=8027606530646322&set=a.104886309585090' },

]
const Review = () => {
    return (
        <div className='lg:px-32 sm:px-12 py-12'>
            <Swiper

                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    reviewSection.map(rev => (
                        <SwiperSlide>
                            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                                <figure><img src={rev.img} alt="Shoes" className='w-32 h-32 rounded-full mb-[-25px] z-50'/></figure>
                                <div className="card-body bg-info">
                                    <h2 className="card-title">{rev.name}</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default Review;