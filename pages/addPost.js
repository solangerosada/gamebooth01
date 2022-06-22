import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import {  } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js";
import { getFirestore, collection} from "https://www.gstatic.com/firebasejs/9.8.3/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCmYkqVIJlTTJlq0UoBeYSMTK_FhgLN_74",
    authDomain: "projeto-final-7a6d4.firebaseapp.com",
    projectId: "projeto-final-7a6d4",
    storageBucket: "projeto-final-7a6d4.appspot.com",
    messagingSenderId: "488211883672",
    appId: "1:488211883672:web:e6927abc345d33a5ba92ed"
  };

// Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  const db = getFirestore(app);

  const docRef = collection(db, 'Post')

getDocs(docRef)
    .then((snapshot) => {
        let posts = []
        snapshot.docs.forEach((doc) => {
            posts.push({ ... doc.data(), id: doc.id})
        })
        console.log(posts)
    })
    
