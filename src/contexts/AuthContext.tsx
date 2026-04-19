import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  onAuthStateChanged, 
  User, 
  GoogleAuthProvider, 
  signInWithRedirect, 
  getRedirectResult,
  signOut 
} from 'firebase/auth';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';

interface AuthContextType {
  user: User | null;
  userRole: string | null;
  loading: boolean;
  signIn: () => Promise<void>;
  logout: () => Promise<void>;
  isAdmin: boolean;
  isEditor: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // 1. Unified state handler
  const handleUserSession = async (currentUser: User | null) => {
    setUser(currentUser);
    
    if (currentUser) {
      try {
        // Check or create user profile in Firestore
        const userDocRef = doc(db, 'users', currentUser.uid);
        const userDoc = await getDoc(userDocRef);
        
        if (userDoc.exists()) {
          setUserRole(userDoc.data().role);
        } else {
          // Default role for new users
          const defaultRole = currentUser.email === 'dreamdaytech@gmail.com' ? 'admin' : 'user';
          await setDoc(userDocRef, {
            uid: currentUser.uid,
            email: currentUser.email,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
            role: defaultRole,
            createdAt: serverTimestamp()
          });
          setUserRole(defaultRole);
        }
      } catch (error) {
        console.error("Error fetching/creating user role:", error);
        setUserRole('user'); // Fallback
      }
    } else {
      setUserRole(null);
    }
  };

  useEffect(() => {
    // 2. Handle the redirect result when the page loads
    const checkRedirect = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result) {
          console.log("Successfully signed in via redirect:", result.user.email);
          await handleUserSession(result.user);
        }
      } catch (error) {
        console.error("Error handling sign-in redirect:", error);
      }
    };

    checkRedirect();

    // 3. Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      await handleUserSession(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signIn = async () => {
    const provider = new GoogleAuthProvider();
    // Use clear prompt to avoid account switching issues if needed
    provider.setCustomParameters({ prompt: 'select_account' });
    
    try {
      // Switch to sign-in with redirect to bypass popup blockers
      await signInWithRedirect(auth, provider);
    } catch (error) {
      console.error("Critical error during sign-in redirect initiation:", error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const value = {
    user,
    userRole,
    loading,
    signIn,
    logout,
    isAdmin: userRole === 'admin',
    isEditor: userRole === 'admin' || userRole === 'editor'
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
