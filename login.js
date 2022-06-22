// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js";
import { getFirestore, collection} from "https://www.gstatic.com/firebasejs/9.8.3/firebase-firestore.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

const auth = getAuth();

const db = getFirestore(app);
  
const signnform = document.querySelectorAll('.signinform')

login_btn.addEventListener('click', (e) =>{
    e.preventDefault()

   const email = document.getElementById("userEmail").value
    const password = document.getElementById("userPassword").value

    auth.onAuthStateChanged(user =>{
        if(email){
            console.log('O utilizador registado!”');
        }else {
            console.log('Falha no registo”');
        }
      });

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
               
                const user = userCredential.user;
                alert("UTILIZADOR ENTROU");
                console.log("user logged");
            
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
            });

})

/*
const docRef = collection(db, 'users')

getDocs(docRef)
    .then(snapshot) => {
        let users = []
        snapshot.docs.forEach((doc) => {
            users.push({ ... doc.data(), id: doc:id})
        })
        console.log(users)
    }
 */