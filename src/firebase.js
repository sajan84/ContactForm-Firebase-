import firebase from 'firebase'

const firebaseApp=firebase.intializeApp({
   
        apiKey: "AIzaSyAIbPrxdPhHedMmTeNA7OJ196JJULq9E38",
        authDomain: "react-contact-form-73f1b.firebaseapp.com",
        projectId: "react-contact-form-73f1b",
        storageBucket: "react-contact-form-73f1b.appspot.com",
        messagingSenderId: "323607765880",
        appId: "1:323607765880:web:1a0202147f77c8f219de8d"
      
    
})

var db=firebaseApp.firestore();


export {db};