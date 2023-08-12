import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbVRsVqmWUMsQHde-xfsRBtsmbKdPwzX8",
  authDomain: "chat-e8ca7.firebaseapp.com",
  projectId: "chat-e8ca7",
  storageBucket: "chat-e8ca7.appspot.com",
  messagingSenderId: "445839170556",
  appId: "1:445839170556:web:35bfde9b3b12cdef02f079",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export const storage = getStorage();
export const db = getFirestore();