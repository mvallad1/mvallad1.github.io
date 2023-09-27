
/*console.log(users);*/

/*USERS[] USED TO BE HERE*/ 

// Event listener for registration form submission



// Function to read a cookie by name
function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.trim().split('=');
        if (cookieName === name) {
            return cookieValue;
        }
    }
    return null; // Return null if the cookie is not found
}

// Function to display user information from cookies
function displayUserInfo() {
    const username = getCookie('username');
    const email = getCookie('email');
    const balance = parseFloat(getCookie('balance'));

    // Check if the cookies exist and have values
    if (username && email) {
        // Update the HTML elements with user information
        document.getElementById('username').textContent = `Username: ${username}`;
        document.getElementById('email').textContent = `Email: ${email}`;
        //document.getElementById('balance').textContent = `Balance: $${balance.toFixed(2)}`;
        alert('Found your INFO!!!')
    } else {
        // Handle the case when cookies are missing or have invalid data
        alert('Error: User data not found.');
    }
}

// Call the function to display user information when the profile page loads
window.addEventListener('load', displayUserInfo);

//-----------------------------------------------------------------------------------------------------------------

//const cusername = getCookie('username');
//const cemail = getCookie('email');
const cpassword = getCookie('password');
//const newEmail = document.getElementById('new-email').value;




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

function changeEmail() {
    const dbref = ref(db);

    // Get the new email from the input field
    const newEmail = document.getElementById('new-email').value;

    // Get the username from the cookie
    const cusername = getCookie('username');

    get(child(dbref, 'People/' + cusername))
    .then((snapshot)=>{
        if(snapshot.exists()) {
            update(ref(db, "People/" + cusername), {
                Email: newEmail
            })
            document.cookie = `email=${newEmail}; path=/`;

            // You can also update the email displayed on the page
            document.getElementById('email').textContent = `Email: ${newEmail}`;
            alert("Email Changed Successfully!");
        }
        else {
            alert("This account does not exist");
        }
    })
    .catch((error)=>{
        alert(error);
    })
}

document.getElementById('email-change-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get the new email from the input field
    //const newEmail = document.getElementById('new-email').value;

    // Get the username from the cookie
    //const username = getCookie('username');

    // Update the email in Firebase
    changeEmail();
});
