const socket = io();
import { updateTextEditor }from "./document.js";

function selectDocument(documentName) {
    socket.emit("select_document", documentName)
}

function emitTextEditor(data){
    socket.emit("text_editor", data);
}

socket.on("text_editor_client", (text)=>{
    updateTextEditor(text); 
})


export { emitTextEditor, selectDocument };