import React, { useContext, useEffect, useState } from 'react';
import { BsGoogle } from "react-icons/bs";
// import auth from '../../firebase/firebase_config';
import { redirect, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from '../../providers/AuthProviders';
import app from '../../firebase/firebase_config';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    // const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    let from = location.state?.from?.pathname || '/';



    const { googleSignIn } = useContext(AuthContext);
    const handleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                const loggedInEmail = {
                    email: loggedInUser.email
                }
                const saveUser = {
                    name: loggedInUser.displayName,
                    email: loggedInUser.email,
                    photoURL: loggedInUser.photoURL
                }
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loggedInEmail)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('tailorAccessToken', data.token);
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                navigate(from, { replace: true })
                            })
                    })


            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    return (
        <div className='h-72 place-content-center grid bg-teal-50'>
            <button onClick={handleSignIn} className="btn btn-outline btn-success btn-wide gap-8">
                <BsGoogle />
                Login
            </button>

        </div>
    );
};

export default Login;