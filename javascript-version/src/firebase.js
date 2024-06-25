import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyDKmkDjOcOhDixczTk1iFc24eSzCLu0i5I',
  authDomain: 'alumconnect-9a212.firebaseapp.com',
  projectId: 'alumconnect-9a212',
  storageBucket: 'alumconnect-9a212.appspot.com',
  messagingSenderId: '722174206952',
  appId: '1:722174206952:web:44cd77e91b64e2ef7cba5d',
  measurementId: 'G-W8DMZE1V2Z',
  databaseURL: 'https://alumconnect-9a212-default-rtdb.firebaseio.com/'
}
export const app1 = initializeApp(firebaseConfig)