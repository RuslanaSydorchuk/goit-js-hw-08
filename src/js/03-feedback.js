import throttle from 'lodash.throttle';

const emailInput = document.querySelector('input');
const messageInput = document.querySelector('textarea');
const form = document.querySelector('.feedback-form');
const user = {
    email: '',
    message: '',
}

emailInput.addEventListener('input', throttle(onEmailInput, 500));
messageInput.addEventListener('input', throttle(onMessageInput, 500));
form.addEventListener('submit', onFormSubmit);

function onEmailInput(evt) {
    user.email = evt.target.value;
    user.message = messageInput.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(user));
}

function onMessageInput(evt) {
    user.message = evt.target.value;
    user.email = emailInput.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(user));
}

function checkForm() {
    if (localStorage.getItem('feedback-form-state') === null) {
        return;
    } else {
        const emailData = JSON.parse(localStorage.getItem('feedback-form-state')).email;
        const messageData = JSON.parse(localStorage.getItem('feedback-form-state')).message;

        if (emailData !== '') {
            emailInput.value = emailData;
        };

        if (messageData !== '') {
            messageInput.value = messageData;
        };
    }  
}

checkForm();

function onFormSubmit(evt) {
    evt.preventDefault();
    console.log(user);
    localStorage.clear();
    emailInput.value = '';
    messageInput.value = ''
}

