// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/* const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
}; */

const firebaseConfig = {
  apiKey: "AIzaSyB3PZb8ROk215NutwUkadWevfWdkqbwhQI",
  authDomain: "next-blog-10569.firebaseapp.com",
  projectId: "next-blog-10569",
  storageBucket: "next-blog-10569.appspot.com",
  messagingSenderId: "793489289508",
  appId: "1:793489289508:web:938a89578bc86b9e1b83b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const dp = getFirestore(app);
