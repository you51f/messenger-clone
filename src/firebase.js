import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyCtSTAVGfRkl3j6T3eZRi2K4Oo5TT7VmZk",
        authDomain: "facebook-messanger-clone-f5a4d.firebaseapp.com",
        databaseURL: "https://facebook-messanger-clone-f5a4d.firebaseio.com",
        projectId: "facebook-messanger-clone-f5a4d",
        storageBucket: "facebook-messanger-clone-f5a4d.appspot.com",
        messagingSenderId: "549551047764",
        appId: "1:549551047764:web:bcfc5436cb194aa71d19c1",
        measurementId: "G-WRPV9QSH4Q"
});

const db = firebaseApp.firestore();

export default db;