import * as firebase from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAlyxjU2ZyifhYZUlbVlAMXgsYKbNM6ZtY",
  authDomain: "landandbusiness-28b30.firebaseapp.com",
  projectId: "landandbusiness-28b30",
  storageBucket: "landandbusiness-28b30.appspot.com",
  messagingSenderId: "626264231887",
  appId: "1:626264231887:web:f299f60c0696c17c884cba",
};

const app = firebase.initializeApp(firebaseConfig);
export default app;
