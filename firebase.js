import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA0LLhGRO00T9Cfm1DA15aq2edmTmB6H1Q",
    authDomain: "mit-mixer.firebaseapp.com",
    projectId: "mit-mixer",
    storageBucket: "mit-mixer.appspot.com",
    messagingSenderId: "673875830760",
    appId: "1:673875830760:web:1db1205d5ee54af68ae65d",
    measurementId: "G-4SGZQBDGBN"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

