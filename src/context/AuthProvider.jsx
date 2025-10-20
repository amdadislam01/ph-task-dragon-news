import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firebase.config';

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    console.log(user);
    
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginuser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsuscrive = onAuthStateChanged(auth,(currentUser) =>{
            setUser(currentUser)
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
    }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
