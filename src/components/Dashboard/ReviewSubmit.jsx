import React, { useContext } from 'react';
import { useForm } from "react-hook-form"
import { AuthContext } from '../../providers/AuthProviders';
import Swal from 'sweetalert2';

const ReviewSubmit = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()

    const {user} = useContext(AuthContext) 
    console.log(user);

    const onSubmit = (data, event) => {
        const review = {
            name: data.name,
            designation: data.designation,
            message: data.massage,
            photoUrl: user.photoURL
        }
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Thank you for your review!',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  reset()
            })
            .catch(er => console.error(er))
        
    }
    return (
        <div>
            <h2 className='text-3xl text-center'>Submit Your Positive Comment</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='p-5  rounded w-96 '>
                <input {...register("name", { required: true })} aria-invalid={errors.name ? 'true' : 'false'} type="text" name="name" id="" placeholder='Your Name' className='input input-bordered w-full max-w-xs mb-2' /> <br />

                {errors.name?.type === "required" && (<p role='alert' className='text-error'>Your Name is Required</p>)}

                <input {...register("designation", { required: true })} aria-invalid={errors.name ? 'true' : 'false'} type="text" name="designation" id="" placeholder='Company Name / Designation' className='input input-bordered w-full max-w-xs mb-2' /> <br />

                {errors.name?.type === "required" && (<p role='alert' className='text-error'>Designation is Required</p>)}

                <textarea {...register("massage", { required: true })} aria-invalid={errors.name ? 'true' : 'false'} name="massage" id="" placeholder='Massage' className="textarea textarea-bordered mb-2" cols="38"></textarea><br />

                {errors.details?.type === "required" && (<p role='alert' className='text-error'>Your Service Name is Required</p>)}

                <input type="submit" value='Submit' className="btn btn-success" />
            </form>
        </div>
    );
};

export default ReviewSubmit;