document.addEventListener('DOMContentLoaded', function() {
    
    const profileIconInput = document.getElementById('profile-icon');
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const registerForm = document.querySelector('form');
    const ProfileIcon = {
        preview: function() {
            if (profileIconInput) {
                profileIconInput.addEventListener('mouseover', function() {
                    console.log('Mouse over profile icon input');
                });
            } else {
                console.error('Profile icon input element not found.');
            }
        }
    };

    const InputFields = {
        highlight: function() {
            const inputFields = document.querySelectorAll('input');
            inputFields.forEach(function(input) {
                input.addEventListener('focus', function() {
                    
                    this.style.border = '2px solid #007bff';
                });
                input.addEventListener('blur', function() {

                    this.style.border = '1px solid #ccc';
                });
            });
        }
    };

    const PasswordStrength = {
        check: function() {
            if (passwordInput) {
                passwordInput.addEventListener('keydown', function() {
                    console.log('Password strength: ' + PasswordStrength.calculateStrength(this.value));
                });
            } else {
                console.error('Password input element not found.');
            }
        },
        calculateStrength: function(password) {
            return 'Medium'; 
        }
    };

    const TermsAgreement = {
        display: function() {
            const agreeTermsCheckbox = document.getElementById('agree-terms');
            const termsLabel = document.querySelector('.terms-and-conditions label');
            if (agreeTermsCheckbox && termsLabel) {
                agreeTermsCheckbox.addEventListener('change', function() {
                    if (this.checked) {
                        termsLabel.innerHTML = 'I agree to the <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a> &#10003;';
                    } else {
                        termsLabel.innerHTML = 'I agree to the <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a>';
                    }
                });
            } else {
                console.error('Terms agreement elements not found.');
            }
        }
    };

    const FormSubmission = {
        submitHandler: function() {
            if (registerForm) {
                registerForm.addEventListener('submit', function(event) {
                    event.preventDefault(); // Prevent form submission
                    // Perform form validation and submission logic
                    if (FormSubmission.validate()) {
                        console.log('Form submitted successfully!');
                        // Submit the form if all validations pass
                        this.submit();
                    } else {
                        console.log('Form validation failed. Please correct the errors.');
                    }
                });
            } else {
                console.error('Registration form element not found.');
            }
        },
        validate: function() {
            // Implement form validation logic here
            return true; // Placeholder value
        }
    };

    // Initialize objects and event listeners
    ProfileIcon.preview();
    InputFields.highlight();
    PasswordStrength.check();
    TermsAgreement.display();
    FormSubmission.submitHandler();
});
