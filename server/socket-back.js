import io from "./server.js";
import registerEventsInit from "./registerEvents/init.js";
import registerEventsDocument from "./registerEvents/document.js";
import registerUser  from "./registerEvents/register.js";


io.on("connection", (socket) => {
  registerEventsInit(socket, io);
  registerEventsDocument(socket, io);
  registerUser(socket, io);
});

