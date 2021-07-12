import firebase from "firebase";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBVr5B-63wJ9_5l_Cz5OgzQFW9WEn10ihs",
  authDomain: "my-project-1558089197964.firebaseapp.com",
  projectId: "my-project-1558089197964",
  storageBucket: "my-project-1558089197964.appspot.com",
  messagingSenderId: "182509267985",
  appId: "1:182509267985:web:1b076d2dd80849200bd5b0",
  measurementId: "G-9W78347KT6",
};
// Initialize Firebase

const fire = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({ timestampsInStampshots: true });
const storage = firebase.storage();
export { fire, db, storage };

// var firebaseConfig = {
//   apiKey: "AIzaSyBVr5B-63wJ9_5l_Cz5OgzQFW9WEn10ihs",
//   authDomain: "my-project-1558089197964.firebaseapp.com",
//   projectId: "my-project-1558089197964",
//   storageBucket: "my-project-1558089197964.appspot.com",
//   messagingSenderId: "182509267985",
//   appId: "1:182509267985:web:1b076d2dd80849200bd5b0",
//   measurementId: "G-9W78347KT6"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();
