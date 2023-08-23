const firebaseConfig = {
    apiKey: "AIzaSyBEgT0e0qKMEbKBG9x7-f4IGiU19c7HcHU",
    authDomain: "projeto2mibteste-bde2e.firebaseapp.com",
    projectId: "projeto2mibteste-bde2e",
    storageBucket: "projeto2mibteste-bde2e.appspot.com",
    messagingSenderId: "491192296322",
    appId: "1:491192296322:web:5e943f8e928c299043659b"
  };
  
firebase.initializeApp(firebaseConfig);
 
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const loginButton = document.getElementById('loginButton');
loginButton.addEventListener('click', () => {
 const email = emailField.value;
 const password = passwordField.value;
 firebase.auth().signInWithEmailAndPassword(email, password)
 .then((userCredential) => {
 // Usuário logado com sucesso
 const user = userCredential.user;
 console.log('Usuário logado:', user);
 })
 .catch((error) => {
 // Tratar erros de autenticação
 const errorMessage = error.message;
 console.error('Erro de autenticação:', errorMessage);
 });
});
