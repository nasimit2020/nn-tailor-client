import React, { createContext, useState} from 'react';

export const AuthContext = createContext()

const UserContext = ({children}) => {
    const [loggedInUser, setLoggedInUser] = useState({});
    return (
        <AuthContext.Provider value={[loggedInUser, setLoggedInUser]}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;