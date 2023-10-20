import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD7Yjj7ULTq8L4G-QGXbR5nLtJeIE5odFc",
    authDomain: "blog-g-552c5.firebaseapp.com",
    projectId: "blog-g-552c5",
    storageBucket: "blog-g-552c5.appspot.com",
    messagingSenderId: "998456780800",
    appId: "1:998456780800:web:2fa52ce627e09875d950e5",
    measurementId: "G-Z7H60B4XNZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

