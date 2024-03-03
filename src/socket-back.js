import io from "./server.js";
import { documentsCollection } from "./dbConnect.js";


io.on("connection", (socket) => {
  console.log("Um cliente se conectou! ID:", socket.id);
    
  
  socket.on("select_document", async (documentName, returnText) => {
    socket.join(documentName);
    
    const document = await findDocument(documentName);
    
    console.log(document);

    if(document) {
      returnText(document.text);
    }
  });
  
  
  socket.on("text_editor", ({ text, documentName }) =>{
    const document = findDocument(documentName);
    
    if(document) {
      document.text = text;
      
      socket.to(documentName).emit("text_editor_client", text);
    };
    
  });
  
});

function findDocument(name) {
  const document = documentsCollection.findOne({
    name
  })
  return document;
};