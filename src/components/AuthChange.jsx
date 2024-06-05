import React, {useState, useEffect, createContext, useContext} from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from '../firebase';


const authContext = createContext();

export const authProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const auth = getAuth(app);
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return(
        <authContext.Provider value= {{user, loading}}>
        {!loading && children}
        </authContext.Provider>   
    ); 
};
export const useAuth = () => useContext(authContext)