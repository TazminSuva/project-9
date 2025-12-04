
import React, { createContext, useEffect, useState, useContext } from "react";
import { auth, googleProvider } from "../../firebase.config";
import {
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

//  Context 
export const AuthContext = createContext();

//  Provider Component
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //  Firebase user state observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    // Cleanup
    return () => unsubscribe();
  }, []);

  //  Email Sign Up
  const createUser = async (email, password) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      //setUser(result.user);
      return { success: true, user: result.user };
    } catch (error) {
      console.error("Signup Error:", error.message);
      return { success: false, error };
    }
  };

  //  Email Sign In
  const signInUser = async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      setUser(result.user);
      return { success: true, user: result.user };
    } catch (error) {
      console.error("Login Error:", error.message);
      return { success: false, error };
    }
  };

  //  Google Sign In
  const googleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
      return { success: true, user: result.user };
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
      return { success: false, error };
    }
  };

  //  Logout
  const logOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      return { success: true };
    } catch (error) {
      console.error("Logout Error:", error.message);
      return { success: false, error };
    }
  };

  // 🔹 Context value
  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    googleSignIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Custom Hook for easy access
export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
