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

// Avoid initializing Firebase during SSR/prerender when env vars are absent.
const isBrowser = typeof window !== 'undefined';

let app: FirebaseApp | null = null;
function initFirebase(): FirebaseApp | null {
  if (!isBrowser) return null;
  if (!firebaseConfig.apiKey) return null; // Missing env vars; skip to prevent build errors.

  if (!app) {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
  }
  return app;
}

const firebaseApp = initFirebase();
export const auth: Auth | null = firebaseApp ? getAuth(firebaseApp) : null;
export const db: Firestore | null = firebaseApp ? getFirestore(firebaseApp) : null;

// Admin email
export const ADMIN_EMAIL = 'neslang.in@gmail.com';

// Sign in with email and password
export async function signIn(email: string, password: string): Promise<{ success: boolean; error?: string }> {
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
