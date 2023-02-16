import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import '../firebase';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signup = async (email, password, username) => {
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);

      //update profile
      await updateProfile(auth.currentUser, { displayName: username });

      const user = auth.currentUser;
      setCurrentUser({ ...user });
    } catch (error) {
      console.log('🚀 ~ file: AuthContext.jsx:44 ~ signup ~ error', error);
    }
  };

  const login = async (email, password) => {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    const auth = getAuth();
    return signOut(auth);
  };

  const value = { currentUser, signup, login, logout };
  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
