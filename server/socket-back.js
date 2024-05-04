import io from "./server.js";
import registerEventsInit from "./registerEvents/init.js";
import registerEventsDocument from "./registerEvents/document.js";
import registerUser  from "./registerEvents/siginUp.js";
import registerEventsLogin  from "./registerEvents/login.js";
import authorizeUser from "./middlewares/authorizeUser.js";


const nspUsers = io.of("/users");

nspUsers.use(authorizeUser);

nspUsers.on("connection", (socket) =>{
  registerEventsInit(socket, nspUsers)
  registerEventsDocument(socket, nspUsers);
})


io.of("/").on("connection", (socket) => {
  registerUser(socket, io);
  registerEventsLogin(socket,io)
});

