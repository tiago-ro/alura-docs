import { findUser } from '../db/usersDb.js'
import authenticateUser from '../utils/authenticateUser.js';
import createJwt from '../utils/createJwt.js';

function registerEventsLogin(socket, io){
  socket.on('authenticate_user', async ({user, password})=>{

    const typedUser = await findUser({user});

    if (typedUser) {
      const isAuthenticated = authenticateUser(typedUser, password);
      if (isAuthenticated) {

        const tokenJwt = createJwt({user: typedUser});

        console.log(tokenJwt)
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