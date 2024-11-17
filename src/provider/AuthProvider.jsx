import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import { useLocation } from "react-router-dom";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLogin]=useState(true);
  
  // console.log(user,loading)

  const createNewUser = (email, password) => {
    setLogin(true)
    return createUserWithEmailAndPassword(auth, email, password)
      
  };

  const updateUserProfile=(updateData)=>{
    return updateProfile(auth.currentUser, updateData)
  }

  const logOut=()=>{
    setLogin(true)
    return signOut(auth)

  }
  const userLogin=(email,password)=>{
    setLogin(true)
    return signInWithEmailAndPassword(auth,email,password)

  }

  const info = {
    user,
    setUser,
    createNewUser,
    logOut,
    userLogin,
    loading,
    updateUserProfile
  };

  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
        setLogin(false)

    })
    return()=>{
        unsubscribe();
    }

  },[])
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
