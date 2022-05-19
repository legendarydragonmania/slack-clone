import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCLwIAZY7y4o7vv2s4YeJORYCWzzxdtYS4',
  authDomain: 'slack-clone-f8d4c.firebaseapp.com',
  projectId: 'slack-clone-f8d4c',
  storageBucket: 'slack-clone-f8d4c.appspot.com',
  messagingSenderId: '311070850944',
  appId: '1:311070850944:web:a217d8ecebd93860094b65',
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

const auth = getAuth()

const provider = new GoogleAuthProvider()

export { db, auth, provider }
