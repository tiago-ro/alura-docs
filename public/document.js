import { emitTextEditor, selectDocument } from "./socket-front-document.js"

const textEditor = document.getElementById("editor-texto");

const params = new URLSearchParams(window.location.search);
const documentName = params.get("name");

const documentTitle = document.getElementById("document-title");
documentTitle.textContent = documentName || "Documento sem título"; 

selectDocument(documentName)

textEditor.addEventListener("keyup", ()=>{
    emitTextEditor(textEditor.value)
});

function updateTextEditor(text) {
    textEditor.value = text
};

export { updateTextEditor } ;
