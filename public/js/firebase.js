// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyDeCKEVbf-bNdK-AHgY8FnSop1QrE7UsKM",
  authDomain: "blogging-website-aee90.firebaseapp.com",
  projectId: "blogging-website-aee90",
  storageBucket: "blogging-website-aee90.appspot.com",
  messagingSenderId: "41479212535",
  appId: "1:41479212535:web:2e4730b55830d56a9072f2",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
