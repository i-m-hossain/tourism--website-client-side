import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut  } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initAuth from "../Firebase/initAuth";
initAuth();
const useFirebase = () => {
    
    const [user, setUser] = useState({})
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    // sign in
    const signInUsingGoogle = () => {
         return signInWithPopup(auth, provider)
    }
    
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                console.log('user is signed out');
            }
        })

    }, [])
    //logout
    const logout =()=>{
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            console.log('error.message');
        });
    }
    return {
        signInUsingGoogle, 
        user,
        logout
    }
   
}
export default useFirebase;