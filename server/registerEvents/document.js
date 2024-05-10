import { findDocument, updateDocument, deleteDocument } from "../db/documentsDb.js";
import { findConnection, addConnections, getUsersDocument, removeConnection } from "../utils/connectionsDocuments.js";

function registerEventsDocument(socket, io) {

  socket.on("select_document", async ({ documentName, userName }, returnText) => {

    const document = await findDocument(documentName);
    
    if (document) {
      
      const connectionFound = findConnection(documentName, userName)
      
      if(!connectionFound) {
        socket.join(documentName);

        addConnections({ documentName, userName });
        
        socket.data = {
          userInside: true
        };

        const usersInDocument = getUsersDocument(documentName);
  
        io.to(documentName).emit("users_in_document", usersInDocument);
  
        returnText(document.text);

      } else {
        socket.emit("connetion_already_exists");
      }


      socket.on("text_editor", async ({ text, documentName }) => {
        const update = await updateDocument(documentName, text)

        console.log(update)

        if (update.modifiedCount) {
          socket.to(documentName).emit("text_editor_client", text);
        };

      });

      socket.on("delete-document", async (name) => {
        const result = await deleteDocument(name);

        if (result.deletedCount) {
          io.emit("delete_document_success", name);
        }
      });

      socket.on("disconnect", () => {

        if( socket.data.userInside === true) {
          removeConnection(documentName, userName);
  
          const usersInDocument = getUsersDocument(documentName);
  
          socket.to(documentName).emit("users_in_document", usersInDocument);

        }

      });

    }


  });



};

export default registerEventsDocument;