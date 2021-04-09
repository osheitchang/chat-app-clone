// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAVuIxRrX4QWNWmeWhz-HMdtzaMbufh0Uc",
    authDomain: "whatsapp-clone-ecce0.firebaseapp.com",
    projectId: "whatsapp-clone-ecce0",
    storageBucket: "whatsapp-clone-ecce0.appspot.com",
    messagingSenderId: "152889096820",
    appId: "1:152889096820:web:18463458deef69d303ef21",
    measurementId: "G-CJ2L55RPN5"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;