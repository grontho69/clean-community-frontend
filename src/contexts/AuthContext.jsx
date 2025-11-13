// src/context/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { toast } from "react-toastify";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setAuthLoading(false);
    });
    return () => unsub();
  }, []);

  async function register(email, password, displayName, photoURL) {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    if (displayName || photoURL) {
      await updateProfile(res.user, { displayName, photoURL });
    }
    toast.success("রেজিস্ট্রেশন সফল হয়েছে");
    return res.user;
  }

  async function login(email, password) {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("লগইন সফল");
  }

  async function loginWithGoogle() {
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success("Google দিয়ে লগইন সফল");
    } catch (err) {
      toast.error("Google লগইন ব্যর্থ");
      throw err;
    }
  }

  async function logout() {
    await signOut(auth);
    toast.success("লগআউট হয়েছে");
  }

  const value = {
    user,
    authLoading,
    register,
    login,
    loginWithGoogle,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!authLoading && children}
    </AuthContext.Provider>
  );
}
