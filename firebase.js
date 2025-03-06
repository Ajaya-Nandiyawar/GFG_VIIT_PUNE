
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDqlI-bnZvuRMagAntQIrSfd6TNh5YCW_g",
    authDomain: "sign-in-4b0e5.firebaseapp.com",
    projectId: "sign-in-4b0e5",
    storageBucket: "sign-in-4b0e5.firebasestorage.app",
    messagingSenderId: "437042483874",
    appId: "1:437042483874:web:ad903e4b0858a21315fdfb",
    measurementId: "G-6CYEWCT6L5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

const auth = getAuth(app);
auth.languageCode = "en";
const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("googleSignIn");
googleLogin.addEventListener("click", function () {
  signInWithPopup(auth, provider)
    .then((result) => {
      
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      
      const user = result.user;
      console.log(user);
      window.location.href = "index.html";
      
    })
    .catch((error) => {
      
      const errorCode = error.code;
      const errorMessage = error.message;
      
      const email = error.customData.email;
      
      const credential = GoogleAuthProvider.credentialFromError(error);
  })
});