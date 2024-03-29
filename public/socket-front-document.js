const socket = io();
import { alertAndRedirect, updateTextEditor }from "./document.js";

function selectDocument(documentName) {
    socket.emit("select_document", documentName, (text) => {
        updateTextEditor(text);
    })
}

function emitTextEditor(data){
    socket.emit("text_editor", data);
}

function emitDeleteDocument(name) {
  socket.emit("delete-document", name);
}

socket.on("text_editor_client", (text)=>{
    updateTextEditor(text); 
})

socket.on("delete_document_success", (name)=>{
    alertAndRedirect(name);
})

export { emitTextEditor, selectDocument, emitDeleteDocument };