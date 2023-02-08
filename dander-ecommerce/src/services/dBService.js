// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

let fireApp;
let fireDB;

const getAppConnectionConfiguration = () => ({
    apiKey: "AIzaSyDgOuN9LtAzSJBBgSj7vV_aMbLv9AaxJsM",
    authDomain: "dander-store-react-test.firebaseapp.com",
    projectId: "dander-store-react-test",
    storageBucket: "dander-store-react-test.appspot.com",
    messagingSenderId: "845493225239",
    appId: "1:845493225239:web:e2c51447ce59b72e825952"
});

const loadAppConnection = () => fireApp = initializeApp(getAppConnectionConfiguration());

const getAppConnection = () => fireApp || loadAppConnection();

const loadDbConnection = () => fireDB = getFirestore(getAppConnection());

export const getDb = () => fireDB || loadDbConnection();