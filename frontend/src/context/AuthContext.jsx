"use client";

import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import axios from 'axios';

// Use environment variables for Firebase config
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Make sure API_URL is defined, with fallback
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          displayName: firebaseUser.displayName,
          photoURL: firebaseUser.photoURL,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    try {
      // Step 1: Authenticate with Firebase
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;
      
      try {
        // Step 2: Validate user credentials against MongoDB
        const response = await axios.get(`${API_URL}/data/users/email/${email}`, {
          params: { password }
        });
        
        if (response.data.success) {
          // No need to set user here as the onAuthStateChanged hook will handle it
          return { success: true, user: response.data.user };
        } else {
          // If MongoDB validation fails, sign out from Firebase
          await signOut(auth);
          return { success: false, error: response.data.error || "Invalid credentials" };
        }
      } catch (mongoError) {
        console.error('MongoDB validation error:', mongoError);
        
        // If MongoDB validation fails, sign out from Firebase
        await signOut(auth);
        
        let errorMessage = "Error validating credentials";
        
        if (mongoError.response) {
          errorMessage = mongoError.response.data.error || errorMessage;
        }
        
        return { success: false, error: errorMessage };
      }
    } catch (firebaseError) {
      console.error('Firebase login error:', firebaseError);
      
      let errorMessage = "Invalid email or password";
      
      if (firebaseError.code === 'auth/user-not-found') {
        errorMessage = "No account found with this email. Please sign up first.";
      } else if (firebaseError.code === 'auth/wrong-password') {
        errorMessage = "Incorrect password. Please try again.";
      } else if (firebaseError.code === 'auth/invalid-email') {
        errorMessage = "Invalid email format.";
      } else if (firebaseError.code === 'auth/too-many-requests') {
        errorMessage = "Too many failed login attempts. Please try again later.";
      }
      
      return { success: false, error: errorMessage };
    }
  };

  const signup = async (name, email, password) => {
    try {
      // Step 1: Create user in Firebase
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;
      
      try {
        // Step 2: Store user data in MongoDB - using the /data/users/email/:email endpoint
        console.log('Storing user data in MongoDB at:', `${API_URL}/data/users/email/${email}`);
        const response = await axios.post(`${API_URL}/data/users/email/${email}`, {
          name,
          password,
          firebaseUid: firebaseUser.uid
        });
        
        if (response.data.success) {
          // No need to set user here as the onAuthStateChanged hook will handle it
          return { success: true, user: response.data.user };
        } else {
          // If MongoDB storage fails, delete the Firebase user
          await firebaseUser.delete();
          return { success: false, error: response.data.error || "Failed to create account" };
        }
      } catch (mongoError) {
        console.error('MongoDB storage error:', mongoError);
        
        // If MongoDB storage fails, delete the Firebase user
        await firebaseUser.delete();
        
        let errorMessage = "Failed to create account";
        
        if (mongoError.response) {
          errorMessage = mongoError.response.data.error || `Server error (${mongoError.response.status})`;
          console.error('Server response error details:', mongoError.response.data);
        }
        
        return { success: false, error: errorMessage };
      }
    } catch (firebaseError) {
      console.error('Firebase signup error:', firebaseError);
      
      let errorMessage = "Failed to create account";
      
      if (firebaseError.code === 'auth/email-already-in-use') {
        errorMessage = "An account with this email already exists. Please sign in instead.";
      } else if (firebaseError.code === 'auth/invalid-email') {
        errorMessage = "Invalid email format.";
      } else if (firebaseError.code === 'auth/weak-password') {
        errorMessage = "Password is too weak. Please use a stronger password.";
      }
      
      return { success: false, error: errorMessage };
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      router.push('/loading');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}