import React, { useContext, useState } from 'react';
import { auth } from './components/firebase.js';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider(){

  const [currentUser, setCurrentUser] = useState()
  function signup(email, password){
    return auth.createUserWithEmailAndPassword(email, password)
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    })
  }, [])
  const value = {
    currentUser, 
    SignUp
  }
  return (
      <AuthContext.Provider>
        {children}
      </AuthContext.Provider>

  )
}