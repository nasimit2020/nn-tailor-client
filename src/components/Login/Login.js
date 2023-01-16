import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Google from './../../img/google.svg'

const Login = () => {
    return (
        <div className=''>
            <div className='border' style={{width: '400px', height: '160px', margin: '0 auto', textAlign: 'center', borderRadius: '5px', marginTop: '150px', justifyContent: 'center'}}>
                <button className='btn btn-primary mt-5 text-light'><span className='pe-3'><img src={Google} alt='Google logo' style={{width: '25px',}}/></span>Login with Google</button>
            </div>
        </div>
    );
};

export default Login;