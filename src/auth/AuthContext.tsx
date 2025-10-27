import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User as FirebaseUser
} from 'firebase/auth';
import { auth } from '../config/firebase';
import { User } from '../types';
import { validateTestUser, testUsers } from '../data/testUsers';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isTestUser, setIsTestUser] = useState(false);

  useEffect(() => {
    // Only set up Firebase auth listener if not using test user
    if (isTestUser) {
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser: FirebaseUser | null) => {
      if (firebaseUser) {
        setUser({
          id: firebaseUser.uid,
          email: firebaseUser.email || '',
          name: firebaseUser.displayName || 'User',
          photoURL: firebaseUser.photoURL || undefined,
          role: 'user',
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, [isTestUser]);

  const signUp = async (email: string, password: string, name: string) => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = async (email: string, password: string) => {
    // Check if it's a test user first (for demo mode)
    const testUser = validateTestUser(email, password);
    if (testUser) {
      setIsTestUser(true);
      setUser({
        id: testUser.id,
        email: testUser.email,
        name: testUser.name,
        phone: testUser.phone,
        role: testUser.role,
      });
      setLoading(false);
      return;
    }
    
    // Otherwise, use Firebase authentication
    setIsTestUser(false);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      // If Firebase fails, throw a more descriptive error
      throw new Error(error.message || 'Login failed. Please check your credentials.');
    }
  };

  const logout = async () => {
    try {
      if (isTestUser) {
        // Clear test user state
        setIsTestUser(false);
        setUser(null);
        console.log('Test user logged out successfully');
        return;
      }
      // Sign out from Firebase
      await signOut(auth);
      console.log('Firebase user logged out successfully');
    } catch (error) {
      console.error('Logout error:', error);
      // Even if there's an error, clear the user state
      setIsTestUser(false);
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signUp, signIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
