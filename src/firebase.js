import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBZUVSxf4Z7X-al8Xc1r8wUKQtdDKkSklo",
    authDomain: "slack-clone-241db.firebaseapp.com",
    databaseURL: "https://slack-clone-241db.firebaseio.com",
    projectId: "slack-clone-241db",
    storageBucket: "slack-clone-241db.appspot.com",
    messagingSenderId: "955939861885",
    appId: "1:955939861885:web:eb7bfd36b89bb19d430814",
    measurementId: "G-57DHLYG6DC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;

