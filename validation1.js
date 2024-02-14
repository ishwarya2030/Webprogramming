
function validateLoginForm() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (email.trim() === '' || password.trim() === '') {
        alert('Please enter both email and password.');
        return false;
    }

   

    return true;
}

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('form');
    const LoginForm = {
        validate: function() {
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return false;
            }

            if (password.trim() === '') {
                alert('Please enter your password.');
                return false;
            }

            return true;
        }
    };
    const emailInput = document.getElementById('login-email');
    const passwordInput = document.getElementById('login-password');

    if (emailInput && passwordInput && loginForm) {
        emailInput.addEventListener('input', function() {
            if (!LoginForm.validate()) {
                emailInput.setCustomValidity('Please enter a valid email address.');
            } else {
                emailInput.setCustomValidity('');
            }
        });

        passwordInput.addEventListener('input', function() {
            if (passwordInput.value.trim() === '') {
                passwordInput.setCustomValidity('Please enter your password.');
            } else {
                passwordInput.setCustomValidity('');
            }
        });

        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); 

            if (LoginForm.validate()) {
                console.log('Form submitted successfully!');
               
                window.location.href = 'welcome.html';
            } else {
                console.log('Form validation failed. Please correct the errors.');
            }
        });
    } else {
        console.error('Login form elements not found.');
    }
});
