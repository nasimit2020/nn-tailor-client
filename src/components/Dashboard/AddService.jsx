import React from 'react';
import { useForm } from "react-hook-form"


const AddService = () => {

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()

    const imageHostKey = import.meta.env.VITE_imagebb_key;;

    const onSubmit = (data, event) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const service = {
                        name: data.name,
                        price: data.price,
                        details: data.details,
                        url: imgData.data.image
                    }
                    
                    fetch('http://localhost:5000/addService', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(service)
                    })
                        .then(res => res.json())
                        .then(data => console.log(data))
                        .catch(er => console.error(er))
                }
            })
        reset()
    }

    return (
        <div className='text-center'>
            <h2 className='text-3xl'>Add Your Service</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='border p-5  rounded w-96 '>

                <input {...register("image", { required: true })} aria-invalid={errors.name ? 'true' : 'false'} type="file" name="image" className='mb-2' /> <br />

                <input {...register("name", { required: true })} aria-invalid={errors.name ? 'true' : 'false'} type="text" name="name" id="" placeholder='Service Name' className='input input-bordered w-full max-w-xs mb-2' /> <br />

                {errors.name?.type === "required" && (<p role='alert' className='text-error'>Your Service Name is Required</p>)}

                <input {...register("price", { required: true })} aria-invalid={errors.name ? 'true' : 'false'} type="number" name="price" id="" placeholder='Service Price' className='input input-bordered w-full max-w-xs mb-2' /><br />

                {errors.price?.type === "required" && (<p role='alert' className='text-error'>Your Service Name is Required</p>)}

                <textarea {...register("details", { required: true })} aria-invalid={errors.name ? 'true' : 'false'} name="details" id="" placeholder='Write your Service Details' className="textarea textarea-bordered mb-2" cols="38"></textarea><br />

                {errors.details?.type === "required" && (<p role='alert' className='text-error'>Your Service Name is Required</p>)}

                <input type="submit" value='Add Service' className="btn btn-success" />
            </form>
        </div>
    );
};

export default AddService;