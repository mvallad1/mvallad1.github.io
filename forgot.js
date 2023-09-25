import users from './userVars.js';
/*console.log(users);*/

/*USERS[] USED TO BE HERE*/ 

// Event listener for registration form submission

function sendEmail() {
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
}

document.querySelector('.forpass').addEventListener('submit', function(event) {
    event.preventDefault();

    console.log('in function')
    const enteredEmail = document.getElementById('email').value;

    // Search for a user with a matching email in your user data
    const matchingUser = users.find(user => user.email === enteredEmail);

    if (matchingUser) {
        // If a matching user is found, include their password in the email body
        const password = matchingUser.password;

        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "mo.git.website@gmail.com",
            Password: "5A4EC27AAB77DFDAD07E1CCECEA76D2F5ECA",
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
});
