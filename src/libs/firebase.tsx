import { getApp, getApps, initializeApp } from 'firebase/app';
import { initializeFirestore } from 'firebase/firestore';

export const TARGET_COLLECTION_NAME = 'order';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || '',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || '',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || '',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '',
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '',
  databaseURL: `https://${
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || ''
  }.firebaseio.com`,
};

const firebase = !getApps().length ? initializeApp(firebaseConfig) : getApp();

initializeFirestore(firebase, {
  ignoreUndefinedProperties: true,
});

export const firebaseApp = firebase;
