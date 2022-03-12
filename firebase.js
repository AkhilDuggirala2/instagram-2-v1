// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
//  Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAAGEWPFz9HfhXimgMPQnXB6DrgSadfypQ',
  authDomain: 'instagram-2-v1.firebaseapp.com',
  projectId: 'instagram-2-v1',
  storageBucket: 'instagram-2-v1.appspot.com',
  messagingSenderId: '223106143481',
  appId: '1:223106143481:web:d2e7f341eab4c005b07e28',
}

// Initialize Firebase

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
