import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1lxdrwgnmuxtiFCCWaXXUJI6VvbDDFYE",
  authDomain: "mira-ai-bc9a5.firebaseapp.com",
  projectId: "mira-ai-bc9a5",
  storageBucket: "mira-ai-bc9a5.firebasestorage.app",
  messagingSenderId: "619118924774",
  appId: "1:619118924774:web:1301e600be850a0d177c27",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);