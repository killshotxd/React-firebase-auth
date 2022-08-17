import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAaMtjZV-SAwbk7HZ13hl5W66Pgm_2VUYU",
  authDomain: "fir-auth-b1867.firebaseapp.com",
  projectId: "fir-auth-b1867",
  storageBucket: "fir-auth-b1867.appspot.com",
  messagingSenderId: "762749686456",
  appId: "1:762749686456:web:03aa80b32d3b784aecda4d",
  measurementId: "G-80GP86P1Q5",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();

export { app, auth };
