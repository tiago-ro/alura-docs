const socket = io();

function emitAuthenticateUser(data) {

  socket.emit('authenticate_user', data);

};

export default emitAuthenticateUser;