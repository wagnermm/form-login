
function validaName(elemento){
    elemento.addEventListener('focusout', function() {
        const nameValido = /^[a-z]{2}/i
        if(this.value.match(nameValido)){
            document.querySelector('#messageName').innerHTML = "";
            document.querySelector('.btn').disabled = false;
            return false;
        } else {
            document.querySelector('#messageName').innerHTML = "Invalid Name";
            document.querySelector('.btn').disabled = true;
        };
    });
  }
  let campoName = document.querySelectorAll('input#name');
  for( let emFoco of campoName) {
      validaName(emFoco);
  }


  function validaPass(elemento){
    elemento.addEventListener('focusout', function() {
        const passValido = /^[0-9]{4}$/
        if(this.value.match(passValido)){
            document.querySelector('#messagePass').innerHTML = "";
            document.querySelector('.btn').disabled = false;
            return false;
        } else {
            document.querySelector('#messagePass').innerHTML = "Your password must have 4 numbers";
            document.querySelector('.btn').disabled = true;
        };
    });
  }
  let campoPass = document.querySelectorAll('input#password');
  for( let emFoco of campoPass) {
      validaPass(emFoco);
  }