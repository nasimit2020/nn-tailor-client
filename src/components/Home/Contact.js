import React from 'react';
import './Contact.css'
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faMailBulk, faMessage, faPaperPlane, faPeopleArrows, faPhone, faSeedling, faSquare, faWineBottle } from '@fortawesome/free-solid-svg-icons';
import { SocialIcon } from 'react-social-icons';

const Contact = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        reset();
    };
    return (
            <div className='contact-container py-5'>
                <div className='container'>
                <div className='row contact-heading'>
                    <h1 className='pb-3'>GET <span>IN TOUCH</span></h1>
                    <p> <span>&#9866;</span> I’M ALWAYS OPEN TO DISCUSSING PRODUCT DESIGN WORK OR PARTNERSHIPS <span>&#9866;</span> </p>
                </div>
                <div className='row'>
                    <div className='col-md-4 text-white'>
                        <div className='row'>
                            <div>
                                <h6>Phone</h6>
                                <p><span><FontAwesomeIcon className='text-warning pe-2' icon={faPhone} /></span>+880 1779 13 43 83</p>
                            </div>
                            <div>
                                <h6>Email</h6>
                                <p><span><FontAwesomeIcon className='text-warning pe-2' icon={faMailBulk} /></span>nasimitjesbd@gmail.com</p>
                            </div>
                            <div>
                                <h6>Instagram</h6>
                                <p><span><FontAwesomeIcon className='text-warning pe-2' icon={faMessage} /></span>nasim/589</p>
                            </div>
                            <div>
                                <h6>Website</h6>
                                <p><span><FontAwesomeIcon className='text-warning pe-2' icon={faSquare} /></span>nasimreza.com</p>
                            </div>
                            <div>
                                <h6>Social Profile</h6>
                                <div className='col-md-6 d-flex align-items-center justify-content-center ms-4'>
                                    <div className=''><SocialIcon url="https://www.facebook.com/" target='_blank' /></div>
                                    <div className='px-2'><SocialIcon url="https://www.youtube.com/" /></div>
                                    <div className=''><SocialIcon url="https://www.linkedin.com/" /></div>
                                    <div className='ps-2'><SocialIcon url="https://twitter.com/" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-8'>
                        <p className='text-white'>If you have any suggestion, project or even you want to say Hello.. please fill out the form below and I will reply you shortly.</p>
                        <form onSubmit={handleSubmit(onSubmit)} >
                            {/* register your input into the hook by invoking the "register" function */}
                            <div className='row'>
                                <div className='col wrapper'>
                                    <FontAwesomeIcon className='icon' icon={faPeopleArrows} />
                                    <input type='text' {...register('name')} class="form-control rounded-pill p-2" placeholder="YOUR NAME" />
                                </div>
                                <div className='col wrapper'>
                                    <FontAwesomeIcon className='icon' icon={faMailBulk} />
                                    <input type='email' {...register('email')} class="form-control rounded-pill  p-2" placeholder="EMAIL" />
                                </div>
                            </div>
                            <div className='row my-3'>
                                <div className='col wrapper'>
                                    <FontAwesomeIcon className='icon' icon={faMessage} />
                                    <textarea type='text' {...register('message')} class="form-control rounded-3  p-2" rows={4} placeholder="MESSAGE" />
                                </div>
                            </div>
                            <div className='col wrapper'>
                                <FontAwesomeIcon className='icon' icon={faPaperPlane} />
                                <input type="submit" className='btn btn-warning rounded-pill px-4' value='SEND MESSAGE' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            </div>
    );
};

export default Contact;