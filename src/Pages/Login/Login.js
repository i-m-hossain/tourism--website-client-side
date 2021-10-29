import React from 'react';
import { Button } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';
const Login = () => {
    const { signInUsingGoogle} = useFirebase()
    const handleSignIn =() =>{
        signInUsingGoogle()
        .then(result=>{
           console.log('sign in success');
        })
    }
    return (
        <div>
            <Button onClick={handleSignIn}>Login with Google</Button>
        </div>
    );
};

export default Login;