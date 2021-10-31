import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useFirebase from '../../hooks/useFirebase';
import { BsGoogle } from "react-icons/bs"
const Login = () => {
    const { signInUsingGoogle} = useFirebase()
    const history = useHistory()
    const location = useLocation()
    const url = location.state?.from
    console.log(url);
    const handleSignIn =() =>{
        signInUsingGoogle()
        .then(result=>{
           history.push(url)
        }).catch(error=>{
            console.log(error.message);
        })
    }
    
    return (
        <div>
            <Button onClick={handleSignIn} className="m-5 p-3 border border-2 rounded" variant="light"><BsGoogle className="text-danger "/> Login with Google</Button>
        </div>
    );
};

export default Login;