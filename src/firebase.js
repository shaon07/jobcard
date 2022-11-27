import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAAIQo1MQPrk5Daw9gVy-JIvP4KHDKIjoM",
  authDomain: "authjob-4048a.firebaseapp.com",
  projectId: "authjob-4048a",
  storageBucket: "authjob-4048a.appspot.com",
  messagingSenderId: "980433511723",
  appId: "1:980433511723:web:82b401048c89ab26e6516e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);