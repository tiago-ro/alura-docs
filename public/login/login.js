const form = document.getElementById("form-login");
import emitAuthenticateUser from "./socket-front-login.js";

form.addEventListener('submit', (event)=>{
  event.preventDefault();

  const user = form["input-user"].value;
  const password  = form["input-password"].value;

  emitAuthenticateUser({user, password})
})