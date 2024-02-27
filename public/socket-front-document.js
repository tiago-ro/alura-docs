const socket = io();
import { updateTextEditor }from "./document.js";

function emitTextEditor(text){
    socket.emit("text_editor", text);
}

socket.on("text_editor_client", (text)=>{
    updateTextEditor(text); 
})


export { emitTextEditor };