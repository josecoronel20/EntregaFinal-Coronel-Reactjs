import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CartWidgetProvider } from "./context/CartWidgetContext";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK66Jt4N9KqAzEY_fDldnD-diwDppRb74",
  authDomain: "ecommerce-ract-84664.firebaseapp.com",
  projectId: "ecommerce-ract-84664",
  storageBucket: "ecommerce-ract-84664.appspot.com",
  messagingSenderId: "785332224396",
  appId: "1:785332224396:web:ea73cdb7f043cde35016a9",
  measurementId: "G-80R47LY39B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <CartWidgetProvider>
      <App />
    </CartWidgetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
