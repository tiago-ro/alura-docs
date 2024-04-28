const socket = io();

function emitRegisterUser(data) {
    socket.emit("register-user", data);
}

socket.on("signUp-success", ()=> alert("User reistered!"));
socket.on("signUp-failed", ()=> alert("register failed"));
socket.on("already-exists", ()=> alert("user already exists"));

export { emitRegisterUser } ;