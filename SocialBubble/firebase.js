import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCQGbg_k9aE5FxsPHB9FenzAONu4_yNfWE",
    authDomain: "socialbubble-ff070.firebaseapp.com",
    projectId: "socialbubble-ff070",
    storageBucket: "socialbubble-ff070.appspot.com",
    messagingSenderId: "426846827737",
    appId: "1:426846827737:web:58cdaded0ed89d490afac8",
    measurementId: "G-1EQTFQNESR"
  };


  let app;
  if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
  } else {
    app = firebase.app()
  }

  const auth = firebase.auth()

  export {auth};