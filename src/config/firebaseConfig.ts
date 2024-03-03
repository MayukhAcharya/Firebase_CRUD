import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEES7hDBPpO9ggK3qhKbmlfG8wcsKtmGM",
  authDomain: "fir-crud-9743a.firebaseapp.com",
  projectId: "fir-crud-9743a",
  storageBucket: "fir-crud-9743a.appspot.com",
  messagingSenderId: "347805926349",
  appId: "1:347805926349:web:a17403ca3036aaedf43a84",
  measurementId: "G-SZ5R5RXKFL",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const fire_db = getFirestore(app);
