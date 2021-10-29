import React from 'react';
import { createContext } from 'react';
import useFirebase from '../../hooks/useFirebase';
export const AuthContext =createContext()
const AuthProvider = ({ children }) => {
    const auth= useFirebase()
    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;