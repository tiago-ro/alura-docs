const socket = io();
import { updateTextEditor }from "./document.js";

function emitTextEditor(text){
    socket.emit("text_editor", text);
}

function selectDocument(documentName) {
    socket.emit("select_document", documentName)
}

socket.on("text_editor_client", (text)=>{
    updateTextEditor(text); 
})


export { emitTextEditor, selectDocument };