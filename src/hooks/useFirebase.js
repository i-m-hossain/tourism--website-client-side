import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initAuth from "../Firebase/initAuth";
initAuth();
const useFirebase = () => {

    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    // sign in
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, provider)
            .finally(setIsLoading(false))
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setIsLoading(false)
            } else {

            }
        })

    }, [])
    //logout
    const logout = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            console.log('error.message');
        });
    }
    return {
        signInUsingGoogle,
        user,
        logout,
        isLoading
    }

}
export default useFirebase;