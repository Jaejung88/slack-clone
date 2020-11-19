import firebase from "firebase";

// Keys for connecting our front-end to our back-end
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


const firebaseApp = firebase.initializeApp(firebaseConfig); // connects everything up
const db = firebaseApp.firestore(); //saving the whole database to db variable so that we can use it in our files (components etc)
const auth = firebase.auth(); // preparing authentication mudle
const provider = new firebase.auth.GoogleAuthProvider(); // preparing provider which is "Google"

export {auth, provider};
export default db; // this let us to use "import database from "./firebase" -> database is db thanks to the default db