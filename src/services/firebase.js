//firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "fontepa-72633.firebaseapp.com",
  projectId: "fontepa-72633",
  storageBucket: "fontepa-72633.appspot.com",
  messagingSenderId: "741957869155",
  appId: import.meta.env.VITE_API_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
