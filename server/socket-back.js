import io from "./server.js";
import registerEventsInit from "./registerEvents/init.js";
import registerEventsDocument from "./registerEvents/document.js";
import registerUser  from "./registerEvents/siginUp.js";
import registerEventsLogin  from "./registerEvents/login.js";

io.on("connection", (socket) => {
  registerEventsInit(socket, io);
  registerEventsDocument(socket, io);
  registerUser(socket, io);
  registerEventsLogin(socket,io)
});

