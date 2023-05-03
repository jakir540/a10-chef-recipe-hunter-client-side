import React, { useState } from 'react';
import { createContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null);



const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const AuthProvider = ({children}) => {
  const [user,setUser ] = useState(null);

  const createUser =(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
  }
  const signIn =(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
  }
  const login = ()=>{
     return signInWithPopup(auth,googleProvider);
  }
  const githubLogin =()=>{
    return signInWithPopup(auth,githubProvider);
  }
  
const authInfo = {
  user,
  createUser,
  signIn,
  login,
  githubLogin
}
  return (
    <div>
      <AuthContext.Provider value={authInfo}>
      {children}
      </AuthContext.Provider>
      
    </div>
  );
};

export default AuthProvider;