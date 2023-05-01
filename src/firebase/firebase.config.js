// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpgjm_lwVFH9s-tC7KuLMSWhcp36iaXCg",
  authDomain: "food-cafe-project.firebaseapp.com",
  projectId: "food-cafe-project",
  storageBucket: "food-cafe-project.appspot.com",
  messagingSenderId: "640202329532",
  appId: "1:640202329532:web:cd485da03e369c16c92fb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;