import io from "./server.js";
import { findDocument, updateDocument } from "./documentsDb.js";


io.on("connection", (socket) => {
  console.log("Um cliente se conectou! ID:", socket.id);
    
  
  socket.on("select_document", async (documentName, returnText) => {
    socket.join(documentName);
    
    const document = await findDocument(documentName);
    
    // console.log(document);

    if(document) {
      returnText(document.text);
    }
  });
  
  
  socket.on("text_editor", async ({ text, documentName }) =>{
    const update = await updateDocument(documentName, text)
    
    console.log(update)

    if(update.modifiedCount) {
      socket.to(documentName).emit("text_editor_client", text);
    };
    
  });
  
});

