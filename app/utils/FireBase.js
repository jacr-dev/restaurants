import firebase from 'firebase/app';
import {
    API_ID,
    API_KEY,
    AUTH_DOMAIN,
    DATABASE_URL,
    MESSAGING_SENDER_ID,
    PROJECT_ID,
    STORAGE_BUCKET,
} from 'react-native-dotenv';


const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: API_ID
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);