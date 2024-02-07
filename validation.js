function validateLoginForm() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (email.trim() === '' || password.trim() === '') {
        alert('Please enter both email and password.');
        return false;
    }

   
    return true;
}

function validateLoginForm() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (email.trim() === '' || password.trim() === '') {
        alert('Please enter both email and password.');
        return false;
    }

   

    return true;
}

function validateRegistrationForm() {
    const profileIcon = document.getElementById('profile-icon').value;
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const dob = document.getElementById('dob').value;
    const phone = document.getElementById('phone').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const subscribe = document.getElementById('subscribe').checked;
    const agreeTerms = document.getElementById('agree-terms').checked;

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!profileIcon || !firstName || !lastName || !email || !gender || !dob || !phone || !username || !password || !confirmPassword) {
        alert('Please fill in all the required fields.');
        return false;
    }

    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Password validation: at least 8 characters, one uppercase letter, one lowercase letter, one digit
    const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.*\d).{8,}$/;

    if (!passwordRegex.test(password))
    {
        alert('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.');
        return false;
    }

    if (password !== confirmPassword) {
        alert('Password and Confirm Password do not match.');
        return false;
    }

    if (!agreeTerms) {
        alert('Please agree to the Terms and Conditions.');
        return false;
    }

    // Add additional validation logic if needed

    return true;
}