import firebase from 'firebase/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const app = firebase.initializeApp ({
    apiKey: "AIzaSyA0LLhGRO00T9Cfm1DA15aq2edmTmB6H1Q",
    authDomain: "mit-mixer.firebaseapp.com",
    projectId: "mit-mixer",
    storageBucket: "mit-mixer.appspot.com",
    messagingSenderId: "673875830760",
    appId: "1:673875830760:web:1db1205d5ee54af68ae65d",
    measurementId: "G-4SGZQBDGBN"
});


export const auth = app.auth();
export default app;
