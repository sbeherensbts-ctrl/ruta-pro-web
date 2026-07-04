import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDX-tBBUqe5Yq-SHziIr0gArp2vvxG8QvuM",
  authDomain: "ruta-pro-840e1.firebaseapp.com",
  projectId: "ruta-pro-840e1",
  storageBucket: "ruta-pro-840e1.firebasestorage.app",
  messagingSenderId: "169260175476",
  appId: "1:169260175476:web:0c61d1f44a6da992028121"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);