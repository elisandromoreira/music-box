import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyAENhN9gBF4XaRN4TRIcHeOrnyk-xWSY7U",
  authDomain: "bemusic-3889f.firebaseapp.com",
  databaseURL: "https://bemusic-3889f.firebaseio.com",
  projectId: "bemusic-3889f",
  storageBucket: "bemusic-3889f.appspot.com",
  messagingSenderId: "192641628834",
  appId: "1:192641628834:web:009b6d287f9e352d6c75fb"
};

export default firebase.initializeApp(firebaseConfig);