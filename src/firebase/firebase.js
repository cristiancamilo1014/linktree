import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  getBytesF,
} from "firebase/storage";
import {
  getFirestore,
  collection,
  addDoc,
  getDoc,
  doc,
  getDoc,
  query,
  where,
  setDoc,
  deleteDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMuCW3slvuiwMzIorFiN82hlNJEztUopU",
  authDomain: "treelink-d9722.firebaseapp.com",
  projectId: "treelink-d9722",
  storageBucket: "treelink-d9722.appspot.com",
  messagingSenderId: "45771368143",
  appId: "1:45771368143:web:f334b1759edb2debdef9ba",
};

export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
