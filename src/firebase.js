import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
 apiKey: "AIzaSyC2ZNJ03rNsSd8d5UFeIe6CIHxYG8BO3oI",
  authDomain: "motor-920f7.firebaseapp.com",
  projectId: "motor-920f7",
  storageBucket: "motor-920f7.appspot.com",
  messagingSenderId: "837142574147",
  appId: "1:837142574147:web:359c94ff843564a15fd0f6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
