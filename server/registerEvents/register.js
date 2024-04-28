import { insertUser,findUser } from "../db/usersDb.js";

function registerUser(socket, io) {
    socket.on("register-user", async (data)=>{
        const user = await findUser(data);

        if (user === null){
            const result = await insertUser(data)
    
            if(result.acknowledged) {
                socket.emit("signUp-success");
            } else {
                socket.emit("signUp-faild");
            }

        } else {
            socket.emit("already-exists")
        }

    })
};

export default registerUser;