const socket = io();

function emitAuthenticateUser(data) {

  socket.emit('authenticate_user', data);

};

socket.on("isAuthenticated_success", () => {
  alert("User Authenticated");
    window.location.href = "/"; 
});

socket.on("isAuthenticated_erro", () => alert("User not authenticated"))
socket.on("invalid_user", () => alert("Invalid user"));

export default emitAuthenticateUser;