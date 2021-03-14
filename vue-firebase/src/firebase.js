import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDs-JQbzl3v-dgz3_MUSDF6YobYbxC4t7E",
    authDomain: "test-vue-ce0c2.firebaseapp.com",
    projectId: "test-vue-ce0c2",
    storageBucket: "test-vue-ce0c2.appspot.com",
    messagingSenderId: "230397456909",
    appId: "1:230397456909:web:79c32661f1a481e4f11b44"
});

const db = firebaseApp.firestore();

export {db};