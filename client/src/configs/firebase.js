
import firebase from 'firebase/app'
import 'firebase/firestore'

firebase.initializeApp({
    apiKey: "AIzaSyCIDcLXr4Ci5-jNJZNN8lOSGqAmZIDNOYY",
    authDomain: "tap-me-please.firebaseapp.com",
    projectId: "tap-me-please"
})

export default firebase.firestore()