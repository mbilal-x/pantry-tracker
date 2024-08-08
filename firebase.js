import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyCOZpyreoaO1mSjVz2u7fovHgp2YhDnjtk',
  authDomain: 'panty-tracker.firebaseapp.com',
  projectId: 'panty-tracker',
  storageBucket: 'panty-tracker.appspot.com',
  messagingSenderId: '46022386637',
  appId: '1:46022386637:web:e49ec341691817a4e91a84',
  measurementId: 'G-EPRQZTH8WL',
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const analytics = getAnalytics(app);
export { firestore, analytics };
