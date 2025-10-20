import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firebase.config';

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    console.log(user);
    
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginuser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsuscrive = onAuthStateChanged(auth,(currentUser) =>{
            setUser(currentUser);
            setLoading(false)
        })
        return () => {unsuscrive}
    },[])

    const logoutuser = () => {
        return signOut(auth);
    }

    const authInfo = {
        user,
        setUser,
        createUser,
        loginuser,
        logoutuser,
        loading,
        setLoading,
    }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
