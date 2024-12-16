let inputEmail = document.getElementById("input-email")
let errorEmail = document.getElementById("input-error-email");
let btnVerify = document.getElementById("login-btn")
function verificarEmail(){
    if(inputEmail.value === ''){ 
        errorEmail.innerText = "Preencha o email."
        console.log("Senha OK!")
    }
    else return;
};
let passwordInput = document.getElementById("input-password")
let errorPassword = document.getElementById("input-error-password");

function verificarSenha(){
    if(passwordInput.value === ''){ 
        errorPassword.innerHTML = "Preencha o email."
    }
    else{
        console.log("Senha OK!")
    }
}
btnVerify.addEventListener('click', () => {
    verificarEmail();
    verificarSenha();
});
