// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuWSvBpKLFtNT_ExZcbbHOw7XhNbTkoT4",
  authDomain: "edufun-toybox-client.firebaseapp.com",
  projectId: "edufun-toybox-client",
  storageBucket: "edufun-toybox-client.appspot.com",
  messagingSenderId: "664226422925",
  appId: "1:664226422925:web:281c6d664cf4ce1cc102c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;