import { initializeApp } from "firebase/app";
import { getAuth , FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDNibB4CsYfx2ts_ImlessfYMuJdjzeiWM",
  authDomain: "trena-a2107.firebaseapp.com",
  projectId: "trena-a2107",
  storageBucket: "trena-a2107.appspot.com",
  messagingSenderId: "458514299363",
  appId: "1:458514299363:web:23aa6f03deaf260e70c8d6",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new FacebookAuthProvider()