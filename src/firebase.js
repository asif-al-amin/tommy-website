import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBUjCkoY7jVH0PRZuKaHqp0VPYdEAun9A4',
  authDomain: 'autetmart.firebaseapp.com',
  projectId: 'autetmart',
  storageBucket: 'autetmart.firebasestorage.app',
  messagingSenderId: '163503315215',
  appId: '1:163503315215:web:a515e32732f0f5d16a467a',
  measurementId: 'G-74MNJR8L3S',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
