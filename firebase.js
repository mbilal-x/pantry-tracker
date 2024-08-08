import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import dotenv from 'dotenv';

dotenv.config();

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'panty-tracker.firebaseapp.com',
  projectId: 'panty-tracker',
  storageBucket: 'panty-tracker.appspot.com',
  messagingSenderId: '46022386637',
  appId: '1:46022386637:web:e49ec341691817a4e91a84',
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };
