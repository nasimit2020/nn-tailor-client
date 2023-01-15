import React from 'react';
import testimg from '../../img/img2.webp'
const Testimonial = ({ testimonial }) => {
    return (

        <div className='text-center'>
            <img src={testimg} class="rounded-circle mx-auto d-block" style={{width: '130px'}}/>
            <h3 className=''>{testimonial.name}</h3>
            <h6>Designation</h6>
            <p>Message</p>
            <p>Review</p>
        </div>
    );
};

export default Testimonial;