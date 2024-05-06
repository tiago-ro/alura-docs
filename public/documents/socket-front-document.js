import { getCookie } from "../utils/cookies.js";
import { alertAndRedirect, updateTextEditor, processAuthorizationSuccess }from "./document.js";

const socket = io("/users", {
    auth: {
        token: getCookie("tokenJwt")
    }
});

socket.on("authorization_success", processAuthorizationSuccess);  

function selectDocument(dataInput) {
    socket.emit("select_document", dataInput, (text) => {
        updateTextEditor(text);
    })
};

socket.on("connect_error", (error) => {
    alert(error);
    window.location.href = "/login/index.html"
})

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