const usernameCad = document.getElementById('username') as HTMLInputElement;
const fullnameCad = document.getElementById('fullname') as HTMLInputElement;
const emailCad = document.getElementById('email') as HTMLInputElement;
const cpfCad = document.getElementById('cpf') as HTMLInputElement;
const passwordCad = document.getElementById('password') as HTMLInputElement;
const passwordConfirmationCad = document.getElementById('passwordConfirmation') as HTMLInputElement;

passwordConfirmationCad.addEventListener('focusout', () => {
   if( passwordCad.value !== passwordConfirmationCad.value){
    const spanElement = document.getElementById('passwordCheck') as HTMLSpanElement;
    spanElement.textContent = 'As senhas não coincidem'; 
    
   }
})

