import io from "./server.js";
import { findDocument, updateDocument, getDocuments, addDocument } from "./documentsDb.js";


io.on("connection", (socket) => {
  
  socket.on("get_documents", async (returnDocuments) =>{
    const documents = await getDocuments()

    returnDocuments(documents)
  });

  socket.on("add_document", async (name) =>{
    const documentExists = (await findDocument(name)) !== null;

    if (documentExists) {
      socket.emit("document_exists", name)
    } else {
      const result = await addDocument(name);
  
      if(result.acknowledged) {
        io.emit("add_document_interface", name);
      }
    }

  });
  
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

