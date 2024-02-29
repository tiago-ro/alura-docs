import io from "./server.js";

io.on("connection", (socket) => {
  console.log("Um cliente se conectou! ID:", socket.id);
    
  socket.on("text_editor", ({ text, documentName }) =>{
    socket.to(documentName).emit("text_editor_client", text);
  });
 
  socket.on("select_document", (documentName) => {
    socket.join(documentName);
  })

});