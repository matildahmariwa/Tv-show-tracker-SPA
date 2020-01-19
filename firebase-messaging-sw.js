import * as firebase from "firebase";

importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');

let config={
    apiKey: "AIzaSyDQ2dXBMuIJ2EBYeVqucJpOF33C0tsFlLk",
    authDomain: "tv-show-tracker-9899e.firebaseapp.com",
    databaseURL: "https://tv-show-tracker-9899e.firebaseio.com",
    projectId: "tv-show-tracker-9899e",
    storageBucket: "tv-show-tracker-9899e.appspot.com",
    messagingSenderId: "433917891798",
    appId: "1:433917891798:web:bb35a74ae42e6db339a577"
};
let app = firebase.initializeApp(config);
export const db = app.firestore();

const messaging = firebase.messaging();


