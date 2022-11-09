import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCb4EHyvzooTkg9R6-aUHSyhIk0l_ZuL2c",
  authDomain: "rensale-app-d8443.firebaseapp.com",
  projectId: "rensale-app-d8443",
  storageBucket: "rensale-app-d8443.appspot.com",
  messagingSenderId: "827095416540",
  appId: "1:827095416540:web:e56c16a1052693e0a03e19",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
