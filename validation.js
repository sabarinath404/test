// Validate Name
function validateName() {
    let name = document.getElementById("name").value;
    let nameError = document.getElementById("nameError");
    if (name === "") {
        nameError.textContent = "Name is required.";
        return false;
    } else if (name.length < 3) {
        nameError.textContent = "Name must be at least 3 characters long.";
        return false;
    }
    nameError.textContent = ""; // Clear the error message if valid
    return true;
}

// Validate Email
function validateEmail() {
    let email = document.getElementById("email").value;
    let emailError = document.getElementById("emailError");
    const emailPattern = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === "") {
        emailError.textContent = "Email is required.";
        return false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        return false;
    }
    emailError.textContent = ""; // Clear the error message if valid
    return true;
}

// Validate Password
function validatePassword() {
    let password = document.getElementById("password").value;
    let passwordError = document.getElementById("passwordError");
    if (password === "") {
        passwordError.textContent = "Password is required.";
        return false;
    } else if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters long.";
        return false;
    }
    passwordError.textContent = ""; // Clear the error message if valid
    return true;
}

function validateConfirmPassword() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    if (confirmPassword !== password) {
        confirmPasswordError.textContent = "Passwords do not match.";
        return false;
    }

    confirmPasswordError.textContent = ""; // Clear any previous error
    return true;
}

// Validate Gender (Radio Button)
function validateGender() {
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let genderError = document.getElementById("genderError");
    if (!male && !female) {
        genderError.textContent = "Please select your gender.";
        return false;
    }
    genderError.textContent = ""; // Clear the error message if valid
    return true;
}

// Validate Terms (Checkbox)
function validateTerms() {
    let terms = document.getElementById("terms").checked;
    let termsError = document.getElementById("termsError");
    if (!terms) {
        termsError.textContent = "You must agree to the terms and conditions.";
        return false;
    }
    termsError.textContent = ""; // Clear the error message if valid
    return true;
}

// Validate the entire form before submitting
function validateForm() {
    let isValid = true;

    // Call each validation function and check the result
    if (!validateName()) isValid = false;
    if (!validateEmail()) isValid = false;
    if (!validatePassword()) isValid = false;
    if (!validateGender()) isValid = false;
    if (!validateTerms()) isValid = false;

    return isValid; // Return false if any validation fails to prevent form submission
}
