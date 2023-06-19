import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../contexts/UserContext';

const OrderDetails = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const [loggedInUser, setLoggedInUser] = useContext(AuthContext);
    
    
    return (
        <div className='justify-center px-5 mb-5'>
            <div className='mb-5'>
                <h2 className='text-3xl text-center'>Please, Submit Your Order...</h2>
            </div>
            <div className='grid gap-4 grid-cols-3'>
                <div>
                    <h3>Order Details:</h3>
                </div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className='border p-5  rounded w-96'>
                        <input {...register("name", { required: true })} type="text" name="name" id="" placeholder='Your Name' className='input input-bordered w-full max-w-xs mb-2' value={loggedInUser?.displayName} /> <br />

                        <input {...register("email", { required: true })} type="email" name="email" id="" placeholder='Your Email' className='input input-bordered w-full max-w-xs mb-2' value={loggedInUser?.email} /><br />

                        <input type="number" {...register("number",{ required: true }, { min: 6, max: 11 })} className='input input-bordered w-full max-w-xs mb-2' placeholder='Your Contact Number'/><br />

                        <textarea {...register("address", { required: true })} name="address" id="" placeholder='Write your Address' className="textarea textarea-bordered mb-2" cols="38"></textarea><br />

                        {errors.exampleRequired && <span>This field is required</span>}
                        <input type="submit" className="btn btn-success" />
                    </form>
                </div>
                <div>
                    dadds Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere error cupiditate, aut, in quisquam nam natus nulla velit cum incidunt dolores officiis, voluptatum consectetur deserunt? Ea quos aperiam expedita! Optio architecto enim nesciunt earum repellat numquam iusto, aliquam ex assumenda?
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;