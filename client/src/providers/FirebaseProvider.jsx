import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../services/firebase";
import axios from 'axios'

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(null);

  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  // google login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const updateUserProfile = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,

    });
  };

  // onAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if(currentUser){
        axios.post(`${import.meta.env.VITE_API_URL }/jwt`,{email:currentUser.email}).then(data => {
          if(data.data){
            localStorage.setItem('access-token',data?.data.token)
            setLoading(false)
          }
        })
      }
      else{
        localStorage.removeItem('access-token');
        setLoading(false);
      }
      setLoading(false);
      console.log(`current user`,currentUser);
    });
    return () => {
      return unsubscribe();
    };
  }, []);


  const authInfo = {
    user,
    createUser,
    login,
    loading,
    setLoading,
    googleLogin,
    logout,
    updateUserProfile
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
FirebaseProvider.propTypes = {
  children: PropTypes.element,
};
export default FirebaseProvider;
