import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBoJAJV-SEJ4mDstrdQvx6Ym4sExHlsy8",
  authDomain: "learn-english-simple-b737e.firebaseapp.com",
  projectId: "learn-english-simple-b737e",
  storageBucket: "learn-english-simple-b737e.firebasestorage.app",
  messagingSenderId: "1070835090554",
  appId: "1:1070835090554:web:5b66b51bef426aab45a7c3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
