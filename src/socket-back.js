import io from "./server.js";

io.on("connection", (socket) => {
  console.log("Um cliente se conectou! ID:", socket.id);
    
  socket.on("text_editor", (text) =>{
    socket.broadcast.emit("text_editor_client", text);
  });
});