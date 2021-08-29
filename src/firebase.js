import firebase from "firebase/compat/app";

import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB-aWQm1a-y-1N40fiioOjgN-dRmw043nM",
  authDomain: "pf-yt-clone.firebaseapp.com",
  projectId: "pf-yt-clone",
  storageBucket: "pf-yt-clone.appspot.com",
  messagingSenderId: "760270487397",
  appId: "1:760270487397:web:59be1563854adb0da72b8c",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
