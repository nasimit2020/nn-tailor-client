import React from 'react';
const Testimonial = ({ testimonial }) => {
    return (

        <div className='p-5'>
            <img src="" />
            <h3 className=''>{testimonial.name}</h3>
            <h6>Designation</h6>
            <p>Message</p>
            <p>Review</p>
        </div>
    );
};

export default Testimonial;