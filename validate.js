console.log('Hi')

const form = document.querySelector('form');
const pass = document.querySelector('input#pass');
const passConfirm = document.querySelector('input#passconfirm');
const submitButton = document.querySelector('.buttonWrapper > button');

let isValid = 0;

function checkPass(form){
    let p1 = form.pass.value;
    let p2 = form.passconfirm.value;
    if (p1 === p2){
        passConfirm.classList.toggle('error');
        isValid = 1;
        passConfirm.setCustomValidity('');
    }
    else passConfirm.setCustomValidity('Passwords do not match!');
}

pass.addEventListener('onChange', checkPass);
passConfirm.addEventListener('onChange', checkPass);

submitButton.addEventListener('onclick', (event) => {
    event.preventDefault();
    if (isValid) form.submit();
});