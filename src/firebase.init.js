// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAF-3wd_IU5R25z87ugSO4zA-NIOB5M00w",
  authDomain: "red-onion-df6cb.firebaseapp.com",
  projectId: "red-onion-df6cb",
  storageBucket: "red-onion-df6cb.appspot.com",
  messagingSenderId: "575253014577",
  appId: "1:575253014577:web:c2c102cabc004dc7024d10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
