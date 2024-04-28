import { findDocument, updateDocument, deleteDocument } from "../db/documentsDb.js";

function registerEventsDocument(socket, io) {
    
    socket.on("select_document", async (documentName, returnText) => {
        socket.join(documentName);
        
        const document = await findDocument(documentName);
    
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
    
      socket.on("delete-document",async (name)=>{
        const result = await deleteDocument(name);
    
        if (result.deletedCount) {
          io.emit("delete_document_success", name);
        }
      });
      
};

export default registerEventsDocument;