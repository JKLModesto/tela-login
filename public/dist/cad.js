var usernameCad = document.getElementById('username');
var fullnameCad = document.getElementById('fullname');
var emailCad = document.getElementById('email');
var cpfCad = document.getElementById('cpf');
var passwordCad = document.getElementById('password');
var passwordConfirmationCad = document.getElementById('passwordConfirmation');
passwordConfirmationCad.addEventListener('focusout', function () {
    if (passwordCad.value !== passwordConfirmationCad.value) {
        var spanElement = document.getElementById('passwordCheck');
        spanElement.textContent = 'As senhas não coincidem';
    }
});
