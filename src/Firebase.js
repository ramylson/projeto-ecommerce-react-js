
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqq0V13TlLD8GguUKoy-XC0gi_Pg5G6m8",
  authDomain: "projetoecommercefinal.firebaseapp.com",
  projectId: "projetoecommercefinal",
  storageBucket: "projetoecommercefinal.appspot.com",
  messagingSenderId: "468335034304",
  appId: "1:468335034304:web:80976b79a019dc2df21225"
};

// Initialize Firebase
const app  = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db   = getFirestore(app);

export { auth, db};