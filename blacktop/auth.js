//signup


const auth = firebase.auth();

function signup() {
  let email = document.getElementById("signup-email");
  let password = document.getElementById("signup-password");

  const promise = auth.createUserWithEmailAndPassword(
    email.value,
    password.value
  );
  promise.catch(e => alert(e, message));
  alert("Signed Up");
}