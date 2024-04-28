import {
    getDocuments,
    findDocument, 
    addDocument
} from "../db/documentsDb.js"

function registerEventsInit(socket, io) {

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
};

export default registerEventsInit;