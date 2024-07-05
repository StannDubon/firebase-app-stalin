// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKER, MESSAGING_SENDER_ID, APP_ID } from '@env';

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKER,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID};

  const app = initializeApp(firebaseConfig);

  const database = getFirestore(app);
  
  const storage = getStorage(app);
  
  const auth = getAuth();
  
  export { database, storage, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };