import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Temporary Firebase config - replace with your actual Firebase project credentials
// You can get these from your Firebase Console > Project Settings > General > Your apps
const apiKey = import.meta.env.VITE_API_KEY || "your-api-key-here";
const authDomain = import.meta.env.VITE_AUTH_DOMAIN || "your-project-id.firebaseapp.com";
const databaseURL = import.meta.env.VITE_DATABASE_URL || "https://your-project-id-default-rtdb.firebaseio.com";
const projectId = import.meta.env.VITE_PROJECT_ID || "your-project-id";
const storageBucket = import.meta.env.VITE_STORAGE_BUCKET || "your-project-id.appspot.com";
const messagingSenderId = import.meta.env.VITE_MESSAGING_SENDER_ID || "your-messaging-sender-id";
const appId = import.meta.env.VITE_APP_ID || "your-app-id";
const measurementId = import.meta.env.VITE_MEASUREMENT_ID || "your-measurement-id";

const firebaseConfig = {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
};

// Check if using placeholder values and warn the user
if (apiKey === "your-api-key-here") {
  console.warn("⚠️ Firebase is using placeholder values. Please set up your Firebase credentials in a .env file or replace the placeholder values in src/firebase/config.js");
}

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);

export const auth = getAuth(app);
