

const signupForm = document.querySelector('#signupform');
signupForm.addEventListener('submit', (e) => {



    e.preventDefault();
    const email = signupForm['username'].value;
    const password = signupForm['email'].value;

    console.log(email, password);
})