// Firebase configuration and initialization
import { initializeApp, getApps, type FirebaseApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, type Auth } from 'firebase/auth';
import { getFirestore, type Firestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Lazy, client-only initialization so SSR doesn't freeze auth at null
let app: FirebaseApp | null = null;

function getFirebaseApp(): FirebaseApp | null {
  if (typeof window === 'undefined') return null;
  if (!firebaseConfig.apiKey) return null; // env missing

  if (!app) {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
  }
  return app;
}

export function getAuthClient(): Auth | null {
  const firebaseApp = getFirebaseApp();
  return firebaseApp ? getAuth(firebaseApp) : null;
}

export function getDbClient(): Firestore | null {
  const firebaseApp = getFirebaseApp();
  return firebaseApp ? getFirestore(firebaseApp) : null;
}

// Admin email
export const ADMIN_EMAIL = 'neslang.in@gmail.com';

// Sign in with email and password
export async function signIn(email: string, password: string): Promise<{ success: boolean; error?: string }> {
  const auth = getAuthClient();
  if (!auth) {
    return { success: false, error: 'Auth unavailable' };
  }

  if (email !== ADMIN_EMAIL) {
    return { success: false, error: 'Unauthorized' };
  }

  try {
    await signInWithEmailAndPassword(auth, email, password);
    return { success: true };
  } catch {
    return { success: false, error: 'Invalid credentials' };
  }
}
