// On utilise les versions "esm" pour que ça marche directement sur le web
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
    getFirestore, 
    collection, 
    getDocs, 
    addDoc, 
    query, 
    orderBy 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAs_xRDDAUjh_AemBZFBDCKQ9QXTNWuJ00",
  authDomain: "dropexpress-ba171.firebaseapp.com",
  projectId: "dropexpress-ba171",
  storageBucket: "dropexpress-ba171.firebasestorage.app",
  messagingSenderId: "1070163070918",
  appId: "1:1070163070918:web:2c3e26ad6ea0688cb4acc7",
  measurementId: "G-YSRK4VCL5K"
};

// Initialisation
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// EXPORT de toutes les fonctions nécessaires pour index.html et admin.html
export { db, collection, getDocs, addDoc, query, orderBy };
