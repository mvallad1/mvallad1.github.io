

const users = [
    {
        username: 'user1',
        email: 'user1@example.com',
        password: 'password1', // In a real application, passwords should be hashed
        balance: 1000,
        statements: ['Deposit $100', 'Withdraw $50']
    }
];

// Event listener for registration form submission

// JavaScript in script.js


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
        document.getElementById('balance').textContent = `Balance: $${balance.toFixed(2)}`;
    } else {
        // Handle the case when cookies are missing or have invalid data
        alert('Error: User data not found.');
    }
}

// Call the function to display user information when the profile page loads
window.addEventListener('load', displayUserInfo);










