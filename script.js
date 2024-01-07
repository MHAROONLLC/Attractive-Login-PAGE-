const loginSection = document.querySelector('.login-section');
const signInLink = document.querySelector('.signInLink');
const signUpLink = document.querySelector('.signUpLink');

signUpLink.onclick = () =>{
    loginSection.classList.add('active');
}
signInLink.onclick = () =>{
    loginSection.classList.remove('active');
}