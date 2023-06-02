import { defineStore } from 'pinia'
import { auth, usersCollection } from '@/includes/firebase'
import { setDoc, doc } from 'firebase/firestore'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from 'firebase/auth'

export default defineStore('user', {
  state: () => ({
    userLoggedIn: false
  }),

  actions: {
    async register(values: any) {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      )

      await setDoc(doc(usersCollection, userCredential.user.uid), {
        name: values.name,
        email: values.email,
        age: values.age,
        country: values.country
      })

      await updateProfile(userCredential.user, {
        displayName: values.name
      })

      this.userLoggedIn = true
    },

    async authentication(values: any) {
      await signInWithEmailAndPassword(auth, values.email, values.password)
      this.userLoggedIn
    },

    async signOut() {
      await signOut(auth)
      this.userLoggedIn = false
    }
  }
})
