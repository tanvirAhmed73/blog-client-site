import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth";
import { Explora } from "next/font/google";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyACOJ3haQUCEGuJETU-L-iUKLe9-Zi687o",
  authDomain: "lyeana-blog-79d2a.firebaseapp.com",
  projectId: "lyeana-blog-79d2a",
  storageBucket: "lyeana-blog-79d2a.appspot.com",
  messagingSenderId: "1075917904635",
  appId: "1:1075917904635:web:a14f1cdf9f4d9071b6ae5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore();
const auth = getAuth(app)
export const storage = getStorage();
export default(auth)