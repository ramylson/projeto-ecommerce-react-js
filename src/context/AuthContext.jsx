import React, { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState(null);
    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, initializeUser);
    },[]);
    const initializeUser = (user) => {
        if (user) {
            setCurrentUser({...user});
        }else{
            setCurrentUser(false);
        }
    }
    return(
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;