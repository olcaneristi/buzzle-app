// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCEVtXN1yoSCcyYbYFavDvJeAHiJeq9e8I',
  authDomain: 'buzzle-7eb04.firebaseapp.com',
  projectId: 'buzzle-7eb04',
  storageBucket: 'buzzle-7eb04.appspot.com',
  messagingSenderId: '420689780319',
  appId: '1:420689780319:web:7d665517174d7dedd805ea',
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();
export { auth };
