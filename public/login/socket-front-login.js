const socket = io();
import { createCookie } from "../utils/cookies.js";

function emitAuthenticateUser(data) {

  socket.emit('authenticate_user', data);

};

socket.on("isAuthenticated_success", (tokenJwt) => {

  createCookie("tokenJwt", tokenJwt)

  alert("User Authenticated");
    window.location.href = "/"; 
});

socket.on("isAuthenticated_erro", () => alert("User not authenticated"))
socket.on("invalid_user", () => alert("Invalid user"));

export default emitAuthenticateUser;