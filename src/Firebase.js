import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAo884J16dzu77WcEzpnpzUrHqWeEeTQWc",
  authDomain: "fir-authentication-2-4c059.firebaseapp.com",
  projectId: "fir-authentication-2-4c059",
  storageBucket: "fir-authentication-2-4c059.appspot.com",
  messagingSenderId: "518166282801",
  appId: "1:518166282801:web:dca523d92cfce3fed78b10",
  measurementId: "G-WQQLNJWCW9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;