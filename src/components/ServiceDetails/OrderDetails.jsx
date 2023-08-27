import React, { useContext, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLoaderData, useNavigate, useRouteLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const OrderDetails = () => {
    const {user} = useContext(AuthContext);
    const checkOutItem = useLoaderData();
    const navigate = useNavigate();

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const order= {
            name: data.name,
            email: data.email,
            phoneNumber: data.number,
            address: data.address,
            imageUrl: checkOutItem.url,
            price: checkOutItem.price,
            orderDate: new Date(),
            serviceName: checkOutItem.name
        }
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        reset();
        navigate('/dashboard');
    };

    
    
    
    return (
        <div className='justify-center px-5 mb-5'>
            <div className='mb-5'>
                <h2 className='text-3xl text-center'>Please, Submit Your Order...</h2>
            </div>
            <div className='grid gap-4 grid-cols-2 justify-items-center'>
                <div>
                    <h4 className=''>Service Name : <span className='text-success text-2xl'>{checkOutItem?.name}</span></h4>
                    <h4 className=''>Price : <span className='text-success text-2xl'> Tk. {checkOutItem?.price}</span></h4>
                    <img src={checkOutItem.url} alt="" className='w-48 h-48 rounded'/>
                </div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className='border p-5  rounded w-96'>
                        <input {...register("name", { required: true })} type="text" name="name" id="" placeholder='Your Name' className='input input-bordered w-full max-w-xs mb-2' value={user?.displayName} /> <br />

                        <input {...register("email", { required: true })} type="email" name="email" id="" placeholder='Your Email' className='input input-bordered w-full max-w-xs mb-2' value={user?.email} /><br />

                        <input type="number" {...register("number",{ required: true }, { min: 6, max: 11 })} className='input input-bordered w-full max-w-xs mb-2' placeholder='Your Contact Number'/><br />

                        <textarea {...register("address", { required: true })} name="address" id="" placeholder='Write your Address' className="textarea textarea-bordered mb-2" cols="38"></textarea><br />

                        {errors.exampleRequired && <span>This field is required</span>}
                        <input type="submit" className="btn btn-success" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;