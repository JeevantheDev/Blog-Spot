import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: 'AIzaSyDvqDWyCTvlZb6mHpwOFJCAh_GsPW17SH8',
  authDomain: 'blog-spot-e4923.firebaseapp.com',
  databaseURL: 'https://blog-spot-e4923.firebaseio.com',
  projectId: 'blog-spot-e4923',
  storageBucket: 'blog-spot-e4923.appspot.com',
  messagingSenderId: '918283899354',
  appId: '1:918283899354:web:3c7f9f9f425c774a7d30e3',
  measurementId: 'G-16RM8CVW3L',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
