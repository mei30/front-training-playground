import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore, collection } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDhWuajOcE8zhkvArEZDqr1yiS4mnaV_O4',
  authDomain: 'music-1cf29.firebaseapp.com',
  projectId: 'music-1cf29',
  storageBucket: 'music-1cf29.appspot.com',
  appId: '1:135040597580:web:97f4bedf23ef33291abee9'
}

const firebase = initializeApp(firebaseConfig)
const auth = getAuth(firebase)
const firestore = getFirestore(firebase)

const usersCollection = collection(firestore, 'users')
const songsCollection = collection(firestore, 'songs')
const commentsCollection = collection(firestore, 'comments')
const storage = getStorage()

export { firestore, usersCollection, auth, storage, songsCollection, commentsCollection }
