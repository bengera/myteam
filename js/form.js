const form = document.getElementById('form');
const fullName = document.getElementById('fullname');
const email = document.getElementById('email');
const companyName = document.getElementById('company');
const title = document.getElementById('title');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('submitted');
    checkInputs();
})

function checkInputs() {
    const fullNameValue = fullName.value.trim();
    const emailValue = email.value.trim();
    const companyValue = company.value.trim();
    const titleValue = title.value.trim();
    const messageValue = message.value.trim();
    
    if (fullNameValue === '') {
        setErrorFor(fullName, 'This field is required');
    } else {
        setSuccessFor(fullName);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Please enter an email address');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Please use a valid email address');
    } else {
        setSuccessFor(email);
    }

    if (messageValue === '') {
        setErrorFor(message, 'This field is required');
    } else {
        setSuccessFor(message);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = '';
    formControl.className = 'form-control success';
}


function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}