// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDdU-_2OIZ6W1z_YmvzdM6h8GLQ6L67zOE',
  authDomain: 'trains-for-ruslan.firebaseapp.com',
  databaseURL: 'https://trains-for-ruslan-default-rtdb.firebaseio.com',
  projectId: 'trains-for-ruslan',
  storageBucket: 'trains-for-ruslan.appspot.com',
  messagingSenderId: '448870601788',
  appId: '1:448870601788:web:4e2b586504b9e39003df39',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
