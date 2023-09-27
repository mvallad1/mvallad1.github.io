/*console.log(users);*/

/*USERS[] USED TO BE HERE*/ 

// Event listener for registration form submission

/*function sendEmail() {
    // Retrieve the entered email from the form
    console.log('in function')
    const enteredEmail = document.getElementById('email').value;

    // Search for a user with a matching email in your user data
    const matchingUser = users.find(user => user.email === enteredEmail);

    if (matchingUser) {
        // If a matching user is found, include their password in the email body
        const password = matchingUser.password;

        Email.send({
            Host: "smtp.gmail.com",
            Username: "mo.git.website@gmail.com",
            Password: "mowebsitepass1",
            To: enteredEmail,
            From: "mo.git.website@gmail.com",
            Subject: "Password Request",
            Body: `Your password is: ${password}\nPlease use this password to log in.`
        }).then(
            message => alert(message)
        );
    } else {
        // If no matching user is found, provide an error message
        alert("No user found with the provided email address.");
    }
}*/


//--------------------------------------------------------------------------------------------------------------------
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

function sendEmail() {
    const dbref = ref(db);

    // Get the new email from the input field
    const inpEmail = document.getElementById('email').value;

    // Flag to track if a matching user is found
    let userFound = false;

    // Find the user by email
    get(child(dbref, 'People'))
        .then((snapshot) => {
            if (snapshot.exists()) {
                // Loop through each user in the database
                snapshot.forEach((childSnapshot) => {
                    const userData = childSnapshot.val();
                    if (userData.Email === inpEmail) {
                        // Found a matching user, get the user's password
                        const userPassword = userData.Password;
                        const userUser = userData.User
                        // Send an email with the user's password
                        Email.send({
                            Host: "smtp.elasticemail.com",
                            Username: "mo.git.website@gmail.com",
                            Password: "5A4EC27AAB77DFDAD07E1CCECEA76D2F5ECA",
                            To: inpEmail,
                            From: "mo.git.website@gmail.com",
                            Subject: "Password Change",
                            Body: `Your password has been requested. The password for ${userUser} is: ${userPassword}\nPlease use this password to log in.`
                        }).then(
                            message => alert('Email Sent!')
                        );

                        // Set the flag to true to indicate a user was found
                        userFound = true;
                    }
                });

                // Check if a user was not found and trigger the alert
                if (!userFound) {
                    alert("No user found with the provided email address.");
                }
            }
        })
        .catch((error) => {
            alert(error);
        });
}





document.querySelector('.forpass').addEventListener('submit', function(event) {
    event.preventDefault();

    sendEmail();
});


