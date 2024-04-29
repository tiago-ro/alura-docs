import { findUser } from "../db/usersDb.js";

function registerEventsLogin(socket, io){
  socket.on('authenticate_user', async ({user, password})=>{
    
    const use = await findUser({user})
    
    console.log(use)
  })
};

export default registerEventsLogin;