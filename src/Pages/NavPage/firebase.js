// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyD7Yjj7ULTq8L4G-QGXbR5nLtJeIE5odFc",
//   authDomain: "blog-g-552c5.firebaseapp.com",
//   projectId: "blog-g-552c5",
//   storageBucket: "blog-g-552c5.appspot.com",
//   messagingSenderId: "998456780800",
//   appId: "1:998456780800:web:2fa52ce627e09875d950e5",
//   measurementId: "G-Z7H60B4XNZ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth(app);
// export { auth };

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

