let nomeValido = /^[a-z]{2}/i;
let passValido = /^[0-9]{6}$/;
let button = document.querySelector('.btn');
let messageName = document.querySelector('#messageName');
let messagePassword = document.querySelector('#messagePass');
let container = document.querySelector('.container');
let logOutContainer = document.querySelector('.logOut');

/* Valida nome */
const validaName =(elemento)=> {
    elemento.addEventListener('focusout', function() {
        if(this.value.match(nomeValido)){
            messageName.innerHTML = "";
            return false;
        } else {
            messageName.innerHTML = "Invalid Name";
        };
    });
};
let campoName = document.querySelectorAll('input#name');
for( let emFoco of campoName) {
    validaName(emFoco);
};


/* Valida password */
const validaPass =(elemento)=> {
    elemento.addEventListener('focusout', function() {
        if(this.value.match(passValido)){
            messagePassword.innerHTML = "";
            return false;
        } else {
            messagePassword.innerHTML = "Your password must have 6 numbers";
        };
    });
};
let campoPass = document.querySelectorAll('input#password');
for( let emFoco of campoPass) {
    validaPass(emFoco);
};


/* Habilita botao */
const buttonAbled = ()=> {
    const nome = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    if(nome.match(nomeValido) && password.match(passValido)) {
        button.disabled = false;
        return
    } else {
        button.disabled = true;
    };
};