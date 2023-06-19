import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const About = () => {
    const [loggedInUser, setLoggedInUser] = useContext(AuthContext)
    return (
        <div>
            {loggedInUser?.displayName}
            About
        </div>
    );
};

export default About;