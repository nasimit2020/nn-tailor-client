import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import {loadStripe} from '@stripe/stripe-js';
const stripe_publish_key = import.meta.env.VITE_stripe_key;
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(stripe_publish_key);

const Payment = () => {
    const order = useLoaderData();
    const { serviceName, price } = order;

    return (
        <div>
            <p className="text-xl"><strong>${price}</strong> pay for <span className='text-success'>{serviceName}</span> service.</p>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price} serviceName={serviceName}/>
            </Elements>
        </div>
    );
};

export default Payment;