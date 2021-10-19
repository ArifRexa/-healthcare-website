import React from 'react';
import { useEffect, useState } from "react";
import AuthInit from '../Firebase/FireBaseInit';
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile, getRedirectResult, onAuthStateChanged } from "firebase/auth";



AuthInit();
const auth = getAuth();

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const UseFireBase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [name, setName] = useState('')
  const [email, setEmail] = useState({})
  const [password, setPassword] = useState({})
  const [isLogin, setIsLogin] = useState(false)
  const [isLoading, setLoading] = useState(true)


  /* ==================================================
                    Google Sign In 
  ===================================================*/
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider)

  }

  /* ==================================================
                    Git Hub Sign In 
  ===================================================*/
  const gitHubSignIn = () => {
    return signInWithPopup(auth, gitHubProvider)

  }


  /* ==================================================
                    Handle Registration 
  ===================================================*/
  const handleRegistration = (e) => {
    e.preventDefault();
    // console.log(email, password);
    if (password.length < 6) {
      setError("Warning: Password must be 6 character long")
      return
    }

    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError("Please Enter at least 2 uppercase!")
      return

    }

    isLogin ? loginAccount(email, password) : registerNewAccount(email, password);



  }

  /* ==================================================
                  New Registration  Handle
  ===================================================*/

  const registerNewAccount = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user
        console.log(user);
        setError('')
        verifyMail();
        setUserName();
      }).catch(error => {
        setError(error.message)
      })

  }

  /* ==================================================
                  Log in  Handle
  ===================================================*/
  const loginAccount = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user
        // console.log(user);
        setError('')
      }).catch(error => {
        setError(error.message)
      })

  }



  /* ==================================================
                  Handle User
  ===================================================*/
  const handleName = (e) => {
    setName(e.target.value)

  }

  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name })
      .then(result => { })
  }


  const handleEmail = (e) => {
    // e.preventDefault();
    setEmail(e.target.value);

  }

  const handlePassword = (e) => {
    // e.preventDefault();
    setPassword(e.target.value);

  }

  const toggleHandle = (e) => {
    setIsLogin(e.target.checked)

  }


  /* ==================================================
         Handle Email Verify and reset PassCode
  ===================================================*/
  const verifyMail = () => {
    sendEmailVerification(auth.currentUser)
      .then(result => {
        console.log(result);
      })
  }


  const resetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(result => { })
  }



  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user)
      }
      else {
        setUser({})
      }
      setLoading(false)
    })
  }, [])


  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      }, [])
  }

  return {
    user,
    error,
    googleSignIn,
    gitHubSignIn,
    handleRegistration,
    registerNewAccount,
    loginAccount,
    handleName,
    setUserName,
    handleEmail,
    handlePassword,
    toggleHandle,
    verifyMail,
    resetPassword,
    isLogin,
    isLoading,
    logOut
  }


};

export default UseFireBase;