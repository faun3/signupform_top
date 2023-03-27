console.log('Hi')
const form = document.querySelector('form');
const pass = document.querySelector('#pass');
const passConfirm = document.querySelector('input#passconfirm');

const submitButton = document.querySelector('.buttonWrapper > button');
submitButton.addEventListener('input', (event) => {
    let p1 = form.pass.value;
    let p2 = form.passconfirm.value;
    event.preventDefault;
    if (p1 !== p2){
        passConfirm.classList.toggle('error');
    } 
    else{
        passConfirm.classList.toggle('error');
        form.submit();
    }
});