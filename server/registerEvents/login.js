import { findUser } from '../db/usersDb.js'
import authenticateUser from '../utils/authenticateUser.js';

function registerEventsLogin(socket, io){
  socket.on('authenticate_user', async ({user, password})=>{

    const typedUser = await findUser({user});

    if (typedUser) {
      const isAuthenticated = authenticateUser(typedUser, password);
      if (isAuthenticated) {
        socket.emit('isAuthenticated_success')
      } else {
        socket.emit('isAuthenticated_erro')
      }
    } else {
      socket.emit('invalid_user')
    }

  })

};

export default registerEventsLogin;