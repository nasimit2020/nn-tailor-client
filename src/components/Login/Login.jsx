import React, { useContext, useState } from 'react';
import { BsGoogle } from "react-icons/bs";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import auth from '../../firebase/firebase_config';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(AuthContext);
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const SignInWithGooglePopUp = async () => {
       await signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
                
                setLoggedInUser(user)
                navigate(from, {replace: true})
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }


    return (
        <div className='h-72 place-content-center grid bg-teal-50'>
            <p>{loggedInUser?.displayName}</p>
            <button onClick={() => SignInWithGooglePopUp()} className="btn btn-outline btn-success btn-wide gap-8">
                <BsGoogle />
                Login
            </button>
        </div>
    );
};

export default Login;