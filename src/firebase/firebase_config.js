import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const apiKey = import.meta.env.VITE_apiKey;
const authDomain = import.meta.env.VITE_authDomain
const projectId = import.meta.env.VITE_projectId
const storageBucket = import.meta.env.VITE_storageBucket
const messagingSenderId = import.meta.env.VITE_messagingSenderId
const appId = import.meta.env.VITE_appId

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


export default auth;