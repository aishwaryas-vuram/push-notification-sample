import firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyC04wR6ueCnV8sRcZ8RJJkE6cUrRamkMuo",
    authDomain: "push-notifications-960c8.firebaseapp.com",
    projectId: "push-notifications-960c8",
    storageBucket: "push-notifications-960c8.appspot.com",
    messagingSenderId: "331942575918",
    appId: "1:331942575918:web:a1798dd3be35d2d48184bf"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;