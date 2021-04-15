const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    //get the values from the inputs

    const emailValue = email.value.trim();

    if(emailValue === '') {
        //show error
        //add error class
        setErrorFor(email, 'Email cannot be blank');
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    }else{
        setSuccessFor(email, 'Thanks! We will reach out to you soon!')
    }
}




function setErrorFor(input, message) {
    const formControler = input.parentElement;
    const p = formControler.querySelector('p');

    //add error message inside alert
    p.innerText = message;
     
    //add error class
    formControler.className = 'form-controler error';
}

function setSuccessFor(input, message) {
    const formControler = input.parentElement;
    const p = formControler.querySelector('p');

    p.innerText = message;

    formControler.className = 'form-controler success'
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}