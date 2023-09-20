import users from './userVars.js';
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
}

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
    
});

// JavaScript in script.js


// Function to handle user login
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
}

// Event listener for login form submission
document.querySelector('.form-box.login form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const formData = new FormData(event.target);
    
    // Extract form inputs
    const username = formData.get('username'); // Use 'username' as the field name
    const password = formData.get('password');

    // Call the loginUser function to check login credentials
    loginUser(username, password);
});











