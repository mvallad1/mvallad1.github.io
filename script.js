/*console.log(users);*/

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');


registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

/*THIS IS WERE USERS[] USED TO BE */ 

// Function to handle registration
/*
function registerUser(username, email, password) {
    // Create a new user object
    const newUser = {
        username: username,
        email: email,
        password: password, // Note: In a real application, you should hash the password for security
        balance: 0, // Initialize balance as 0
        statements: [] // Initialize an empty array for statements
    };

    // Push the new user to the users data structure (simulated database)
    users.push(newUser);

    // Optionally, you can provide feedback to the user
    alert('Registration successful! You can now log in.');
}*/

/*
// Event listener for registration form submission
document.querySelector('.form-box.register form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const formData = new FormData(event.target);
    
    // Extract form inputs
    const username = formData.get('username');
    const email = formData.get('email');
    const password = formData.get('password');

    // Call the registerUser function to create a new user
    registerUser(username, email, password);
    
});*/

// JavaScript in script.js


// Function to handle user login
/*
function loginUser(username, password) {
    
    // Search for the user in the users array
    const user = users.find((user) => user.username === username && user.password === password);

    if (user) {
        // User found, show a login successful message (you can redirect or perform other actions here)
        alert('Login successful!');

        alert('Cookie CREATED!');
        document.cookie = `username=${user.username}; expires=Thu, 18 Dec 2043 12:00:00 UTC; path=/`;
        document.cookie = `email=${user.email}; expires=Thu, 18 Dec 2043 12:00:00 UTC; path=/`;
        document.cookie = `balance=${user.balance}; expires=Thu, 18 Dec 2043 12:00:00 UTC; path=/`;

        //Redirect
        window.location.href = 'profile.html';
    } else {
        // User not found, show an error message
        alert('Login failed. Please check your username and password.');
    }
}*/

// Event listener for login form submission
/*document.querySelector('.form-box.login form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const formData = new FormData(event.target);
    
    // Extract form inputs
    const username = formData.get('username'); // Use 'username' as the field name
    const password = formData.get('password');

    // Call the loginUser function to check login credentials
    loginUser(username, password);
});*/
//-----------------------------------------------------------------------------------------------------------------
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUvJNo4C5_MNy2qZZMhsDmIiAUltG9HB0",
  authDomain: "csrfwebsitedata.firebaseapp.com",
  databaseURL: "https://csrfwebsitedata-default-rtdb.firebaseio.com",
  projectId: "csrfwebsitedata",
  storageBucket: "csrfwebsitedata.appspot.com",
  messagingSenderId: "1019683159283",
  appId: "1:1019683159283:web:bfcfb6616e4f30f83e4b86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import {getDatabase, set, get, update, remove, ref, child} 
from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

const db = getDatabase();

var username = document.querySelector("#login-username");
var password = document.querySelector("#login-password");
var email = document.querySelector("#email");
var rusername = document.querySelector("#register-username");
var rpassword = document.querySelector("#register-password");
var remail = document.querySelector("#register-email");
//var subBtn = document.querySelector('.form-box.login form');
//var regBtn = document.querySelector('.form-box.register form'); 

//subBtn.addEventListener('submit', FindData);
//regBtn.addEventListener('submit', InsertData);

function InsertData() {
    set(ref(db, "People/" + rusername.value), {
        User: rusername.value,
        Email: remail.value,
        Password: rpassword.value
    })
    .then(()=>{
        alert("Successfully Registered!");
    })
    .catch((error)=>{
        alert(error)
    });
}

function FindDataLogin() {
    const dbref = ref(db);

    get(child(dbref, 'People/' + username.value))
    .then((snapshot)=>{
        if(snapshot.exists()) {
            const userData = snapshot.val();

            if (userData.Password === password.value) {
                // Both username and password match
                alert("Account Found!");

                document.cookie = `username=${userData.User}; expires=Thu, 18 Dec 2043 12:00:00 UTC; path=/`;
                document.cookie = `email=${userData.Email}; expires=Thu, 18 Dec 2043 12:00:00 UTC; path=/`;
                document.cookie = `balance=${userData.Balance}; expires=Thu, 18 Dec 2043 12:00:00 UTC; path=/`;

                window.location.href = 'profile.html';
              } else {
                // Password doesn't match
                alert("Incorrect password.");
              }
        } else {
              // User not found
              alert("This account doesn't exist");
        }
    })
    .catch((error)=>{
        alert(error);
    })
}

function FindData() {
    const dbref = ref(db);

    get(child(dbref, 'People/' + username.value))
    .then((snapshot)=>{
        if(snapshot.exists()) {
            //email.innerHTML = "Email: " + snapshot.val().Email;
            password.innerHTML = "Password: " + snapshot.val().Password;
            alert("Account Found!");
            window.location.href = 'profile.html';
        }
        else {
            alert("This account doesn't exist");
        }
    })
    .catch((error)=>{
        alert(error);
    })
}

function UpdateData() {
    update(ref(db, "People/" + enterEmail.value), {
        User: username.value, //may not be needed
        Email: enterEmail.value,
        Password: password.value //may not be needed
    })
    .then(()=>{
        alert("Changed Email Successfuly!");
    })
    .catch((error)=>{
        alert(error);
    });
}

document.querySelector('.form-box.register form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Get form data and call the registerUser function
    // ...
    InsertData();
});

document.querySelector('.form-box.login form').addEventListener('submit', function(event) {
    event.preventDefault();
    FindDataLogin();
});
